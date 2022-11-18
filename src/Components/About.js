import React from 'react'
import baga from '../JPG/Bagabeach.jpg'
import cult from '../JPG/CulturalExplore.jpg'
import Market from '../JPG/Market.jpg'
import Mandovi from '../JPG/MandoviRiver.jpg'
import Water from '../JPG/WaterSports.jpg'
import Clubing from '../JPG/Clubing.jpg'

export const About = () => {
    return (
        <div>
            <div className="container my-4">
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-10"
                >
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                          Baga Beach
                        </h2>
                        <p className="lead">
                        One of the most popular beaches of Goa, Baga Beach is a place not to be missed. This shimmering golden beach lies between the two other popular beaches. It has Anjuna Beach on it one side and Calangute Beach on the other side. This is a perfect beach for all of us who want to be away from the crowd of tourists on the other beaches. This beach is known for its sheer beauty. Its mesmerizing scenic beauty has tranquilizing effect on its visitors.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={baga} alt="Bagabeach" />
                    </div>
                </div>
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-10"
                >
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                        Cultural Exploration
                        </h2>
                        <p className="lead">
                        The culture of Goan people is a blend of Portuguese and Indian culture. Goans is the demonym used by people of Goa and they loved being called by this name. They are friendly and full of life people, the holiday spirit of Goa reflects their attitude.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={cult} alt="Cultural" />
                        
                    </div>
                </div>
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-10"
                >
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                        Local market visit
                        </h2>
                        <p className="lead">
                        Shopaholics always look for shopping places on their vacation before coming back to home. Every place offers a charm for the local markets where tourists shop with an open heart. You can have an amazing shopping experience across Goa as its flea market and other local shops offer you everything at reasonable price.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Market} alt="market" />
                        {/* <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
           */}
                    </div>
                </div>
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-10"
                >
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                        Mandovi River cruise 
                        </h2>
                        <p className="lead">
                        The gorgeous beaches, the most perfect sunsets, and an amalgamation of the Portuguese and Indian culture attract a lot of people to this part of India. While there are a number of activities that you can try out such as enjoying authentic seafood from the Goan cuisine at a beach shack, hopping on cruises on Goa is the most exquisite one.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Mandovi} alt="" />
                        
                    </div>
                </div>
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-10"
                >
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                        Water sports at Grand island
                        </h2>
                        <p className="lead">
                        Grande Island is one of the best experiences you will have while travelling around the beaches of Goa. The calm waters of the Arabian Sea and the well maintained infrastructure of the beaches encourage for different types of water sports as well. So, if you want to discover the soul of adventurer inside you, come and experience the scuba diving facility in Goa.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Water} alt="" />
                    </div>
                </div>
                <div
                    className="row featurette d-flex justify-content-center align-items-center my-4"
                >
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                        Clubbing at Tito's lane
                        </h2>
                        <p className="lead">
                        Club Tito’s is one of the oldest and most popular nightclubs in Goa. In fact, this nightclub located in North Goa was one of the first discotheques to open in the state way back in 1971, and today is famous enough to have a lane named after it! Synonymous with electrifying nights, loud music, world-class music DJs, live acts and international dance performers, Club Tito’s is your reason to party loud and proud in North Goa.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Clubing} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

