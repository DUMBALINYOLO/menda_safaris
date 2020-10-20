import React from 'react';
import { Link } from 'react-router-dom';



const FinishedProjectCard = (props) => {
    return (
        <div className='card' >
            <h3 className='card__title'>{props.name}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={props.image} alt='' />
            </div>
            <p className='card__location'>{props.project_areas}</p>
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Start Date: {props.start_date}</p>
                    <p className='card__info'>End Date: {props.end_date}</p>
                    <p className='card__info'>Duration: {props.duration}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{props.status}</p>
                    <p className='card__hometype'>{props.beneficiary_population}</p>
                </div>
            </div>
            <Link className='card__link' to={`/finishedprojects/${props.id}`}>View Project</Link>

        </div>
    );
};



export default FinishedProjectCard;
