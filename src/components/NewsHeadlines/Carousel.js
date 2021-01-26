import React from 'react';
import logo from '../../img/img01.jpg'
import Carousel from 'nuka-carousel';

const Carousels = () => (
    <Carousel>
    <img src={logo} alt=""/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt=""/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt=""/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt=""/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt=""/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt=""/>
  </Carousel>
  );

export default Carousels
