import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

// https://stackoverflow.com/questions/40863488/how-can-i-iterate-over-a-custom-literal-type-in-typescript
export const fileTypes = ['jpg', 'jpeg', 'png', 'tiff'] as const

// equivalent to export type IMAGE_FILE_TYPES = 'jpg' | 'jpeg' | 'png' | 'tiff'
export type IMAGE_FILE_TYPES = typeof fileTypes[number]

export const IMAGE_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:IMAGE_FILE_TYPES) => {
  IMAGE_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'image'
  })
})

console.log(IMAGE_TYPES_CATEGORIES)

/*
* 21.06.27 - This file takes the list of file type strings and
* a) exports them as types like so:
*   IMAGE_FILE_TYPES = 'jpg' | 'jpeg' | 'png' | 'tiff'
* b) exports an array associating the types ^ with the category 'image' like so:
*
    export const IMAGE_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = [
      {
        type: 'jpg',
        category: 'image'
      },
      {
        type: 'jpeg',
        category: 'image'
      },
      {
        type: 'png',
        category: 'image'
      },
      {
        type: 'tiff',
        category: 'image'
      }
    ]
*/
