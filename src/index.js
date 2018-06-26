import _ from 'lodash';
import Print from './print';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点我';
    btn.onclick = Print.bind(null, 'Hello webpack!');


    element.appendChild(btn);

    return element;
  }
  
  let element = component();
  document.body.appendChild(element);