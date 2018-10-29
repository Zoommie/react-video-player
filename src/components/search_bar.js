import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {term: ''};
    }

 render() {
    return( 
    <div className="search-bar">
        <h2>SEARCH VIDEOS</h2>
        <input value={this.state.term} placeholder="what would you like to watch"
        onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
}

onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
}

}

export default SearchBar;

