import React,{useState, useEffect} from 'react'
import CompanyService from '../services/CompanyService';
import { useParams } from 'react-router-dom';

export default function ListCompanyComponent() {
    const [stocks, setStocks] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        console.log("77777777777777777777777777777", id);
        CompanyService.getAllStocksOfCompany(id).then((res)=>{
        
            console.log("saaaaaaaaaa",res.data)
            setStocks(res.data);
        });
    });

    return (
        <div>
                 <h2 className="text-center"> Recorded Stocks</h2>
                 <div className="row">
                    <table className="tabel table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Stock Id</th>
                                <th> Company Code</th>
                                <th> Stock Price</th>
                                <th> Time Stamp</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    stocks.map(
                                        stock => 
                                        <tr key = {stock.stockId} >
                                            <td>{stock.stockId}</td>
                                            <td>{stock.companyCode}</td>
                                            <td>{stock.stockPrice}</td>
                                            <td>{stock.timeStamp}</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                    </table>
                 </div>
            </div>
    )
}
