import React, { Component } from 'react'

export default class AddUser extends Component {
    activeForm=()=>{
        if(this.props.statusForm){
            return(
                <div className="col">
                    <div className="card text-left">
                        <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Add new user</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="User name" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Telephone number" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select custom-select-lg mb-3">
                                        <option value="Normal User">Normal User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="btn btn-block btn-primary" onClick={(name, tel, permission)=>this.props.propsAdd(this.state.name, this.state.tel, this.state.permission)}>Insert</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            tel:'',
            permission:''
        }
    }
    
    isChange =(event) => {
        const dataName = event.target.name
        const dataValue = event.target.value
        // console.log(dataName)
        // console.log(dataValue)
        this.setState({
            [dataName]:dataValue
        });
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                {this.activeForm()}
            </div>
        )
    }
}
