import React, { Component, Fragment } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import {Card} from 'primereact/card';
import { connect } from 'react-redux';
import { getProducts } from '../actions/web';



export class ProductsCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: null
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
        this.props.getProducts();
    }

    


productTemplate(product) {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img 
                            src={product.image}
                            alt={product.name} 
                            className="product-image" 
                        />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{product.title}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span 
                            className={`product-badge status-${product.avaliability_status.toLowerCase()}`}
                        >{product.avaliability_status}</span>
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
            <div className="carousel">
                <div className="card">
                    <Carousel 
                        value={this.props.products} 
                        numVisible={3} 
                        numScroll={1} 
                        responsiveOptions={this.responsiveOptions} 
                        className="custom-carousel" 
                        circular
                        autoplayInterval={3000} 
                        itemTemplate={this.productTemplate} 
                        header={<h5 style={{textAlign: "center"}}> MENDA SAFARIS PRODUCT CATALOGUE </h5>} 
                    />
                </div>


            </div>
        );
    }
}


const mapStateToProps = state =>({
   products : state.products.products
})

export default connect(mapStateToProps, {getProducts} ) (ProductsCarousel);

