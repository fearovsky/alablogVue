<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const article = ref({
  title: '',
  content: '',
})

const handleSubmit = () => {
  emit('submit', { ...article.value })
  article.value = { title: '', content: '' }
}
</script>

<template>
  <div class="article-form-container">
    <h2>Create New Article</h2>
    <form @submit.prevent="handleSubmit" class="article-form">
      <div class="form-group">
        <input
          v-model="article.title"
          type="text"
          placeholder="Article Title"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <textarea
          v-model="article.content"
          placeholder="Article Content"
          required
          class="form-input"
          rows="4"
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">Create Article</button>
    </form>
  </div>
</template>

<style scoped>
.article-form-container {
  min-height: 300px;
  margin-bottom: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
}

.article-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.submit-btn {
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.submit-btn:hover {
  background: #45a049;
}
</style>
