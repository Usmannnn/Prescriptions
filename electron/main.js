const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true,
    },
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../web-build/index.html"));
  } else {
    win.loadURL("http://localhost:19006");
  }
}

app.whenReady().then(createWindow);
