var repo = [
  {
    "changed_files": [
      [
        ".document",
        "README.rdoc\nlib/**/*.rb\nbin/*\nfeatures/**/*.feature\nLICENSE\n"
      ],
      [
        ".gitignore",
        "## MAC OS\n.DS_Store\n\n## TEXTMATE\n*.tmproj\ntmtags\n\n## EMACS\n*~\n\\#*\n.\\#*\n\n## VIM\n*.swp\n\n## PROJECT::GENERAL\ncoverage\nrdoc\npkg\n\n## PROJECT::SPECIFIC\n"
      ],
      [
        "LICENSE",
        "Copyright (c) 2009 Leonardo Almeida\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"
      ],
      [
        "README.rdoc",
        "= slim-rails\n\nDescription goes here.\n\n== Note on Patches/Pull Requests\n \n* Fork the project.\n* Make your feature addition or bug fix.\n* Add tests for it. This is important so I don't break it in a\n  future version unintentionally.\n* Commit, do not mess with rakefile, version, or history.\n  (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)\n* Send me a pull request. Bonus points for topic branches.\n\n== Copyright\n\nCopyright (c) 2010 Leonardo Almeida. See LICENSE for details.\n"
      ],
      [
        "Rakefile",
        "require 'rubygems'\nrequire 'rake'\n\nbegin\n  require 'jeweler'\n  Jeweler::Tasks.new do |gem|\n    gem.name = \"slim-rails\"\n    gem.summary = %Q{TODO: one-line summary of your gem}\n    gem.description = %Q{TODO: longer description of your gem}\n    gem.email = \"lalmeida08@gmail.com\"\n    gem.homepage = \"http://github.com/leogalmeida/slim-rails\"\n    gem.authors = [\"Leonardo Almeida\"]\n    gem.add_development_dependency \"thoughtbot-shoulda\", \">= 0\"\n    # gem is a Gem::Specification... see http://www.rubygems.org/read/chapter/20 for additional settings\n  end\n  Jeweler::GemcutterTasks.new\nrescue LoadError\n  puts \"Jeweler (or a dependency) not available. Install it with: gem install jeweler\"\nend\n\nrequire 'rake/testtask'\nRake::TestTask.new(:test) do |test|\n  test.libs << 'lib' << 'test'\n  test.pattern = 'test/**/test_*.rb'\n  test.verbose = true\nend\n\nbegin\n  require 'rcov/rcovtask'\n  Rcov::RcovTask.new do |test|\n    test.libs << 'test'\n    test.pattern = 'test/**/test_*.rb'\n    test.verbose = true\n  end\nrescue LoadError\n  task :rcov do\n    abort \"RCov is not available. In order to run rcov, you must: sudo gem install spicycode-rcov\"\n  end\nend\n\ntask :test => :check_dependencies\n\ntask :default => :test\n\nrequire 'rake/rdoctask'\nRake::RDocTask.new do |rdoc|\n  version = File.exist?('VERSION') ? File.read('VERSION') : \"\"\n\n  rdoc.rdoc_dir = 'rdoc'\n  rdoc.title = \"slim-rails #{version}\"\n  rdoc.rdoc_files.include('README*')\n  rdoc.rdoc_files.include('lib/**/*.rb')\nend\n"
      ],
      [
        "lib/slim-rails.rb",
        ""
      ],
      [
        "test/helper.rb",
        "require 'rubygems'\nrequire 'test/unit'\nrequire 'shoulda'\n\n$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), '..', 'lib'))\n$LOAD_PATH.unshift(File.dirname(__FILE__))\nrequire 'slim-rails'\n\nclass Test::Unit::TestCase\nend\n"
      ],
      [
        "test/test_slim-rails.rb",
        "require 'helper'\n\nclass TestSlimRails < Test::Unit::TestCase\n  should \"probably rename this file and start testing for real\" do\n    flunk \"hey buddy, you should probably rename this file and start testing for real\"\n  end\nend\n"
      ]
    ],
    "author": "Leonardo Almeida",
    "email": "lalmeida08@gmail.com",
    "message": "Initial commit to slim-rails.",
    "merge": false,
    "diff": null,
    "files": [
      ".document",
      ".gitignore",
      "LICENSE",
      "README.rdoc",
      "Rakefile",
      "lib/slim-rails.rb",
      "test/helper.rb",
      "test/test_slim-rails.rb"
    ],
    "id": "50064c896cff8710639b9dff3cb93b925c51060c"
  },
  {
    "changed_files": [
      [
        "README.md",
        "add"
      ],
      [
        "README.rdoc",
        "delete"
      ],
      [
        "Rakefile",
        "edit"
      ],
      [
        "lib/generators/slim/controller/controller_generator.rb",
        "add"
      ],
      [
        "lib/generators/slim/controller/templates/view.html.slim",
        "add"
      ],
      [
        "lib/generators/slim/mailer/mailer_generator.rb",
        "add"
      ],
      [
        "lib/generators/slim/mailer/templates/view.text.slim",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/scaffold_generator.rb",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/templates/_form.html.slim",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/templates/edit.html.slim",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/templates/index.html.slim",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/templates/new.html.slim",
        "add"
      ],
      [
        "lib/generators/slim/scaffold/templates/show.html.slim",
        "add"
      ],
      [
        "lib/slim-rails.rb",
        "edit"
      ],
      [
        "lib/slim-rails/version.rb",
        "add"
      ],
      [
        "slim-rails.gemspec",
        "add"
      ],
      [
        "test/fixtures/routes.rb",
        "add"
      ],
      [
        "test/helper.rb",
        "delete"
      ],
      [
        "test/lib/generators/slim/controller_generator_test.rb",
        "add"
      ],
      [
        "test/lib/generators/slim/mailer_generator_test.rb",
        "add"
      ],
      [
        "test/lib/generators/slim/scaffold_generator_test.rb",
        "add"
      ],
      [
        "test/lib/generators/slim/testing_helper.rb",
        "add"
      ],
      [
        "test/test_helper.rb",
        "add"
      ],
      [
        "test/test_slim-rails.rb",
        "delete"
      ],
      [
        "tmp/rails/config/routes.rb",
        "add"
      ],
      [
        "tmp/rails/public/stylesheets/scaffold.css",
        "add"
      ]
    ],
    "author": "Leonardo Almeida",
    "email": "lalmeida08@gmail.com",
    "message": "Fixing Slim templates",
    "merge": false,
    "diff": "diff --git a/README.md b/README.md\nnew file mode 100644\nindex 0000000..d83cdd4\n--- /dev/null\n+++ b/README.md\n@@ -0,0 +1,9 @@\n+# slim-rails\n+\n+slim-rails provides Slim generators for Rails 3. It was based on [haml-rails](http://http://github.com/indirect/haml-rails) and it does basically the same: configures Slim as the template engine automatically for your rails app.\n+To use it, add this line to your Gemfile:\n+\n+    gem \"slim-rails\"\n+\n+And that's it.\n+Every time you generate a controller or scaffold, you'll get Slim templates.\ndiff --git a/README.rdoc b/README.rdoc\ndeleted file mode 100644\nindex fe1b736..0000000\n--- a/README.rdoc\n+++ /dev/null\n@@ -1,17 +0,0 @@\n-= slim-rails\n-\n-Description goes here.\n-\n-== Note on Patches/Pull Requests\n- \n-* Fork the project.\n-* Make your feature addition or bug fix.\n-* Add tests for it. This is important so I don't break it in a\n-  future version unintentionally.\n-* Commit, do not mess with rakefile, version, or history.\n-  (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)\n-* Send me a pull request. Bonus points for topic branches.\n-\n-== Copyright\n-\n-Copyright (c) 2010 Leonardo Almeida. See LICENSE for details.\ndiff --git a/Rakefile b/Rakefile\nindex 5911790..c6720fd 100644\n--- a/Rakefile\n+++ b/Rakefile\n@@ -1,17 +1,16 @@\n require 'rubygems'\n require 'rake'\n-\n+require File.expand_path(\"../lib/slim-rails/version\", __FILE__)\n begin\n   require 'jeweler'\n   Jeweler::Tasks.new do |gem|\n     gem.name = \"slim-rails\"\n-    gem.summary = %Q{TODO: one-line summary of your gem}\n-    gem.description = %Q{TODO: longer description of your gem}\n+    gem.version = Slim::Rails::VERSION\n+    gem.summary = \"Provides generators for Rails 3\"\n+    gem.description = \"Provide generators for Rails 3\"\n     gem.email = \"lalmeida08@gmail.com\"\n     gem.homepage = \"http://github.com/leogalmeida/slim-rails\"\n     gem.authors = [\"Leonardo Almeida\"]\n-    gem.add_development_dependency \"thoughtbot-shoulda\", \">= 0\"\n-    # gem is a Gem::Specification... see http://www.rubygems.org/read/chapter/20 for additional settings\n   end\n   Jeweler::GemcutterTasks.new\n rescue LoadError\n@@ -21,7 +20,7 @@\n require 'rake/testtask'\n Rake::TestTask.new(:test) do |test|\n   test.libs << 'lib' << 'test'\n-  test.pattern = 'test/**/test_*.rb'\n+  test.pattern = 'test/**/*_test.rb'\n   test.verbose = true\n end\n \n@@ -29,7 +28,7 @@\n   require 'rcov/rcovtask'\n   Rcov::RcovTask.new do |test|\n     test.libs << 'test'\n-    test.pattern = 'test/**/test_*.rb'\n+    test.pattern = 'test/**/*_test.rb'\n     test.verbose = true\n   end\n rescue LoadError\ndiff --git a/lib/generators/slim/controller/controller_generator.rb b/lib/generators/slim/controller/controller_generator.rb\nnew file mode 100644\nindex 0000000..8e360a7\n--- /dev/null\n+++ b/lib/generators/slim/controller/controller_generator.rb\n@@ -0,0 +1,16 @@\n+require 'rails/generators/erb/controller/controller_generator'\n+\n+module Slim\n+  module Generators\n+    class ControllerGenerator < Erb::Generators::ControllerGenerator\n+      source_root File.expand_path(\"../templates\", __FILE__)\n+\n+    protected\n+\n+      def handler\n+        :slim\n+      end\n+\n+    end\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/lib/generators/slim/controller/templates/view.html.slim b/lib/generators/slim/controller/templates/view.html.slim\nnew file mode 100644\nindex 0000000..58b8f63\n--- /dev/null\n+++ b/lib/generators/slim/controller/templates/view.html.slim\n@@ -0,0 +1,2 @@\n+h1 <%= class_name %>#<%= @action %>\n+p Find me in <%= @path %>\ndiff --git a/lib/generators/slim/mailer/mailer_generator.rb b/lib/generators/slim/mailer/mailer_generator.rb\nnew file mode 100644\nindex 0000000..7021f57\n--- /dev/null\n+++ b/lib/generators/slim/mailer/mailer_generator.rb\n@@ -0,0 +1,16 @@\n+require 'generators/slim/controller/controller_generator'\n+\n+module Slim\n+  module Generators\n+    class MailerGenerator < ControllerGenerator\n+      source_root File.expand_path(\"../templates\", __FILE__)\n+\n+    protected\n+\n+      def format\n+        :text\n+      end\n+\n+    end\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/lib/generators/slim/mailer/templates/view.text.slim b/lib/generators/slim/mailer/templates/view.text.slim\nnew file mode 100644\nindex 0000000..8e7a604\n--- /dev/null\n+++ b/lib/generators/slim/mailer/templates/view.text.slim\n@@ -0,0 +1,3 @@\n+<%= class_name %>#<%= @action %>\n+\n+= @greeting + \", find me in <%= @path %>\"\ndiff --git a/lib/generators/slim/scaffold/scaffold_generator.rb b/lib/generators/slim/scaffold/scaffold_generator.rb\nnew file mode 100644\nindex 0000000..9b6a765\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/scaffold_generator.rb\n@@ -0,0 +1,29 @@\n+require 'rails/generators/erb/scaffold/scaffold_generator'\n+\n+module Slim\n+  module Generators\n+    class ScaffoldGenerator < Erb::Generators::ScaffoldGenerator\n+      source_root File.expand_path(\"../templates\", __FILE__)\n+\n+      def copy_view_files\n+        available_views.each do |view|\n+          filename = filename_with_extensions(view)\n+          template \"#{view}.html.slim\", File.join(\"app/views\", controller_file_path, filename)\n+        end\n+      end\n+\n+      hook_for :form_builder, :as => :scaffold\n+\n+    protected\n+\n+      def available_views\n+        %w(index edit show new _form)\n+      end\n+\n+      def handler\n+        :slim\n+      end\n+\n+    end\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/lib/generators/slim/scaffold/templates/_form.html.slim b/lib/generators/slim/scaffold/templates/_form.html.slim\nnew file mode 100644\nindex 0000000..1012600\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/templates/_form.html.slim\n@@ -0,0 +1,15 @@\n+= form_for @<%= singular_table_name %> do |f|\n+  -if @<%= singular_table_name %>.errors.any?\n+    #error_explanation\n+      h2 = \"#{pluralize(@<%= singular_table_name %>.errors.count, \"error\")} prohibited this <%= singular_table_name %> from being saved:\"\n+      ul\n+        - @<%= singular_table_name %>.errors.full_messages.each do |msg|\n+          li= msg\n+\n+<% for attribute in attributes -%>\n+  .field\n+    = f.label :<%= attribute.name %>\n+    = f.<%= attribute.field_type %> :<%= attribute.name %>\n+<% end -%>\n+  .actions\n+    = f.submit 'Save'\ndiff --git a/lib/generators/slim/scaffold/templates/edit.html.slim b/lib/generators/slim/scaffold/templates/edit.html.slim\nnew file mode 100644\nindex 0000000..77867cc\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/templates/edit.html.slim\n@@ -0,0 +1,8 @@\n+h1 Editing <%= singular_table_name %>\n+\n+= render 'form'\n+\n+= link_to 'Show', @<%= singular_table_name %>\n+\\|\n+= link_to 'Back', <%= index_helper %>_path\n+\ndiff --git a/lib/generators/slim/scaffold/templates/index.html.slim b/lib/generators/slim/scaffold/templates/index.html.slim\nnew file mode 100644\nindex 0000000..fc223a0\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/templates/index.html.slim\n@@ -0,0 +1,23 @@\n+h1 Listing <%= plural_table_name %>\n+\n+table\n+  tr\n+<% for attribute in attributes -%>\n+    th <%= attribute.human_name %>\n+<% end -%>\n+    th\n+    th\n+    th\n+\n+  - @<%= plural_table_name %>.each do |<%= singular_table_name %>|\n+    tr\n+<% for attribute in attributes -%>\n+      td= <%= singular_table_name %>.<%= attribute.name %>\n+<% end -%>\n+      td= link_to 'Show', <%= singular_table_name %>\n+      td= link_to 'Edit', edit_<%= singular_table_name %>_path(<%= singular_table_name %>)\n+      td= link_to 'Destroy', <%= singular_table_name %>, :confirm => 'Are you sure?', :method => :delete\n+\n+br\n+\n+= link_to 'New <%= human_name %>', new_<%= singular_table_name %>_path\ndiff --git a/lib/generators/slim/scaffold/templates/new.html.slim b/lib/generators/slim/scaffold/templates/new.html.slim\nnew file mode 100644\nindex 0000000..702d35d\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/templates/new.html.slim\n@@ -0,0 +1,5 @@\n+h1 New <%= singular_table_name %>\n+\n+= render 'form'\n+\n+= link_to 'Back', <%= index_helper %>_path\ndiff --git a/lib/generators/slim/scaffold/templates/show.html.slim b/lib/generators/slim/scaffold/templates/show.html.slim\nnew file mode 100644\nindex 0000000..b9cec70\n--- /dev/null\n+++ b/lib/generators/slim/scaffold/templates/show.html.slim\n@@ -0,0 +1,11 @@\n+p#notice = notice\n+\n+<% for attribute in attributes -%>\n+p\n+  b <%= attribute.human_name %>:\n+  = @<%= singular_table_name %>.<%= attribute.name %>\n+<% end -%>\n+\n+= link_to 'Edit', edit_<%= singular_table_name %>_path(@<%= singular_table_name %>)\n+\\|\n+= link_to 'Back', <%= index_helper %>_path\ndiff --git a/lib/slim-rails.rb b/lib/slim-rails.rb\nindex e69de29..48873e6 100644\n--- a/lib/slim-rails.rb\n+++ b/lib/slim-rails.rb\n@@ -0,0 +1,14 @@\n+require 'rails'\n+require 'slim/rails'\n+\n+module Slim\n+  module Rails\n+    class Railtie < ::Rails::Railtie\n+      if ::Rails.version.to_f >= 3.1\n+        config.app_generators.template_engine :slim\n+      else\n+        config.generators.template_engine :slim\n+      end\n+    end\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/lib/slim-rails/version.rb b/lib/slim-rails/version.rb\nnew file mode 100644\nindex 0000000..83402a0\n--- /dev/null\n+++ b/lib/slim-rails/version.rb\n@@ -0,0 +1,5 @@\n+module Slim\n+  module Rails\n+    VERSION = \"0.1.0\"\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/slim-rails.gemspec b/slim-rails.gemspec\nnew file mode 100644\nindex 0000000..9478a03\n--- /dev/null\n+++ b/slim-rails.gemspec\n@@ -0,0 +1,71 @@\n+# Generated by jeweler\n+# DO NOT EDIT THIS FILE DIRECTLY\n+# Instead, edit Jeweler::Tasks in Rakefile, and run the gemspec command\n+# -*- encoding: utf-8 -*-\n+\n+Gem::Specification.new do |s|\n+  s.name = %q{slim-rails}\n+  s.version = \"0.1.0\"\n+\n+  s.required_rubygems_version = Gem::Requirement.new(\">= 0\") if s.respond_to? :required_rubygems_version=\n+  s.authors = [\"Leonardo Almeida\"]\n+  s.date = %q{2010-10-28}\n+  s.description = %q{Provide generators for Rails 3}\n+  s.email = %q{lalmeida08@gmail.com}\n+  s.extra_rdoc_files = [\n+    \"LICENSE\",\n+     \"README.rdoc\"\n+  ]\n+  s.files = [\n+    \".document\",\n+     \".gitignore\",\n+     \"LICENSE\",\n+     \"README.rdoc\",\n+     \"Rakefile\",\n+     \"lib/generators/slim/controller/controller_generator.rb\",\n+     \"lib/generators/slim/controller/templates/view.html.slim\",\n+     \"lib/generators/slim/mailer/mailer_generator.rb\",\n+     \"lib/generators/slim/mailer/templates/view.text.slim\",\n+     \"lib/generators/slim/scaffold/scaffold_generator.rb\",\n+     \"lib/generators/slim/scaffold/templates/_form.html.slim\",\n+     \"lib/generators/slim/scaffold/templates/edit.html.slim\",\n+     \"lib/generators/slim/scaffold/templates/index.html.slim\",\n+     \"lib/generators/slim/scaffold/templates/new.html.slim\",\n+     \"lib/generators/slim/scaffold/templates/show.html.slim\",\n+     \"lib/slim-rails.rb\",\n+     \"lib/slim-rails/version.rb\",\n+     \"slim-rails.gemspec\",\n+     \"test/fixtures/routes.rb\",\n+     \"test/lib/generators/slim/controller_generator_test.rb\",\n+     \"test/lib/generators/slim/mailer_generator_test.rb\",\n+     \"test/lib/generators/slim/scaffold_generator_test.rb\",\n+     \"test/lib/generators/slim/testing_helper.rb\",\n+     \"test/test_helper.rb\",\n+     \"tmp/rails/config/routes.rb\",\n+     \"tmp/rails/public/stylesheets/scaffold.css\"\n+  ]\n+  s.homepage = %q{http://github.com/leogalmeida/slim-rails}\n+  s.rdoc_options = [\"--charset=UTF-8\"]\n+  s.require_paths = [\"lib\"]\n+  s.rubygems_version = %q{1.3.7}\n+  s.summary = %q{Provides generators for Rails 3}\n+  s.test_files = [\n+    \"test/fixtures/routes.rb\",\n+     \"test/lib/generators/slim/controller_generator_test.rb\",\n+     \"test/lib/generators/slim/mailer_generator_test.rb\",\n+     \"test/lib/generators/slim/scaffold_generator_test.rb\",\n+     \"test/lib/generators/slim/testing_helper.rb\",\n+     \"test/test_helper.rb\"\n+  ]\n+\n+  if s.respond_to? :specification_version then\n+    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION\n+    s.specification_version = 3\n+\n+    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then\n+    else\n+    end\n+  else\n+  end\n+end\n+\ndiff --git a/test/fixtures/routes.rb b/test/fixtures/routes.rb\nnew file mode 100644\nindex 0000000..9707037\n--- /dev/null\n+++ b/test/fixtures/routes.rb\n@@ -0,0 +1,2 @@\n+TestApp.routes.draw do |map|\n+end\ndiff --git a/test/helper.rb b/test/helper.rb\ndeleted file mode 100644\nindex dfdc2ea..0000000\n--- a/test/helper.rb\n+++ /dev/null\n@@ -1,10 +0,0 @@\n-require 'rubygems'\n-require 'test/unit'\n-require 'shoulda'\n-\n-$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), '..', 'lib'))\n-$LOAD_PATH.unshift(File.dirname(__FILE__))\n-require 'slim-rails'\n-\n-class Test::Unit::TestCase\n-end\ndiff --git a/test/lib/generators/slim/controller_generator_test.rb b/test/lib/generators/slim/controller_generator_test.rb\nnew file mode 100644\nindex 0000000..19784cc\n--- /dev/null\n+++ b/test/lib/generators/slim/controller_generator_test.rb\n@@ -0,0 +1,17 @@\n+require 'test_helper'\n+require 'lib/generators/slim/testing_helper'\n+\n+class Slim::Generators::ControllerGeneratorTest < Rails::Generators::TestCase\n+  destination File.join(Rails.root)\n+  tests Rails::Generators::ControllerGenerator\n+  arguments %w(Account foo bar --template-engine slim)\n+\n+  setup :prepare_destination\n+  setup :copy_routes\n+\n+  test \"should invoke template engine\" do\n+    run_generator\n+    assert_file \"app/views/account/foo.html.slim\", %r(app/views/account/foo\\.html\\.slim)\n+    assert_file \"app/views/account/bar.html.slim\", %r(app/views/account/bar\\.html\\.slim)\n+  end\n+end\ndiff --git a/test/lib/generators/slim/mailer_generator_test.rb b/test/lib/generators/slim/mailer_generator_test.rb\nnew file mode 100644\nindex 0000000..106cdaf\n--- /dev/null\n+++ b/test/lib/generators/slim/mailer_generator_test.rb\n@@ -0,0 +1,24 @@\n+require 'test_helper'\n+require 'lib/generators/slim/testing_helper'\n+\n+class Slim::Generators::MailerGeneratorTest < Rails::Generators::TestCase\n+  destination File.join(Rails.root)\n+  tests Rails::Generators::MailerGenerator\n+  arguments %w(notifier foo bar --template-engine slim)\n+\n+  setup :prepare_destination\n+  setup :copy_routes\n+\n+  test \"should invoke template engine\" do\n+    run_generator\n+    assert_file \"app/views/notifier/foo.text.slim\" do |view|\n+      assert_match %r(app/views/notifier/foo\\.text\\.slim), view\n+      assert_match /\\= @greeting/, view\n+    end\n+\n+    assert_file \"app/views/notifier/bar.text.slim\" do |view|\n+      assert_match %r(app/views/notifier/bar\\.text\\.slim), view\n+      assert_match /\\= @greeting/, view\n+    end\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/test/lib/generators/slim/scaffold_generator_test.rb b/test/lib/generators/slim/scaffold_generator_test.rb\nnew file mode 100644\nindex 0000000..cf6494f\n--- /dev/null\n+++ b/test/lib/generators/slim/scaffold_generator_test.rb\n@@ -0,0 +1,26 @@\n+require 'test_helper'\n+require 'lib/generators/slim/testing_helper'\n+\n+class Slim::Generators::ScaffoldGeneratorTest < Rails::Generators::TestCase\n+  destination File.join(Rails.root)\n+  tests Rails::Generators::ScaffoldGenerator\n+  arguments %w(product_line title:string price:integer --template-engine slim)\n+\n+  setup :prepare_destination\n+  setup :copy_routes\n+\n+  test \"should invoke template engine\" do\n+    run_generator\n+\n+    %w(index edit new show _form).each { |view| assert_file \"app/views/product_lines/#{view}.html.slim\" }\n+    assert_no_file \"app/views/layouts/product_lines.html.slim\"\n+  end\n+\n+  test \"should revoke template engine\" do\n+    run_generator\n+    run_generator [\"product_line\"], :behavior => :revoke\n+\n+    assert_no_file \"app/views/product_lines\"\n+    assert_no_file \"app/views/layouts/product_lines.html.slim\"\n+  end\n+end\n\\ No newline at end of file\ndiff --git a/test/lib/generators/slim/testing_helper.rb b/test/lib/generators/slim/testing_helper.rb\nnew file mode 100644\nindex 0000000..169b92c\n--- /dev/null\n+++ b/test/lib/generators/slim/testing_helper.rb\n@@ -0,0 +1 @@\n+require_generators :slim => ['scaffold', 'controller', 'mailer']\n\\ No newline at end of file\ndiff --git a/test/test_helper.rb b/test/test_helper.rb\nnew file mode 100644\nindex 0000000..b61a2d2\n--- /dev/null\n+++ b/test/test_helper.rb\n@@ -0,0 +1,64 @@\n+require 'rubygems'\n+require 'test/unit'\n+require 'rails/all'\n+require 'rails/generators'\n+require 'rails/generators/test_case'\n+\n+class TestApp < Rails::Application\n+  config.root = File.dirname(__FILE__)\n+end\n+Rails.application = TestApp\n+\n+module Rails\n+  def self.root\n+    @root ||= File.expand_path(File.join(File.dirname(__FILE__), '..', 'tmp', 'rails'))\n+  end\n+end\n+Rails.application.config.root = Rails.root\n+\n+Rails::Generators.configure!\n+\n+Dir[\"#{File.dirname(__FILE__)}/support/**/*.rb\"].each {|f| require f}\n+\n+def copy_routes\n+  routes = File.expand_path(File.join(File.dirname(__FILE__), 'fixtures', 'routes.rb'))\n+  destination = File.join(Rails.root, \"config\")\n+  FileUtils.mkdir_p(destination)\n+  FileUtils.cp File.expand_path(routes), destination\n+end\n+\n+def assert_class(klass, content)\n+  assert content =~ /class #{klass}(\\(.+\\))?(.*?)\\nend/m, \"Expected to have class #{klass}\"\n+  yield $2.strip if block_given?\n+end\n+\n+def generator_list\n+  {\n+    :rails        => ['scaffold', 'controller', 'mailer'],\n+    :slim         => ['scaffold', 'controller', 'mailer']\n+  }\n+end\n+\n+def path_prefix(name)\n+  case name\n+  when :rails\n+    'rails/generators'\n+  else\n+    'generators'\n+  end\n+end\n+\n+def require_generators(generator_list)\n+  generator_list.each do |name, generators|\n+    generators.each do |generator_name|\n+      if name.to_s == 'rails' && generator_name.to_s == 'mailer'\n+        require File.join(path_prefix(name), generator_name.to_s, \"#{generator_name}_generator\")\n+      else\n+        require File.join(path_prefix(name), name.to_s, generator_name.to_s, \"#{generator_name}_generator\")\n+      end\n+    end\n+  end\n+end\n+alias :require_generator :require_generators\n+\n+require_generators generator_list\ndiff --git a/test/test_slim-rails.rb b/test/test_slim-rails.rb\ndeleted file mode 100644\nindex fd436b6..0000000\n--- a/test/test_slim-rails.rb\n+++ /dev/null\n@@ -1,7 +0,0 @@\n-require 'helper'\n-\n-class TestSlimRails < Test::Unit::TestCase\n-  should \"probably rename this file and start testing for real\" do\n-    flunk \"hey buddy, you should probably rename this file and start testing for real\"\n-  end\n-end\ndiff --git a/tmp/rails/config/routes.rb b/tmp/rails/config/routes.rb\nnew file mode 100644\nindex 0000000..9707037\n--- /dev/null\n+++ b/tmp/rails/config/routes.rb\n@@ -0,0 +1,2 @@\n+TestApp.routes.draw do |map|\n+end\ndiff --git a/tmp/rails/public/stylesheets/scaffold.css b/tmp/rails/public/stylesheets/scaffold.css\nnew file mode 100644\nindex 0000000..1ae7000\n--- /dev/null\n+++ b/tmp/rails/public/stylesheets/scaffold.css\n@@ -0,0 +1,56 @@\n+body { background-color: #fff; color: #333; }\n+\n+body, p, ol, ul, td {\n+  font-family: verdana, arial, helvetica, sans-serif;\n+  font-size:   13px;\n+  line-height: 18px;\n+}\n+\n+pre {\n+  background-color: #eee;\n+  padding: 10px;\n+  font-size: 11px;\n+}\n+\n+a { color: #000; }\n+a:visited { color: #666; }\n+a:hover { color: #fff; background-color:#000; }\n+\n+div.field, div.actions {\n+  margin-bottom: 10px;\n+}\n+\n+#notice {\n+  color: green;\n+}\n+\n+.field_with_errors {\n+  padding: 2px;\n+  background-color: red;\n+  display: table;\n+}\n+\n+#error_explanation {\n+  width: 450px;\n+  border: 2px solid red;\n+  padding: 7px;\n+  padding-bottom: 0;\n+  margin-bottom: 20px;\n+  background-color: #f0f0f0;\n+}\n+\n+#error_explanation h2 {\n+  text-align: left;\n+  font-weight: bold;\n+  padding: 5px 5px 5px 15px;\n+  font-size: 12px;\n+  margin: -7px;\n+  margin-bottom: 0px;\n+  background-color: #c00;\n+  color: #fff;\n+}\n+\n+#error_explanation ul li {\n+  font-size: 12px;\n+  list-style: square;\n+}\n",
    "files": [
      ".document",
      ".gitignore",
      "LICENSE",
      "README.md",
      "Rakefile",
      "lib/generators/slim/controller/controller_generator.rb",
      "lib/generators/slim/controller/templates/view.html.slim",
      "lib/generators/slim/mailer/mailer_generator.rb",
      "lib/generators/slim/mailer/templates/view.text.slim",
      "lib/generators/slim/scaffold/scaffold_generator.rb",
      "lib/generators/slim/scaffold/templates/_form.html.slim",
      "lib/generators/slim/scaffold/templates/edit.html.slim",
      "lib/generators/slim/scaffold/templates/index.html.slim",
      "lib/generators/slim/scaffold/templates/new.html.slim",
      "lib/generators/slim/scaffold/templates/show.html.slim",
      "lib/slim-rails.rb",
      "lib/slim-rails/version.rb",
      "slim-rails.gemspec",
      "test/fixtures/routes.rb",
      "test/lib/generators/slim/controller_generator_test.rb",
      "test/lib/generators/slim/mailer_generator_test.rb",
      "test/lib/generators/slim/scaffold_generator_test.rb",
      "test/lib/generators/slim/testing_helper.rb",
      "test/test_helper.rb",
      "tmp/rails/config/routes.rb",
      "tmp/rails/public/stylesheets/scaffold.css"
    ],
    "id": "1342c989bbd31034a71d21f734fdf4db1f1075db"
  },
  {
    "changed_files": [
      [
        "slim-rails.gemspec",
        "edit"
      ]
    ],
    "author": "Leonardo Almeida",
    "email": "lalmeida08@gmail.com",
    "message": "Fixed gemspec",
    "merge": false,
    "diff": "diff --git a/slim-rails.gemspec b/slim-rails.gemspec\nindex 9478a03..1f9f0c1 100644\n--- a/slim-rails.gemspec\n+++ b/slim-rails.gemspec\n@@ -9,18 +9,18 @@\n \n   s.required_rubygems_version = Gem::Requirement.new(\">= 0\") if s.respond_to? :required_rubygems_version=\n   s.authors = [\"Leonardo Almeida\"]\n-  s.date = %q{2010-10-28}\n+  s.date = %q{2010-11-04}\n   s.description = %q{Provide generators for Rails 3}\n   s.email = %q{lalmeida08@gmail.com}\n   s.extra_rdoc_files = [\n     \"LICENSE\",\n-     \"README.rdoc\"\n+     \"README.md\"\n   ]\n   s.files = [\n     \".document\",\n      \".gitignore\",\n      \"LICENSE\",\n-     \"README.rdoc\",\n+     \"README.md\",\n      \"Rakefile\",\n      \"lib/generators/slim/controller/controller_generator.rb\",\n      \"lib/generators/slim/controller/templates/view.html.slim\",\n",
    "files": [
      ".document",
      ".gitignore",
      "LICENSE",
      "README.md",
      "Rakefile",
      "lib/generators/slim/controller/controller_generator.rb",
      "lib/generators/slim/controller/templates/view.html.slim",
      "lib/generators/slim/mailer/mailer_generator.rb",
      "lib/generators/slim/mailer/templates/view.text.slim",
      "lib/generators/slim/scaffold/scaffold_generator.rb",
      "lib/generators/slim/scaffold/templates/_form.html.slim",
      "lib/generators/slim/scaffold/templates/edit.html.slim",
      "lib/generators/slim/scaffold/templates/index.html.slim",
      "lib/generators/slim/scaffold/templates/new.html.slim",
      "lib/generators/slim/scaffold/templates/show.html.slim",
      "lib/slim-rails.rb",
      "lib/slim-rails/version.rb",
      "slim-rails.gemspec",
      "test/fixtures/routes.rb",
      "test/lib/generators/slim/controller_generator_test.rb",
      "test/lib/generators/slim/mailer_generator_test.rb",
      "test/lib/generators/slim/scaffold_generator_test.rb",
      "test/lib/generators/slim/testing_helper.rb",
      "test/test_helper.rb",
      "tmp/rails/config/routes.rb",
      "tmp/rails/public/stylesheets/scaffold.css"
    ],
    "id": "dfa4da0f27228474c50f6a25389ad2907bfc41ea"
  }
]

function get_file_properties(fullpath) {
  match = fullpath.match(/(.*\/){0,1}(.*)/);
  return {'path': match[1], 'name': match[2]};
}


$(document).ready(function(){

  var socket = io();
  console.log('startnooo.');

  $('form').submit(function(){
    console.log('submitting');
    socket.emit('get_commits_history', {
      "repo_name": "slim",
      "repo_url": "https://github.com/slim-template/slim.git"
    });
    return false;
  });

  socket.on('commits_history_result', function(msg){
    console.log(msg)

    window.msg = msg;

    function populate_initial_files_with_data(repo_name, repo, FS) {

      FS.createFolder("/", repo_name, true, true);

      repo[0].changed_files.forEach(function(file){
        var file_info = get_file_properties(file[0]);
        if(file_info['path'])
          FS.createPath("/", repo_name + '/' + file_info['path'], true, true);
        FS.createDataFile("/" + repo_name, file[0], file[1], true, true);
      });
    }

    populate_initial_files_with_data("slim", msg, FS);
  });
});
