import _ from 'lodash'
import './index.scss'
import Icon from './icons.png'
import Data from './data.xml'
import printMe from './print.coffee'
component=()->
  #Lodash, now imported by this script
  element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')


  btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe
  myIcon = new Image()
  myIcon.src=Icon
  element.appendChild(myIcon)
  console.log(Data)
  element.appendChild(btn)
  element
document.body.appendChild(component())