import React from 'react';
import './Projects.css';
// import todo from '../../photos/to do.jpg'
// import calendar from '../../photos/cal.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'To Do List',
      description: 'A simple and intuitive tool for managing daily tasks. Add, edit, and delete tasks with ease. Stay organized and track your to-dos efficiently.',
      image: "https://thumbs.dreamstime.com/b/to-do-list-icon-blue-color-clipboard-checklist-vector-graphics-various-use-187733011.jpg",
      link: 'https://todo-list-omega-olive.vercel.app/'
    },
    {
      title: 'Calendar',
      description: 'A simple and clean calendar application to help you view your schedule. Navigate through days, weeks, and months with ease.',
      image: "https://www.nicepng.com/png/detail/168-1681464_calendar-image-png-calendar-clipart-blue-pencil-and.png",
      link: 'https://calendar-gules-five.vercel.app/'
    },
    {
      title: 'Food Shop',
      description: 'An interactive online food shop where users can browse, select, and order food items. The application features a modern, user-friendly interface for an enjoyable shopping experience..',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSto-ukprmWT4_3vtp8dL5s3iRziv92f53sbA&s",
      link: 'https://shopping-orpin-three.vercel.app/'
    },
    {
      title: 'Greenshop',
      description: 'A modern online store for eco-friendly products. Users can browse, select, and purchase items with ease..',
      image: "https://images.vexels.com/content/135459/preview/blue-floral-icon-c2c57d.png",
      link: 'https://api-shop-three.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="containerProject">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img  src={project.image} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
