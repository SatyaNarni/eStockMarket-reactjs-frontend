import React, { useState, useEffect } from 'react'
import CompanyService from '../services/CompanyService';
import { useParams } from 'react-router-dom';

export default function UpdateCompanyComponent() {
    const [data, setData] = useState({
        companyCode: '',
        companyName: '',
        companyCEO: '',
        companyTurnover: 0,
        url: '',
        stockExchange: ''
    })

    const { id } = useParams();

    const { companyCode, companyName, companyCEO, companyTurnover, url, stockExchange } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });

    }

    //do iytt
    const updateHandler = e => {
        e.preventDefault();
        let company = {
            companyCode: data.companyCode.at(0), companyName: data.companyName.at(0), companyCEO: data.companyCEO.at(0)
            , companyTurnover: data.companyTurnover.at(0), url: data.url.at(0), stockExchange: data.stockExchange.at(0)
        };
        console.log("update the company", company);
        CompanyService.updateCompany(company, id).then(() => {
            console.log("make a navigation to list of companies after");
        })

    }
    useEffect(() => {
        CompanyService.getCompanyByCode(id).then((res) => {
            setData(res.data);
        });
    });

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offdet-md-3">
                    <h3 className="text-center">Update Company</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Company Code:</label>
                                <input placeholder="Company Code" name="companyCode" className="form-control"
                                    value={companyCode} onChange={changeHandler} readOnly />
                            </div>

                            <div className="form-group">
                                <label>Company Name:</label>
                                <input placeholder="Company Name" name="companyName" className="form-control"
                                    value={companyName} onChange={changeHandler} readOnly />
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
                                    value={stockExchange} onChange={changeHandler} readOnly />
                            </div>

                            <button className="btn btn-success" style={{ marginTop: "10px" }} onClick={updateHandler} disabled>Update</button>
                            <button className="btn btn-danger" style={{ marginTop: "10px", marginLeft: "10px" }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

