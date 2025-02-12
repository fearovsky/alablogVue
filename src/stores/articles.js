import { defineStore } from 'pinia'
import { articlesApi } from '@/api/articles'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
    currentArticle: null,
    loading: false,
    error: null,
  }),

  getters: {
    getArticles: (state) => state.articles,
    getArticleById: (state) => (id) => state.articles.find((article) => article.id === id),
  },

  actions: {
    async fetchArticles() {
      this.loading = true
      try {
        const { data } = await articlesApi.getAll()
        this.articles = data
        return data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async createArticle(articleData) {
      this.loading = true
      try {
        const { data } = await articlesApi.create(articleData)
        this.articles.push(data)
        return data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateArticle(id, articleData) {
      this.loading = true
      try {
        const { data } = await articlesApi.update(id, articleData)
        const index = this.articles.findIndex((article) => article.id === id)
        if (index !== -1) {
          this.articles[index] = data
        }
        return data
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteArticle(id) {
      try {
        await articlesApi.delete(id)
        this.articles = this.articles.filter((article) => article.id !== id)
      } catch (error) {
        this.error = error.message
        throw error
      }
    },
  },
})
