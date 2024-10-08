/*import React, { Component } from 'react';
import JSON from './Info.json';        
import Projects from './Projects';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON               
    };
  }

  render() {
    return (
      <section className="min-h-screen bg-[#2C2C3A] py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#F39C12] mb-12">
            Projects
          </h1>
          <Projects prodlist={this.state.Products} />
        </div>
      </section>
    );
  }
}

export default ProjectList;


import React, { Component } from 'react';
import JSON from './Info.json';        
import Projects from './Projects';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON,
      hoveredCardId: null, // State to manage hovered card
    };
  }

  handleHover = (id) => {
    this.setState({ hoveredCardId: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredCardId: null });
  };

  render() {
    return (
      <section className="min-h-screen bg-[#2C2C3A] py-16 px-4" id='project'>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#F39C12] mb-12">
            Projects
          </h1>
          <Projects
            prodlist={this.state.Products}
            hoveredCardId={this.state.hoveredCardId}
            onHover={this.handleHover}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
      </section>
    );
  }
}

export default ProjectList;


import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JSON from './Info.json';        
import Projects from './Projects';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON,
      hoveredCardId: null,
    };
  }

  componentDidMount() {
    AOS.init({ duration: 1000 }); // Initialize AOS and set animation duration to 1 second
  }

  handleHover = (id) => {
    this.setState({ hoveredCardId: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredCardId: null });
  };

  render() {
    return (
      <section className="min-h-screen bg-[#2C2C3A] py-16 px-4" id='project'>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#F39C12] mb-12">
            Projects
          </h1>
          <Projects
            prodlist={this.state.Products}
            hoveredCardId={this.state.hoveredCardId}
            onHover={this.handleHover}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
      </section>
    );
  }
}

export default ProjectList;*/

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JSON from './Info.json';
import Projects from './Projects';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      Products: JSON,
      hoveredCardId: null,
    };
  }

  componentDidMount() {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second duration
  }

  handleHover = (id) => {
    this.setState({ hoveredCardId: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredCardId: null });
  };

  render() {
    return (
      <section className="min-h-screen py-16 px-4 bg-[#ECF0F1] dark:bg-[#2C2C3A]" id="project">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#F39C12] dark:text-[#F39C12] mb-12">
            Projects
          </h1>

          
          <Projects
            prodlist={this.state.Products}
            hoveredCardId={this.state.hoveredCardId}
            onHover={this.handleHover}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
      </section>
    );
  }
}

export default ProjectList;


