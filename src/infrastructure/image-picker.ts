import { IpcRenderer } from 'electron'
import { IImagePicker } from '../core';

declare global {
  interface Window {
    require: (
      module: 'electron'
    ) => {
      ipcRenderer: IpcRenderer
    }
  }
}

const { ipcRenderer } = window.require('electron')


export class ElectronImagePicker implements IImagePicker {

  public open(): void {
    ipcRenderer.send('open-filepicker-for-pics')
  }

  public onImageSelected(callback: (files: string[] | null) => void) {
    ipcRenderer.on('selected-pic', (event: any, files: string[] | null) => callback(files))
  }

  public dispose(): void {
    ipcRenderer.removeAllListeners('selected-pic')
  }


}
