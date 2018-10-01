import angular from 'angular'
import componentModule from './components/components.coffee'
import directivesModule from './directives/directives.coffee'




myApp=angular.module('app',[componentModule,directivesModule])
export {
  myApp
}