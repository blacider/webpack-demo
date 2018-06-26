import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点我';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function () {
      console.log('收到print更新！');
      element = component();
      document.body.appendChild(element);

    })
  }