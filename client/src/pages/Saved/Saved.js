import React, { Component } from "react";
import Card from "../../components/Card"
import Article from "../../components/Article"
import API from "../../utils/API.js"


class Saved extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    API.getSaveArticles().then(res => {
      this.setState({
        articles: res.data
      })
    })
  }

  removeArticle = e => {
    const remArt = e.target.getAttribute("data-article")
    API.deleteArticle(remArt).then(res => {
      alert("Article Removed")
      this.componentDidMount()
    })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="container">
        <Card head="Saved Articles" >
          {this.state.articles.length !== 0 ? this.state.articles.map(article => (
            <Article
              key={article._id}
              title={article.title}
              href={article.href}
              data={article._id}
              BtnType="remove"
              BtnName="Delete"
              BtnClick={this.removeArticle}
            />
          )) : <h2 className="text-center"> No Saved Articles Found </h2>}
        </Card>
      </div>
    )
  }
}

export default Saved