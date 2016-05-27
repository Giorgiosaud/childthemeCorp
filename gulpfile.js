var elixir = require('laravel-elixir');
require('laravel-elixir-stylus');
elixir.config.publicPath='compiled';
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

 elixir(function(mix) {
 	mix
 	.stylus('app.styl','resources/assets/css')
 	.styles(['app.css'],'compiled/css/main.css')
 	.scripts(['main.js'],'compiled/js/child.js')
 });

