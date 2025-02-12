<template>
  <main class="container">
    <ArticleForm @submit="handleCreateArticle" />
    
    <ArticleList
      :articles="articlesStore.getArticles"
      :loading="articlesStore.loading"
      :error="articlesStore.error"
      @delete="handleDeleteArticle"
    />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticlesStore } from '@/stores/articles'
import ArticleForm from '@/components/articles/ArticleForm.vue'
import ArticleList from '@/components/articles/ArticleList.vue'

const articlesStore = useArticlesStore()

onMounted(() => {
  fetchArticles()
})

const fetchArticles = async () => {
  try {
    await articlesStore.fetchArticles()
  } catch (error) {
    console.error('Failed to fetch articles:', error)
  }
}

const handleCreateArticle = async (articleData) => {
  try {
    await articlesStore.createArticle(articleData)
  } catch (error) {
    console.error('Failed to create article:', error)
  }
}

const handleDeleteArticle = async (id) => {
  if (confirm('Are you sure you want to delete this article?')) {
    try {
      await articlesStore.deleteArticle(id)
    } catch (error) {
      console.error('Failed to delete article:', error)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
