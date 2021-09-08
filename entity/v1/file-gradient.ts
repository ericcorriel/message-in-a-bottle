import { FILE_CATEGORY } from '~/entity/v1/file-category'

export interface FILE_GRADIENT {
  fileCategory: FILE_CATEGORY,
  gradientTo: string
}

export const FILE_TYPES_GRADIENTS: FILE_GRADIENT[] = [
  {
    fileCategory: 'image',
    gradientTo: '#FF3B00'
  },
  {
    fileCategory: 'movie',
    gradientTo: '#DF41C3'
  },
  {
    fileCategory: 'pdf',
    gradientTo: '#FFB604'
  },
  {
    fileCategory: 'system',
    gradientTo: '#40626C'
  },
  {
    fileCategory: 'music',
    gradientTo: '#19D5CF'
  },
  {
    fileCategory: 'developer',
    gradientTo: '#19D5CF'
  }
]
