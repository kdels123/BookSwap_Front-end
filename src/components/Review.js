import React from 'react';
import ReviewService from "../services/ReviewService";
import UserService from "../services/UserService";

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            bookId: this.props.bookId,
            date: '',
            userId: '',
            reviews: []
        };
        this.setTitle = this.setTitle.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.reviewService = ReviewService.instance;
        this.userService = UserService.instance;
    }

    componentDidMount() {
        this.findAllReviewsForBook();
        // this.userService.profile().then((user) => {this.setUser(user)});
        console.log(this.state.bookId);

    }

    findAllReviewsForBook() {
        this.reviewService.findAllReviewsForBook(this.state.bookId)
            .then((reviews) => {this.setReviews(reviews)});
    }

    setReviews(reviews) {
        this.setState({reviews: reviews});
    }

    setUser(user) {
        this.setState({
            userId: user.id
        });
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
        this.reviewService.createReview(this.state);
    }


    renderReviews() {
        let data = null;
        if (this.state.reviews) {
            data = this.state.reviews.map(
                (result, i) => {
                    return (
                        <li className="list-group-item">
                           <p>{result.title}, {i}</p>
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
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Review Title"/>
                        <label htmlFor="exampleFormControlInput1">Review</label>
                        <div className="form-group">
                    <textarea
                        onChange={this.setDescription}
                        placeholder="Write Review Here"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"> </textarea>
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