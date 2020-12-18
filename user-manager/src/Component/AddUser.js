import React, { Component } from 'react';

class AddUser extends Component {
   constructor(props) {
     super(props);
     this.state={
       id:"",
       name:"",
       tel:"",
       Permission:""
     }
   }
   
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
          [name]:value
        })
        //package to item
        var item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.Permission = this.state.Permission;
        // console.log(item);
    }
    // setText=()=>{

    // }
    kiemtraTrangThai = ()=>{
        if(this.props.hienthiForm===true){
            return (
              <div className="col">
                <form>
                <div className="card bg-light mb-3 mt-2">
                <div className="card-header">Thêm mới</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" onChange={(event)=>this.isChange(event)}  placeholder="Tên User" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="tel" className="form-control" onChange={(event)=>this.isChange(event)}  placeholder="Điện thoại" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" name="Permission"  onChange={(event)=>this.isChange(event)} required>
                      <option value>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm Mới"/>
                  </div>
                </div>
              </div>
              </form>
              </div>
            )
        }
    }
    render() {
        // console.log(this.props.hienthiForm);
       // console.log(this.state)
        return (
            <div className="col-3">
            <div>
            {/* {this.hienthiNut()} */}
            {/* {this.hienthiForm()} */}
            {this.kiemtraTrangThai()}
            </div>
          </div>
          
        );
    }
}

export default AddUser;