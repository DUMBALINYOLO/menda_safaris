import React, { Component } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './AccordionDemo.scss';
import AOS from "aos";
import 'aos/dist/aos.css'
import './Cards.css';


export class Faqs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        };
    }

    
    
    componentDidMount(){
        AOS.init({
            duration : 2000
        })
    }


    onClick(itemIndex) {
        let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

        if (activeIndex.length === 0) {
            activeIndex.push(itemIndex);
        }
        else {
            const index = activeIndex.indexOf(itemIndex);
            if (index === -1) {
                activeIndex.push(itemIndex);
            }
            else {
                activeIndex.splice(index, 1);
            }
        }

        this.setState({ activeIndex });
    }


    render() {
        return (
            <div className='cards' data-aos="flip-right" >
            <h1>ABOUT CYVAT</h1>
                <div className="accordion-demo">
                    <div className="card">
                        <div className="p-pt-2 p-pb-4">
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 0) ? 'pi pi-minus' : ''} 
                                label="HISTORY" 
                                onClick={() => this.onClick(0)} 
                                className="p-button-success p-button-rounded" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 1) ? 'pi pi-minus' : ''} 
                                label="AREAS OF WORK" 
                                onClick={() => this.onClick(1)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 2) ? 'pi pi-minus' : ''} 
                                label="CYVAT CORE VALUES" 
                                onClick={() => this.onClick(2)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 3) ? 'pi pi-minus' : ''} 
                                label="CYVAT VISION" 
                                onClick={() => this.onClick(3)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 4) ? 'pi pi-minus' : ''} 
                                label="CYVAT MISSION" 
                                onClick={() => this.onClick(4)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 5) ? 'pi pi-minus' : ''} 
                                label="CYVAT POLICIES" 
                                onClick={() => this.onClick(5)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                            <Button 
                                icon={this.state.activeIndex && this.state.activeIndex.some((index) => index === 6) ? 'pi pi-minus' : ''} 
                                label="CYVAT ADMINISTRATION" 
                                onClick={() => this.onClick(6)} 
                                className="p-button-success p-button-rounded p-ml-2" 
                            />
                        </div>


                        <Accordion 
                            multiple activeIndex={this.state.activeIndex} 
                            onTabChange={(e) => this.setState({ activeIndex: e.index })}
                            contentStyle= {{backGround: 'teal' }}
                        >
                            <AccordionTab header="CYVAT HISTORY & STATUS QUO" contentStyle= {{backGround: 'teal' }}>
                                <p>
                                    Christian Youth Volunteers Association is registered as a Trust with the Ministry of Justice in Zimbabwe and the 
                                    registration number is MA23/2009. CYVAT was founded in 1995 as a youth voluntary association to cater for juveniles
                                    or children in distress and other vulnerabilities. Currently the organization has three memorandum of understanding
                                    with Binga, Lupane and Matobo District Councils. CYVAT has been in partnership with the Czech Embassy since 2009 in 
                                    trying to assist children with infrastructure, play material such as toys, dolls and furniture in schools. 
                                    In Binga and Lupane CYVAT implemented an Early Childhood Development programme targeting 60 schools from 2015 to April
                                    2019 this program was funded by Roger Federer Foundation through Child Protection Society as the lead organization
                                    in the consortium. The organization recently completed a school construction project funded by the Japan Embassy. 
                                    In 2017 July the organization joined a consortium named Sizimele which is implementing a resilience program. 
                                    In this consortium CYVAT is implementing the pillar on livelihood diversification for youth. 
                                </p>
                            </AccordionTab>
                            <AccordionTab header="AREAS OF WORK & PARTNERS">
                                <p>
                                    In Lupane and Binga the organization also implemented an early childhood development education since 2014 to date.
                                    In this program about six schools have benefited with infrastructure and a number of other child friendly activities 
                                    that include health assessments for children. CYVAT is also in partnership with Care4 People Denmark where we get funding 
                                    for shipping furniture and hospital equipment from the North. The fund is from Recycle for development. Since July 2017, 
                                    CYVAT joined the Sizimele consortium funded by UNDP, UK-AID, EU and Swedish Embassy in implementing youth entrepreneurship 
                                    development in the Lupane district. CYVAT is also implementing a schools renovation and feeding programme partnering with the 
                                    Engineers without Boarders Denmark.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="CYVAT CORE VALUES">
                                <p>
                                    (1) TOLERANCE <br/>
                                    (2) INTEGRITY <br/>
                                    (3) INNOVATION <br/>
                                    (4) OPEN COMMUNICATION <br/>
                                    (5) LOVE <br/>
                                    (6) TEAMWORK <br/>
                                </p>
                            </AccordionTab>
                            <AccordionTab header="CYVAT VISION">
                                <p>
                                    To have a workforce that reflects inclusiveness and is diverse by race, gender and geography
                                </p>
                            </AccordionTab>
                            <AccordionTab header="CYVAT MISSION">
                                <p>
                                    We Are a Faith Based Organization that Works to Build Self-Sustained Communities through Capacity  Building, Advocacy, Community Participation and Leadership Develpment
                                </p>
                            </AccordionTab>
                            <AccordionTab header="CYVAT PLOICIES">
                                <p>
                                    The organization is governed by a Board of Trustees comprising of 7 members. On daily basis the organization is run by the 
                                    Executive Director assisted by the Finance and Administration personnel. Programme implementation is conducted by programs 
                                    officers, interns and community volunteers as well as other stakeholders at large.For effective management, the organization
                                    has the following policies:
                                    <br/>
                                    Human Resource Manual Policy<br/>
                                    Finance and Procurement  Procedures manual <br/>
                                    Child Protection Policy <br/>
                                    Gender Policy <br/>
                                    Sexual Harassment Policy <br/>
                                    Vehicle Policy <br/>
                                    Per diem Policy
                                </p>
                            </AccordionTab>
                            <AccordionTab header="CYVAT ADMINISTRATION">
                                <p>
                                    The organization is governed by a board of Trustees with seven members and has a management structure headed by a Director. 
                                    Currently the organization has 13 members of staff. Since CYVAT was founded, it has been funded by a number of partners. 
                                    So far CYVAT has implemented programs funded by the Czech Embassy, Japan Embassy and the American Embassy.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}


export default Faqs;


