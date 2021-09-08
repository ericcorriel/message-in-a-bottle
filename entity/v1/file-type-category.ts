import { FILE_TYPE } from '@/entity/v1/file-type'
import { FILE_CATEGORY } from '@/entity/v1/file-category'
import { MUSIC_TYPES_CATEGORIES } from '@/data/file-types/music'
import { MOVIE_TYPES_CATEGORIES } from '@/data/file-types/movie'
import { IMAGE_TYPES_CATEGORIES } from '@/data/file-types/image'
import { PDF_TYPES_CATEGORIES } from '@/data/file-types/pdf'
import { SYSTEM_TYPES_CATEGORIES } from '@/data/file-types/system'
import { DEVELOPER_TYPES_CATEGORIES } from '@/data/file-types/developer'

export interface FILE_TYPE_CATEGORY {
  type: FILE_TYPE,
  category: FILE_CATEGORY
}
export const FILE_TYPES_CATEGORIES: FILE_TYPE_CATEGORY[] = [
  ...IMAGE_TYPES_CATEGORIES,
  ...MOVIE_TYPES_CATEGORIES,
  ...PDF_TYPES_CATEGORIES,
  ...SYSTEM_TYPES_CATEGORIES,
  ...MUSIC_TYPES_CATEGORIES,
  ...DEVELOPER_TYPES_CATEGORIES
]
