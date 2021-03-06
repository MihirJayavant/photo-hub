// Modules to control application life and create native browser window
import { app, BrowserWindow, ipcMain, dialog } from 'electron'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    width: 1200
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://127.0.0.1:3000')
  // mainWindow.setMenu(null)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  ipcMain.on('open-filepicker-for-pics', (event: any) => {
    if (mainWindow) {
      dialog.showOpenDialog(
        mainWindow,
        {
          properties: ['multiSelections', 'openFile'],
          filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
        }
      ).then(files => event.sender.send('selected-pic', files.filePaths))
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
