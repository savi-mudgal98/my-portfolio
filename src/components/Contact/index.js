import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import "leaflet/dist/leaflet.css";



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
        
    const form = useRef()

    useEffect(() => {
        const timer=setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);

      return () => {
        clearTimeout(timer);
    }
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()

        

        emailjs
          .sendForm('service_1catfek', 'template_w6c8q6x', form.current, '0lSU6EjjMYj5eawCV')
          .then(() => {
              
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (error) => {
              console.log(error.text);
              alert('Failed to send the message, please try again')
            }
          )

      }


  return (
    <>
       <div className="container contact-page">

        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
    <p>
          
           Please contact me with a date and time to meet at your earliest convenience. Looking forward to hear from you soon.
          </p>

          <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            </div>
        </div>
        <div className="info-map">
          Savi Mudgal,
          <br />
          India,
          <br />
          Kamla Nagar, Agra<br />
          Uttar Pradesh <br />
          <br />
          <span>savimudgal4@gmail.com</span>
        </div>


        <div className="map-wrap" style={{height:'100vh', width:'50vw'}}>
          render(
          <MapContainer center={[27.229184523233094, 78.02318976982164]} zoom={13} scrollWheelZoom={true} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           
            <Marker position={[27.229184523233094, 78.02318976982164]}>
              <Popup>Savi lives here, come over for a cup of coffee.</Popup>
            </Marker>
            
          </MapContainer>
          )
          
        </div>

        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact
