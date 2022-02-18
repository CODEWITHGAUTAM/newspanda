import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9563bf8cae8740bc8a4b8f6b6f25de9e";
    let data = await fetch(url);
    let parsedData = await data.json;
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsPanda-Top HeadLines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col md-4">
          <NewsItem key={element.newsurl} title={element.title} description={element.description} imageurl={element.imageurl}/>
        </div>
       
          
        })}
          
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" class="btn btn-dark">
            &larr;Prev
          </button>
          <button type="button" class="btn btn-dark">
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
