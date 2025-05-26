function ProjectCard({ src, link, h3, p }) {
  return (
        <a href={link} target='_blank' className='card'>
            <img className="hover" src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
            <div className='descriptionCard'>
              <p>{p}</p>
            </div>
        </a>
  )
}

export default ProjectCard;