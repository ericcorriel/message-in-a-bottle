import { FILE_TYPE_CATEGORY } from '~/entity/v1/file-type-category'

export const fileTypes = ['js', 'php', 'cpp'] as const
export type DEVELOPER_FILE_TYPES = typeof fileTypes[number]

export const DEVELOPER_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = []
fileTypes.forEach((fileType:DEVELOPER_FILE_TYPES) => {
  DEVELOPER_TYPES_CATEGORIES.push({
    type: fileType,
    category: 'developer'
  })
})
