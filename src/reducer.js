export const initialState = {
    projects: [
      { id: 1, name: 'Portfolio Website', description: 'A personal portfolio website.' },
      { id: 2, name: 'E-commerce App', description: 'An online shopping platform.' },
      { id: 3, name: 'Blog Platform', description: 'A platform to create and share blogs.' },
    ],
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_PROJECT':
        return { projects: [...state.projects, action.payload] };
      case 'REMOVE_PROJECT':
        return { projects: state.projects.filter((project) => project.id !== action.payload) };
      default:
        return state;
    }
  }
  
  export default reducer;
  