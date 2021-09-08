import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

export const fileTypes = ['CodeResources'] as const
export type SYSTEM_FILE_TYPES = typeof fileTypes[number]

export const SYSTEM_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:SYSTEM_FILE_TYPES) => {
  SYSTEM_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'system'
  })
})
