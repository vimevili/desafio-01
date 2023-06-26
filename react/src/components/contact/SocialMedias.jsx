import styles from './SocialMedias.module.css';

const SocialMedias = () => {
  const socialMedias = [
    { img: 'src/assets/img/facebook.svg', ref: 'www.facebook.com' },
    { img: 'src/assets/img/instagram.svg', ref: 'www.instagram.com' },
    { img: 'src/assets/img/twitter.svg', ref: 'www.twitter.com' },
  ];
  return (
    <ul className={styles.mediasContainer}>
      {socialMedias.map((socialMedia) => (
        <li key={socialMedia.index} className={styles.mediaItem}>
          <a href={socialMedia.ref}>
            <img src={socialMedia.img} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedias;
