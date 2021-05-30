/* eslint-disable no-console */
import axios from 'axios'

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    try {
      // data is object {} so I'll need to transfer it to array [] first
      const res = await axios.get('https://blog-nuxt-0-default-rtdb.firebaseio.com/posts.json')
      const postsArray = []
      for (const key in res.data) {
        postsArray.push({ ...res.data[key], id: key })
      }
      commit('posts/setPosts', postsArray)
    } catch (error) {
      console.log(error)
    }
  }
}
