import React from "react";
import invertedLogo from '../svg/LogoInvertido 1.png';
import { Accordion, AccordionItem } from "@nextui-org/react";


function Footer() {
    return (
        <footer className="footer">
            <div className='footer__topSection'>
                <div className='footer__topSection-logoEmail'>
                    <img className='footer__logo' src={invertedLogo} alt={invertedLogo} />
                    <form className='footer__email'>
                        <input type='email' placeholder='E-mail' className='footer__input' id='email' />
                        <p className='footer__email-p'>Your Privacy Policy warning text here.</p>
                    </form>
                </div>
                
                {/*  */}
                <Accordion
                className="md:hidden"
                variant="light"
                itemClasses={{
                    title: "text-white"
                }}
                >
                    <AccordionItem key='1'
                    aria-label="SERVICE"
                    title='SERVICE'
                    className="text-white"
                    >
                        <ul>
                            <li>Contact</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>Size Guide</li>
                            <li>Help Center</li>
                            <li>Dealers</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem 
                    key='2'
                    aria-label="COMPANY" 
                    title='COMPANY'
                    className="text-white"
                    >
                        <ul>
                            <li>About</li>
                            <li>Product</li>
                            <li>Responsibility</li>
                            <li>Career</li>
                            <li>Press</li>
                            <li>Image bank</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem 
                    key='3' 
                    aria-label="TERMS" 
                    title='TERMS'
                    className="text-white"
                    >
                    <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </AccordionItem>
                </Accordion>

                <div className='footer__topSection-SCT'>
                    <div className='footer__topSection-SCT--Services'>
                        <h3 className='services__h3'>SERVICE</h3>
                        <ul className='services__ul'>
                            <li className='services__li'>Contact</li>
                            <li className='services__li'>Shipping</li>
                            <li className='services__li'>Returns</li>
                            <li className='services__li'>Size Guide</li>
                            <li className='services__li'>Help Center</li>
                            <li className='services__li'>Dealers</li>
                        </ul>
                    </div>
                    <div className='footer__topSection-SCT--Company'>
                        <h3 className='company__h3'>COMPANY</h3>
                        <ul className='company__ul'>
                            <li className='company__li'>About</li>
                            <li className='company__li'>Product</li>
                            <li className='company__li'>Responsibility</li>
                            <li className='company__li'>Career</li>
                            <li className='company__li'>Press</li>
                            <li className='company__li'>Image bank</li>
                        </ul>
                    </div>
                    <div className='footer__topSection-SCT--Terms'>
                        <h3 className='terms__h3'>TERMS</h3>
                        <ul className='terms__ul'>
                            <li className='terms__li'>Terms & Conditions</li>
                            <li className='terms__li'>Privacy Policy</li>
                            <li className='terms__li'>Cookie Policy</li>
                        </ul>
                    </div>
                </div>


                <div className='footer__topSection-socialMedia'>
                    <label className='socialMedia'>INSTAGRAM</label>
                    <label className='socialMedia'>FACEBOOK </label>
                </div>
            </div>
        </footer>
    )
}

export { Footer };