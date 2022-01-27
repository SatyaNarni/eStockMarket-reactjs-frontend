import axios from "axios";

class CompanyService{
    getCompanies(){
        return axios.get("/company/getall");
    }
   /* https://cors-anywhere.herokuapp.com/ */
    registerCompany(company){
        return axios.post("/company/register",company,{
            headers :{
                'Content-Type': 'application/json'
            }
        });
    }

    getCompanyByCode(id){
        return axios.get(`/company/get/${id}`);
    }

    deleteCompany(code){
        return axios.delete(`/company/delete/${code}`);
    }

    updateCompany(company,compCode){
        return axios.put(`/company/update/${compCode}`,company,{
            headers :{
                'Content-Type': 'application/json'
            }
        });
    }
    addStocks(stock){
        return axios.post("/stock/add",stock,{
            headers :{
                'Content-Type': 'application/json'
            }
        });
    }

    getAllStocksOfCompany(code){
        return axios.get(`/stock/getAll/${code}`);
    }
}

export default new CompanyService()


