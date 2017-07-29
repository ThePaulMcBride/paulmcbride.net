var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'resources';
elixir.config.publicPath = 'web/app/themes/serenity-theme/assets';
elixir.config.bowerDir = 'bower_components';

elixir(function(mix) {
  mix.sass('app.scss');
  mix.scripts([
    '../../bower_components/jquery/dist/jquery.min.js',
    '../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'app.js'
  ], 'web/app/themes/serenity-theme/assets/js/app.js');
});
