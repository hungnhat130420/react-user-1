import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:' ',
            userObj:{}
        }
    }
    
    isChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        })
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienthiNut = ()=>{
        if(this.props.hienthiForm===true)   {
          return  <div className="btn btn-block btn-outline-secondary"  onClick={()=>this.props.ketnoi()}  >  Đóng lại </div>;
        }
        else{
            return  <div className="btn btn-block btn-outline-info"   onClick={()=>this.props.ketnoi()}>  Thêm mới </div>;
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }
   
    isShowEditForm = ()=>{
        if(this.props.editUserStatus === true){
            return <EditUser changeEditUserStatus  = {()=>this.props.changeEditUserStatus()}
            userEditObject={this.props.userEditObject}
            getUserEditInfo={(info)=>this.getUserEditInfo(info)}/>
        }
    }
    else
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control" onChange={(event)=>this.isChange(event)}  placeholder="Nhập tên cần tìm" />            
                    <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                 
                    </div>
                    {this.hienthiNut()}
                </div>
               <hr/>

            </div>
        );
    }
}
export default Search;