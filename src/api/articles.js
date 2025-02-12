import api from './axios'

export const articlesApi = {
  getAll() {
    return api.get('/blog/articles')
  },

  getOne(id) {
    return api.get(`/blog/articles/${id}`)
  },

  create(data) {
    return api.post('/blog/articles', data)
  },

  update(id, data) {
    return api.put(`/blog/articles/${id}`, data)
  },

  delete(id) {
    return api.delete(`/blog/articles/${id}`)
  },
}
