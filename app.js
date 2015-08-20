var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');


app.on('ready', function(){

    var mainWindow = new BrowserWindow({
        width:800,
        height:800
    });

    mainWindow.loadUrl('file://' + __dirname + '/src/html/main.html');
    mainWindow.openDevTools();

    var prefsWindow = new BrowserWindow({
        width:800,
        height:800,
        show: false
    });

    prefsWindow.loadUrl('file://' + __dirname + '/src/html/preferences.html');

    ipc.on('toggle-preferences', function(){
        if(prefsWindow.isVisible()){
            prefsWindow.hide();
        }else{
            prefsWindow.show();
        }
    });
});