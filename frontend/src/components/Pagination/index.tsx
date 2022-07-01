import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {

    return (

        <div className="projetox-pagination-container">
            <div className="projetox-pagination-box">
                <button className="projetox-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="projetox-pagination-button" disabled={false} >
                    <Arrow className="projetox-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;