import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'presenter',
  title: 'Presenter',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      description: 'Указывается в родительном падеже п. субботы',
      title: 'День вещания',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      description: 'Имя и фамилия',
      title: 'Имя ведущего',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      description: 'Указывается в обозначением населенного пункта п. г. Лондон',
      title: 'Город ведущего',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Фотография ведущего',
      description: 'Не очень тяжелая и с соблюдением пропорций',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Биография ведущего',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        // Custom blocks
        defineField({
          type: 'image',
          // icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              media: 'asset',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),
  ],
});
