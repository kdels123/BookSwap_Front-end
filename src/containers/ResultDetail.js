import React from 'react';
import { Link } from 'react-router-dom';
import APIService from "../services/APIService";
import UserService from '../services/UserService';
import Review from "../components/Review";
import AdminReview from "../components/AdminReview";

class ResultDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bookId: this.props.location.state.id,
            bookResults: '',
            userType: '',
            userId: ''
        }
        this.APIService = APIService.instance;
        this.userService = UserService.instance;

    }

    componentDidMount() {
        this.APIService.findBookByID(this.state.bookId).then((bookResults) => {this.setBookResults(bookResults)})
        this.userService.review().then((user) => {this.setUser(user)});
    }

    setBookResults(bookResults) {
        this.setState({bookResults: bookResults})
        this.setState(this.state)
    }

    setUser(user) {
        this.setState({
            userType: user.type,
            userId: user.id
        });
    }

    renderBookResults() {
        let bookResults = null;
        if (this.state.bookResults) {
            bookResults = this.state.bookResults
            return (
                <div className={"container-fluid"}>
                    <br style={{lineHeight: 0.5}}/>
                    <h2>{bookResults.volumeInfo.title} ({bookResults.volumeInfo.averageRating}/5)</h2>
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

    renderReviews() {
        let bookResults = null;
        if (this.state.bookResults && this.state.userType === 'admin') {
            bookResults = this.state.bookResults
            return (
            <AdminReview
                bookId={this.state.bookResults.id}
                bookTitle={this.state.bookResults.volumeInfo.title}
                bookAuthor={this.state.bookResults.volumeInfo.authors[0]}/>
            )}
        else if (this.state.bookResults) {
            bookResults = this.state.bookResults
            return (
                <Review
                    bookId={this.state.bookResults.id}
                    bookTitle={this.state.bookResults.volumeInfo.title}
                    bookAuthor={this.state.bookResults.volumeInfo.authors[0]}
                />
            )};
        return (
            bookResults)
    }

    render() {
        return (
            <div className="container">
                <h1>{this.renderBookResults()}</h1>
                {this.renderReviews()}
            </div>
        )
    }
}

export default ResultDetail;