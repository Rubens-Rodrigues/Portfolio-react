import React, { useEffect } from 'react';
import './Tecnologias.css';
import { motion } from 'framer-motion';
import image1 from '../../assets/icon/html-5.png';
import image2 from '../../assets/icon/css-3.png';
import image3 from '../../assets/icon/java-script.png';
import image4 from '../../assets/icon/physics.png';
import image5 from '../../assets/icon/sass.png';
import image6 from '../../assets/icon/bootstrap.png';
import image7 from '../../assets/icon/git.png';
import AnimeScroll from '../Scroll';

export const Tecnologias = () => {
  const  images = [image1, image2, image3, image4, image5, image6, image7];
  const carousel = React.useRef();
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [])

  return (
    <section className='tecnologias' id='tecnologias'>
      <AnimeScroll/>
      <h1 className='js-scroll2'>Tecnologias</h1>
      <div className='slider js-scroll'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
          <motion.div
            className='inner'
            drag='x'
            dragConstraints={{ right: 0, left: - width }}
          >
            
            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="Imagem"/>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 