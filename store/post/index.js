const state = () => ({
  posts: []
})

const getters = {
  posts: state => state.posts
}

const actions = {
  setPosts ({ commit }, posts) {
    commit('setPosts', posts)
  },
  async addPost (store, post) {
    try {
      const res = await this.$axios.post(`/posts.json?auth=${store.rootState.auth.token}`, {
        ...post,
        updatedDate: new Date()
      })
      store.commit('addPost', { ...post, id: res.data.name })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  async editPost (store, post) {
    try {
      await this.$axios.put(`/posts/${post.id}.json?auth=${store.rootState.auth.token}`, post)
      store.commit('editPost', post)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

const mutations = {
  setPosts: (state, posts) => { state.posts = posts },
  addPost: (state, post) => {
    state.posts.push(post)
  },
  editPost: (state, editedPost) => {
    // find the element in [] and replacig it
    const postIndex = state.posts.findIndex(post => post.id === editedPost.id)
    state.posts[postIndex] = editedPost
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
