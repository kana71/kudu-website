import React, { Component } from 'react'; 
import './Projects.css';

import litchiflower from './litchiflower.JPEG';
import nurseries from './nurseries.JPG';
import shelflife from './shelflife.jpg';
import yellowlitchi from './yellow_litchi.jpg';
import plant from './plant.jpg';



export default class Projects extends Component {
    render() {
        return (
            <div className="bg-gradient project"
                // style= {{ backgroundImage: `src(${process.env.PUBLIC_URL + "./images/green-bg.jpg"}))`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover', 
                // backgroundRepeat: 'no-repeat}} 
                >

                <div className="d-flex projectstag bg-gradient text-dark text-center">
                       
                    {/* <div className="p-5">
                    </div> */}

                    <div className="text-center text-light p-5"
                        style={{backgroundImage: `url(${plant})`,
                                backgroundSize: 'cover',
                                width: '1800px',
                                height: '350px',
                                backgroundPosition: 'center'

                    }}
                    >
                        <br/>
                        <br/>
                        <h1 className="text-center">PROJECTS</h1><br />
                        <h5>Our currently ongoing projects</h5>
                    </div>

                    {/* <div className="p-3">
                    </div> */}
                </div>

                <div className="projectslist p-5 text-dark">

                
                    <div className="">
                        <div class="card-2 mb-5 mx-5 p-5">

                            <div class="row g-0">
                                <div class="col-md-4 mt-5">
                                    <img src={yellowlitchi} width="500px" height="700px" class="img-fluid rounded-start" alt="..." id="projects-img-1"/>
                                </div>
                                <div class="col-md-8 p-5">
                                    <div class="card-body-2 p-5">
                                        <h4 class="card-title-2">Project 1: Tree crop tissue culture and genetic transformation</h4>
                                        <p class="card-text-2">
                                            Callous induction, transformation and bombardment are long term processes that 
                                            can take many years until success is verifiable. Nevertheless, in 2020 we began work 
                                            with the Institute of Plant Biotechnology at the University of Stellenbosch to generate 
                                            callous from an off-patent litchi cultivar (Mauritius) and to transform it with an 
                                            antisense copy of the polyphenol oxidase gene, which should prevent browning of the fruit 
                                            after harvest. This approach has been taken and met with commercial success in lettuce, 
                                            mushrooms, and apples already; although it will be many years until it can be demonstrated 
                                            in a subtropical tree crop. 

                                        </p>
                                        <p class="card-text-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div class="d-flex align-content-end flex-wrap">
                        <div class="card-2 my-5 mx-5 p-3">

                        <div class="row g-0">

                            <div class="col-md-8 p-5">
                                <div class="card-body-2 p-5">
                                    <h4 class="card-title-2">Project 2: Floral induction</h4>
                                    <p class="card-text-2">
                                        Alternative bearing is a common problem in all tree crops. In some years orchards will bear 
                                        much higher than expected yields and then be followed by one or two years of lower-than-average production. 
                                        Such swings in finances are less than optimal, and it would be much better if a lower but steadier rate of 
                                        production could be achieved. Alternative bearing caused by lower than necessary carbohydrate reserves in the 
                                        trunk of a tree, which is itself brought about by high previous cycles of fruiting. If flowering could be controlled 
                                        and induced when it does not occur naturally, this would allow farmers to manage the timing of their harvests, yield 
                                        estimates and cash flows. Using DNA sequences first isolated in Israel, and after discussion with leading academics 
                                        in this field, we have developed a remedy that may be able to induce (off season) flowering when applied as a foliar drench. 
                                        The project is still currently in development with the first results expected to arrive at the end of spring 2021. 

                                    </p>
                                    <p class="card-text-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src={litchiflower} width="500px" height="500px" class="img-fluid rounded-end" alt="..." id="projects-img-2"/>
                            </div>
                            
                        </div>
                        </div>
                    </div>

                    {/* Project Three */}
                    <div className="d-flex">
                        <div class="card-2 my-5 mx-5 p-5">

                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={shelflife} width="500px" height="350px" class="img-fluid rounded-start" alt="..." id="projects-img-3"/>
                                </div>
                                <div class="col-md-8 p-5">
                                    <div class="card-body-2 p-5">
                                        <h4 class="card-title-2">Project 3: Pre- and post harvest biochemical applications for increased shelf life</h4>
                                        <p class="card-text-2">
                                            Building on knowledge from visits to fruit industries around the world, we have brought in a 
                                            post-harvest chemical application used in India to increase the shelf life of (unsulfured) fruit. 
                                            This allows two weeks of reasonably good quality refrigerated produce without the need for harsh inorganic 
                                            processing that has an impact on taste. We have also been researching the use of cytokinin’s as a preharvest 
                                            foliar spray to increase the shelf life of harvested fruit.

                                        </p>
                                        <p class="card-text-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                   {/* Project Four */}
                   <div>
                        <div class="card-2 my-5 mx-5 p-3">

                        <div class="row g-0">

                            <div class="col-md-8 p-5">
                                <div class="card-body-2 px-5">
                                    <h4 class="card-title-2">Project 4: Micro-cutting protocols for nurseries</h4>
                                    <p class="card-text-2">
                                        Being able to meet the demand for new planting material is always an issue for nurseries. 
                                        New cultivars need to be assessed, mother blocks need to be planted and large volumes of 
                                        rooted cuttings or grafts need to be quickly made and sold in order to turn a profit. 
                                        The older methods of growing rootstock from seed are now outdated in certain tree crops owing 
                                        to their high level of heterozygosity. Air-layering demands high quantities of mother plant material 
                                        to produce a single field ready tree, and results in trees without a strong taproot. The best system currently 
                                        available in subtropical tree crops is to generate rooted cuttings from 200 mm slips taken from a healthy mother tree. 
                                        This ensures that 1) all progenies are genetically identical, and 2) that the mother blocks can sustainably produce a lot 
                                        of material quickly. In litchis, the hot mist cutting technique was developed in Israel and has been met with much enthusiasm. 
                                        We visited two sites in that country to learn the technique and the technology which we have brought back to South Africa. 

                                    </p>
                                    <p class="card-text-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <img src={nurseries} width="500px" height="500px" class="img-fluid rounded-end" alt="..." id="projects-img-4"/>
                            </div>
                        </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
