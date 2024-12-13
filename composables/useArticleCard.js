export default async (slug) =>
  queryContent('articles')
    .only(articleQueryAttrs.card)
    .where({ slug })
    .findOne()
