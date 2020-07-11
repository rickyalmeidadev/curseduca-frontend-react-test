import { Post } from '../store/posts/types';

export const applyFilterToPost = (
  post: Post,
  authorsSelected: number[],
  categoriesSelected: number[],
) => {
  const shouldFilter =
    (!authorsSelected.includes(post.id_user) && authorsSelected.length > 0) ||
    (!categoriesSelected.includes(post.id_category) && categoriesSelected.length > 0);

  return shouldFilter;
};

export const isAFuturePost = (date: Date) => {
  return new Date(date).getTime() - new Date().getTime() > 0;
};
