import _ from 'lodash'
import './index.scss'
component=()->
  element = document.createElement('div')
  #Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element
document.body.appendChild(component())