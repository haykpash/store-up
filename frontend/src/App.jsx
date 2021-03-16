import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPages'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'
import OrderListPage from './pages/OrderListPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/admin/userList' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/productList' component={ProductListPage} exact />
          <Route
            path='/admin/productList/:pageNumber'
            component={ProductListPage}
            exact
          />
          <Route path='/admin/orderList' component={OrderListPage} />
          <Route path='/search/:keyword' component={Home} exact />
          <Route path='/page/:pageNumber' component={Home} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={Home}
            exact
          />
          <Route path='/' component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
