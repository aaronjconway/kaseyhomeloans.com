
const taxonomyFilter = (posts: any[], name: string, key: string) =>
  posts.filter((post) =>
    post.data[name].map((name: string) => name).includes(key),
  );

export default taxonomyFilter;
