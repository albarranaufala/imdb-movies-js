fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=inception')
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        renderMovies(movies);
    })
    .catch(error => console.error(error));

function renderMovies(movies){
    const containerMovies = document.querySelector('.container-movies');
    movies.forEach(movie => {
        containerMovies.innerHTML += `
            <div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary">Show details</a>
                    </div>
                </div>
            </div>
        `
    });
}