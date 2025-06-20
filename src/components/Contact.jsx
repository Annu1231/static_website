import { useState } from 'react'

const Contact = () => {
  const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMsg("Thanks for contacting us!")
    e.target.reset()
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <p>{msg}</p>
    </section>
  )
}

export default Contact
