import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

export const fileTypes = ['mp3', 'wav', 'ogg', 'aiff'] as const
export type MUSIC_FILE_TYPES = typeof fileTypes[number]

export const MUSIC_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:MUSIC_FILE_TYPES) => {
  MUSIC_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'music'
  })
})
