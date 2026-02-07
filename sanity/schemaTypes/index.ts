import { type SchemaTypeDefinition } from 'sanity'

import {pageInfoType} from './pageInfoType'
import {skillType} from './skillType'
import {projectType} from './projectType'
import {experienceType} from './experienceType'
import {socialType} from './socialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfoType, skillType, projectType, experienceType, socialType],
}
