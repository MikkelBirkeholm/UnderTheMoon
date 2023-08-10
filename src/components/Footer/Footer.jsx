import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <p className={styles.subscribeText}>Subscribe to Newsletter</p>
        <form
          className={styles.subscribeForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Name"
          />
          <button className={styles.subscribeButton}>Sign Up</button>
        </form>
      </div>
      <div className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <ul>
          <li>Hjem</li>
          <li>Om os</li>
          <li>Prisliste</li>
          <li>Booking</li>
          <li>Newsletter</li>
          <li>Kontakt</li>
        </ul>
        <br></br>
        <h2>Follow us</h2>
        <img
          src="https://media.tenor.com/gWs0s8QlsUgAAAAC/pepe-peppo.gif"
          style={{ width: '10%' }}
        />
      </div>
      <div className={styles.findUs}>
        <h2>Find Us</h2>
        <ul>
          <li>WhatsApp</li>
          <li>+45 23 43 43 43</li>
          <li>Phone</li>
          <li>+45 23 43 43 43</li>
          <li>Address</li>
          <li>Supergatan 56</li>
          <li>Oslo, Norway</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
