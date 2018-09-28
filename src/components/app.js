import React, { Component } from 'react';
import SearchBox from '../containers/search_box';
import NewsHeadlines from '../containers/news_headlines';

export default class App extends Component {
  render() {
    return (
      <div>
        <br /><br />
        <SearchBox /><br /><br />
        <NewsHeadlines />
      </div>
    );
  }
}
