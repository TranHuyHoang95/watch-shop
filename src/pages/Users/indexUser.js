import React,{Component} from 'react';


class indexUser extends React.Component{
    render(){
        return(
            <div id='wrapper'>
                <div id="page-wrapper">
  <div id="page-inner">
    <div className="row">
      <div className="col-md-12">
        <h2>Quản lý người dùng</h2>
      </div>
    </div>
    {/* /. ROW  */}
    <hr />
    <div className="row">
      <div className="col-md-12">
        {/* Advanced Tables */}
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="table-responsive">
              <div className="row">
                <div className="col-sm-6">
                  <a href="<%=request.getContextPath()%>/admin/user/add" className="btn btn-success btn-md">Thêm</a>
                </div>
                <div className="col-sm-6" style={{textAlign: 'right'}}>
                  <form method="post" action>
                    <input type="submit" name="search" defaultValue="Tìm kiếm" className="btn btn-warning btn-sm" style={{float: 'right'}} />
                    <input type="search" className="form-control input-sm" placeholder="Nhập tên người dùng" style={{float: 'right', width: '300px'}} />
                    <div style={{clear: 'both'}} />
                  </form><br />
                </div>
              </div>
              
              <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên </th>
                    <th>Tên đăng nhập</th>
                    <th width="160px">Chức năng</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td> </td>
                    <td className="center"> </td>
                    <td className="center"></td>
                    <td className="center">
                      <a href="<%=request.getContextPath()%>/admin/user/edit?id=<%=item.getId() %>" title className="btn btn-primary"><i className="fa fa-edit " /> Sửa</a>
                      <a href="<%=request.getContextPath()%>/admin/user/del?id=<%=item.getId() %>" onclick="return confirm('Bạn có muốn xóa không?')" title className="btn btn-danger"><i className="fa fa-pencil" /> Xóa</a>
                    </td>
                  </tr></tbody></table>
              <div className="row">
                <div className="col-sm-6">
                  {/*            <div class="dataTables_info" id="dataTables-example_info" style="margin-top:27px">Hiển thị từ 1 đến 5 của 24 truyện</div> */}
                </div>
                <div className="col-sm-6" style={{textAlign: 'right'}}>
                  <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                    <ul className="pagination">
                      <li className="paginate_button previous disabled" aria-controls="dataTables-example" tabIndex={0} id="dataTables-example_previous"><a href="#">Trang trước</a></li>
                      <li className="paginate_button active" aria-controls="dataTables-example" tabIndex={0}><a href>1</a></li>
                      <li className="paginate_button" aria-controls="dataTables-example" tabIndex={0}><a href>2</a></li>
                      <li className="paginate_button" aria-controls="dataTables-example" tabIndex={0}><a href>3</a></li>
                      <li className="paginate_button" aria-controls="dataTables-example" tabIndex={0}><a href>4</a></li>
                      <li className="paginate_button" aria-controls="dataTables-example" tabIndex={0}><a href>5</a></li>
                      <li className="paginate_button next" aria-controls="dataTables-example" tabIndex={0} id="dataTables-example_next"><a href="#">Trang tiếp</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Advanced Tables */}
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
export default indexUser;