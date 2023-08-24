import './portfolio.css'
import data from './data'
import ProjectsCategories from './ProjectsCategories'
import Projects from "./Projects"
import { useState } from 'react'

function Portfolio() {
  const [projects, setProjects] = useState(data)

  const categories = data.map(item => item.category)
  const uniqueCategoires = ["all", ...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data)
      return
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects)
  }

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to togle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategoires} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio