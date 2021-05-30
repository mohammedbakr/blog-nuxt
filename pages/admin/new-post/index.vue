<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm.vue'
export default {
  components: {
    AdminPostForm
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('posts/addPost', post)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
