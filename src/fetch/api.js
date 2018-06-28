import async from './fetch'

const apiUrl = '/api/v1'

export default {
  getArticle(id) {
    return async (apiUrl + '/get/article/' + id).then(data => data.data)
  },
  submitArticle(data) {
    return async (apiUrl + '/post/article/', data, "post").then(data => {
      return data
    })
  }
}
