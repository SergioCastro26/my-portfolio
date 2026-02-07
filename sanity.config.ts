import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5kp9o42u'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

console.log(projectId, dataset)

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  
  schema,
})
