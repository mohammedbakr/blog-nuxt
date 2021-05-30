<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="post" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/admin/AdminPostForm.vue'
export default {
  components: {
    AdminPostForm
  },
  async asyncData (context) {
    try {
      const res = await axios.get(`https://blog-nuxt-0-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
      return {
        post: { ...res.data, id: context.params.postId }
      }
    } catch (error) {
      context.error(error)
    }
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('posts/editPost', post)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
