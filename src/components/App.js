import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { videos: [], selected: null };

  componentDidMount() {
    this.onFormSubmit("buildings");
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selected: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selected: video });
    console.log("From App");
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
