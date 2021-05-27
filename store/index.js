export const actions = {
  nuxtServerInit ({ commit }, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('posts/setPosts', [
          {
            id: '1',
            title: 'First Post',
            thumbnail:
              'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
            previewText: 'Awesome content!'
          },
          {
            id: '2',
            title: 'Second Post',
            thumbnail:
              'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
            previewText: 'Awesome content!'
          },
          {
            id: '3',
            title: 'Third Post',
            thumbnail:
              'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg',
            previewText: 'Awesome content!'
          }
        ])
        resolve()
      }, 1000)
    })
  }
}
