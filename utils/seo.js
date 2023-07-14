export const getHeadForArticle = ({
  description = '',
  title = '',
  img = '',
  url = '',
  tags = [],
  createdAt = '',
  updatedAt = '',
}) => {
  const meta = [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: img,
    },
    {
      hid: 'og:article:published_time',
      property: 'og:article:published_time',
      content: createdAt,
    },
    {
      hid: 'og:article:modified_time',
      property: 'og:article:modified_time',
      content: updatedAt,
    },
  ]

  tags.forEach((tag) => {
    meta.push({
      property: 'og:article:tag',
      content: tag,
    })
  })

  return {
    title,
    meta,
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          image: [img],
          datePublished: createdAt,
          dateModified: updatedAt,
          author: [
            {
              '@type': 'Person',
              name: 'HuangChingChieh',
              url: 'https://huangchingchieh.github.io/',
            },
          ],
        },
      },
    ],
  }
}
