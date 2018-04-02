import axios from "axios"

export default {

  getNewsArticles: data => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    return axios(url, {
      params: {
        "api-key": "2f4402d1471c401b94141b06baba1db1",
        "q": data.topic,
        "begin_date": data.startYear,
        "end_date": data.endYear
      }
    })
  },

  getSaveArticles: () => {
    return axios.get("/api/articles")
  },

  saveArticle: data => {
    return axios.post("/api/articles")
  },

  deleteArticle: data => {
    return axios.delete("/api/articles")
  }
}