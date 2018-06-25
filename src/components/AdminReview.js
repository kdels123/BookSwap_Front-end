import React from 'react';
import ReviewService from "../services/ReviewService";
import UserService from "../services/UserService";
import BookService from "../services/BookService";
import { Link } from 'react-router-dom'

class AdminReview extends React.Component {
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
            reviews: []
        };
        this.reviewService = ReviewService.instance;
        this.userService = UserService.instance;
        this.bookService = BookService.instance;
    }

    componentDidMount() {
        this.addBook();
    }

    findAllReviewsForBook() {
        this.reviewService.findAllReviewsForBook(this.state.book.id)
            .then((reviews) => {this.setState({reviews: reviews})});
    }

    addBook() {
        this.bookService.addBook(this.state.bookId, this.state.bookTitle, this.state.bookAuthor)
            .then((book) => {this.setState({book: book})}).then(() => this.findAllReviewsForBook(this.state.book.id));
    }

    deleteReview(reviewId) {
        this.reviewService.deleteReview(reviewId).then(() => this.findAllReviewsForBook(this.state.book.id));
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
                            <span>
                            <button
                                onClick={() => this.deleteReview(result.id)}
                                type="button"
                                className="btn btn-danger float-right">Delete</button>
                            </span>
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
                <h3>Reviews</h3>
                <ul className="list-group">
                {this.renderReviews()}
                </ul>
            </div>

        )
    }

}
export default AdminReview;