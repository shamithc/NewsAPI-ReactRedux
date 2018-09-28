import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsHeadLine from '../components/news_headline';

class NewsHeadLines extends Component {

    render() {
        if (!this.props.articles) {
            return <div>Please Search a term!</div>;
        }


        if (this.props.totalResults === 0) {
            return <div>No Results found!</div>;
        }

        return (
            <div className="container">
                <div className="row">
                    { this.props.articles.map(article => <NewsHeadLine article={article} key={article.publishedAt} />) }
                </div>
            </div>

        );
    }
}

function mapStateToProps({ news }) {
    return {
        articles: news.articles,
        totalResults: news.totalResults
    };
}

export default connect(mapStateToProps)(NewsHeadLines);