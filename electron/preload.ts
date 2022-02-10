import { contextBridge, ipcRenderer } from 'electron'

function validChannels() {
  return ['open-filepicker-for-pics', 'selected-pic']
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('ipc', {
  send: (channel: string, data: any) => {
    // whitelist channels
    if (validChannels().includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (
    channel: string,
    fn: (event: Electron.IpcRendererEvent, ...eventArgs: any[]) => void
  ) => {
    if (validChannels().includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, args) => fn(event, args))
    }
  },
  dispose: (channel: string) => {
    if (validChannels().includes(channel)) {
      ipcRenderer.removeAllListeners(channel)
    }
  },
})
