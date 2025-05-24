import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/theme-context-and-hook.jsx';

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

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
          <a href="https://instagram.com/nelsomartinss" target='_blank'>
                <img src={instagramIcon} alt="Ícone do GitHub" />
            </a>
            <a href="https://github.com/nelsomartinss" target='_blank'>
                <img src={githubIcon} alt="Ícone do GitHub" />
            </a>
             <a href="https://linkedin.com/in/nelsomartinss" target='_blank'>
                <img src={linkedinIcon} alt="Ícone do Linkedin" />
            </a>
        </span>
        <p className={styles.description}>
            Movido pela paixão em construir experiências digitais de ponta
        </p>
        <a href={CV} download>
            <button className={styles.hover}>
                Currículo
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;