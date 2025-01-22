import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Главная',
  type: 'document',
  fields: [
    defineField({
      name: 'showcasePresenters',
      title: 'Ведущие',
      description: 'Порядок отображения ведущих на сайте',
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
      title: 'Расписание',
      description: 'Порядок отображения дней расписания на сайте',
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
      title: 'Радио',
      description: 'Порядок воспроизведения эфиров',
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
