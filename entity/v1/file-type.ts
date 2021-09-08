import { MUSIC_FILE_TYPES } from '@/data/file-types/music'
import { IMAGE_FILE_TYPES } from '~/data/file-types/image'
import { MOVIE_FILE_TYPES } from '~/data/file-types/movie'
import { PDF_FILE_TYPES } from '~/data/file-types/pdf'
import { SYSTEM_FILE_TYPES } from '~/data/file-types/system'
import { DEVELOPER_FILE_TYPES } from '~/data/file-types/developer'

export type FILE_TYPE =
  IMAGE_FILE_TYPES |
  MOVIE_FILE_TYPES |
  PDF_FILE_TYPES |
  SYSTEM_FILE_TYPES |
  MUSIC_FILE_TYPES |
  DEVELOPER_FILE_TYPES
