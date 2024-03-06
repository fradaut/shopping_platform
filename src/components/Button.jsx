import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-pink-200 hover:bg-pink-300 active:bg-pink-400 px-3 py-1 rounded">
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Button
