const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
    { title: 'Quote', value: 'blockquote' },
];

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
          name: 'content',
          title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
        },
    ],
    fields: [
        {
            group: 'meta',
            name: 'meta_title',
            type: 'string',
            title: 'Meta title',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'publishedDate',
            type: 'date',
            title: 'Published Date',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        },
        {
            group: 'content',
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
        },
        {
            group: 'content',
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule.required()
        },
        {
            group: 'content',
            title: 'Body content', 
            name: 'body',
            type: 'array',
            validation: Rule => Rule.required(),
            of: [
                {
                    type: 'block',
                    styles: textEditorStyles
                },
                {
                    type: 'image'
                }
            ]
        }
    ]
}