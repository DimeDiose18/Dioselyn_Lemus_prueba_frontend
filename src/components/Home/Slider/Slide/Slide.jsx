import styles from './Slide.module.scss'
import PropTypes from "prop-types";

const Slide = ({ info }) => {
  const { titulo, autor, imagen, descripcion, etiquetas } = info;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={titulo} className={styles.img} />
      </div>
      <h2 className={styles.title}>{titulo}</h2>
      <p>{descripcion}</p>
      <div className={styles.tagContainer}>
        {etiquetas.map((etiqueta, index) => (
          <p key={index}>{etiqueta.toUpperCase()}</p>
        ))}
      </div>
      <span><strong>Autor: </strong>{autor}</span>
    </div>
  );
};

Slide.propTypes = {
  info: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    imagen: PropTypes.string,
    descripcion: PropTypes.string,
    etiquetas: PropTypes.arrayOf(PropTypes.string),
  }),
};

export { Slide };
