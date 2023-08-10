import styles from './ImageGrid.module.scss'

const images = [
  'img1.png',
  'img2.png',
  'img3.png',
  'img4.png',
  'img5.png',
  'img6.png',
  'img7.png',
  'img8.png',
  'img9.png',
  'img10.png',
  'img11.png',
  'img12.png',
]

export const ImageGrid = () => {
  return (
    <div className={styles.gridSection}>
      <a
        href=""
        target="_blank"
      >
        <h3>FOLLOW US ON INSTAGRAM</h3>
      </a>
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <img
            src={image}
            key={image}
            alt="image"
          />
        ))}
      </div>
    </div>
  )
}
