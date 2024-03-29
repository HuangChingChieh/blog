export default () =>
  useAsyncData(`articles`, () =>
    queryContent('articles')
      .only([...articleQueryAttrs.card, 'tags'])
      .sort({ createdAt: -1 })
      .find()
  )
