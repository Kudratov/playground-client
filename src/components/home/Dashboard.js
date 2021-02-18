import React from 'react';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import axios from 'axios';

import {insertData} from './../../actions/insertData';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: undefined};
        this.handleAddRecord = this.handleAddRecord.bind(this)
      }

    componentDidMount() {
        const uData = axios.get('https://playgrounds-server-uz.herokuapp.com/tables-playground');
        uData.then(res => {
            this.props.dispatch(insertData(res.data.persons));
            this.setState({data: res.data.persons})
        });
    };

    handleAddRecord() {
        this.props.history.push('/create');
    }

    render() {

        return(
            <div className="container">
                <div className="row pt-4 pb-4">
                    <h2>Data from API</h2>
                </div>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Hobby</th>
                        <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.data && this.state.data.map((element, i) => {
                            return (
                                <>

                                    <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{element.name}</td>
                                    <td>{element.age}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.hobby}</td>
                                    <td>{element.location}</td>
                                    </tr>

                                </>
                                )
                        })}

                        <tr>
                        <th scope="row"></th>
                        <td colspan="2"></td>
                        <td></td>
                        <td></td>
                        <td><button type="button" onClick={this.handleAddRecord} class="btn btn-light">Add a record</button></td>
                        </tr>

                    </tbody>
                    </table>            
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.playground
    }
}

export default connect(mapStateToProps)(Dashboard);