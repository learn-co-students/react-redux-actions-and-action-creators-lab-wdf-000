// define your actions here!

function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}


function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie: movie
  }
}

function updateUsername(username) {
  return {
    type: 'UPDATE_USERNAME',
    username: username
  }
}


function resetUsername() {
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}

export { addMovie, deleteMovie, updateUsername, resetUsername }
