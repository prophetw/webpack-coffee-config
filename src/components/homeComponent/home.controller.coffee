# 依赖注入的写法
# https://docs.angularjs.org/error/$injector/strictdi
import template from './modal.html'
class HomeCtrl
  constructor: ($scope,$uibModal) ->
    'ngInject';
    this.$uibModal=$uibModal
    this.url='231321'
    this.name='231321'
  sayHello: () ->
    alert 'hello'
    console.log(@$uibModal)
    @$uibModal.open({
      template
    })
HomeCtrl.$inject=['$scope','$uibModal']
export default HomeCtrl