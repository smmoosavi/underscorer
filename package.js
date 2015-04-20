Package.describe({
  name: 'smmoosavi:underscorer',
  version: '1.0.3',
  summary: 'Underscorer is a functioner and chainer for underscore',
  git: 'https://github.com/smmoosavi/underscorer.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('underscore');
  api.addFiles('underscorer.js');
});
