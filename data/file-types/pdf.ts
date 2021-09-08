import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

export const fileTypes = ['pdf'] as const
export type PDF_FILE_TYPES = typeof fileTypes[number]

export const PDF_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:PDF_FILE_TYPES) => {
  PDF_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'pdf'
  })
})
