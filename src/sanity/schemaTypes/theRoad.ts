import { type SchemaTypeDefinition } from 'sanity'

// 16 Road Images Fields Loop
const roadFields = Array.from({ length: 16 }, (_, i) => ({
  name: `roadImg${i + 1}`,
  title: `The Road Image ${i + 1}`,
  type: 'image',
  options: { hotspot: true }
}))

// 5 Cast Images Fields Loop
const castFields = Array.from({ length: 5 }, (_, i) => ({
  name: `castImg${i + 1}`,
  title: `Cast Image ${i + 1}`,
  type: 'image',
  options: { hotspot: true }
}))

export const theRoadSchema: SchemaTypeDefinition = {
  name: 'theRoadContent',
  title: 'The Road Page Media',
  type: 'document',
  fields: [...roadFields, ...castFields]
}
