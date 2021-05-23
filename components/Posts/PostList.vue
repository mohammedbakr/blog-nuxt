<template>
  <section class="post-list">
    <post-preview
      id="1"
      thumbnail="https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg"
      title="Hello there!"
      preview-text="this is my first post!"
    />
  </section>
</template>

<script>
import PostPreview from '../posts/PostPreview.vue'
export default {
  components: {
    PostPreview
  }
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
