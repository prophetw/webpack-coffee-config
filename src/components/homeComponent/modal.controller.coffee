# 依赖注入的写法
# https://docs.angularjs.org/error/$injector/strictdi

class HomeCtrl
  constructor: ($scope,$uibModal) ->
    'ngInject';
    this.$uibModal=$uibModal
    this.url='231321'
    this.name='231321'
HomeCtrl.$inject=['$scope','$uibModal']
export default HomeCtrl