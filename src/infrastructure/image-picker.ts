import { IImagePicker } from '../core'

export class ElectronImagePicker implements IImagePicker {
  ipc: any = (window as any).ipc
  public open() {
    this.ipc.send('open-filepicker-for-pics')
  }

  public onImageSelected(callback: (files: string[] | null) => void) {
    this.ipc.receive('selected-pic', (event: any, files: string[] | null) => callback(files))
  }

  public dispose() {
    this.ipc.dispose('selected-pic')
  }
}

export class BrowserImagePicker implements IImagePicker {
  open(): void {}
  onImageSelected(callback: (files: string[] | null) => void): void {}
  dispose(): void {}
}

export const imagePicker = (window as any).ipc
  ? new ElectronImagePicker()
  : new BrowserImagePicker()
