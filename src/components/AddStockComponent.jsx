import React,{useState,useEffect} from 'react'
import CompanyService from '../services/CompanyService';
import { useParams } from 'react-router-dom';

export default function CreateCompanyComponent() {
    const [data, setData] = useState({
        stockId: "",
        stockPrice: 0.0,
    })

    const {id} = useParams();

    const {stockId, stockPrice} = data;

    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]});   
    }
 

    const submitHandler = e =>{
        e.preventDefault();
        let stock = {stockId: data.stockId.at(0),companyCode: id, stockPrice:data.stockPrice.at(0)
        ,timeStamp:new Date().toISOString()};
         CompanyService.addStocks(JSON.stringify(stock)).then(()=>{
            console.log("Registered the stock",JSON.stringify(stock));
        })
        
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offdet-md-3">
                    <h3 className="text-center">Add Stock Details</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Stock Id:</label>
                                <input placeholder="stock Id" name="stockId" className="form-control"
                                    value={stockId} onChange={changeHandler} />
                            </div>

                            <div className="form-group">
                                <label>Company Code:</label>
                                <input placeholder="Company Code" name="companyCode" className="form-control"
                                    value={id} onChange={changeHandler} readOnly/>
                            </div>
                            <div className="form-group">
                                <label>stock Price:</label>
                                <input placeholder="Stock Price" name="stockPrice" className="form-control"
                                    value={stockPrice} onChange={changeHandler} />
                            </div>

                            <button className="btn btn-success" style={{marginTop: "10px"}} onClick={submitHandler}>Register</button>
                            <button className="btn btn-danger" style={{marginTop:"10px",marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

