import _ from 'lodash'
import './index.scss'
import Icon from './icons.png'
import Data from './data.xml'
#import printMe from './print.coffee'
import {cube} from './math.coffee'
import angular from 'angular'
import {myApp} from './app.coffee'
#import modal from 'angular-ui-bootstrap/src/modal';



if module.hot
  console.log('ewqewqewq')
#  module.hot.accept('./print.coffee',()->
#    console.log('Accepting the updated printMe module!');
#    document.body.removeChild(element);
#    element = component() # 重新渲染页面后，component 更新 click 事件处理
#    document.body.appendChild(element);
#  )

