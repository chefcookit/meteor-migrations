Package.describe({
  summary: 'Define and run db migrations.',
  version: '1.0.3',
  name: 'chefcookit:migrations',
  git: 'https://github.com/chefcookit/meteor-migrations',
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@1.5');
  api.use('ecmascript');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['migrations_server.js'], 'server');
  api.export('Migrations', 'server');
});

Package.on_test(function(api) {
  api.use('ecmascript');
  api.use(['percolate:migrations', 'tinytest']);
  api.addFiles('migrations_tests.js', ['server']);
});
