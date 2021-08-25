import React,{Component} from 'react';

class indexOrder extends React.Component{
    render(){
        return(
            <div id='wrapper'>
                  <div id="page-wrapper">
    <div id="page-inner">
        <div class="row">
            <div class="col-md-12">
                <h2>Quản lý đơn hàng</h2>
            </div>
        </div>
       
        <hr />
        <div class="row">
            <div class="col-md-12">
                
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="table-responsive">
                            <div class="row">
                                <div class="col-sm-6">
                                    <a href="<%=request.getContextPath()%>/admin/song/add" class="btn btn-success btn-md">Thêm</a>
                                </div>
                                <div class="col-sm-6" style={{textAlign: 'right'}}>
                                    <form method="post" action="">
                                        <input type="submit" name="search" value="Tìm kiếm" class="btn btn-warning btn-sm" style={{float: 'right'}} />
                                        <input type="search" class="form-control input-sm" placeholder="Nhập tên sách" style={{float:'right',width: '300px'}} />
                                        <div style={{clear: 'both'}}></div>
                                    </form><br />
                                </div>
                            </div>

                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Danh mục</th>
                                        <th>Giá</th>
                                        <th>Mô tả</th>
                                        <th>Hình ảnh</th>
                                        <th width="160px">Tác vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr>
                                        <td></td>
                                        <td class="center"></td>
                                        <td class="center"></td>
                                        <td></td>
                                        <td class="center"></td>
                                        <td class="center">
											<img width="200px" height="200px" src="<%=request.getContextPath() %>/uploads/<%=song.getPicture() %>" alt="Đổi thay"/>
                                        </td>
                                        <td class="center">
                                            <a href="<%=urlEdit %>" title="" class="btn btn-primary"><i class="fa fa-edit "></i> Sửa</a>
                                            <a href="<%=urlDel %>" onclick="return confirm('Bạn có chắc chắn xóa?')" title="" class="btn btn-danger"><i class="fa fa-pencil"></i> Xóa</a>
                                        </td>
                                    </tr>
                                   
									
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="dataTables_info" id="dataTables-example_info" style={{marginTop:'27px'}}>Hiển thị từ 1 đến 5 của 24 truyện</div>
                                </div>
                                <div class="col-sm-6" style={{textalign: 'right'}}>
                                    <div class="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a href="#">Trang trước</a></li>
                                            <li class="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="">1</a></li>
											<li class="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">2</a></li>
											<li class="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">3</a></li>
											<li class="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">4</a></li>
											<li class="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">5</a></li>
                                            <li class="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a href="#">Trang tiếp</a></li>
                                        </ul>
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
            </div>
        )
    }
}
export default indexOrder;