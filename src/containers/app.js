import React from 'react';
const BOOK_API_TITLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=&BOOKTITLE&&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter+inauthor:rowling&key=AIzaSyDTJ0K6Dc69o38GsHeSkU7O0XBIXYZ2FYQ'
document.body.style.backgroundColor = "lightgrey"
// document.body.style.backgroundImage = "url('https://www.cambridgema.gov/~/media/Images/Traffic/residentpermitphotocontest/2017/Library_Kathleen_Delsener.jpg?mw=450&mh=334')"

class App extends React.Component {
    constructor() {
        super();
        this.state={
            title: '',
            data: []
        }
    }

    // componentDidMount() {
    //     fetch(BOOK_API_URL)
    //         .then(response => response.json())
    //         .then((findResponse)=>{
    //             console.log(findResponse.items)
    //             this.setState({
    //                 data: findResponse.items
    //             })
    //         })
    // }

    render() {
        return (
           <div>
               <div>
                    <button>Login</button>
                     <button>Register</button>
               </div>
               <h1 id="appTitle">BookSwap</h1>
               <form id="appSearch"className="form-inline">
                   <div className="form-group mx-sm-3 mb-2">
                       <label htmlFor="inputPassword2" className="sr-only">Password</label>
                       <input type="text" className="form-control" id="inputPassword2" placeholder="Search by Book Title"/>
                   </div>
                   <button type="submit" className="btn btn-primary mb-2">Search</button>
               </form>
               {/*<div className="container-fluid">*/}
                   {/*{this.state.data.map((dynamicData, key) =>*/}
                       {/*<div key={key}>*/}
                           {/*{dynamicData.volumeInfo.title}*/}
                       {/*</div>*/}
                   {/*)}*/}
               {/*</div>*/}
           </div>
        )
    }
}

export default App;