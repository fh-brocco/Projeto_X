import MovieStars from 'components/MovieStars';
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;


    return (

        <div className="projetox-score-container">
            <p className="projetox-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="projetox-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieScore;