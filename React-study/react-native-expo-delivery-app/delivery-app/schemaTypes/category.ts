import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(), // name is required
    }),
    defineField({
      name: 'image',
      title: 'Image of category',
      type: 'image',
    }),
  ],
})
