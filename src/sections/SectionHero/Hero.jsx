import styles from './HeroStyles.module.css';
import heroImg from '../../assets/perfil-nelson-ia.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import whatsappLight from '../../assets/whatsapp-light.svg';
import whatsappDark from '../../assets/whatsapp-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/theme-context-and-hook.jsx';

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Foto de perfil de Nelson Martins"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Trocar o modo de cor"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
            Nelson 
            <br /> 
            Martins
        </h1>
        <h2>Desenvolvedor Front-end</h2>
        <span>
          <a href="https://api.whatsapp.com/send/?phone=83996442273&text&type=phone_number&app_absent=0" target='_blank'>
                <img src={whatsappIcon} alt="Ícone do Linkedin" className={styles.imgIcon}/>
          </a>
          <a href="https://instagram.com/nelsomartinss" target='_blank'>
                <img src={instagramIcon} alt="Ícone do GitHub" className={styles.imgIcon}/>
            </a>
            <a href="https://github.com/nelsomartinss" target='_blank'>
                <img src={githubIcon} alt="Ícone do GitHub" className={styles.imgIcon}/>
            </a>
             <a href="https://linkedin.com/in/nelsomartinss" target='_blank'>
                <img src={linkedinIcon} alt="Ícone do Linkedin" className={styles.imgIcon}/>
            </a>
        </span>
        <p className={styles.description}>
            Movido pela paixão em construir experiências digitais de ponta
        </p>
        <a href="https://docs.google.com/document/d/1BvbbaeXrc7-rScfzMKtD69Kz8aS1dbJcQfaOGbyhbxY/edit?usp=sharing" target='_blank'>
            <button className="hover">
                Currículo
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;