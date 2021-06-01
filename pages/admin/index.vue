<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button
        type="button"
        @click="$router.push('/admin/new-post')"
      >
        Create post
      </app-button>
      <app-button
        type="button"
        style="margin-left: 10px"
        @click="onLogout"
      >
        Log out
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list is-admin :posts="posts" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['check-auth', 'auth'],
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  },
  methods: {
    onLogout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
