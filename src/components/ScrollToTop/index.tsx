import {useEffect, useState} from "react";
import  "./index.css"
import { FaArrowAltCircleUp} from 'react-icons/fa';

const ScrollToTop = () => {

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () =>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }


  return (
    <div>
      {scrollToTopButton && (
        <button className='btn-up' onClick={scrollUp}>
          <FaArrowAltCircleUp/>
        </button>
      )}
    </div>
  )
}

export default ScrollToTop;
