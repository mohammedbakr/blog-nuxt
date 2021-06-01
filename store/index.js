export const actions = {
  async nuxtServerInit ({ commit }, context) {
    try {
      // data is object {} so I'll need to transfer it to array [] first
      const res = await context.app.$axios.get('/posts.json')
      const postsArray = []
      for (const key in res.data) {
        postsArray.push({ ...res.data[key], id: key })
      }
      commit('post/setPosts', postsArray)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}
