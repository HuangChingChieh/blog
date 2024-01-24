import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    const slug = file._path.split('/').pop()
    file.slug = slug

    file.plainTexts = []
    visit(
      file.body,
      (n) => n.type === 'text',
      ({ value }) => {
        if (typeof value === 'string' && value.length > 0) {
          file.plainTexts.push(value.trim())
        }
      }
    )
  })
})
