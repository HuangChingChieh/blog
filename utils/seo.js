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
      key: 'description',
      name: 'description',
      content: description,
    },
    {
      key: 'og:url',
      property: 'og:url',
      content: url,
    },
    {
      key: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      key: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: img,
    },
    {
      key: 'og:article:published_time',
      property: 'og:article:published_time',
      content: createdAt,
    },
    {
      key: 'og:article:modified_time',
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
        hid: 'article-json-ld',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
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
        }),
      },
    ],
  }
}
