import { defineType, defineField } from 'sanity'

export const projectsPageSchema = defineType({
  name: 'projectsPageContent',
  title: 'Projects Page Content',
  type: 'document',
  fields: [
    // Dhar Mann Section (21 Videos)
    defineField({
      name: 'dharMannVideos',
      title: 'Dhar Mann Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'video', type: 'file', title: 'Video File', options: { accept: 'video/*' } },
          ],
        },
      ],
      description: 'Override the 21 Dhar Mann videos individually.',
    }),
    // Employee of the Year Section (5 Media Items)
    defineField({
      name: 'empMedia',
      title: 'Employee of the Year Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'video', type: 'file', title: 'Video File', options: { accept: 'video/*' } },
            { name: 'image', type: 'image', title: 'Image File' },
          ],
        },
      ],
      description: 'Override the 5 Employee of the Year media items.',
    }),
    // The Road Section (17 Media Items)
    defineField({
      name: 'roadMedia',
      title: 'The Road Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'youtubeUrl', type: 'url', title: 'YouTube URL' },
            { name: 'image', type: 'image', title: 'Image File' },
          ],
        },
      ],
      description: 'Override the 17 The Road media items.',
    }),
  ],
})
