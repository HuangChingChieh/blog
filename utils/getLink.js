export const getArticleLink = ({ slug }) => `/${slug}/`
export const getCategoryLink = ({ category, page = 1 }) =>
  `/category/${category}/${page}/`
