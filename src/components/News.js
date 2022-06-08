import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false
    }
  }

  notFoundUrl = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  topHeadLinesRootUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5a9735cd7db472d8530cf37592545d6&pageSize=12&page=";

  handlePrevClick = async () => {
    let page = this.state.page;
    if (page === 1) return;
    this.setState({
      loading: true
    })
    let topHeadLinesUrl = this.topHeadLinesRootUrl + page;
    let headlines = await fetch(topHeadLinesUrl);
    let parsedData = await headlines.json();
    this.setState({
      page: page,
      articles: parsedData.articles,
      loading: false
    });
  }
  isLastPage = () => {
    return (this.state.page + 1) > Math.ceil(this.state.totalResults / 12);
  }

  handleNextClick = async () => {
    let page = this.state.page + 1;
    if (this.isLastPage()) return;
    this.setState({
      loading: true
    })
    let topHeadLinesUrl = this.topHeadLinesRootUrl + page;
    let headlines = await fetch(topHeadLinesUrl);
    let parsedData = await headlines.json();
    this.setState({
      page: page,
      articles: parsedData.articles,
      loading: false
    });
  }

  async componentDidMount() {
    let topHeadLinesUrl = this.topHeadLinesRootUrl + this.state.page;
    let headlines = await fetch(topHeadLinesUrl);
    let parsedData = await headlines.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: true
    });
  }

  render() {
    let loader;
    if (this.state.loading) {
      console.log('loading enabled')
      loader = <div className="lds-facebook"><div></div><div></div><div></div></div>
    }
    return (
      <div className="container my-4">
        <div className="row mx-2">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem title={article.title} description={article.description !== null ? article.description : article.title} imageUrl={article.urlToImage !== null ? article.urlToImage : this.notFoundUrl} url={article.url} />
              </div>
            )
          })}
        </div>
        {loader}
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary bg-dark" disabled={this.state.page === 1} onClick={this.handlePrevClick}>&larr; Prev</button>
          <button className="btn btn-primary bg-dark" disabled={this.isLastPage()} onClick={this.handleNextClick}>Next &rarr;</button>
        </ div>

      </div>
    )
  }
}

export default News;
