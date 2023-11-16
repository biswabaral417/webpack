import _ from 'lodash';
import './style.css'
import Icon from './icon.png'
import printme from './print';

function component() {
   const element = document.createElement('div')

   element.innerHTML = _.join(['hello', 'world'], ' ');
   element.classList.add('hello')

   const myIcon = new Image()
   myIcon.src = Icon
   element.appendChild(myIcon);
   printme()
   return element
}
document.body.appendChild(component())