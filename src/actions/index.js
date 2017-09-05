// define your actions here!

export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: {
      title: movie.title,
      year: movie.year
    }
  }
}

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: movie.title,
    }
  }
}

export function updateUsername(name) {
  return {
    type: "UPDATE_USERNAME",
    username: name,
  }
}

export function resetUsername() {
  return {
    type: "RESET_USERNAME",
    username: "default",
  }
}


