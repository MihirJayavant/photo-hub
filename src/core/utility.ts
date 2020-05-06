import { List, Set } from 'immutable'
import { IPhoto } from './photo'

/**
 *
 * @param list : List of photos from which photo will be deleted
 * @param selected : Map containing photos with key as position
 * @returns : Return new list not containing photos from selected map and position will be reassigned
 */
export function deletePhotos(list: List<IPhoto>, selected: Set<number>) {
  return list.filterNot(p => selected.has(p.id))
}
