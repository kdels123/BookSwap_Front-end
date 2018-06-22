import React from 'react';
import { Link } from 'react-router-dom';
import APIService from "../services/APIService";
import Review from "../components/Review";

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
                    <br style={{lineHeight: 0.5}}/>
                    <h2>{bookResults.volumeInfo.title} ({bookResults.volumeInfo.averageRating}/5)</h2>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            <Link to={{pathname: '/bookswap/profile'}} className="btn btn-secondary">Own It?</Link>
                        </div>
                        <div className="btn-group mr-2" role="group" aria-label="Second group">
                            <Link  to={{pathname: '/bookswap/request'}}className="btn btn-secondary">Find It!</Link>
                        </div>
                    </div>
                    <h3>By: {bookResults.volumeInfo.authors[0]}</h3>
                    <h3>Published: {bookResults.volumeInfo.publishedDate.substring(0, 4)}</h3>
                    <div>
                    <img src ={bookResults.volumeInfo.imageLinks.thumbnail} className="float-left" style={{paddingRight: 10}}/>
                    <p id="descriptionText" className="text-left">{bookResults.volumeInfo.description}</p>
                    </div>
                </div>
            )};
        return (
    bookResults)
    }

    render() {
        return (
            <div className="container">
                <h1>{this.renderBookResults()}</h1>
                <Review bookId={this.state.id}/>
            </div>
        )
    }
}

export default ResultDetail;