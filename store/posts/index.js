const state = () => ({
  posts: []
})

const getters = {
  posts: state => state.posts
}

const actions = {
  setPosts ({ commit }, posts) {
    commit('setPosts', posts)
  }
}

const mutations = {
  setPosts: (state, posts) => { state.posts = posts }
}

export default {
  state,
  getters,
  actions,
  mutations
}
