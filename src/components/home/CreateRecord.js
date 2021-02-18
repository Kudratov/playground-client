import React from 'react';
import axios from 'axios';

class CreateRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            name: '',
            hobby: '',
            age: undefined,
            gender: '',
            location: ''
        };
        // this.handleName = this.handleName.bind(this)
        // this.handleHobby = this.handleHobby.bind(this)
        // this.handleLocation = this.handleLocation.bind(this)
        // this.handleGender = this.handleGender.bind(this)
        // this.handleAge = this.handleAge.bind(this)
      }

    handleName(event) {
        const name = event.target.value;
        this.setState({name});
    }

    handleHobby(event) {
        const hobby = event.target.value;
        this.setState({hobby});
    }

    handleLocation(event) {
        const location = event.target.value;
        this.setState({location});
    }

    handleGender(event) {
        const gender = event.target.value;
        this.setState({gender});
    }

    handleAge(event) {
        const age = event.target.value;
        this.setState({age: parseInt(age)});
    }

    handleCreate(event) {
        console.log(this.props);
        document.getElementById("btn-target").disabled = true;        
        axios({
            method: 'post',
            url: 'https://playgrounds-server-uz.herokuapp.com/tables-playground',
            data: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json' }
            })
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch((response) => {
                document.getElementById("btn-target").disabled = true;
            });        
    }

    render() {

        return(
            <div className="container">
                <div className="row pt-4 pb-4">
                    <h2>Create Data from API</h2>
                </div>
                
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" onChange={this.handleName.bind(this)} className="form-control" id="inputEmail4" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Hobby</label>
                            <input type="text" onChange={this.handleHobby.bind(this)} className="form-control" id="inputEmail4" placeholder="Hobby" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputState">Location</label>
                            <input type="text" onChange={this.handleLocation.bind(this)} className="form-control" id="inputCity" placeholder="Location"/>
                        </div>                    
                        <div className="form-group col-md-4">
                            <label for="inputState">Gender</label>
                            <input type="text" onChange={this.handleGender.bind(this)} className="form-control" id="inputCity" placeholder="Gender"/>
                        </div>                        
                        <div className="form-group col-md-2">
                            <label for="inputState">Age</label>
                            <input type="text" onChange={this.handleAge.bind(this)} className="form-control" id="inputCity" placeholder="Age"/>
                        </div>
                    </div>
                    <button id="btn-target" onClick={this.handleCreate.bind(this)} class="btn btn-primary text-white">Create</button>
                </div>
                         
            </div>
        )
    }
}

export default CreateRecord;