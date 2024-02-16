import PropTypes from "prop-types";

const IconArrowUp = ({color, width, height}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={{ fill: color }}>
      <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" />
    </svg>
  );

  IconArrowUp.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }
  
  export { IconArrowUp };