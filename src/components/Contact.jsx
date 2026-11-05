import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './ui/Section';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

const inputClasses =
  'w-full rounded-lg border border-white/10 bg-ink-800/70 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 transition-colors duration-300 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30';

const statusClasses = {
  pending: 'text-mist-400',
  success: 'text-emerald-400',
  error: 'text-red-400',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [statusKind, setStatusKind] = useState('pending');

  const sending = status === 'Sending...';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setStatusKind('pending');

    try {
      // POST to the serverless contact endpoint with the form state as JSON
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
        setStatusKind('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again.');
        setStatusKind('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to the server.');
      setStatusKind('error');
    }
  };

  return (
    <Section id="contact" className="bg-ink-900">
      <Container>
        <SectionHeading eyebrow="04 — Contact" title="Contact" subtitle="Send me a message" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <form onSubmit={handleSubmit} className="flex flex-col" data-print="hide">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  className={inputClasses}
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  className={inputClasses}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  className={`${inputClasses} h-40 resize-none`}
                  name="message"
                  rows="8"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4">
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? 'Sending...' : "Let's Collaborate"}
              </Button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${statusClasses[statusKind] ?? statusClasses.pending}`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>

          <div className="card-surface print-links h-fit p-6 sm:p-7" data-print="block">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
              Or reach me on
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/nahuel-silva-3b7799249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-lg border border-white/10 px-4 py-3 transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/5"
                >
                  <span className="text-sm font-medium text-mist-100">LinkedIn</span>
                  <FaLinkedin
                    aria-hidden="true"
                    className="h-5 w-5 text-mist-400 transition-colors group-hover:text-accent-300"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Nahjuu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-lg border border-white/10 px-4 py-3 transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/5"
                >
                  <span className="text-sm font-medium text-mist-100">GitHub</span>
                  <FaGithub
                    aria-hidden="true"
                    className="h-5 w-5 text-mist-400 transition-colors group-hover:text-accent-300"
                  />
                </a>
              </li>
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-mist-500">
              Based in Uruguay · Open to remote and on-site opportunities.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
