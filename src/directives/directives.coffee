import angular from 'angular'

import cmis from './cmisDirective/cmis.coffee'

directivesModule=angular.module('directives',[cmis])
  .name
export default directivesModule