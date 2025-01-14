import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      description: 'п. Пятница',
      title: 'День недели',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scheduleItems',
      title: 'Пункт программы',
      description: 'п. Утренний эфир Тарарам',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', name: 'time' },
            { type: 'string', name: 'event' },
          ],
        },
      ],
    }),
  ],
});
