import { defineType, defineField } from 'sanity'

export const aboutPageSchema = defineType({
  name: 'aboutPageContent',
  title: 'About Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main Portrait Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
