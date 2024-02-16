import PropTypes from "prop-types";
import styles from "./InfoFooter.module.scss";



const InfoFooter = ({ info }) => {
  const {title, description} = info;
  return (
    <div className={styles.card}>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );
};

InfoFooter.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export { InfoFooter };
