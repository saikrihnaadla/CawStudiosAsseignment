import Popup from 'reactjs-popup'

import {RxCross2} from 'react-icons/rx'

import './index.css'

const ReactMissingPopup = props => {
  const {
    updatedMissingUrgent,
    updateMissingNotUrgent,
    currentMissingItem,
  } = props

  const yesMissingUrgent = () => {
    updatedMissingUrgent(currentMissingItem.id)
  }
  const missingNotUrgent = () => {
    updateMissingNotUrgent(currentMissingItem.id)
  }
  return (
    <Popup open modal closeOnDocumentClick className="missing-item-bg">
      {close => (
        <div className="missing-item-bg">
          <div className="card-bg flx-column">
            <div className="Heading-bg flx-row">
              <h1 className="missing-heading">Missing Product</h1>
              <button type="button" className="close" onClick={close}>
                <RxCross2 aria-label="icon" />
              </button>
            </div>
            <div className="popup-content">
              <p>
                <span>Is </span>
                {currentMissingItem.name} <span> Urgent?</span>
              </p>
            </div>
            <div className="yes-no-container">
              <button
                type="button"
                className="close"
                onClick={missingNotUrgent}
              >
                No
              </button>
              <button
                type="button"
                className="close"
                onClick={yesMissingUrgent}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  )
}
export default ReactMissingPopup
