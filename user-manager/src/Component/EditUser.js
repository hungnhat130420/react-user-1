import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission
        }
    }
     
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton = ()=>{
        
       var info={};
       info.id = this.state.id;
       info.name = this.state.name;
       info.tel = this.state.tel;
       info.permisson = this.state.permission;
       this.props.changeEditUserStatus();
       this.props.getUserEditInfo(info);
    }
    render() {
      
        return (
            <div className="row">
            <form>
            <div className="card text-white bg-secondary mb-3 mt-2">
            <div className="card-header text-center">Sửa thông tin User</div>
            <div className="card-body">
            <div className="form-group">
                <input defaultValue={this.props.userEditObject.name} onChange={(event)=>this.isChange(event)}  type="text" name="name" className="form-control"   placeholder="Tên User" />
            </div>
            <div className="form-group">
                <input defaultValue={this.props.userEditObject.tel} onChange={(event)=>this.isChange(event)}  type="text" name="tel" className="form-control"   placeholder="Điện thoại" />
            </div>
            <div className="form-group">
                <select defaultValue={this.props.userEditObject.permission} onChange={(event)=>this.isChange(event)} className="custom-select" name="Permission"   required > 
                <option value>Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Normal</option>
                </select>
            </div>
            <div className="form-group">
                <input type="button" className="btn btn-block btn-danger"   value="Lưu thông tin " onClick={()=>this.saveButton()}/>
            </div>
            </div>
        </div>
        </form>
    </div>
        );
    }
}

export default EditUser;