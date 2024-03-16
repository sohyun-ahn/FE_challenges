import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(), // name is required
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200), // short description 의 유효성 검사 => 짧게
    }),

    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat', // latitude of the restaurant
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'lon', // longitude of the restaurant
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
    }),
    defineField({
      name: 'rating', // 평점
      title: 'Enter a rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(), // name is required
      type: 'reference',
      to: [{type: 'category'}], // category.ts 참조
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}], // 이 array들은  dish.ts 참조
    }),
  ],
})
