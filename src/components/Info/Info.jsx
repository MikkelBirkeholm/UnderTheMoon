import { ImageBox } from './ImageBox'
import styles from './Info.module.scss'

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.centeredText}>
        <h1>Under the moon - New style</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper
          feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut
          praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra
          sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue
          ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum
          quam faucibus amet platea congue. Amet condimentum faucibus ultrices
          nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae
          proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis
          in. Aliquam .
        </p>
        <button>LÆS MERE</button>
      </div>
      <div className={styles.imageRow}>
        <ImageBox image="nibba.jpg">
          <h2>One 2 One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus
            aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus
            imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia
            imperdiet nisi nunc vel ut convallis a est scelerisque.
          </p>
          <button>BOOK TID</button>
        </ImageBox>
        <ImageBox image="blue-curls.jpg">
          <h2>Loyalty Free</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus
            aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus
            imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia
            imperdiet nisi nunc vel ut convallis a est scelerisque.
          </p>
          <button>BOOK TID</button>
        </ImageBox>
      </div>
    </div>
  )
}

export default Info
