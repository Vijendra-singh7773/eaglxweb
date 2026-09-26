import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Smartphone, ShoppingBag, Layers3, Menu, X, Check, Mail, MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react'
import HeroScene from './components/HeroScene'
import EagleMark from './components/EagleMark'

const services = [
  { icon: Code2, no: '01', title: 'Web Development', desc: 'Fast, responsive websites and web platforms built around your business goals.' },
  { icon: Smartphone, no: '02', title: 'Mobile Applications', desc: 'Android and cross-platform apps designed for a smooth everyday experience.' },
  { icon: ShoppingBag, no: '03', title: 'E-commerce Solutions', desc: 'Online stores with product discovery, secure checkout and simple management.' },
  { icon: Layers3, no: '04', title: 'UI/UX & 3D Experiences', desc: 'Distinctive interfaces, interactive visuals and immersive digital storytelling.' },
]


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')
  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus('sending')
    setFormError('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/jn7773studio@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      const result = await response.json()
      if (!response.ok || !(result.success === 'true' || result.success === true || result.success === 'success')) {
        throw new Error(result.message || 'Unable to send your enquiry. Please try again.')
      }

      setFormStatus('success')
      form.reset()
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
      setFormStatus('error')
    }
  }
  return <main>
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark"><img src="/assets/eaglx-eagle.png" alt="Eaglxweb eagle logo" className="brand-eagle" /></span><span className="brand-name">eaglxweb<span>CONSULTANCY SERVICES</span></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" className="nav-cta" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow"><span className="live-dot"/> DIGITAL STUDIO · INDIA</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>We build digital<br/><span>that moves you.</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>From first idea to final launch, we create websites, mobile apps and digital experiences that help ambitious businesses grow.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}><a href="#contact" className="button button-primary">Start a project <ArrowUpRight size={17}/></a><a href="#work" className="text-link">Explore our work <ArrowDownRight size={17}/></a></motion.div>
        <div className="hero-proof"><div className="proof-avatars"><span>EW</span><span>UI</span><span>DEV</span></div><p><strong>One partner, end-to-end.</strong><br/>Strategy · Design · Development</p></div>
      </div>
      <div className="hero-visual"><div className="visual-glow"/><HeroScene/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="floating-card"><span className="card-icon"><Check size={16}/></span><div><strong>Built for what’s next</strong><small>Thoughtful digital solutions</small></div></div><div className="visual-label"><span>01 / 04</span><span>DESIGN × TECHNOLOGY</span></div></div>
      <a href="#services" className="scroll-cue"><span/> SCROLL TO EXPLORE</a>
    </section>

    <section className="marquee" aria-label="Our capabilities"><div className="marquee-track">{Array.from({length: 2}).map((_,i)=><div className="marquee-set" key={i}><span>WEB DEVELOPMENT</span><b>✳</b><span>MOBILE APPS</span><b>✳</b><span>ECOMMERCE</span><b>✳</b><span>3D EXPERIENCES</span><b>✳</b></div>)}</div></section>

    <section className="services section-wrap" id="services">
      <div className="section-heading"><div><div className="eyebrow">WHAT WE DO</div><h2>Good ideas deserve<br/><span>great execution.</span></h2></div><p>We bring design thinking and modern technology together to solve real business challenges—without making things complicated.</p></div>
      <div className="service-grid">{services.map((service)=><motion.article className="service-card" key={service.no} whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}><div className="service-top"><span>{service.no}</span><service.icon size={24} strokeWidth={1.5}/></div><h3>{service.title}</h3><p>{service.desc}</p><a href="#contact" aria-label={`Discuss ${service.title}`}><ArrowUpRight size={19}/></a></motion.article>)}</div>
    </section>


    <section className="about section-wrap" id="about"><div className="about-visual"><div className="about-logo"><img src="/assets/eaglx-eagle.png" alt="Eaglxweb eagle logo" className="about-eagle" /><span>EAGLXWEB</span><small>CONSULTANCY SERVICES</small></div><div className="about-stamp">IDEAS<br/>INTO<br/>IMPACT</div></div><div className="about-copy"><div className="eyebrow">ABOUT EAGLXWEB</div><h2>Your vision.<br/><span>Our craft.</span></h2><p>We’re a digital solutions partner for businesses ready to take the next step. Whether you need a new website, a mobile app or a complete digital presence, we combine practical thinking with modern design and technology.</p><p>Clear communication, thoughtful execution and dependable support—at every stage.</p><a href="#contact" className="text-link">Get to know us <ArrowRight size={17}/></a></div></section>

   
<section className="contact-section" id="contact">
  <div className="section-wrap contact-inner">

    <div className="contact-copy">
      <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
      <h2>Let’s make<br/><span>it happen.</span></h2>
      <p>
        Tell us what you’re building.
        We’ll help you figure out the next step.
      </p>
      <a
        href="mailto:jn7773studio@gmail.com"
        className="button button-primary"
      >
        Start a conversation <ArrowUpRight size={17}/>
      </a>
    </div>

    <div className="contact-panel">
      <AnimatePresence mode="wait" initial={false}>
        {formStatus === 'success' ? (
          <motion.div
            key="contact-success"
            className="contact-success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <motion.div
              className="success-check"
              initial={{ scale: 0.5, rotate: -18 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.08 }}
            >
              <CheckCircle2 size={34} strokeWidth={1.8} />
            </motion.div>
            <h3>Enquiry sent successfully!</h3>
            <p>Thank you for reaching out. Our team will get back to you soon.</p>
            <button
              type="button"
              className="button button-primary"
              onClick={() => setFormStatus('idle')}
            >
              Send another enquiry <ArrowUpRight size={17} />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            className="contact-form"
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <input type="hidden" name="_subject" value="New Project Enquiry — Eaglxweb Consultancy Services" />
            <input type="hidden" name="_template" value="table" />

            <label>
              Your name
              <input type="text" name="name" placeholder="Enter your name" autoComplete="name" required />
            </label>

            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
            </label>

            <label>
              What do you need?
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Website Development</option>
                <option>Mobile Application</option>
                <option>E-commerce Website</option>
                <option>UI/UX or 3D Experience</option>
                <option>Other / Not Sure Yet</option>
              </select>
            </label>

            <label>
              Tell us about your project
              <textarea
                name="message"
                rows={5}
                placeholder="Describe your project requirements, budget, timeline, or any other details..."
                required
              />
            </label>

            {formError && (
              <p className="form-error" role="alert">{formError}</p>
            )}

            <button type="submit" className="button button-primary form-submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? (
                <> <Loader2 size={17} className="form-spinner" /> Sending enquiry… </>
              ) : (
                <> Send Project Enquiry <ArrowUpRight size={17}/> </>
              )}
            </button>

            <p className="form-hint">
              Your project enquiry will be sent directly to our team.
            </p>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="contact-details">

        <div className="contact-row">
          <Mail size={19}/>
          <div>
            <small>EMAIL US</small>
            <a href="mailto:jn7773studio@gmail.com">
              jn7773studio@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-row">
          <Phone size={19}/>
          <div>
            <small>CALL / WHATSAPP</small>
            <a href="https://wa.me/916375107576">
              +91 6375107576
            </a>
          </div>
        </div>

        <div className="contact-row">
          <MapPin size={19}/>
          <div>
            <small>BASED IN</small>
            <span>India · Working Worldwide</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<footer className="site-footer">
  <a href="#home" className="footer-brand">
    <img
      src="/assets/eaglx-eagle.png"
      alt=""
      className="footer-eagle"
    />
    EAGLXWEB
  </a>

  <span>
    © {new Date().getFullYear()} Eaglxweb Consultancy Services.
  </span>

  <a href="#home">Back to top ↑</a>
</footer>
</main>
}



