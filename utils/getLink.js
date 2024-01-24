export const getArticleLink = ({ slug, hash }) => {
  let to = `/${slug}/`
  if (hash) to += `#${hash}`
  return to
}
export const getCategoryLink = ({ category, page = 1 }) =>
  `/category/${category}/${page ? page : 1}/`
