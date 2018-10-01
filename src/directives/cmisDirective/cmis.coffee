import template from './cmis.html'
import angular from 'angular'
import controller from "./cmis.controller.coffee";

cmisDirective=angular.module('cmisDirective', [])
  .directive('cmis',()->
    {
      replace: true
      template
      compile: (tElement, attrs)->
        console.log(tElement)
        console.log(attrs)
      controller
    }
  )
  .name
export default cmisDirective