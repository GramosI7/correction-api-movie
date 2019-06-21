import React from "react";
import "./App.css";
import axios from "axios";

import Movie from "./Movie";
import ListMovie from "./ListMovie";

const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/discover/movie?language=fr-&sort_by=popularity.desc&include_adult=false&append_to_reponse=images";
const API_KEY = "api_key=6942b7dc7c0044fc880daa8d4c8dd112";
// const SEARCH_URL = "search/movie?language=fr&include_adult=false";

class App extends React.Component {
  state = {
    movie: "",
    listMovie: [],
    idVideo: ""
  };

  componentDidMount = () => {
    axios
      .get(`${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(response => {
        // console.log(response.data.results);
        this.setState(
          {
            movie: response.data.results[0],
            listMovie: response.data.results.slice(1, 6)
          },
          () => this.videoMovie()
        );
      })
      .catch(error => console.log(error));
  };

  videoMovie = () => {
    axios
      .get(
        `http://api.themoviedb.org/3/movie/${
          this.state.movie.id
        }/videos?${API_KEY}`
      )
      .then(response => {
        this.setState({ idVideo: response.data.results[0].key });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div className="container-movie">
          <Movie
            propsIdVideo={this.state.idVideo}
            propsMovie={this.state.movie}
          />
        </div>
        <div className="container-listMovie">
          <ListMovie />
        </div>
      </div>
    );
  }
}

export default App;
