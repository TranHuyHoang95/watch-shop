import React,{Component} from 'react';

class TestAPI extends React.Component{
    constructor() { 
        super(); 
        this.state = { 
            brand: [] } 
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
                        brand: brand.da
                    })
                })
            .catch(error => this.setState({
                isLoading: false,
                message: 'Something bad happened ' + error
            }));
        }
        // await fetch('https://shopwatchdut.herokuapp.com/api/brand/',{
        //     method: 'GET',
        //     withCredentials: true,
        //    credentials: 'include',
        //     headers: {
        //         'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MjQ4NjQ1NzQ5NiwiaWF0IjoxNjIyNDU3NDk2fQ.6Pw8JwAmEAr6SHmZoJjMKWSy6oExBUymgWgX7v6vR9D9cK6ZxgTeHZqcBVts4g58YNI3Sjyf00antjvWd7-LEA',
        //         'Content-Type': 'application/json'
        //     }
        // }) 
        // .then(res => res.json()) 
        // .then(brand => {
        //      this.setState({ 
        //          brand: brand.data
        //      })
        //  }) 
        // .catch(console.log) } 
        
    renderBrands = () => { 
            let brand = this.state.brand.map((data, index) => 
                <option value={data.id}>{data.name}</option>
            );
        return brand;
        }
        render(){
            return(
                <div>
                    <div className="form-group">
                    <select>
                        {this.renderBrands}
                    </select>
                    </div>
                </div>
            )
        }
    }
export default TestAPI;
