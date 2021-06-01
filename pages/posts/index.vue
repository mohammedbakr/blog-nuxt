<template>
  <div class="posts-page">
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
