import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {IoIosSearch} from 'react-icons/io'
import {FiPrinter} from 'react-icons/fi'

import {CustomButton} from '../styledComponents'

import ReactMissingPopup from '../MissingProductPopup'
import EditProduct from '../EditProduct'

import './index.css'

import EachItem from '../EachItem'

import Header from '../Header'

const itemStatus = {
  initial: 'INITIAL',
  approved: 'APPROVED',
  missing: 'MISSING',
  missingUrgent: 'MISSING URGENT',
  quantityUpdated: 'QUANTITY UPDATED',
  priceUpdated: 'PRICE UPDATED',
}

const orderDetails = [
  {
    id: uuidv4(),
    orderDetailsKey: 'Supplier',
    orderDetailsValue: 'EastCoast fruits & vegetables',
  },
  {
    id: uuidv4(),
    orderDetailsKey: 'Shipping Data',
    orderDetailsValue: 'Thus, Feb 10',
  },
  {
    id: uuidv4(),
    orderDetailsKey: 'Total',
    orderDetailsValue: '$ 15,3028.3',
  },
  {
    id: uuidv4(),
    orderDetailsKey: 'Category',
    orderDetailsValue: 'items',
  },
  {
    id: uuidv4(),
    orderDetailsKey: 'Department',
    orderDetailsValue: '333-555-000',
  },
  {
    id: uuidv4(),
    orderDetailsKey: 'Status',
    orderDetailsValue: 'Awaiting your approval',
  },
]

const itemsDetails = [
  {
    id: uuidv4(),
    name: 'Chicken Breast Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-photo/grilled-chicken-legs-with-spices_114579-53137.jpg?w=1060&t=st=1700763464~exp=1700764064~hmac=7396dfa8f77c410f4b2ad6b3661a83c9408f5f248b0042ae6cdd4fc5c212c8ee',
    price: 60,
    quantity: 6,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Avocado Fillets Boneless Marinat ed 6 Owns invivid',
    brand: 'Hormel Black Avocodo',
    imageUrl:
      'https://res.cloudinary.com/dnqs3qzaw/image/upload/v1700821786/Avocado_Hass_c1zpa5.jpg',
    price: 120,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'French Fries Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-vector/3d-realistic-french-fries-red-paper-box-mayochup-condiment-bowl_1441-2192.jpg?w=900&t=st=1700821985~exp=1700822585~hmac=e1b9004dc543c1532d0d808df67419e357f57d860326b25ad1714d20765eba01',
    price: 60,
    quantity: 5,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Avocado Fillets Boneless Marinat ed 6 Owns invivid',
    brand: 'Hormel Black Avocodo',
    imageUrl:
      'https://res.cloudinary.com/dnqs3qzaw/image/upload/v1700821786/Avocado_Hass_c1zpa5.jpg',
    price: 60,
    quantity: 7,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Avocado Fillets Boneless Marinat ed 6 Owns invivid',
    brand: 'Hormel Black Avocodo',
    imageUrl:
      'https://res.cloudinary.com/dnqs3qzaw/image/upload/v1700821786/Avocado_Hass_c1zpa5.jpg',
    price: 80,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Chicken Breast Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=996&t=st=1700822119~exp=1700822719~hmac=7f2164bb8715d93bb550ba36415a213c006b7eba006dde3ecaef9a1f61899b71',
    price: 60,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Chicken Breast Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-photo/grilled-chicken-legs-with-spices_114579-53137.jpg?w=1060&t=st=1700763464~exp=1700764064~hmac=7396dfa8f77c410f4b2ad6b3661a83c9408f5f248b0042ae6cdd4fc5c212c8ee',
    price: 60,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Avocado Fillets Boneless Marinat ed 6 Owns invivid',
    brand: 'Hormel Black Avocodo',
    imageUrl:
      'https://res.cloudinary.com/dnqs3qzaw/image/upload/v1700821786/Avocado_Hass_c1zpa5.jpg',
    price: 120,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'French Fries Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-vector/3d-realistic-french-fries-red-paper-box-mayochup-condiment-bowl_1441-2192.jpg?w=900&t=st=1700821985~exp=1700822585~hmac=e1b9004dc543c1532d0d808df67419e357f57d860326b25ad1714d20765eba01',
    price: 60,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
  {
    id: uuidv4(),
    name: 'Chicken Breast Fillets Boneless MatuumaMarinated 6 Owns invivid',
    brand: 'Hormel Black label mini',
    imageUrl:
      'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=996&t=st=1700822119~exp=1700822719~hmac=7f2164bb8715d93bb550ba36415a213c006b7eba006dde3ecaef9a1f61899b71',
    price: 60,
    quantity: 0,
    total: 0,
    status: itemStatus.initial,
  },
]

class Recco extends Component {
  state = {
    itemsList: [],
    triggerPopUp: false,
    currentMissingItem: {},
    editItem: {},
    toggleEditProduct: false,
  }

  componentDidMount() {
    this.updatingStateList()
  }

  updatingStateList = () => {
    this.setState({itemsList: [...itemsDetails]})
  }

  updateStateApprovedStatus = id => {
    const {itemsList} = this.state
    const updatedStatusList = itemsList.map(eachObject => {
      if (eachObject.id === id) {
        const newObject = {...eachObject, status: itemStatus.approved}
        return newObject
      }
      return eachObject
    })
    this.setState({itemsList: updatedStatusList})
  }

  updatingMissingStatus = id => {
    const {itemsList} = this.state
    const missingObject = itemsList.find(eachItem => eachItem.id === id)
    this.setState(prevState => ({
      triggerPopUp: !prevState.triggerPopUp,
      currentMissingItem: missingObject,
    }))
  }

  updatedMissingUrgent = id => {
    const {itemsList} = this.state
    const updatedStatusList = itemsList.map(eachObject => {
      if (eachObject.id === id) {
        const newObject = {...eachObject, status: itemStatus.missingUrgent}
        return newObject
      }
      return eachObject
    })
    this.setState({itemsList: updatedStatusList})
  }

  updateMissingNotUrgent = id => {
    const {itemsList} = this.state
    const updatedStatusList = itemsList.map(eachObject => {
      if (eachObject.id === id) {
        const newObject = {...eachObject, status: itemStatus.missing}
        return newObject
      }
      return eachObject
    })
    this.setState({itemsList: updatedStatusList})
  }

  updatingEdits = id => {
    const {itemsList} = this.state
    const missingObject = itemsList.find(eachItem => eachItem.id === id)
    this.setState(prevState => ({
      toggleEditProduct: !prevState.toggleEditProduct,
      editItem: missingObject,
    }))
  }

  updatingEditedProduct = product => {
    const {itemsList} = this.state
    const updatedStatusList = itemsList.map(eachObject => {
      if (eachObject.id === product.id) {
        const newObject = {...product, status: itemStatus.quantityUpdated}
        return newObject
      }
      return eachObject
    })
    this.setState({itemsList: updatedStatusList})
  }

  updatingTheSearchInput = event => {
    const searchValue = event.target.value
    const {itemsList} = this.state
    if (searchValue === '') {
      this.setState({itemsList: itemsDetails})
    } else {
      const newArray = itemsList.filter(eachObject =>
        eachObject.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      this.setState({itemsList: newArray})
    }
  }

  render() {
    const {
      itemsList,
      triggerPopUp,
      currentMissingItem,
      editItem,
      toggleEditProduct,
    } = this.state

    return (
      <>
        <Header className="make-fixed" />
        <div className="item-main-bg">
          <ul className="flx-row details-container">
            {orderDetails.map(eachItem => (
              <li
                className="each-details-container flx-column"
                key={eachItem.id}
              >
                <p className="order-details-key">{eachItem.orderDetailsKey}</p>
                <h1 className="order-values-names">
                  {eachItem.orderDetailsValue}
                </h1>
              </li>
            ))}
          </ul>
          <div className="listItems-main-bg">
            <div className="flx-row search-bg-container">
              <div className="search-container flx-row">
                <input
                  placeholder="Search..."
                  type="search"
                  className="search-input"
                  id="search-input"
                  onChange={this.updatingTheSearchInput}
                />
                <label htmlFor="search-input">
                  <IoIosSearch className="search-icon" aria-label="icon" />
                </label>
              </div>
              <div className="flx-row">
                <CustomButton addItem>Add item</CustomButton>
                <FiPrinter className="print-icon" />
              </div>
            </div>

            <ul className="flx-row products-heading-container">
              <li className="orders-para Product-name">Product Name</li>
              <li className="orders-para Brand">Brand</li>
              <li className="orders-para Price">Price</li>
              <li className="orders-para Quantity">Quantity</li>
              <li className="orders-para Total">Total</li>
              <li className="orders-para Status">Status</li>
            </ul>
            <ul>
              {itemsList.map(eachItem => (
                <EachItem
                  eachItemDetails={eachItem}
                  key={eachItem.id}
                  updateStateApprovedStatus={this.updateStateApprovedStatus}
                  updatingMissingStatus={this.updatingMissingStatus}
                  updatingEdits={this.updatingEdits}
                />
              ))}
            </ul>
          </div>
          {triggerPopUp && (
            <ReactMissingPopup
              updatedMissingUrgent={this.updatedMissingUrgent}
              updateMissingNotUrgent={this.updateMissingNotUrgent}
              currentMissingItem={currentMissingItem}
            />
          )}
        </div>
        <div>
          {toggleEditProduct && (
            <EditProduct
              editItem={editItem}
              updatingEditedProduct={this.updatingEditedProduct}
            />
          )}
        </div>
      </>
    )
  }
}

export default Recco
