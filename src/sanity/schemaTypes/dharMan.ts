import { type SchemaTypeDefinition } from 'sanity'

// 21 fields create karne ka aasan loops
const videoFields = Array.from({ length: 21 }, (_, i) => ({
  name: `video${i + 1}`,
  title: `Dhar Vid ${i + 1} (Replace MP4)`,
  type: 'file',
  options: { accept: 'video/mp4' }
}))

export const dharManSchema: SchemaTypeDefinition = {
  name: 'dharManVideos',
  title: 'Dhar Man Videos',
  type: 'document',
  fields: videoFields
}
