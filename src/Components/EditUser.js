import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: this.props.dataUserNeedEdit.id,
           name: this.props.dataUserNeedEdit.name,
           tel: this.props.dataUserNeedEdit.tel,
           permission: this.props.dataUserNeedEdit.permission
        }
    }
    //getDataUserNeedEdit
    saveButton = () =>{
        var user = {}
        user.id = this.state.id
        user.name = this.state.name
        user.tel = this.state.tel
        user.permission = this.state.permission
        // console.log(user)
        
        this.props.getDataUserNeedEdit(user);
        this.props.changeStatusEditForm()
    }
    isChange = (event) =>{
        const dataName = event.target.name
        const dataValue = event.target.value
        this.setState({
            [dataName]:dataValue
        })
        
    }
    render() {
        // console.log(this.state)
        return (
            <div className="col-12">
                <div className="card border-0 text-center">
                    <div className="card  text-white bg-warning mb-3 mt-2">
                    <div className="card-header">Edit user</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input defaultValue={this.props.dataUserNeedEdit.name} onChange={(event) =>this.isChange(event)} type="text"  name="name" className="form-control" placeholder="User name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input defaultValue={this.props.dataUserNeedEdit.tel} onChange={(event) =>this.isChange(event)} type="text"  name="tel" className="form-control" placeholder="Telephone number" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select defaultValue={this.props.dataUserNeedEdit.permission} onChange={(event) =>this.isChange(event)}  name="permission" className="custom-select custom-select-lg mb-3">
                                    <option value="Normal User">Normal User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-primary" onClick={() => this.saveButton()} >Save</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
