var ipc = require('ipc');
var button = document.createElement('button');

button.textContent = 'Hide';
button.addEventListener('click', function(){
    ipc.send('toggle-preferences');
});

document.body.appendChild(button);