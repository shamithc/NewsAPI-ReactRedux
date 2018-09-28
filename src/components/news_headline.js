import React from 'react';

export default (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="headline-card tracked loaded" styles={{ height: '600px' }}>
                <div className="body">
                    <h3>
                        <a href="">{props.article.title}</a>
                    </h3>
                </div>

                <div className="text-preview">
                    <p>{_.trim(props.article.content)}</p>
                </div>

                <div><span>Author: {props.article.author}</span></div>
                <div><span>Published At: {props.article.publishedAt}</span></div>

            </div>
        </div>
    );
}