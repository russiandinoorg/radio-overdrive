import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'showcasePresenters',
      title: 'Showcase presenters',
      description: 'These are the presenters that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'presenter' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseSchedule',
      title: 'Showcase schedule',
      description: 'These are the schedule that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'schedule' }],
        }),
      ],
    }),
    defineField({
      name: 'showcaseRadio',
      title: 'Showcase radio',
      description: 'These are the tracks that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'radio' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        subtitle: 'Home',
      };
    },
  },
});
