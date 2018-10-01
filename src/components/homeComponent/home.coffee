
import angular from 'angular'
import homeComponent from './home.component.coffee'
console.log('==== myApp in home coffee')
import modal from 'angular-ui-bootstrap/src/modal';

homeModule=angular.module('home', [modal])
  .component('home',homeComponent)
  .name
export default homeModule