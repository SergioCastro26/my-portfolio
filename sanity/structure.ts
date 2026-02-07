import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('pageInfo').title('PageInfo'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('social').title('Socials'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['pageInfo', 'skill', 'project', 'experience', 'social'].includes(item.getId()!),
      ),
    ])
