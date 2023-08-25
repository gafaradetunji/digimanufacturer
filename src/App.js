import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './scss/app.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import RegisterManufacturer from './components/manufacturer/register_manufacturer';
import Company from './components/manufacturer/company';
import Additional from './components/manufacturer/additonal_detail';
import LoginManufacturer from './components/manufacturer/login_manufacturer';
import ManufacutrerProduct from './components/manufacturer/manufacture_product';
import EditManufacturerProduct from './components/manufacturer/manufacturer_edit';
import ShippingPrice from './components/manufacturer/shipping_price';
import Policies from './components/manufacturer/policies';

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/manufacturerProduct" element={<ManufacutrerProduct />} />
      <Route path="/editmanufacturer" element={<EditManufacturerProduct />} />
      <Route path="/shipping" element={<ShippingPrice />} />
          <Route path="/policies" element={<Policies />} />
        <Route path='registerman' element={<RegisterManufacturer />} />
        <Route path="/loginman" element={<LoginManufacturer />} />
        <Route path="/company" element={<Company />} />
        <Route path="/addition" element={<Additional />} />
      </Routes>
    </Router>
  )
}

export default App;
