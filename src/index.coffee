import _ from 'lodash'
import './index.scss'
import Icon from './icons.png'
import Data from './data.xml'
component=()->
  element = document.createElement('div')
  #Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  myIcon = new Image()
  myIcon.src=Icon
  element.appendChild(myIcon)
  console.log(Data)
  element
document.body.appendChild(component())