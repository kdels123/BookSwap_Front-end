import React from 'react';
import { Link } from 'react-router-dom'
import APIService from "../services/APIService";
import SearchResult from '../components/SearchResult'


document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class App extends React.Component {
    constructor() {
        super();
        this.state={
            title: '',
            results: []
        }

        this.setTitle = this.setTitle.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.setResults = this.setResults.bind(this);
        this.findResults = this.findResults.bind(this);
        this.APIService = APIService.instance;
    }

    setTitle(event) {
        if (event) {
            this.setState({title: event.target.value});
        }
    }

    setResults(results) {
        this.setState({results: results})
    }

    findResults() {

        insertTile();

        console.log(this);
        if(this.state) {
            this.APIService.findAllResults()
                .then((results) => {this.setResults(results)})
        }
        console.log(this.state.results);
    }

    renderSearchResults() {
        let data = null;
        if (this.state.results) {
            data = this.state.results.items.map(
                (result, i) => {
                    return (
                        <SearchResult key={i} title={result.volumeInfo.title}/>
                    )});
        }
        return (
            data
        )
    }

    // renderResults() {
    //     let data = null;
    //     if (this.state.results) {
    //         data = this.state.results.items.map(
    //             (result, i) => {
    //                 return (
    //                     <div key={i}>{result.volumeInfo.title}</div>)
    //             });
    //     }
    //     return (
    //         alert(data)
    //     )
    // }

    render() {
        return (
           <div className="container-fluid">
               <div id="appLoginRegister">
                   <Link to={'/bookswap/login'}>
                       Login
                   </Link>
                   &nbsp;
                   &nbsp;
                   <Link to={'/bookswap/register'}>
                       Register
                   </Link>
               </div>
                   <i className="fa fa-book fa-3x" id="appIcon"></i>
                   <h1 id="appTitle">BookSwap</h1>
               <form id="appSearch"className="form-inline">
                   <div className="form-group mx-sm-3 mb-2">
                       <input
                           onChange={this.setTitle}
                           type="text"
                           className="form-control"
                           id="setPassword"
                           placeholder="Search by Book Title"/>
                   </div>
                   <button
                       onClick={this.findResults}
                       type="button"
                       className="btn btn-primary mb-2">Search</button>
                   &nbsp;
                   &nbsp;
                   <Link to={{
                       pathname: '/bookswap/search/results',
                       state: {results: this.state.results}
                   }}>
                       See Results!
                   </Link>

                   &nbsp;
                   &nbsp;
               </form>
               <div className="container-fluid">
                   {/*{this.renderResults}*/}
                   {/*{this.state.data.map((dynamicData, key) =>*/}
                       {/*<div key={key}>*/}
                           {/*{dynamicData.volumeInfo.title}*/}
                       {/*</div>*/}
                   {/*)}*/}
               </div>
           </div>
        )
    }
}

export default App;