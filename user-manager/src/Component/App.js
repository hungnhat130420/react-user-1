
import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienthiForm:false,
      data : DataUser,
      searchText:' ',
      editUserStatus : false,
      userEditObject:{}

    }
  }

componentWillMount() {
  //kiểm tra xem có localStorage hay chưa
  if(localStorage.getItem("userData")===null){
      localStorage.setItem("userData",JSON.stringify(DataUser)); 
  }
  else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
  }
}

  doitrangThai=()=>{  
    this.setState({
      hienthiForm:!this.state.hienthiForm
    })
  }

  getNewUserData=(name,tel,Permission)=>{
    var item={};
    item.id=uuidv4();
    item.name=name;
    item.tel=tel;
    item.Permission=Permission;
   
    var items= this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData',JSON.stringify(items))

  }
  getTextSearch = (dl)=>{
    this.setState({
      searchText:dl
    });
    
  }
  editUser = (user)=>{
    console.log('ket noi roi');
    this.setState({
      userEditObject : user
    });
    console.log(user)
  }
  changeEditUserStatus = ()=>{
      this.setState({
        editUserStatus : !this.state.editUserStatus
      });
  }
  getUserEditInfoApp = (info)=>{
         console.log('thong tin can sua la ' + info.name);
         this.state.data.forEach((value,key)=>{
            if(value.id === info.id){
              value.name = info.name;
              value.tel = info.tel;
              value.permission = info.permission;
            }
            

         })
         localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  deleteUser=(idUser)=>{
    
    var tempData = this.state.data;
    tempData = tempData.filter(item=>item.id !==idUser)
  this.setState({
    data:tempData
  });
  localStorage.setItem('userData',JSON.stringify(tempData))

  }
  // thongBao=()=>{alert("ket noi roi")}
  render() {
    //localStorage.setItem('userData',JSON.stringify(DataUser)) 
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!==-1){
          ketqua.push(item);
      }
    })
    
    // console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="searchForm">
            <div className="container">
              <div className="row">
                     <Search
                     checkConnectProps ={(dl)=>this.getTextSearch(dl)} 
                     ketnoi = {()=>this.doitrangThai()} hienthiForm={this.state.hienthiForm }
                     editUserStatus={this.state.editUserStatus} 
                     changeEditUserStatus  = {()=>this.changeEditUserStatus()}
                     userEditObject={this.state.userEditObject}
                     getUserEditInfoApp = {(info)=>this.getUserEditInfoApp(info)}  />
                    <TableData  editFun={(user)=>this.editUser(user)} dataUserProps={ketqua}
                     changeEditUserStatus  = {()=>this.changeEditUserStatus()}
                     deleteUser= {(idUser)=>this.deleteUser(idUser)} />
                    <AddUser hienthiForm={this.state.hienthiForm } add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)} />
                    
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

