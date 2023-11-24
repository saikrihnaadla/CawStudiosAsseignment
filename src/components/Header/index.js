import {LiaShoppingCartSolid} from 'react-icons/lia'
import {IoIosArrowForward} from 'react-icons/io'

import {LuChevronDown} from 'react-icons/lu'

import './index.css'

import {Title, CustomButton} from '../styledComponents'

const Header = () => (
  <>
    <div className="header-main-bg">
      <nav className="green-div flx-row">
        <ul className="logo-bg">
          <li className="logo">Recco</li>
          <li>
            <Title>Store</Title>
          </li>
          <li>
            <Title>Orders</Title>
          </li>
          <li>
            <Title>Analytics</Title>
          </li>
        </ul>
        <div>
          <div className="flx-row">
            <LiaShoppingCartSolid className="cart-style" />
            <h1 className="name">
              Hello, James
              <span className="down-ward-arrow">
                <LuChevronDown />
              </span>
            </h1>
          </div>
        </div>
      </nav>
      <div className=" flx-row nav-bar-order-status-bg">
        <div className="flx-column orders-main-container">
          <div className="flx-row order-container">
            <p className="orders-para">Orders</p>
            <IoIosArrowForward className="orders-para" />
            <p className="orders-para-2">Order 32457ABC</p>
          </div>
          <h1 className="order-id-head">Order 32457ABC</h1>
        </div>
        <div className="buttons-container flx-row">
          <CustomButton back>Back</CustomButton>
          <CustomButton approveOrder>Approve Order</CustomButton>
        </div>
      </div>
    </div>
  </>
)

export default Header
