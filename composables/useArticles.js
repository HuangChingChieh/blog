export default () =>
  useAsyncData(`articles`, () =>
    queryContent('articles')
      .only([...articleQueryAttrs.card, 'tags'])
      .sort({ updatedAt: -1 })
      .find()
  )
