import testimonios from './data'
import Testimonial from './components/Testimonial'
import './styles.css'

function App() {

  return (
    <>
      <Testimonial item={testimonios[0]} />
      <Testimonial item={testimonios[1]} />
      <Testimonial item={testimonios[2]} />
      <Testimonial item={testimonios[3]} />
      <Testimonial item={testimonios[4]} />
    </>
  )
}

export default App
