const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
})

function createWindow() {
  const win = new BrowserWindow({
    title: "ChatGPT - Application",
    width: 800,
    height: 500,
    icon: "./assets/icon.jpg",
    titleBarStyle: "customButtonsOnHover",
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });

  win.setMenu(null);
  win.loadFile('./src/index.html')
}
