import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ListCompanyComponent from './components/ListCompanyComponent';
import HeaderComponent from './components/HeaderComponent';
import {FooterComponent} from './components/FooterComponent';
import CreateCompanyComponent from './components/CreateCompanyComponent';
import UpdateCompanyComponent from './components/UpdateCompanyComponent';
import AddStockComponent  from './components/AddStockComponent';
import ViewStockComponent from './components/ViewStockComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes> 
                        <Route path="/" element={<ListCompanyComponent />}></Route>
                        <Route path="/companies" element={<ListCompanyComponent />}></Route>
                        <Route path="/add-company" element={<CreateCompanyComponent />}></Route>
                        <Route path="/update-company/:id" element={<UpdateCompanyComponent />}></Route>
                        <Route path="/add-stock/:id" element={<AddStockComponent/>}></Route>
                        <Route path="/view-stock/:id" element={<ViewStockComponent/>}></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
        
    );
}

export default App;
