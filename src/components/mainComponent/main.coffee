
import angular from 'angular'
import mainComponent from "./main.component.coffee";

import modal from 'angular-ui-bootstrap/src/modal';

console.log('Main Coffee')

mainModule=angular.module('main', [modal])
  .component('app',mainComponent)
  .name

export default mainModule
