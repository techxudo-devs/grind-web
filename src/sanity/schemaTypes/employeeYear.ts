import { type SchemaTypeDefinition } from 'sanity'

export const employeeYearSchema: SchemaTypeDefinition = {
  name: 'employeeYearContent',
  title: 'Employee of the Year Media',
  type: 'document',
  fields: [
    {
      name: 'mainVideo',
      title: 'Upload Featured Video (MP4)',
      type: 'file',
      options: { accept: 'video/mp4' }
    },
    {
      name: 'image1',
      title: 'Grid Image 1',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'image2',
      title: 'Grid Image 2',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'image3',
      title: 'Grid Image 3',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'image4',
      title: 'Grid Image 4',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
