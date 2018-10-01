import angular from 'angular'
import home from './homeComponent/home.coffee'
import main from './mainComponent/main.coffee'

componentsModule=angular.module('components',[home,main])
  .name
export default componentsModule