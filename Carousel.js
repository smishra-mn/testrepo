import React from 'react';
import { Carousel, Image } from 'antd';
function Carousel1 () {
  return (
    <Carousel autoplay>
      
        <Image src="pic1.jpg"></Image>
      
    
        <Image src="pic2.jpg"></Image>
    
        <Image src="pic1.jpg"></Image>
 
        <Image src="pic2.jpg"></Image>
    
    </Carousel>
  );
};
export default Carousel1;