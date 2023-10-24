import { $content } from '@nuxt/content'

export default async () => {
  const files = await $content({ deep: true }).only(['slug', 'path']).fetch()

  return files
    .filter(({ path }) => /^\/articles/.test(path))
    .map((file) => (file.path === '/index' ? '/' : `${file.slug}`))
}
