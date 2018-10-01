
import angular from 'angular'
import homeComponent from './home.component.coffee'
console.log('==== myApp in home coffee')


homeModule=angular.module('home', [])
  .component('home',homeComponent)
  .name
export default homeModule