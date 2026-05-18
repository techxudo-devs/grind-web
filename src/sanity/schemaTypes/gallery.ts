import { defineType, defineField } from 'sanity'

export const gallerySchema = defineType({
  name: 'galleryContent',
  title: 'Gallery Content',
  type: 'document',
  fields: Array.from({ length: 12 }, (_, i) => 
    defineField({
      name: `galleryImg${i + 1}`,
      title: `Gallery Image ${i + 1}`,
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ),
})
