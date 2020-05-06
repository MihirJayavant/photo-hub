import { List, Set } from 'immutable'
import { IPhoto } from './photo'

/**
 *
 * @param list : List of photos from which photo will be deleted
 * @param selected : Set containing selected photo ids
 * @returns : Return new list not containing photos from selected map and position will be reassigned
 */
export function deletePhotos(list: List<IPhoto>, selected: Set<number>) {
  return list.filterNot(p => selected.has(p.id))
}

/**
 *
 * @param selectedPhotos : Set containing selected photo ids
 * @param photoId : photo id
 * @returns : Return new Set of selected photo ids
 */
export function selectPhoto(selectedPhotos: Set<number>, photoId: number) {
  return selectedPhotos.has(photoId) ? selectedPhotos.delete(photoId) : selectedPhotos.add(photoId)

}
