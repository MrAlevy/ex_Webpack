import printMe from './print';

const btn = document.getElementById('btn');
btn.onclick = printMe;

document.getElementById('myDiv').innerHTML = 'hello';

console.log('all oks')