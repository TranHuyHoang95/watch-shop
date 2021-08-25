import React, {Component} from 'react';
// import {Link} from 'react';
class indexCat extends React.Component{
    render(){
        return(
            <div id='wrapper'>
     <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Quản lý danh mục</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="table-responsive">
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="<%=request.getContextPath() %>/admin/cat/add" className="btn btn-success btn-md">Thêm</a>
                      </div>
                      <div className="col-sm-6" style={{textAlign: 'right'}}>
                        <form method="post" action>
                          <input type="submit" name="search" defaultValue="Tìm kiếm" className="btn btn-warning btn-sm" style={{float: 'right'}} />
                          <input type="search" className="form-control input-sm" placeholder="Nhập tên danh mục" style={{float: 'right', width: '300px'}} />
                          <div style={{clear: 'both'}} />
                        </form><br />
                      </div>
                    </div>
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th width="200px">Tên danh mục</th>
                          <th>Mô tả </th>
                          <th width="160px">Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td className="center" />
                          <td> </td>
                          <td className="center">
                            <a href="<%=request.getContextPath() %>/admin/cat/edit?cid=<%=category.getId() %>" title className="btn btn-primary"><i className="fa fa-edit " /> Sửa</a>
                            <a href="<%=request.getContextPath() %>/admin/cat/del?cid=<%=category.getId() %>" onclick="return confirm('Bạn có muốn xóa danh mục')" title className="btn btn-danger"><i className="fa fa-pencil" /> Xóa</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="dataTables_info" id="dataTables-example_info" style={{marginTop: '27px'}}>danh mục</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                
            </div>
        )
    }
}
export default indexCat;