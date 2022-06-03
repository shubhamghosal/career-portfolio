import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="info">{education.graduated}</em><span>&bull;</span><em className='info'>{education.grade}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var training = this.props.data.training.map(function (training) {
        return <div key={training.school}><h3>{training.school}</h3>
          <p className="info">{training.title}<span>&bull;</span> <em className="date">{training.years}</em></p>
          <p>{training.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
      var certifications = this.props.data.certifications.map(function (certifications) {
        var certImage = 'images/certifications/' + certifications.image;
        return <div key={certifications.name} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={certifications.url} title={certifications.name}>
              <img alt={certifications.name} src={certImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{certifications.name}</h5>
                  <p>{certifications.description}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Trainings</span></h1>
          </div>

          <div className="nine columns main-col">
            {training}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>
          <div className="twelve columns collapsed">
            <p>Some of my professional certifications
            </p>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {certifications}
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
