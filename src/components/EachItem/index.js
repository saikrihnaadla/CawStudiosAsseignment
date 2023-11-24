import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'

import './index.css'

import {CustomButton} from '../styledComponents'

const itemStatus = {
  initial: 'INITIAL',
  approved: 'APPROVED',
  missing: 'MISSING',
  missingUrgent: 'MISSING URGENT',
  quantityUpdated: 'QUANTITY UPDATED',
  priceUpdated: 'PRICE UPDATED',
}

const EachItem = props => {
  const {
    eachItemDetails,
    updateStateApprovedStatus,
    updatingMissingStatus,
    updatingEdits,
  } = props
  const {
    name,
    brand,
    imageUrl,
    price,
    quantity,

    id,
    status,
  } = eachItemDetails

  const totalPrice = price * quantity

  const getItemId = () => {
    updateStateApprovedStatus(id)
  }

  const getMissingId = () => {
    updatingMissingStatus(id)
  }

  const editProduct = () => {
    updatingEdits(id)
  }

  const customButtonReturn = () => {
    switch (status) {
      case itemStatus.approved:
        return (
          <CustomButton approved type="button">
            Approved
          </CustomButton>
        )
      case itemStatus.missing:
        return (
          <CustomButton missing type="button">
            missing
          </CustomButton>
        )
      case itemStatus.missingUrgent:
        return (
          <CustomButton missingUrgent type="button">
            Missing Urgent
          </CustomButton>
        )
      case itemStatus.quantityUpdated:
        return (
          <CustomButton approved type="button">
            Quantity updated
          </CustomButton>
        )
      default:
        return null
    }
  }

  const switchingRightColors = () => {
    switch (status) {
      case itemStatus.approved:
        return (
          <TiTick aria-label="icon" className="tick-crossIcon green-color" />
        )
      case itemStatus.quantityUpdated:
        return (
          <TiTick aria-label="icon" className="tick-crossIcon green-color" />
        )
      default:
        return <TiTick aria-label="icon" className="tick-crossIcon " />
    }
  }

  const switchingCrossColors = () => {
    switch (status) {
      case itemStatus.missing:
        return (
          <RxCross2 aria-label="icon" className="tick-crossIcon orange-color" />
        )
      case itemStatus.missingUrgent:
        return (
          <RxCross2 aria-label="icon" className="tick-crossIcon red-color" />
        )
      default:
        return <RxCross2 aria-label="icon" className="tick-crossIcon " />
    }
  }

  return (
    <li>
      <div className="each-Item-main-bg">
        <ul className="flx-row each-Item-main-bg">
          <li className="Item-para Product-name">
            <div className=" flx-row product-name-image-container">
              <img className="product-image" src={imageUrl} alt={name} />
              <p> {name}</p>
            </div>
          </li>
          <li className="Item-para Brand">{brand}</li>
          <li className="Item-para Price">{price}$</li>
          <li className="Item-para Quantity">{quantity}</li>
          <li className="Item-para Total">{totalPrice}$</li>
          <li className="Item-para Status status-bg-container ">
            <div className="flx-row all-buttons-container Status">
              <div className="approved-status-button">
                {customButtonReturn()}
              </div>
              <div className="flx-row tik-buttons-container">
                <button
                  className="right-wrong-button"
                  type="button"
                  onClick={getItemId}
                >
                  {switchingRightColors()}
                </button>
                <button
                  type="button"
                  className="right-wrong-button"
                  onClick={getMissingId}
                >
                  {switchingCrossColors()}
                </button>
                <button
                  type="button"
                  className="right-wrong-button"
                  onClick={editProduct}
                >
                  Edit
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default EachItem
