import React, { Component } from 'react'
import NewsItem from './NewsItem';
// import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false
    }
  }

  notFoundUrl = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  sourceUrl = this.props.sourceUrl;

  async updateNews(page) {
    this.setState({
      loading: true,
    });
    let topHeadLinesUrl = this.sourceUrl + page;
    let headlines = await fetch(topHeadLinesUrl);
    let parsedData = await headlines.json();
    if (parsedData["status"] === "error") {
      this.setState({ loading: false })
      return;
    };
    this.setState({
      page: page,
      articles: parsedData.articles,
      loading: false
    });
  }

  isLastPage = () => {
    return (this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize);
  }

  async componentDidMount() {
    let topHeadLinesUrl = this.sourceUrl + this.state.page;
    this.setState({
      loading: true,
    });
    let headlines = await fetch(topHeadLinesUrl);
    let parsedData = await headlines.json();
    if (parsedData["status"] === "error") {
      this.setState({ loading: false })
      return;
    };
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  render() {
    return (

      <div className="container my-4">
        {!this.state.loading && <h1 className='text-dark text-center'>Found {this.state.totalResults} results for your search</h1>}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.updateNews(this.state.page + 1)}
          hasMore={this.isLastPage}
          loader={<div className="loader"></div>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }> */}
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          <div className="row mx-2">
            {this.state.articles && this.state.articles.map((article) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsItem title={article.title} description={article.description !== null ? article.description : article.title} imageUrl={(article.urlToImage && article.urlToImage !== null) ? article.urlToImage : this.notFoundUrl} url={article.url} author={article.author ? article.author : "unknown"} date={article.publishedAt} source={article.source.name} />
                </div>
              )
            })}
          </div>
        {/* </InfiniteScroll> */}
      </div>
    )
  }
}

export default News;
