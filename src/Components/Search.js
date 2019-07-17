import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            tempValue:'', //khai báo biến để lưu giá trị ở ô tìm kiếm
            dataUser:{}
        }
    }
    
    activeButton=() =>{
        if(this.props.statusForm){
            return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.props.changeStatus()} >Click to close</div>
        }
        else{
            return <div className="btn btn-block btn-outline-info" onClick={()=> this.props.changeStatus()} >Click to add new user</div>
        }
    }
    isChange =(event) =>{
        // console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        });
        // this.props.getDataSearch(this.state.tempValue)
    }
    isShow = () =>{
        if(this.props.editStatus === true){ 
            return <EditUser 
                        changeStatusEditForm = {() => this.props.changeStatusEditForm()} //nếu true thì show
                        dataUserNeedEdit ={this.props.dataUserNeedEdit}
                        getDataUserNeedEdit = {(info) =>this.getDataUserNeedEdit(info)}
                    /> 
        }
    }
    getDataUserNeedEdit = (user) =>{
        this.setState({
            dataUser: user
        })
        this.props.getDataUserNeedEdit(user)
    }
    render() {
        // console.log(this.state.dataUser)
        return (
                
                <div className="col-12">
                    <div className="row">
                        {this.isShow()}
                    </div>
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhập tên ..." style={{width: '520px'}} />
                    <div className="btn btn-info" onClick={(dl)=>this.props.getDataSearch(this.state.tempValue)}>Tìm</div>
                    </div>
                </div>
                {this.activeButton()}
                <hr/>
                </div>
        )
    }
}
