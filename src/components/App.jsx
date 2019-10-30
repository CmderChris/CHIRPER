import React from "react";
import Header from "./Header";
import ChirpCard from "./ChirpCard";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            text: '',
            chirps: [`Hello there.`, `Pizza time!`, `I don't like sand.`]
        };
    }

    addItem() {
        // this.setState({
        //     text: '',
        //     chirps: [this.state.text, ...this.state.chirps]
        // });
        let chirps = [...this.state.chirps];
        chirps.unshift(this.state.text);
        this.setState({
            chirps,
            text: ''
        })
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    // handleButtonSubmit(e) {
    //     //prevents refresh
    //     e.preventDefault();
    //     //log input value
    //     console.log('Button has been clicked!', this.state.text)
    //     //clear input
    //     this.setState({
    //         text: ''
    //     });
    // }

    render() {
        return (
            <>
            <Header />
            <div className="row justify-content-around mt-1">
                <div className="card mt-3 shadow">
                    <div className="card-body text-center">
                        <input value={this.state.text} onChange={e => this.handleTextChange(e)} type="text" className="form-control" placeholder="Type your chirp!"/>
                        <button onClick={(e) => this.addItem(e)} href="#" className="btn btn-primary mt-3">Add Chirp</button>
                    </div>
                </div>
            </div>
            {this.state.chirps.map((chirp) => {
                return (
                    <ChirpCard key={chirp} chirp={chirp} />
                );
            })}
            </>
        )
    }
};

export default App;