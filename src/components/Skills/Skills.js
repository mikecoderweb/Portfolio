import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://freeiconshop.com/wp-content/uploads/edd/html-flat.png' },
    { name: 'CSS', icon: 'https://freeiconshop.com/wp-content/uploads/edd/css-flat.png' },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/136/136530.png' },
    { name: 'ReactJS', icon: 'https://justinmahar.gallerycdn.vsassets.io/extensions/justinmahar/react-icons-snippets/1.0.5/1673483357431/Microsoft.VisualStudio.Services.Icons.Default' },
    { name: 'Tailwind CSS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s' },
    { name: 'Git Version Control', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
    { name: 'Bootstrap', icon: 'https://icons.getbootstrap.com/assets/img/icons-hero.png' },
    { name: 'Redux', icon: 'https://w7.pngwing.com/pngs/95/797/png-transparent-redux-hd-logo-thumbnail.png' },
    { name: 'Sass', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8vwYNSgvlaRDn2dOEZbng_lyeXdNC-pn2A&s' },
    { name: 'Word', icon: 'https://png.pngtree.com/element_our/sm/20180627/sm_5b33460fe6357.jpg' },
    { name: 'Excel', icon: 'https://i.pinimg.com/736x/bd/b6/ab/bdb6abe62ffe8ac78bff9ae3fb552b5e.jpg' },
    { name: 'PowerPoint', icon: 'https://p7.hiclipart.com/preview/742/145/200/microsoft-powerpoint-computer-icons-ppt-presentation-microsoft-powerpoint-network-icon.jpg' },
    { name: 'Figma', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s' },
    { name: 'Tilda', icon: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/tilda_logo_icon_147224.png' },
    { name: 'Tilda', icon: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/tilda_logo_icon_147224.png' },
    // Add more skills here
  ];

  return (
    <section id="skills" className="skills">
      <div className="containerSkills">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
