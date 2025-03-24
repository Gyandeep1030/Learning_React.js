import React from 'react';
import styles from './PortTest.module.css';

function Port(props) {
    console.log(props)
    return ( 
        <div className={styles.mainBody}>
            <section className={styles.Section}>
                <div className={styles.container}>
                  <h2 className={styles.title}>Login to ZEE5</h2>
                  <p className={styles.subtitle}>
                    Login to continue enjoying uninterrupted video and personalized experience.
                  </p>

                  <div className={styles.socialButtons}>
                    <button className={styles.iconButton}>
                      <img src="public\google.png" alt="Google" className={styles.icon} />
                    </button>
                    <button className={styles.iconButton}>
                      <img src="public\Facebook.png" alt="Facebook" className={styles.icon} />
                    </button>
                    <button className={styles.iconButton}>
                      <img src="public\tweerter.png" alt="Twitter" className={styles.icon} />
                    </button>
                    <button className={styles.iconButton}>
                      <img src="public\apple.jpg" alt="Apple" className={styles.icon} />
                    </button>
                  </div>

                  <div className={styles.dividerContainer}>
                    <hr className={styles.divider} />
                    <span className={styles.orText}>or</span>
                    <hr className={styles.divider} />
                  </div>

                  <input
                    type="text"
                    placeholder="Enter email or mobile number"
                    className={styles.inputField}
                  />

                  <button className={styles.loginButton} disabled>
                    Login
                  </button>

            
                  <p className={styles.registerText}>
                    New to ZEE5?{" "}
                    <a href="#" className={styles.registerLink}>
                      Register
                    </a>
                  </p>
                </div>
                
            </section>
        </div>
     );
}

export default Port;





