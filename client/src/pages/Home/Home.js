import React, { Component } from "react";
import Card from "../../components/Card"
import Search from "../../components/Search"
import Article from "../../components/Article"
import API from "../../utils/API"

class Home extends Component {
  state = {
    articles: [],
    topic: "",
    endYear: "",
    startYear: ""
  }

  getNewsArticles = () => {
    API.getNewsArticles({
      topic: this.state.topic,
      endYear: this.state.endYear,
      startYear: this.state.startYear
    }).then(res => {
      this.setState({
        topic: "",
        endYear: "",
        startYear: "",
        articles: res.data.response.docs
      })
    })
      .catch(err => console.log(err))
  }

  onInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveArticle = e => {
    const savArt = JSON.parse(e.target.dataset.article)
    API.saveArticle(savArt).then(res => {
      alert(`Article '${res.data.title}' Saved`)
    })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Card head="Search">
          <Search
            topic={this.state.topic}
            endYear={this.state.endYear}
            startYear={this.state.startYear}
            onInput={this.onInputChange}
            onClick={this.getNewsArticles} />
        </Card>

        <Card head="Articles">
          {this.state.articles.length !== 0 ? this.state.articles.map(article => (
            <Article
              key={article.web_url}
              title={article.headline.main}
              href={article.web_url}
              data={JSON.stringify(article)}
              BtnType="save"
              BtnName="Save"
              BtnClick={this.saveArticle}
            />
          )) : <h2 className="text-center"> No Articles Found </h2>}

        </Card>
      </div>
    )
  }
}

export default Home