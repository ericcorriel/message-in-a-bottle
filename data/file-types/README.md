### Adding a new file category
1. add to entity/v1/file-category
2. duplicate a data/file-types file
3. after updating the array in the new file types file, select all 4 instances of "MUSIC_" and change to new category
4. don't forget to change the category value (line 10)
5. entity/v1/file-type.ts: import and export new FILE_TYPES so there are valid FILE_TYPES_CATEGORIES
6. entity/v1/file-type-category: import and export new TYPES_CATEGORIES
7. entity/v1/file-gradients: add new gradient for category
