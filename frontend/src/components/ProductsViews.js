import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { getProducts } from '../actions/web';



export class ProductsViews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            layout: 'grid',
            loading: true,
            first: 0,
            totalRecords: 0,
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ];

        this.rows = 6;
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }




    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={data.image} alt={data.title} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.title}</div>
                        <Rating value={5} style={{color: 'yellow'}} readonly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.avaliability_status === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.avaliability_status.toLowerCase()}`}>{data.avaliability_status}</span>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(data) {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={`product-badge status-${data.avaliability_status.toLowerCase()}`}>{data.avaliability_status}</span>
                    </div>
                    <div className="product-grid-item-content">
                        <img src={data.image} alt={data.title} />
                        <div className="product-name">{data.title}</div>
                        <Rating value={5} style={{color: 'yellow'}} readonly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    itemTemplate(product, layout) {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(product);
        else if (layout === 'grid')
            return this.renderGridItem(product);
    }

    renderHeader() {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown 
                        options={this.sortOptions} 
                        value={this.state.sortKey} 
                        optionLabel="label" 
                        placeholder="Sort By Price" 
                        onChange={this.onSortChange}
                    />
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions 
                        layout={this.state.layout} 
                        onChange={(e) => this.setState({ layout: e.value })} 
                    />
                </div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className="dataview">
                <div className="card">
                    <DataView 
                        value={this.props.products} 
                        layout={this.state.layout}
                        header={header}
                        itemTemplate={this.itemTemplate} 
                        loading={false}
                        sortField={this.state.sortField}
                        sortOrder={this.state.sortOrder} 
                    />
                </div>
            </div>
        );
    }
}



const mapStateToProps = state =>({
   products : state.products.products
})

export default connect(mapStateToProps, {getProducts} ) (ProductsViews);



