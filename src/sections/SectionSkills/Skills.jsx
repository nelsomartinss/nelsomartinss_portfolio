import styles from '../SectionSkills/Skills.styles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
  <section id="skills" className={styles.container}>
    <h1 className='sectionTitle'
    >Habilidades</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='HTML'/>
      <SkillList src={checkMarkIcon} skill='CSS'/>
      <SkillList src={checkMarkIcon} skill='JavaScript'/>
      <SkillList src={checkMarkIcon} skill='TypeScript'/>
      <SkillList src={checkMarkIcon} skill='Node'/>
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='ReactJs'/>
      <SkillList src={checkMarkIcon} skill='NextJs'/>
      <SkillList src={checkMarkIcon} skill='Bootstrap'/>
      <SkillList src={checkMarkIcon} skill='TailwindCSS'/>
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='Webpack'/>
      <SkillList src={checkMarkIcon} skill='Babel'/>
      <SkillList src={checkMarkIcon} skill='Redux'/>
      <SkillList src={checkMarkIcon} skill='Jest'/>
      <SkillList src={checkMarkIcon} skill='Git'/>
    </div>
    </section>
  )
}

export default Skills;