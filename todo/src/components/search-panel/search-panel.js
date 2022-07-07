import React, { Component } from 'react'

import "./search-panel.css"

export default class SearchPanel extends Component{

  state = {
    term: ''
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    const { onSearchChange } = this.props;
    onSearchChange(term);
  };
  render() {

    return (
      <div>
        <input type="text"
               placeholder = 'search'
               className="search-panel search-input"
               value={this.state.term}
               onChange={this.onSearchChange}/>
      </div>
    );
  }
}