import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RxCross2} from 'react-icons/rx'

import './index.css'

class EditProduct extends Component {
  state = {product: [], updatedPrice: 0, updatedQuantity: 0, updatedTotal: 0}

  componentDidMount() {
    this.updatingItemToState()
  }

  updatingItemToState = () => {
    const {editItem} = this.props
    this.setState({
      product: editItem,
      updatedPrice: editItem.price,
      updatedQuantity: editItem.quantity,
    })
  }

  getPrice = event => {
    this.setState({updatedPrice: event.target.value})
  }

  getQuantity = event => {
    this.setState({updatedQuantity: event.target.value})
  }

  priceOnBlur = () => {
    const {editItem} = this.props
    const {updatedQuantity} = this.state
    const totalPrice = editItem.price * updatedQuantity
    this.setState({updatedTotal: totalPrice})
  }

  updateNewValueSubmit = event => {
    event.preventDefault()
    const {product, updatedQuantity, updatedPrice, updatedTotal} = this.state
    const {updatingEditedProduct} = this.props
    const updatedProduct = {
      ...product,
      price: updatedPrice,
      quantity: updatedQuantity,
      total: updatedTotal,
    }
    updatingEditedProduct(updatedProduct)
  }

  onIncrement = () => {
    this.setState(prevState => ({
      updatedQuantity: prevState.updatedQuantity + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      updatedQuantity:
        prevState.updatedQuantity > 0 ? prevState.updatedQuantity - 1 : 0,
    }))
  }

  render() {
    const {updatedQuantity, updatedPrice, product, updatedTotal} = this.state
    const {imageUrl, name} = product
    return (
      <Popup open modal closeOnDocumentClick className="missing-item-bg">
        {close => (
          <form type="submit" className="edit-main-bg">
            <div className="card-bg-edit flx-column">
              <div className="flex-row cross-container">
                <button type="button" className="edit-close" onClick={close}>
                  <RxCross2 aria-label="icon" />
                </button>
              </div>

              <div className="Heading-bg flx-row">
                <h1 className="product-name">{name}</h1>
              </div>
              <div className="image-price-quantity-container">
                <div>
                  <img src={imageUrl} alt={name} className="edit-image" />
                </div>
                <div className="price-quantity-div">
                  <p className="price-para">price</p>
                  <p className="price-para">Quantity</p>
                  <p className="price-para">Total</p>
                </div>
                <div className="inputs-div">
                  <div>
                    <input
                      className="price-input"
                      onChange={this.getPrice}
                      value={updatedPrice}
                    />
                    <span>/6</span>
                  </div>
                  <div className="flx-row plus-container">
                    <button
                      type="button"
                      className="plus-button"
                      onClick={this.onDecrement}
                    >
                      -
                    </button>
                    <input
                      className="price-input"
                      onChange={this.getQuantity}
                      value={updatedQuantity}
                      onBlur={this.priceOnBlur}
                    />
                    <button
                      type="button"
                      className="plus-button"
                      onClick={this.onIncrement}
                    >
                      +
                    </button>
                    <span>x6</span>
                  </div>
                  <div>
                    <p>{updatedTotal}</p>
                  </div>
                </div>
              </div>
              <p className="Choose-Reason">
                Choose Reason<span className="optional">( Optional)</span>
              </p>
              <ul className="flx-row">
                <li className="review">Missing product</li>
                <li className="review">Price is not the same</li>
                <li className="review">Quantity is not the Same</li>
                <li className="review">Other</li>
              </ul>
              <div className="flx-row edit-send-bg-container">
                <button type="button" className="cancel" onClick={close}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="send"
                  onClick={this.updateNewValueSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        )}
      </Popup>
    )
  }
}
export default EditProduct
