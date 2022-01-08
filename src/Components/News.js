import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
 
    constructor(props){
        super(props);
        this.state={
            articles:[] ,
            loading:false ,
            page:1
        }
        document.title= `${this.props.category}-NewsWorld`
    }
  static propTypes = {};
async componentDidMount(){
let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e6b49efc94dd451da33675004ee91cd1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
this.setState({loading:true});
let data= await fetch(url);
let parsedData= await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles,Totalresult:parsedData.Totalresult,loading:false})

}
handleNextclick = async () => {
  if(!(this.state.page + 1 > Math.ceil(this.state.Totalresult/this.props.pageSize))){
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e6b49efc94dd451da33675004ee91cd1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
  this.setState({loading:true})
  let data= await fetch(url);
  let parsedData= await data.json()
  console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })
  }
}
handlePrevclick = async () => {
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e6b49efc94dd451da33675004ee91cd1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
  let data= await fetch(url);
  this.setState({loading:true})
  let parsedData= await data.json()
  console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-light"style={{fontFamily: 'Luxurious Roman'}}>NewsWorld - Top Headlines On {this.props.category}</h1>
         {this.state.loading && <Spinner/>}
        <div className="row my-3 ">
            { !this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-3" key={element.url}> 
                <Newsitem title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,90):""} Imageurl={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} newsUrl={element.url} time={element.publishedAt} source={element.source.name}/>
              </div>
            })}
        </div>
        <div className="div d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevclick}> &larr; Previos</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.Totalresult/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
