import React from 'react';


class App extends React.Component {
    constructor() {
        super();
        this.state={
            data: []
        }
    }

    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:' +
            'rowling&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ')
            .then(response => response.json())
            .then((findResponse)=>{
                console.log(findResponse.items)
                this.setState({
                    data: findResponse.items
                })
        })
    }




    render() {
        return (
           <div className="container-fluid">
               {this.state.data.map((dynamicData, key) =>
                   <div key={key}>
                       {dynamicData.volumeInfo.title}
                   </div>
               )}
           </div>
        )
    }
}

export default App;