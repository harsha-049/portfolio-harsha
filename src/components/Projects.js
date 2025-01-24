import React from 'react';

function Projects({ state, dispatch }) {
  const handleAddProject = () => {
    const newProject = {
      id: state.projects.length + 1,
      name: `New Project ${state.projects.length + 1}`,
      description: 'Description for the new project.',
    };
    dispatch({ type: 'ADD_PROJECT', payload: newProject });
  };

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {state.projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_PROJECT', payload: project.id })}>
              Remove Project
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProject}>Add Project</button>
    </section>
  );
}

export default Projects;
