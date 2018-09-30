import _ from 'lodash'
import './index.scss'
import Icon from './icons.png'
import Data from './data.xml'
#import printMe from './print.coffee'
import {cube} from './math.coffee'
component=()->

  element = document.createElement('pre');
  element.innerHTML = ['Hello webpack!','5 cubed is equal to ' + cube(5)].join('\n\n');
  btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
#  btn.onclick = printMe
  myIcon = new Image()
  myIcon.src=Icon
  element.appendChild(myIcon)
  console.log(Data)
  element.appendChild(btn)
  element

component1=()->
  #Lodash, now imported by this script
  element1 = document.createElement('div')
  element1.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element1

element1=component1()
element = component()
document.body.appendChild(element1)
document.body.appendChild(element)


if module.hot
  module.hot.accept('./print.coffee',()->
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component() # 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  )
