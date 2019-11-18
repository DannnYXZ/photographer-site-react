import React from 'react';
import './Article.css'

class Article extends React.Component {
  render() {
    return (
        <section className='article'>
          <h1>{this.props.title}</h1>
          <p>
            {this.props.text}
          </p>
        </section>
    );
  }
}

export default Article;
