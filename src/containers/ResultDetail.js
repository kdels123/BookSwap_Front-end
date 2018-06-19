import React from 'react';
import { Link } from 'react-router-dom';
import APIService from "../services/APIService";

class ResultDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.location.state.id,
            bookResults: ''
        }
        this.APIService = APIService.instance;

    }

    componentDidMount() {
        this.APIService.findBookByID(this.state.id).then((bookResults) => {this.setBookResults(bookResults)})
    }

    setBookResults(bookResults) {
        this.setState({bookResults: bookResults})
        this.setState(this.state)
        console.log(this.state.bookResults);
    }

    renderBookResults() {
        let bookResults = null;
        if (this.state.bookResults) {
            bookResults = this.state.bookResults
            return (
                <div className={"container-fluid"}>
                    <h1>{bookResults.volumeInfo.title}</h1>
                    <h2>By: {bookResults.volumeInfo.authors[0]}</h2>
                    <img src ={bookResults.volumeInfo.imageLinks.small} />
                    <p>{bookResults.volumeInfo.description}</p>
                    <br/>
                    <br/>
                </div>
            )};
        return (
    bookResults)
    }

    render() {
        return (
            <div className="container-fluid">
                <div id="appLoginRegister">
                    <Link to={'/bookswap/search'}>
                        Home
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to={'/bookswap/search'}>
                        Search
                    </Link>
                </div>
                <h1>{this.renderBookResults()}</h1>
            </div>
        )
    }
}

export default ResultDetail;