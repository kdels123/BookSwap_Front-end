import React from 'react';
import { Link } from 'react-router-dom'
import APIService from "../services/APIService";

document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class Search extends React.Component {
    constructor() {
        super();
        this.state={
            title: '',
            author: '',
            results: []
        }

        this.setTitle = this.setTitle.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
        this.setResults = this.setResults.bind(this);
        this.findResults = this.findResults.bind(this);
        this.APIService = APIService.instance;
    }

    setTitle(event) {
        if (event) {
            this.setState({title: event.target.value});
        }
    }

    setAuthor(event) {
        if (event) {
            this.setState({author: event.target.value});
        }
    }

    setResults(results) {
        this.setState({results: results})
    }

    findResults() {
        
        console.log(this);
        console.log(this.state.title);

        if (this.state.title && this.state.author) {
            this.APIService.findResultsByTitleAuthor(this.state.title, this.state.author)
                .then((results) => {this.setResults(results)})
        }
        else if(this.state.title) {
            this.APIService.findResultsByTitle(this.state.title)
                .then((results) => {this.setResults(results)})
        }
        else if(this.state.author) {
            this.APIService.findResultsByAuthor(this.state.author)
                .then((results) => {this.setResults(results)})
        }
        else {
            alert('Please insert a valid Title and/or Author');
        }
        console.log(this.state.results);
    }


    render() {
        return (
           <div className="container-fluid">
               <br/>
               <form className="form-inline" id="searchForm">
                   <div className="form-group mb-2">
                       <input
                           onChange={this.setTitle}
                           type="text"
                           className="form-control"
                           id="setPassword"
                           placeholder="Search by Title"/>
                   </div>
                   <div className="form-group mx-sm-3 mb-2">
                       <input
                           onChange={this.setAuthor}
                           type="text"
                           className="form-control"
                           id="setPassword"
                           placeholder="Search by Author"/>
                   </div>
                   <button
                       onClick={this.findResults}
                       type="button"
                       className="btn btn-primary mb-2">Search</button>
                   &nbsp;
                   &nbsp;
                   <Link
                       className="btn btn-primary mb-2"
                       to={{
                       pathname: '/bookswap/search/results',
                       state: {results: this.state.results}
                   }}>
                       See Results!
                   </Link>
               </form>
               <p id="searchSubtitle">*At Least one Field Must be Completed in order to Search</p>

               <div className="container-fluid">
               </div>
           </div>
        )
    }
}

export default Search;