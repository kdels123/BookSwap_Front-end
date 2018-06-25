import React from 'react';
import { Link } from 'react-router-dom';
import UserService from "../services/UserService";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results: this.props.location.state,
        }
    }

    renderSearchResults() {
        let data = null;
        if (this.state.results) {
            data = this.state.results.results.items.map(
                (result, i) => {
                    return (
                        <li className="list-group-item"
                            id="resultItem"
                            key={i}>
                            Title: <Link
                                to={{
                                    pathname: '/bookswap/results/book',
                                    state: {id: result.id}
                                }}>{result.volumeInfo.title}</Link>
                            <br/>
                            {/*Author: {result.volumeInfo.authors[0]}*/}
                            Rating: {result.volumeInfo.averageRating}/5
                            <br/>
                            <img src ={result.volumeInfo.imageLinks.thumbnail} />
                            <br/>
                        </li>
                    )});
        }
        return (
            data
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="list-group border-aqua" id="resultsList">
                {this.renderSearchResults()}
                </ul>
            </div>
        )
    }
}

export default Results;