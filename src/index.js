import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import './style.css';
import Icon from './Screenshot_1.png';

const btn = document.getElementById('btn')

const element = document.createElement('div');

const myIcon = new Image();
myIcon.src = Icon;
document.getElementById('myDiv').appendChild(myIcon);
// const source = fromEvent(btn, 'click');
// const example = source.pipe(map(e => ('Time now: ' = e.timeStamp)));
// const subscribe = example.subscribe(val => console.log(val));
 
console.log('all oks')