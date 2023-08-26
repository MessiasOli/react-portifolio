import { useEffect } from "react"
import FAQ from "./FAQ"
import faqs from "./data"
import './faqs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function FAQs() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <section id="facts">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usuallly get. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs