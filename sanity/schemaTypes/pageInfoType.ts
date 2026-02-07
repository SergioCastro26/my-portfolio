import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageInfoType = defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePicture",
      title: "ProfilePicture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneNumer",
      title: "PhoneNumer",
      type: "string",
    },
    {
        name: "email",
        title: "Email",
        type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "social" }] }],
    },
  ],
})
