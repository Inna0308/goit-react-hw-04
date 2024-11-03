import styles from "./ImageCard.module.css";

const ImageCard = ({ urls, likes, alt_description, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={urls.small} alt={alt_description} />
      <p className={styles.description}>❤️ {likes} likes</p>
    </div>
  );
};

export default ImageCard;
