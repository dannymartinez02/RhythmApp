const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Crear la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Cargar el archivo HTML de la aplicación.
  win.loadFile(path.join(__dirname, 'index.html'));

  // Abrir las herramientas de desarrollo.
  win.webContents.openDevTools();
}

// Esta función se llamará cuando Electron haya terminado de inicializarse y esté listo para crear ventanas del navegador.
app.whenReady().then(() => {
  createWindow();

  // Manejar el cierre de la aplicación.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

// Manejar la activación de la aplicación en macOS.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
