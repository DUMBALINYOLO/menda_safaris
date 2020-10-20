import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Pagination from './Pagination';
import { finishedProjectsURL } from '../constants';
import FinishedProjectCard from './FinishedProjectCard';
import AOS from "aos";
import 'aos/dist/aos.css';
import './Cards.css';


const FinishedProjects = () => {
    const [projects, setProjects] = useState([]);
    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState('');
    const [next, setNext] = useState('');
    const [active, setActive] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(finishedProjectsURL);

                setProjects(res.data.results);
                setCount(res.data.count);
                setPrevious(res.data.previous);
                setNext(res.data.next);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() =>{
        AOS.init({duration : 2000})

      }, []);

    const displayProjects = () => {
        let display = [];
        let result = [];

        projects.map(project => {
            return display.push(
                <FinishedProjectCard
                    name={project.name}
                    image={project.image}
                    start_date={project.start_date}
                    end_date={project.end_date}
                    duration={project.duration}
                    status={project.status}
                    beneficiary_population={project.beneficiary_population}
                    project_areas={project.project_areas}
                    id={project.id}
                />
            );
        });

        for (let i = 0; i < projects.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+2] ? display[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    const visitPage = (page) => {
        axios.get(`finishedProjectsURL?page=${page}`)
        .then(res => {
            setProjects(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            setActive(page);
        })
        .catch(err => {

        });
    };

    const previous_number = () => {
        axios.get(previous)
        .then(res => {
            setProjects(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (previous)
                setActive(active-1);
        })
        .catch(err => {

        });
    };

    const next_number = () => {
        axios.get(next)
        .then(res => {
            setProjects(res.data.results);
            setPrevious(res.data.previous);
            setNext(res.data.next);
            if (next)
                setActive(active+1);
        })
        .catch(err => {

        });
    };

    return (
        <main className='listings'>
            <div className='cards'>
                <Helmet>
                    <title>Finished Projects</title>
                    <meta
                        name='description'
                        content='Listings page'
                    />
                </Helmet>
                <section className='listings__listings' data-aos="flip-up">
                    {displayProjects()}
                </section>
                <section className='listings__pagination'>
                    <div className='row'>
                        <Pagination
                            itemsPerPage={3}
                            count={count}
                            visitPage={visitPage}
                            previous={previous_number}
                            next={next_number}
                            active={active}
                            setActive={setActive}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FinishedProjects;
