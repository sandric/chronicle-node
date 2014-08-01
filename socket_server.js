var zmq = require('zmq');

exports.start = function(app_server) {

    var io = require('socket.io').listen(app_server);

    var sender = zmq.socket('push');
    sender.setsockopt(zmq.ZMQ_LINGER, 0);
    sender.bindSync("tcp://*:5557");


    var receiver = zmq.socket('pull');
    receiver.setsockopt(zmq.ZMQ_LINGER, 0);
    receiver.bindSync("tcp://*:5558");

    io.on('connection', function (socket) {
        socket.on('get_commits_history', function (msg) {
            console.log('message: ' + msg);
            console.log("Sending tasks to workers…");
            sender.send(JSON.stringify(msg));
        });

        receiver.on('message', function (data) {
            console.log(data.toString());

            socket.emit('commits_history_result', JSON.parse(data.toString()))
        });
    });

}
