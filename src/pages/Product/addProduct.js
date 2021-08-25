import React,{Component} from 'react';

class addProduct extends React.Component{
    // 
    constructor() { 
        super(); 
        this.state = { 
            brand: [],
            product: {
              name: "",
              image: "",
              id_brand: "",
              sex: false,
              size: '40.6',
              id_color: 7,
              amount: 100,
              price: 0,
              id_albert: 4,
              id_color_albert: 3,
              id_clockwork: 1
            }
          };
        this.handleChange = this.handleChange.bind(this);
        };
        async handleChange(event) {
          console.log(event.target.name, event.target.value);
         
          await this.setState({
            ...this.state,
            product: {
              ...this.state.product, 
              [event.target.name]: event.target.value,
            }
          })
          console.log(this.state.product)
        } 
        async componentDidMount() { 
            var url = "https://shopwatchdut.herokuapp.com/api/brand/";
            var bearer_token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA';
            var bearer = 'Bearer '+ bearer_token;
            fetch(url, {
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
        }
        handleSubmit = (event) => {
            alert('A form was submitted: ' + this.state);
            var bearer_token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA';
            var bearer = 'Bearer '+ bearer_token;
            fetch('https://shopwatchdut.herokuapp.com/api/product/', {
                method: 'POST',
                headers: {
                  'Authorization': bearer,
                  'Content-Type': 'application/json'
                },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(this.state.product)
              }).then(function(response) {
                console.log(response)
                return response.json();
              });
        
            event.preventDefault();
        }
        // renderBrands = () => { 
        //     let brand = this.state.brand.map((data, index) => 
        //        <option value={data.id}>{data.name}</option>
        //     );
        // return brand;
        // }
    render(){
        // let brand = this.props.state.brand;
        // let optionItems = brand.map.((data,index)=>
        //     <option key={data.id}>{data.name}</option>
        // );
       
        return(
            <div id='wrapper'>
                <div id="page-wrapper">
  <div id="page-inner">
    <div className="row">
      <div className="col-md-12">
        <h2>Thêm sản phẩm</h2>
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
                <form onSubmit={this.handleSubmit}  role="form" method="post" encType="multipart/form-data" id="form">
                  <div className="form-group">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text" id="name" defaultValue name="name" className="form-control" onChange={this.handleChange} value={this.state.product.name}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Danh mục </label>
                    <select id="category" name="id_brand" className="form-control" value={this.state.product.id_brand} onChange={this.handleChange}>
                        {/* {this.renderBrands} */}
                        {/* {optionItems} */}
                        {this.state.brand.map((data, index) => (
                          <option value={data.id} key={index}>{data.name}</option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="picture">Hình ảnh</label>
                    <input type="text" name="image" value={this.state.product.image} onChange={this.handleChange}/>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="detail">Giá</label>
                    <textarea id="detail" className="form-control" rows={5} name="price" onChange={this.handleChange} value={this.state.product.price} />
                  </div>
                  <button type="submit" name="submit" className="btn btn-success btn-md">Thêm</button>
                 
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
export default addProduct;