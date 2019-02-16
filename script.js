var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        img: 'images/krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.',
        img: 'images/pulp-fiction.jpg'
    },
    {
        id: 4,
        title: 'Mad Max: Na drodze gniewu',
        desc: 'Max przyłącza się do grupy uciekinierek z Cytadeli - osady rządzonej przez Wiecznego Joe. Tyran wraz ze swoją bandą rusza za nimi w pościg.',
        img: 'images/mad-max.jpg'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc)
    }
})

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', { className: 'movie' },
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesc, { desc: this.props.movie.desc }),
                React.createElement('img', { src: this.props.movie.img })
            )
        )
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        return (
            React.createElement('ul', {}, this.props.movies.map(function (movie) {
                return React.createElement(Movie, { key: movie.id, movie: movie })
            }))
        )
    }
});

var element = React.createElement('div', {},
    React.createElement(MovieList, { className: 'movie-list', movies: movies })
);

ReactDOM.render(element, document.getElementById('app'));