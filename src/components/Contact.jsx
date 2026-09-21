import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Petición HTTP POST al servidor Express enviando el estado formData como JSON
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Limpia los campos del formulario
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to the server.');
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            
            <input 
              className='bg-[#ccd6f6] p-2' 
              type="text" 
              placeholder='Name' 
              name='name' 
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <input 
              className='my-4 p-2 bg-[#ccd6f6]' 
              type="email" 
              placeholder='Email' 
              name='email' 
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <textarea 
              className='resize-none h-17 bg-[#ccd6f6] p-2' 
              name="message" 
              rows="10" 
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit" className='cursor-pointer text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>
              Let's Collaborate
            </button>

            {/* Mensaje de retroalimentación sobre el estado del envío */}
            {status && <p className='text-gray-300 text-center mt-2'>{status}</p>}
        </form>
    </div>
  )
}

export default Contact