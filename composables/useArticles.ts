export default (only?: string[]) =>
  useAsyncData(`articles`, () =>
    queryContent('articles')
      .only(only || [...articleQueryAttrs.card, 'tags'])
      .sort({ createdAt: -1 })
      .find()
  )
