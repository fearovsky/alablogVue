<script setup>
import ArticleCard from './ArticleCard.vue'

defineProps({
  articles: {
    type: Array,
    default: () => []
  },
  loading: Boolean,
  error: String
})

const emit = defineEmits(['delete'])
</script>

<template>
  <div class="articles-list">
    <h2>Articles</h2>
    
    <div v-if="loading" class="loading">
      Loading articles...
    </div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else-if="articles.length === 0" class="no-articles">
      No articles found
    </div>

    <div v-else class="articles-grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @delete="id => emit('delete', id)"
      />
    </div>
  </div>
</template>

<style scoped>
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.loading, .error, .no-articles {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 20px 0;
}

.error {
  color: #ff4444;
  background: #ffe6e6;
}
</style>
