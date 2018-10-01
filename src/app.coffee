import angular from 'angular'
import componentModule from './components/components.coffee'
import directivesModule from './directives/directives.coffee'
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import 'bootstrap/dist/css/bootstrap.min.css'




myApp=angular.module('app',[componentModule,directivesModule])
export {
  myApp
}