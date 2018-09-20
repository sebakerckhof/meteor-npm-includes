Package.describe({
  summary: "Foo",
  version: '1.0.0',
});

Npm.depends({ 'babel-plugin-angularjs-annotate': '0.8.0' });

Package.onUse(function(api) {
  api.versionsFrom('1.7');

  var packages = [
    'meteor',
    'ecmascript'
  ];

  api.use(packages);

  // SHARED FILES
  api.mainModule(
    'main.js',
    ['client','server']);
});

Package.onTest(function (api) {

});
