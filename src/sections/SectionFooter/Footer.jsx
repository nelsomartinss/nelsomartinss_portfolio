import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p>
        &copy; 2025 - <a 
        href="https://linkedin.com/in/nelsomartinss" 
        target='_blank'>
        Nelson Martins
        </a>. 
        <br />
        Todos os direitos reservados.
      </p>

    </section>
  )
}

export default Footer;