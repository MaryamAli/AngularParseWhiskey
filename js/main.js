import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'VZmRRUHLqWikvjUHMvDnfcGAswgI2ST5KkSoV7i1',
        'X-Parse-REST-API-Key': 'PYRWFH3am08mdqeBCg3ASRcntMCwDD9yL2fcbJEm'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  ;
