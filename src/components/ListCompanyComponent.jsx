import React,{useState, useEffect} from 'react'
import CompanyService from '../services/CompanyService';
import {useNavigate} from 'react-router-dom';

export default function ListCompanyComponent() {
    const [companies, setCompanies] = useState([]);
    
    useEffect(()=>{
        CompanyService.getCompanies().then((res)=>{
            setCompanies(res.data);
        });
    });

    const navigate = useNavigate();
    const updateCompany = (id)=>{
        console.log("heyyy",id)
        navigate(`/update-company/${id}`);
    }
    const deleteCompany = (id)=>{   
        CompanyService.deleteCompany(id).then(console.log("deleted the company with is : ",id));
    }

    const addStock = (id)=>{  
        console.log("hello",id) 
        navigate(`/add-stock/${id}`);
    }

    const viewStocks = (id)=>{  
        console.log("hello",id) 
        navigate(`/view-stock/${id}`);
    }

    const RegisterCompany=()=>{
        navigate("/add-company");
    }

    return (
        <div>
                 <h2 className="text-center">Companies List</h2>
                 <div className='row' >
                    <button className="btn btn-primary" style={{marginBottom:"25px",width:"250px"}} onClick={()=>RegisterCompany()}>Regsiter Company</button>
                 </div>
                 <div className="row">
                    <table className="tabel table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Company Code</th>
                                <th> Company Name</th>
                                <th> Company CEO</th>
                                <th> Company Turnover</th>
                                <th> Company URL</th>
                                <th> Stock Exchange</th>
                                <th style={{textAlign:"center"}}>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    companies.map(
                                        company => 
                                        <tr key = {company.code} >
                                            <td>{company.companyCode}</td>
                                            <td>{company.companyName}</td>
                                            <td>{company.companyCEO}</td>
                                            <td>{company.companyTurnover}</td>
                                            <td><a href={company.url}>website</a></td>
                                            <td>{company.stockExchange}</td>
                                            <td>
                                                <button onClick={(e)=>updateCompany(e.target.value)} value={company.companyCode} className="btn btn-info">Update</button>
                                                <button style={{marginLeft:"10px"}} onClick={(e)=>deleteCompany(e.target.value)} value={company.companyCode} className="btn btn-danger">Delete</button>
                                                <button style={{marginLeft:"10px"}} onClick={(e)=>viewStocks(e.target.value)} value={company.companyCode} className="btn btn-info">View Stocks</button>
                                                <button style={{marginLeft:"10px"}} onClick={(e)=>addStock(e.target.value)} value={company.companyCode} className="btn btn-warning">Add Stocks</button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                    </table>
                 </div>
            </div>
    )
}
