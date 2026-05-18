import { type SchemaTypeDefinition } from 'sanity'
import { projectImagesSchema } from './projects'
import { dharManSchema } from './dharMan'
import { employeeYearSchema } from './employeeYear'
import { theRoadSchema } from './theRoad'
import { gallerySchema } from './gallery'
import { projectsPageSchema } from './projectsPage'
import { aboutPageSchema } from './aboutPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectImagesSchema,
    dharManSchema,
    employeeYearSchema,
    theRoadSchema,
    gallerySchema,
    projectsPageSchema,
    aboutPageSchema,
  ],
}
