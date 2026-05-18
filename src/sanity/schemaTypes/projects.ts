import { type SchemaTypeDefinition } from 'sanity'

export const projectImagesSchema: SchemaTypeDefinition = {
  name: 'projectImages',
  title: 'Projects Section Images',
  type: 'document',
  fields: [
    {
      name: 'dharManImage',
      title: 'Dhar Man Card Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'employeeOfTheYearImage',
      title: 'Employee Of The Year Card Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'theRoadImage',
      title: 'The Road Card Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
