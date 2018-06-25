import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results: this.props.location.state
        }
    }

    renderSearchResults() {
        let data = null;
        if (this.state.results) {
            data = this.state.results.results.items.map(
                (result, i) => {
                    return (
                        <li className="list-group-item"
                            key={i}>
                            Title: <Link
                                to={{
                                    pathname: '/bookswap/results/book',
                                    state: {id: result.id}
                                }}>{result.volumeInfo.title}</Link>
                            <br/>
                            Author: {result.volumeInfo.authors[0]}
                            <br/>
                            Rating: {result.volumeInfo.averageRating}/5
                            <br/>
                            <img src ={result.volumeInfo.imageLinks.thumbnail} />
                            <br/>
                            <br/>
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                          <Link to={{pathname: '/bookswap/profile'}}
                                                 className="btn btn-secondary btn-sm">Own It?</Link>
                                    </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                                        <Link to={{pathname: '/bookswap/request'}}className="btn btn-secondary btn-sm">Find It!</Link>
                                    </div>
                                </div>
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
                <ul className="list-group list-group-flush">
                {this.renderSearchResults()}
                </ul>
            </div>
        )
    }
}

export default Results;