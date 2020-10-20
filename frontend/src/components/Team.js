import React, { Component, Fragment } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';
import './Carousel.scss';
import { connect } from 'react-redux';
import { getPersonels } from '../actions/web';
import './Team.css';


export class Team extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personels: null
        };

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        this.productTemplate = this.productTemplate.bind(this);
    }

    componentDidMount() {
        this.props.getPersonels();
    }

    productTemplate(member) {
        return (
            <div>
                <div className="product-ite-content">
                    <div className="p-mb-3">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="product-image" 
                            style={{borderRadius:'50%', width: '100px', height: '100px', boxShadow: 'tomato'}} 
                        />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{member.name}</h4>
                        <h5 className="p-mt-0 p-mb-3">{member.position}</h5>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }


    render() {
        return (
            <Fragment>
                <div className='card'>
                    <li className='zards__item'>
                        <Carousel 
                            value={this.props.personels}
                            autoplayInterval={3000}
                            orientation="vertical" 
                            verticalViewPortHeight="252px"
                            itemTemplate={this.productTemplate} 
                            header={<h2>OUR OFFICERS</h2>} 
                            style={{ maxWidth: '200px', paddingBottom: '50px', marginTop: '2em', textAlign: 'center'}} 
                        />
                    </li>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
   personels : state.personels.personels
})

export default connect(mapStateToProps, {getPersonels} ) (Team);

