import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
    removeButtonClick = (idUser) =>{
        this.props.removeButtonClick(idUser)
    }
    mappingDataUser=() =>{
        return(
            this.props.dataUserProps.map((value, key)=> {
                // console.log(value)
                return (
                    <TableDataRow 
                        editDataUserSecond = {(user) => this.props.editDataUserFirst(value)} // đang trong vòng lặp, thì truyền value (mỗi value là 1 đối tượng user) vào hàm 
                        userName={value.name} 
                        tel = {value.tel} 
                        permission = {value.permission} 
                        id = {value.id}
                        key ={key} 
                        stt={key}
                        changeStatusEditForm = {() => this.props.changeStatusEditForm()}
                        removeButtonClick = {(idUser) =>this.removeButtonClick(idUser)}
                    />
                )
            })
        )
    }

    render() {
        // console.log(this.props.dataUserProps)
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Telephone Number</th>
                        <th>Permission</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        )
    }
}
