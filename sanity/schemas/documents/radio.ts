import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'radio',
  title: 'Radio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'п. Архивные записи моего диктофона',
      title: 'Название эфира',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'presenter',
      description: 'п. Несвитайлова',
      title: 'Ведущий',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      description: 'п. 26 июля 2024 ночь',
      title: 'Дата',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tracklist',
      title: 'Треки эфира',
      description: 'п. Эмиль Горовец — Люблю я макароны',
      type: 'array',
      of: [
        {
          title: 'Трек',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'audio',
      title: 'Аудио файл',
      description: 'В mp3 формате',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
