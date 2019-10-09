import React, { Component } from 'react';
import './PortfolioSection.scss';
import { PortfolioGallery } from '../assets/data/PortfolioGallery';

class PortfolioSection extends Component {
    
    constructor(){
        super();
        this.state = {
            PortfolioGallery
        };
    }

    render(){
        const PortfolioGallery = this.state.PortfolioGallery.map((Gallery,i)=>{
            return(
                <div key={i} className="portfolioContainer p-2 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <img src={Gallery.image} alt="" />				
                        <div className="overlayLinkContainer">
                            <div className="tableContainer">
                                <a href={Gallery.link} className="overlayLink tableCell" tabIndex="-1">
                                    <div className="overlayIconContainer">
                                        <i className="fas fa-link"></i>
                                    </div>
                                </a>
                                <a href={Gallery.image} className="overlayLink tableCell" data-rel={"lightcase:group"+i} tabIndex="-1">
                                    <div className="overlayIconContainer">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="galleryContainer">
                        { 
                            Gallery.gallery.map((image,j)=>{
                                return(
                                    <a key={j} href={image[j]} className="overlayLink tableCell" data-rel={"lightcase:group"+i} tabIndex="-1"> </a>
                                )
                            })
                        }
                        </div>
                    </div>
            )
        });

        return (
            <section id="portfolio" className="p-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="title">
                                <h2><b>Portfolio</b></h2>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis. Adipisci dolorem ipsa obcaecati perferendis a cupiditate omnis nostrum doloremque dicta. Atque repellendus nesciunt quasi asperiores nihil dolorem aliquam optio.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {PortfolioGallery}
                    </div>
                </div>
            </section>

        );
    }
}

export default PortfolioSection;