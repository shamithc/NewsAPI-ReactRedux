import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state ={ term: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState( {term: event.target.value} );
    }

    handleFormSubmit(event){
        event.preventDefault();
        this.props.fetchNews(this.state.term);
    }

    render() {
       return (
        <div className="mt-5">
            <form onSubmit={this.handleFormSubmit} className="input-group">
                <input value={ this.state.term } onChange={this.handleInputChange}  className="form-control" />
                <span  className="input-group-btn">
                    <button type="submit"  className="btn btn-secondary" >Submit</button>
                </span>
            </form>
        </div>
       );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchNews: fetchNews}, dispatch);
}

// export default SearchBox;

export default connect(null, mapDispatchToProps)(SearchBox);