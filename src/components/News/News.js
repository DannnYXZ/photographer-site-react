import React from 'react';
import './News.css'

function NewsItem(props) {
  return (
      <div className="news__item">
        <div className="news__meta">
          <div className="news__meta-photo"
               style={{backgroundImage: `url("${props.urlToImage || 'img/placeholder.jpg'}")`}}/>
        </div>
        <a className="news__item-link" href={props.url}>
          <div className="news__description">
            <h2 className="news__description-title">{props.title}</h2>
            <h3 className="news__description-source">{props.source.name}</h3>
            <p className="news__description-content">{props.description}</p>
            <p className="news__read-more">
            </p>
          </div>
        </a>
      </div>
  );
}

function SourceItem(props) {
  return (
      <button className="source__item" id={props.id}>{props.name}</button>
  );
}

class News extends React.Component {
  constructor(props) {
    super(props);
    this.apiKey = 'ad019e5852754e32813188236a68f40c';
    this.curPage = 0;
    this.endPage = 8;
    this.searchQuery = '';
    this.lastRequest = '';
    this.loadMore = true;
    this.state = {
      articles: [],
      sources: []
    }
  }

  componentDidMount() {
    this.loadData(`sources?`, this.processSources.bind(this));
    this.handleSearchClick();
  }

  processArticles(json) {
    const freshArticles = json.articles;
    if (freshArticles.length)
      this.curPage++;
    if (this.curPage === this.endPage || freshArticles.length < 5)
      this.loadMore = false;
    this.setState((state) => ({articles: state.articles.concat(json.articles)}));
  }

  processSources(json) {
    this.setState({sources: json['sources']});
  }

  handleFilterClick(e) {
    if (!e.target.id)
      return;
    this.state.articles = [];
    this.curPage = 0;
    this.loadMore = true;
    this.loadData(`everything?sources=${e.target.id}`, this.processArticles.bind(this));
  }

  handleSearchClick() {
    const req = this.searchQuery;
    const query = req.trim() ? `everything?q=${req}` : `top-headlines?country=us`;
    this.state.articles = [];
    this.curPage = 0;
    this.loadData(query, this.processArticles.bind(this));
  }

  handleSearchChange(e) {
    this.searchQuery = e.target.value;
  }

  handleSearchKeyUP(e) {
    if (e.keyCode === 13)
      this.handleSearchClick(e);
  }

  handleLoadMoreClick() {
    this.loadData(null, this.processArticles.bind(this));
  }

  render() {
    let news;
    if (this.state.articles.length) {
      const newItems = this.state.articles.map(a => NewsItem(a));
      news = <div className="news-container">{newItems}</div>
    } else {
      news = (
          <div className="no-data">
            <span>No items found ಠ╭╮ಠ</span>
          </div>
      );
    }
    let button = this.loadMore ?
        <button className="load-more-btn"
                onClick={(e) => this.handleLoadMoreClick(e)}>LOAD<br/>MORE
        </button>
        : null;
    const sources = this.state.sources.map(s => SourceItem(s));
    return (
        <div className="content">
          <header>
            <h1>Hot News Everyday</h1>
          </header>
          <main className="content">
            <div className="search-wrapper">
              <input type="text" name="search" placeholder="Find" className="search-edit" value={this.state.value}
                     onChange={(e) => this.handleSearchChange(e)}
                     onKeyUp={(e) => this.handleSearchKeyUP(e)}/>
              <button className="search-btn"
                      onClick={(e) => this.handleSearchClick(e)}>FIND
              </button>
            </div>
            <nav className="sources-container"
                 onClick={(e) => this.handleFilterClick(e)}>{sources}</nav>
            {news}
            {button}
          </main>
        </div>
    );
  }

  loadData(query, func) {
    if (!query) {
      query = this.lastRequest;
    } else {
      this.lastRequest = query;
    }
    const url = `https://newsapi.org/v2/${query}&pageSize=5&page=${this.curPage + 1}&apiKey=${this.apiKey}`;
    const request = new Request(url);
    fetch(request).then((response) => response.json()).then((myJson) => func(myJson));
  }
}

export default News;
