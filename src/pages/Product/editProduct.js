import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class editProduct extends React.Component{
    
    constructor() { 
        super(); 
        this.state = { 
            brand: [],
            product: {
                name: "",
                image: "",
                id_brand: "",
                sex: false,
                size: '',
                id_color: 0,
                amount: 0,
                price: 0,
                id_albert: 0,
                id_color_albert: 0,
                id_clockwork: 0
            }
          };
        this.handleChange = this.handleChange.bind(this);
        // this.renderForm = this.renderForm.bind(this)
        };
        
        async handleChange(event) {
          console.log(event.target.name, event.target.value);
         if(event.target.name === 'brand'){
            await this.setState({
                ...this.state,
                product: {
                  ...this.state.product, 
                  [event.target.name]:{id:event.target.value,name:this.state.brand.find(item=>item.id===Number(event.target.value))&&this.state.brand.find(item=>item.id===Number(event.target.value)).name} 
                }
              })
         }
         else{
            await this.setState({
                ...this.state,
                product: {
                  ...this.state.product, 
                  [event.target.name]: event.target.value,
                }
              })  
         }
         
          
        } 
       
        async componentDidMount() { 
            const urlParams = new URLSearchParams(window.location.search);
            var urlBrand = "https://shopwatchdut.herokuapp.com/api/brand/";
            var bearer_token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA';
            var bearer = 'Bearer '+ bearer_token;
            fetch(urlBrand, {
                method: 'GET',
                withCredentials: true,
                credentials: 'omit',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'}
            })
            .then(res => res.json()) 
            .then ( brand => {
                    this.setState({
                        brand: brand.data
                    })
                })
            .catch(error => this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));
            var url = `https://shopwatchdut.herokuapp.com/api/product/${urlParams.get('id')}`;
           
            console.log(url);
            
            fetch(`https://shopwatchdut.herokuapp.com/api/product/${urlParams.get('id')}`, {
                method: 'GET',
                withCredentials: true,
                credentials: 'omit',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'}
            })
            .then(res => res.json()) 
            .then ( product => {
                    this.setState({
                        product: product.data
                    })
                    console.log(product.data);
                });
                
        }
        
        
        handleSubmit = (event) => {
            event.preventDefault();
            const input ={
                "name" : this.state.product.name,
                "price":this.state.product.price,
                "image":this.state.product.image,
                "amount":this.state.product.amount,
                "sex":this.state.product.sex,
                "size":this.state.product.size,
                "id_brand":Number(this.state.product.brand.id),
                "id_color":this.state.product.color.id,
                "id_albert":this.state.product.albertType.id,
                "id_color_albert":this.state.product.colorAlbert.id,
                "id_clockwork":this.state.product.clockwork.id
            }
            
            const urlParams = new URLSearchParams(window.location.search);
            alert('A form was submitted: ' + this.state);
            var bearer_token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA';
            var bearer = 'Bearer '+ bearer_token;
            fetch(`https://shopwatchdut.herokuapp.com/api/product/${urlParams.get('id')}`, {
                method: 'PUT',
                headers: {
                  'Authorization': bearer,
                  'Content-Type': 'application/json'
                },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(input)
              }).then(function(response) {
                console.log(response)
                return response.json();
              });
            console.log(this.state.product);
           
        }
    render(){
        return(
            
            <div id='wrapper'>
                <div id="page-wrapper">
                    
  <div id="page-inner">
    <div className="row">
      <div className="col-md-12">
        <h2>Sửa sản phẩm</h2>
            
      </div>
    </div>
    {/* /. ROW  */}
    <hr />
    
    <div className="row">
      <div className="col-md-12">
        {/* Form Elements */}
        <div className="panel panel-default"> 
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                  
                <form  id="form" >
         
                  <div className="form-group">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text" id="name" value={this.state.product&&this.state.product.name} name="name" className="form-control"  onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Danh mục </label>
                    {/* <select id="category"  value={this.state.product.brand&&this.state.product.brand.id} name="brand" className="form-control" onChange={this.handleChange}>
                        {
                             this.state.brand.map((data, index) => (
                                <option value={data.id} key={index}>{data.name}</option>
                              ))
                        }
                     
                    </select> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Giá</label>
                    <input type="text" id="name" value={this.state.product&&this.state.product.price} name="price" className="form-control" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="picture">Hình ảnh</label>
                    <input type="text" name="image" value={this.state.product&&this.state.product.image}/>
                  
                  </div>
                  <div className="form-group">
                    <label htmlFor="preview">Mô tả</label>
                    <textarea id="preview" className="form-control" rows={3} name="preview" />
                  </div>
                  <button  name="submit" className="btn btn-success btn-md" onClick={this.handleSubmit}>Sửa</button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Form Elements */}
      </div>
    </div>
    {/* /. ROW  */}
  </div>
  {/* /. PAGE INNER  */}
</div>

            </div>
        )
    }
}
export default editProduct;