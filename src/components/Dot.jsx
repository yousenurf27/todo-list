import PropTypes from 'prop-types'

const Dot = ({priority}) => {
  if (priority === "very-high") {
    return (
      <span className="p-1 rounded-full bg-red-600 mx-3"></span>
    )
  } else if (priority === "high") {
    return (
      <span className="p-1 rounded-full bg-orange-600 mx-3"></span>
    )
  } else if (priority === "medium") {
    return (
      <span className="p-1 rounded-full bg-green-600 mx-3"></span>
    )
  } else if (priority === "low") {
    return (
      <span className="p-1 rounded-full bg-blue-600 mx-3"></span>
    )
  } else if (priority === "very-low") {
    return (
      <span className="p-1 rounded-full bg-indigo-900 mx-3"></span>
    )
  }
}

Dot.propTypes = {
  priority: PropTypes.string
}

export default Dot