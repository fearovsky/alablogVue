<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['delete'])
</script>

<template>
  <article class="article-card">
    <h3>{{ article.title }}</h3>
    <p>{{ article.content }}</p>

    <div class="article-actions">
      <button @click="emit('delete', article.id)" class="delete-btn">Delete</button>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background: white;
}

.article-actions {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}

.delete-btn {
  background: #ff4444;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
