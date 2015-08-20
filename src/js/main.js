var remote = require('remote');
var ipc = require('ipc');
var Menu = remote.require('menu');  // Module to create native browser window.

var menu = Menu.buildFromTemplate(
    [
        {
            label   : 'MX',
            submenu : [
                {
                    label : 'Preferences',
                    click : function() {
                        ipc.send('toggle-preferences');
                    }
                }
            ]
        }
    ]
);
Menu.setApplicationMenu(menu);
