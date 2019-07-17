import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm: false, //khai báo trạng thái xuất hiện của form
      data: [], //khai báo biến để lưu data từ csdl
      dataSearch:'', //khai báo biến để lưu data từ ô search
      editStatus: false,
      dataUserNeedEdit:{}
    } 
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser))
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  //hàm đổi trạng thái xuất hiện của form
  changeStatusForm=() =>{
    this.setState({
      statusForm: !this.state.statusForm
    })
  }
  //hàm lấy dữ liệu ở ô search: set state bằng dl nhận được
  getDataSearch =(dl) =>{
    this.setState({
      dataSearch:dl
    });
    // console.log("Data nhan dc la" + dl);
  }
  //hàm lấy dữ liệu ở ô thêm mới data
  getDataInsert = (name, tel, permission) =>{
    //đóng gói dữ liệu
    var item ={}
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
   
    // console.log(item)

    //cập nhật state sau khi push thêm item vào
    var items = this.state.data
    items.push(item); //push dữ liệu nhận được vào csdl
    this.setState({
      data:items //cập nhật lại state với item mới được thêm vào, tự động cập nhật các hàm bên dưới và hiển thị ra ngoài giao diện
    })
    localStorage.setItem('userData', JSON.stringify(items));
  }

  //hàm sửa thông tin
  editDataUser = (user) =>{
    // console.log("Okk")
    this.setState({
      dataUserNeedEdit:user
    })
    // console.log(user)
  }

  //đổi trạng thái show của edit form
  changeStatusEditForm = () =>{
    this.setState({
      editStatus: !this.state.editStatus
    });
  }

  //get info need edit
  getDataUserNeedEdit = (user) =>{
    // console.log(user.name)
    this.state.data.forEach((value, key) =>{
      if(value.id === user.id){
        value.name = user.name
        value.tel = user.tel
        value.permission = user.permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  //hàm delete user
  removeButtonClick = (idUser) =>{
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  render() {
    // console.log(this.state.data)
    
    var resultSearch = []; //khai báo 1 mảng để lưu kết quả tìm thấy
    //tìm kiếm trong từng item của data user. 
    //nếu tìm thấy item.name thì push vào mảng lưu kết quả
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.dataSearch) !== -1) {
        resultSearch.push(item)
      }
    })
    // console.log(resultSearch)

    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                changeStatus = {() => this.changeStatusForm()} 
                statusForm = {this.state.statusForm} 
                getDataSearch = {(dl)=>this.getDataSearch(dl)}
                editStatus = {this.state.editStatus}
                changeStatusEditForm = {() => this.changeStatusEditForm()}
                dataUserNeedEdit = {this.state.dataUserNeedEdit}
                getDataUserNeedEdit = {(user) =>this.getDataUserNeedEdit(user)}
              />
              <TableData 
                editDataUserFirst={(user)=>this.editDataUser(user)} 
                dataUserProps={resultSearch}
                changeStatusEditForm = {() => this.changeStatusEditForm()}
                removeButtonClick = {(idUser) =>this.removeButtonClick(idUser)}
              />
              <AddUser 
                propsAdd={(name, tel, permission) => this.getDataInsert(name, tel, permission)} 
                statusForm = {this.state.statusForm} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
