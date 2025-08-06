import styles from './ProjectsStyles.module.css';
import linktree from '../../assets/linktree-soma-studio.png';
import todolistApp from '../../assets/todo-list-app.png';
import sistemaCadastro from '../../assets/sistemaCadastro.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return <section id='projects' className={styles.container}>
    <h1 className={styles.sectionTitle}>Projetos</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard 
      src={linktree} 
      link='https://somaestudiolinks.netlify.app/'
      h3='Linktree'
      p='Criei um Linktree personalizado para o Soma Estúdio com identidade visual própria e diferente do convencional.'
      />

      <ProjectCard 
      src={todolistApp} 
      link="https://todolistnelsonmartins.netlify.app/"
      h3='To-do List'
      p='Uma To-do List que utiliza o LocalStorage do navegador para restaurar as tarefas criadas e marcadas.'
      />
      
      <ProjectCard 
      src={sistemaCadastro} 
      link='https://cadastroelistagemdeprodutos.netlify.app/'
      h3='Cadastro de Produtos'
      p='Sistema que cadastra e depois lista os produtos de acordo com seu valor.'
      />
    </div>
  </section>
}

export default Projects;