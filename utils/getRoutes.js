export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['slug', 'path']).fetch()

  return files
    .filter(({ path }) => /^\/articles/.test(path))
    .map((file) => (file.path === '/index' ? '/' : `${file.slug}`))
}
