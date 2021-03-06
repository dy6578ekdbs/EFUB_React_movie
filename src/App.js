import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovieData = async() => {
    const {
      data : {
        data : { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

    this.setState({isLoading : false, movies});
  }

 componentDidMount() { // 렌더링 직후에 실행
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
  this.getMovieData();
    
  }

  render() {
    const { isLoading, movies} = this.state;
    return (<section className="container">{isLoading ? (
    <div>
      <span className="loader">Loading...</span>
    </div>
    )
      : (
        <div className="movies">
             {movies.map((data)=>{
         
         return(
            <Movie 
            key = {data.id}
            id = {data.id}
            title = {data.title} 
            year = {data.year}
            genres = {data.genres}
            summary = {data.summary}
            cover_img = {data.medium_cover_image}
            />
          )

        })}
        </div>
       
      
      )}</section>);
  }
}

export default App;


