<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="post" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm.vue'
export default {
  components: {
    AdminPostForm
  },
  // order of middlewares is important
  middleware: ['check-auth', 'auth'],
  async asyncData (context) {
    try {
      const res = await context.app.$axios.get(`/posts/${context.params.postId}.json`)
      return {
        post: { ...res.data, id: context.params.postId }
      }
    } catch (error) {
      context.error(error)
    }
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('post/editPost', post)
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
