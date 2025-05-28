import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className={styles.sectionTitle}>Contatos</h1>
        <form action='https://formspree.io/f/xwpogrvq' method='post'>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Nome
                </label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Nome" 
                required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="E-mail" hidden>
                    E-mail
                </label>
                <input 
                type="email" 
                name="e-mail" 
                id="email" 
                placeholder="E-mail" 
                required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                   Mensagem
                </label>
                <textarea 
                type="text" 
                name="message" 
                id="message" 
                placeholder="Envie-me uma mensagem" 
                required
                ></textarea>
            </div>
            <input type="submit" className="hover btn" value="Enviar"/>
        </form>
    </section>
  )
}

export default Contact;