import React from 'react';
import ReviewService from "../services/ReviewService";
import UserService from "../services/UserService";
import BookService from "../services/BookService";
import { Link } from 'react-router-dom'

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookId: this.props.bookId,
            bookTitle: this.props.bookTitle,
            bookAuthor: this.props.bookAuthor,
            book: '',
            title: '',
            description: '',
            date: new Date(),
            userId: '',
            username: '',
            reviews: []
        };
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.createReview = this.createReview.bind(this);
        this.reviewService = ReviewService.instance;
        this.userService = UserService.instance;
        this.bookService = BookService.instance;
    }

    setUser(user) {
        this.setState({
            userId: user.id,
            username: user.username
        });
    }

    componentDidMount() {
        this.addBook();
        this.userService.review().then((user) => {this.setUser(user)});
    }

    findAllReviewsForBook() {
        this.reviewService.findAllReviewsForBook(this.state.book.id)
            .then((reviews) => {this.setState({reviews: reviews})});
    }

    addBook() {
        this.bookService.addBook(this.state.bookId, this.state.bookTitle, this.state.bookAuthor)
            .then((book) => {this.setState({book: book})}).then(() => this.findAllReviewsForBook(this.state.book.id));
    }


    setTitle(event) {
        this.setState({title: event.target.value});
        console.log(this.state.title)
    }

    setDescription(event) {
        this.setState({description: event.target.value});
        console.log(this.state.description)
    }

    createReview() {
        if (this.state.userId) {
            const month = this.state.date.getMonth() + 1;
            const date = month + '/' + this.state.date.getDate() + '/' + this.state.date.getFullYear()
            this.reviewService.createReview(
                this.state.title, this.state.description, date, this.state.username, this.state.book.id, this.state.userId)
                .then(this.findAllReviewsForBook(this.state.book.id));
        } else {
            alert('Must be logged in to write review')
        }
    }

    renderReviews() {
        let data = null;
        if (this.state.reviews) {
            data = this.state.reviews.map(
                (result, i) => {
                    return (
                        <li className="list-group-item">
                            <p className="float-right">{result.date}</p>
                           <p>Review Title: {result.title}, By:
                               <Link
                                   to={{pathname: '/bookswap/user/'+ result.userId + '/profile',
                                       state: { userId: result.userId}
                                   }}>{result.username}</Link>
                               </p>
                            <p>Review Description: {result.description}</p>
                        </li>
                    )});
        }
        return (
            data
        )
    }

    render() {
        return (
            <div>
                <h3>Write a Review</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input
                            onChange={this.setTitle}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Review Title"/>
                        <label htmlFor="exampleFormControlInput1">Review</label>
                        <div className="form-group">
                    <textarea
                        onChange={this.setDescription}
                        type="text"
                        placeholder="Write Review Here"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3">
                    </textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={this.createReview}
                            type="button"
                            className="btn btn-primary btn-block">Add Review
                        </button>
                    </div>
                </form>
                <h3>Reviews</h3>
                {this.renderReviews()}
            </div>
        )
    }
    
}
export default Review;