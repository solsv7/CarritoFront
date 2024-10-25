import * as React from "react";
import styles from './PlantShop.module.css';

function PlantShop() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.contentContainer}>
            <h1 className={styles.mainTitle}>
              Naturaleza y Estilo
            </h1>
            <p className={styles.description}>
              Descubre una colección de plantas de interior que complementan perfectamente tu hogar
            </p>
            <button className={styles.ctaButton}>
              Comprar Ahora
            </button>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a424d8df574cb279e0b4555d16b472ad932e456c7c608935721123c5dd31422?placeholderIfAbsent=true&apiKey=be8d47492ba34f5496a6e8a6c25f8fff" 
              className={styles.decorativeIcon}
              alt=""
            />
          </div>
        </div>
        <div className={styles.imageContent}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98f0aa40f650cfc65820e01488c545a2a67b2cacddc66b3922e1ecedcb4e898?placeholderIfAbsent=true&apiKey=be8d47492ba34f5496a6e8a6c25f8fff" 
            className={styles.heroImage}
            alt="Colección de plantas de interior"
          />
        </div>
      </div>
    </section>
  );
}

export default PlantShop;