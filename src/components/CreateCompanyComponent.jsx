import React,{useState} from 'react'
import CompanyService from '../services/CompanyService';

export default function CreateCompanyComponent() {
    const [data, setData] = useState({
        companyCode: "",
        companyName: "",
        companyCEO: "",
        companyTurnover: 0,
        url: "",
        stockExchange: ""
    })

    const {companyCode, companyName, companyCEO, companyTurnover, url, stockExchange} = data;

    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]});
        
    }
 
    const submitHandler = e =>{
        e.preventDefault();
        let company = {companyCode: data.companyCode.at(0).toString(),companyName: data.companyName.at(0), companyCEO:data.companyCEO.at(0)
        ,companyTurnover:data.companyTurnover.at(0),url:data.url.at(0),stockExchange:data.stockExchange.at(0)};
         CompanyService.registerCompany(JSON.stringify(company)).then(()=>{
            console.log("Registered the company",JSON.stringify(company));
        })
        
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offdet-md-3">
                    <h3 className="text-center">Company Registration</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Company Code:</label>
                                <input placeholder="Company Code" name="companyCode" className="form-control"
                                    value={companyCode} onChange={changeHandler} />
                            </div>

                            <div className="form-group">
                                <label>Company Name:</label>
                                <input placeholder="Company Name" name="companyName" className="form-control"
                                    value={companyName} onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Company CEO:</label>
                                <input placeholder="Company CEO" name="companyCEO" className="form-control"
                                    value={companyCEO} onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>company Turnover:</label>
                                <input placeholder="company Turnover" name="companyTurnover" className="form-control"
                                    value={companyTurnover} onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Company URL:</label>
                                <input placeholder="url" name="url" className="form-control"
                                    value={url} onChange={changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>stock Exchange:</label>
                                <input placeholder="stock Exchange" name="stockExchange" className="form-control"
                                    value={stockExchange} onChange={changeHandler} />
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

