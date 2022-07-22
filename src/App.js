import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Components
import Header from "./components/Heder/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Company from "./components/Contact/Company";
import Support from "./components/Contact/Support";
import Other from "./components/Contact/Other";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";

function App() {
  const isAuthenticated = true;
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="contact" element={<Contact />}>
              <Route path="company" element={<Company />} />
              <Route path="support" element={<Support />} />
              <Route path="other" element={<Other />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
