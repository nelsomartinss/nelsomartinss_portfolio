import styles from './Projects.styles.module.css';
import linktree from '../../assets/linktree-soma-studio.png';
import todolistApp from '../../assets/todo-list-app.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return <section id='projects' className={styles.container}>
    <h1 className={styles.sectionTitle}>Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard 
      src={todolistApp} 
      link='https://todolistnelsonmartins.netlify.app/'
      h3='To-do List'
      />
      <ProjectCard 
      src={linktree} 
      link='https://somaestudiolinks.netlify.app/'
      h3='Linktree - Soma Estúdio'
      />
    </div>
  </section>
}

export default Projects;