import _ from 'lodash';
import './style.css'

import table from './components/table/table'


function component() {
  const element = document.createElement('div');

  const newtable = table();
  element.appendChild(newtable);



  return element;
}

document.body.appendChild(component());
