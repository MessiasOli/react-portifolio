import Card from '../../components/Card'

function Project({project}) {
  return (
    <Card className="portfolio__project">
      <div className='portfolio__project-image'>
        <img src={project.image} alt="Portfolio Projects" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} className='btn sm' target="_blank" rel="nooper noreferrer">Demo</a>
        <a href={project.demo} className='btn sm primary' target="_blank" rel="nooper noreferrer">Github</a>
      </div>
    </Card>
  )
}

export default Project