import React, { Component } from 'react'

export default class TableDataRow extends Component {
    checkPermission=() =>{
        if(this.props.permission === 1){
            return ("Nomarl User");
        }
        else{
            return ("Admin");
        }
    }
    editDataUserThird = () =>{
        this.props.editDataUserSecond();
        this.props.changeStatusEditForm();
    }
    removeButtonClick = (idUser) =>{
        this.props.removeButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>
                    {
                        // this.checkPermission()
                        this.props.permission
                    }
                </td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning edit" onClick={() => this.editDataUserThird() }><i className="fa fa-edit" /> Edit</div>
                    <div className="btn btn-danger remove" onClick={(idUser) => this.removeButtonClick(this.props.id)}><i className="fa fa-edit" /> Remove</div>
                </div>
                </td>
            </tr>
        )
    }
}
