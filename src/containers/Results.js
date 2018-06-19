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
                        <li>
                            <Link
                                // className="btn btn-primary mb-2"
                                to={{
                                    pathname: '/bookswap/results/book',
                                    state: {id: result.id}
                                }}>{result.volumeInfo.title}, {result.volumeInfo.authors}</Link>
                            <br/>
                            <br/>
                            <img src ={result.volumeInfo.imageLinks.thumbnail} />
                            <br/>
                            <br/>
                            <span>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm">
                                    Own It?
                                    </button>
                                &nbsp;
                                &nbsp;
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm">
                                    Find It!
                                    </button>
                         </span>
                            <br/>
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
                <h1>Results!</h1>
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default Results;