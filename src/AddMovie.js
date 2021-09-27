import React, { Component } from "react";

class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state = {show : false};
    }
    handleShow = () => {
        this.setState({show : !this.state.show});
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.handleShow}>{this.state.show ? 'Close' : 'Add Movie'}</button>
                
                {this.state.show ? (
                    <div>
                <h1>Add new movie</h1>
                <div>
                    <label className='input'>Title:</label>
                    <input type='text' name='title' onChange={this.handleChange}/>
                </div>
                <div>
                    <label className='input'>Description:</label>
                    <input type='text' name='description' onChange={this.handleChange}/>
                </div>
                <div>
                    <label className='input'>Poster URL:</label>
                    <input type='text' name='poster' onChange={this.handleChange}/>
                </div>
                <div>
                    <label className='input'>Rating:</label>
                    <input type='text' name='rating' onChange={this.handleChange}/>
                </div>
                <button>Add</button> 
                </div>) : (<h6>Click on the button to add new movie</h6>)
            }

            </div>
        )
    }
}
export default AddMovie;