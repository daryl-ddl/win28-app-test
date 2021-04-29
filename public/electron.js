const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');
const path = require('path');
require('dotenv').config();

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  if ( process.env.REACT_APP_ENV === 'dev' ) {
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  }
  
  win.setFullScreen(true);
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('ready', function()  {
  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})