export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    const slug = file._path.split('/').pop()
    file.slug = slug
  })
})
