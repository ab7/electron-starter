var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;


app.on('ready', function() {
  var appWindow;
  appWindow = new BrowserWindow({
    show: false
  });
  appWindow.loadURL('file://' + __dirname + '/index.html');
  appWindow.once('ready-to-show', function() {
    appWindow.show();
  });  // ready-to-show
});
