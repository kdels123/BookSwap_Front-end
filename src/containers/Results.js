import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results: this.props.location.state
        }
    }

    componentDidMount() {
        console.log(this.state.results);
        console.log(this.state.results.results.items);
        // this.setResults(this.props.location.state);
        // this.renderSearchResults();
    }

    renderSearchResults() {
        let data = null;
        if (this.state.results) {
            data = this.state.results.results.items.map(
                (result, i) => {
                    return (
                        <li>
                            <span key={i}>{result.volumeInfo.title}, {result.volumeInfo.authors}</span>
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