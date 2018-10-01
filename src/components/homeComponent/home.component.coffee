
import angular from 'angular'
import template from './home.html'
import HomeCtrl from './home.controller.coffee'
import './home.scss'

# <home >
component={
  bindings:{}
  template
  controller:HomeCtrl
}

export default component