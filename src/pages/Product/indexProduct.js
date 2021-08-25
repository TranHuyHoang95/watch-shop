import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Leftbar from "../../Components/Leftbar";
// import { useParams } from "react-router";

class indexProduct extends React.Component{
    constructor() { 
        super(); 
        this.state = { 
            product: [] ,
            status :''
        };
         this.hanldDelete =this.hanldDelete.bind(this);
         this.showId = this.showId.bind(this);
        
    } 
    showId (id){
        console.log('ID nè'+id);
    }
    hanldDelete (idItem){
        var idItem;
        var linkAPI= 'https://shopwatchdut.herokuapp.com/api/product/' + idItem;
        var bearer_token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA';
        var bearer = 'Bearer '+ bearer_token;
        fetch(linkAPI, {
            method: 'DELETE',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(() => this.setState({ status: 'Delete successful' })
            );
    
    }
    async componentDidMount() { 
        await fetch('https://shopwatchdut.herokuapp.com/api/product/') 
        .then(res => res.json()) 
        .then(product => {
             this.setState({ 
                 product: product.data
             })
         }) 
        .catch(console.log)
        
    } 
    renderProducts = () => { 
        
        if(!this.product){
            let product = this.state.product.map((data, index) => 
            
            <tr key={data.id}>
                
                        <td className="center">{data.id}</td>
                        <td className="center">{data.name}</td>
                        <td className="center">{data.brand.name}</td>
                        <td className="center">{data.price}</td>
                        <td></td>
                        <td className="center">
                            <img width="200px" height="200px" src={data.image} alt="Đổi thay"/>
                        </td>
                        <td className="center">
                            
                            <Link to={`/editProduct?id=${data.id}`}  className="btn btn-primary"><i className="fa fa-edit "></i> Sửa</Link>
                            {/* <a href="" onClick={()=>this.handleDelele}  title="" className="btn btn-danger"><i className="fa fa-pencil"></i> Xóa</a> */}
                            <button onClick= {this.hanldDelete.bind(this,data.id)} title="" className="btn btn-danger"><i className="fa fa-pencil"></i> Xóa</button>
                        </td>
                    </tr>
            );
            return product; 
        }
    }



    render(){
        return(<React.Fragment>
          <Header/>
          <Leftbar/>
          <Footer/>
           <div id="wrapper">
               <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Quản lý sản phẩm</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Link to='/addProduct' className="btn btn-success btn-md"> Thêm </Link>
                                                </div>
                                                <div className="col-sm-6" style={{textAlign: 'right'}}>
                                                    <form method="post" action="">
                                                        <input type="submit" name="search" value="Tìm kiếm" className="btn btn-warning btn-sm" style={{float: 'right'}} />
                                                        <input type="search" className="form-control input-sm" placeholder="Nhập tên sách" style={{float:'right',width: '300px'}} />
                                                        <div style={{clear: 'both'}}></div>
                                                    </form><br />
                                                </div>
                                            </div>

                                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
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
                                                    
                                                    {this.renderProducts()}
                                                </tbody>
                                            </table>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="dataTables_info" id="dataTables-example_info" style={{marginTop:'27px'}}>Hiển thị từ 1 đến 5 của 24 truyện</div>
                                                </div>
                                                <div className="col-sm-6" style={{textalign: 'right'}}>
                                                    <div className="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a href="#">Trang trước</a></li>
                                                            <li className="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="">1</a></li>
                                                            <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">2</a></li>
                                                            <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">3</a></li>
                                                            <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">4</a></li>
                                                            <li className="paginate_button" aria-controls="dataTables-example" tabindex="0"><a href="">5</a></li>
                                                            <li className="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a href="#">Trang tiếp</a></li>
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
        </React.Fragment>)
    }
}
export default indexProduct;