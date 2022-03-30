import React from "react";

class SearchBar extends React.Component {
  state = { searchq: "" };
  onInputChange = (e) => {
    this.setState({ searchq: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchq);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">Search Videos</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search videos"
            value={this.state.searchq}
            onChange={(e) => this.setState({ searchq: e.target.value })}
          />
        </div>
        <p>Input is: {this.state.searchq}</p>
      </form>
    );
  }
}

export default SearchBar;
