export interface IImagePicker {
  open(): void
  onImageSelected(callback: (files: string[] | null) => void): void
  dispose(): void
}
