export enum CategoriesMap {
  all = '最新文章',
  linux = 'Linux心得',
  frontend = '前端筆記',
  life = '生活雜記',
}

export type Category = keyof typeof CategoriesMap
