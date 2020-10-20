import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';

import './Cards.css';

const FinishedProject = (props) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        const id = props.match.params.id;


        axios.get(`https://www.cyvat.org.zw/api/pages/finished-projects/${id}`)
        .then(res => {
            setProject(res.data);
            
        })
        .catch(err => {

        });
    }, [props.match.params.id]);

    const displayInteriorImages = () => {
        let images = [];

        images.push(
            <div key={1} className='row'>
                <div className='col-1-of-3'>
                    {
                        project.image_1 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_2 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_3 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={2} className='row'>
                <div className='col-1-of-3'>
                    {
                        project.image_4 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_5 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_6 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={3} className='row'>
                <div className='col-1-of-3'>
                    {
                        project.image_7 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_7} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_8 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_8} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        project.image_9 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_9} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={4} className='row'>
                <div className='col-1-of-3'>
                    {
                        project.image_10 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={project.image_10} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                
            </div>
        );  

        return images;
    };

    
    

    return (
        <div className='cards'>
            <div className='listingdetail'>
                <Helmet>
                    <title>Finished Project | {`${project.name}`}</title>
                    <meta
                        name='description'
                        content='Project detail'
                    />
                </Helmet>
                <div className='listingdetail__header'>
                    <h1 className='listingdetail__title'>{project.name}</h1>
                    <p className='listingdetail__location'>{project.status}</p>
                </div>
                <div className='row'>
                    <div className='listingdetail__breadcrumb'>
                        <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {project.name}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <div className='listingdetail__display'>
                            <img className='listingdetail__display__image' src={project.image} alt='' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1-of-2'>
                        <ul className='listingdetail__list'>
                            <li className='listingdetail__list__item'>Duration: {project.duration}</li>
                            <li className='listingdetail__list__item'>Population:  {project.beneficiary_population}</li>
                            <li className='listingdetail__list__item'>Start Date: {project.start_date}</li>
                            <li className='listingdetail__list__item'>End Date: {project.end_date}</li>
                        </ul>
                    </div>
                </div>
                <div className='card'>
                    <Card >

                    </Card>
                </div>
                <h1 style={{paddingTop: '20px', paddingBottom: '20px' }}>PROJECT DESCRIPTION</h1>
                <div className='row'>
                    <p className='listingdetail__description'>{project.description}</p>
                </div>
                {displayInteriorImages()}
            </div>
        </div>
    );
};

export default FinishedProject;

