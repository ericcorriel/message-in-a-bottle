import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

export const fileTypes = ['mov', 'mpg', 'mpeg', 'mp4'] as const
export type MOVIE_FILE_TYPES = typeof fileTypes[number]

export const MOVIE_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:MOVIE_FILE_TYPES) => {
  MOVIE_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'movie'
  })
})
