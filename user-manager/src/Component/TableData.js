
import React, { Component } from 'react';
import TableDataRow from'./TableDataRow'
class TableData extends Component {

deleteButtonClick=(idUser)=>{
    this.props.deleteUser(idUser)
    
}

  mappingDataUser=()=>this.props.dataUserProps.map((value,key)=>(
    <TableDataRow  editFunClick={(user)=>this.props.editFun(value )}  
    userName={value.name} 
    key={key} 
    stt={key} 
    sdt = {value.tel} 
    permission = {value.permission}
    id = {value.id}
    changeEditUserStatus  = {()=>this.props.changeEditUserStatus()} 
    deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}/>
  ))

  render() {
      
    // console.log(this.props. dataUserProps);
    return (
     
      <div className="col-9">
      <table className="table table-striped table-inverse table-hover ">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
            {this.mappingDataUser()}
           
        </tbody>
      </table>
    </div>
    );
  }
}

export default TableData;