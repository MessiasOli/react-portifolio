import Project from "./Project"

function Projects({projects}) {
  return (
    <div className="portfolio__projects" data-aos="fade-up">
      {
        projects.map(project => {
          return <Project key={project.id} project={project} />
        })
      }
    </div>
  )
}

export default Projects