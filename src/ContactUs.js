import {useState} from 'react'

const ContactUs = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset Fields
    setName('')
    setEmail('')
    setMessage('')
  }

  

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className='contactName'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='messageBox'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactUs