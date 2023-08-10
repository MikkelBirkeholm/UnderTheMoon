/* eslint-disable react/prop-types */
import styles from './Info.module.scss'

export const ImageBox = ({ image, children }) => {
  const boxStyles = {
    backgroundImage: `url(${image})`,
  }

  return (
    <div
      className={styles.imageBox}
      style={boxStyles}
    >
      <div className={styles.imageText}>
        <div className={styles.overlay}>{children}</div>
      </div>
    </div>
  )
}
