<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ post.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ post.updatedDate }}
        </div>
        <div class="post-detail">
          Written by {{ post.author }}
        </div>
      </div>
      <p>{{ post.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    try {
      const data = await new Promise((resolve, reject) => {
        // eslint-disable-next-line nuxt/no-timing-in-fetch-data
        setTimeout(() => {
          resolve({
            post: {
              id: '1',
              title: 'First Post (ID: ' + context.params.id + ')',
              previewText: 'this is our first post',
              author: 'Max',
              updatedDate: new Date(),
              content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, iure? Quidem cumque fugiat sint laboriosam. Repellendus, accusamus provident, cum tempore ullam libero atque, neque quae veniam architecto amet animi. Omnis!'
            },
            thumbnail: 'https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg'
          })
        }, 1000)
      })
      return data
    } catch (err) {
      return context.error(err)
    }
  }
}
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
