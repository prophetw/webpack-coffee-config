
import angular from 'angular'
import mainComponent from "./main.component.coffee";


console.log('Main Coffee')

mainModule=angular.module('main', [])
  .component('app',mainComponent)
  .name

export default mainModule
