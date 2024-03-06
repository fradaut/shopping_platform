import PropTypes from 'prop-types'

import Button from './Button'

const Modal = ({ onClose, children }) => {
  return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-50 rounded-lg p-6 flex flex-col">
        <div className='mb-4 flex-1'>{children}</div>
        <div className="flex justify-end">
          <Button onClick={onClose}>確定</Button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Modal