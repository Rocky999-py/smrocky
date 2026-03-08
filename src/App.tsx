import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronRight, 
  Download, 
  Send,
  ArrowUp,
  Search,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code2,
  Cpu,
  User,
  GraduationCap,
  Briefcase,
  Github
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TIMELINE, 
  EDUCATION, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCE 
} from './constants';

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container-width px-6">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled ? 'glass shadow-xl' : 'bg-transparent'
        }`}>
          <a href="#home" className="text-2xl font-display font-black text-primary tracking-tighter hover:scale-105 transition-transform">
            {PERSONAL_INFO.initials}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-sm font-bold rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-primary text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 glass rounded-3xl p-8 shadow-2xl flex flex-col space-y-6 z-50"
          >
            {navLinks.map((link, idx) => (
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                Available for opportunities
              </motion.div>
              
              <h1 className="heading-lg mb-8">
                Building <span className="gradient-text">Digital</span> <br />
                Experiences.
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
                I'm <span className="font-bold text-slate-900 dark:text-white underline decoration-primary decoration-4 underline-offset-4">{PERSONAL_INFO.name}</span>, {PERSONAL_INFO.tagline}
              </p>

              <div className="flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects" 
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 flex items-center gap-3 group"
                >
                  Explore Work 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-10 py-5 glass rounded-2xl font-black text-lg flex items-center gap-3"
                >
                  Let's Talk
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl animate-float">
                <img 
                  src="https://picsum.photos/seed/rocky/1000/1250" 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 glass p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted">Expertise</p>
                  <p className="font-bold">Software Eng.</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-8 bottom-1/4 glass p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-muted">Focus</p>
                  <p className="font-bold">AI & Web</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/tech1/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/tech2/400/533" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/tech3/400/533" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/tech4/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <p className="text-2xl font-black text-primary leading-none">28</p>
                <p className="text-[10px] font-bold uppercase text-muted">Years Old</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-8">Passionate about <br /><span className="text-primary">Problem Solving.</span></h2>
            <p className="text-xl text-muted mb-10 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: 'Born', value: PERSONAL_INFO.dob, icon: User },
                { label: 'Location', value: PERSONAL_INFO.location, icon: MapPin },
                { label: 'Degree', value: 'B.Sc. CSE', icon: GraduationCap },
                { label: 'Experience', value: '3+ Years', icon: Briefcase },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-muted tracking-widest">{item.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {PERSONAL_INFO.socials.map((social) => (
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  key={social.name} 
                  href={social.url} 
                  className="icon-box hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                    <Download size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{edu.period}</p>
                  <p className="text-muted">{edu.location}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <ChevronRight size={18} className="text-primary" /> Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span key={course} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <ChevronRight size={18} className="text-primary" /> Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="text-muted text-sm flex gap-2">
                        <span className="text-primary">•</span> {ach}
                      </li>
                    ))}
                    <li className="text-muted text-sm flex gap-2">
                      <span className="text-primary">•</span> GPA: <span className="font-bold text-slate-900 dark:text-slate-100">{edu.gpa}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="container-width relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="heading-md mb-4">Technical <span className="text-primary">Arsenal.</span></h2>
            <p className="text-slate-400 max-w-md text-lg">My toolkit for building high-performance applications and solving complex architectural challenges.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold">
              4 Categories
            </div>
            <div className="px-6 py-3 rounded-2xl bg-primary text-white text-sm font-bold">
              16+ Skills
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <h3 className="text-xl font-black mb-8 group-hover:text-primary transition-colors">{category.category}</h3>
              <div className="space-y-8">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <skill.icon size={14} className="text-primary" />
                        </div>
                        <span className="font-bold text-sm">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <h2 className="heading-md">Selected <span className="text-primary">Works.</span></h2>
          
          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <div className="flex gap-4">
                      <motion.a whileHover={{ y: -5 }} href={project.github} className="w-14 h-14 rounded-2xl bg-white text-primary flex items-center justify-center shadow-xl">
                        <Github size={24} />
                      </motion.a>
                      <motion.a whileHover={{ y: -5 }} href={project.demo} className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl">
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="flex gap-1">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-bold text-muted">#{t}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-black text-sm group/btn">
                    View Case Study <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 blur-[120px]"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-md mb-4">Professional <span className="text-primary">Journey.</span></h2>
          <p className="text-slate-400 max-w-lg mx-auto">A timeline of my growth, contributions, and the impact I've made in various roles.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[1fr_3fr] gap-8 p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="space-y-2">
                <p className="text-primary font-black text-sm uppercase tracking-widest">{exp.period}</p>
                <p className="text-xs font-bold text-slate-500 uppercase">{exp.type}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                <p className="text-lg font-medium text-slate-300">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          <div className="text-center pt-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30"
            >
              <Download size={22} /> Download Full CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-8">Let's build something <br /><span className="text-primary">Extraordinary.</span></h2>
            <p className="text-xl text-muted mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you turn ideas into reality.
            </p>
            
            <div className="grid gap-8">
              {[
                { label: 'Email', value: PERSONAL_INFO.email, icon: Mail },
                { label: 'Phone', value: PERSONAL_INFO.phone, icon: Phone },
                { label: 'Location', value: PERSONAL_INFO.location, icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-muted tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[48px] glass shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-muted tracking-widest ml-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all font-bold"
                  placeholder="Shah Md Rakybujjaman Rocky"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-muted tracking-widest ml-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all font-bold"
                  placeholder="rocky@example.com"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase text-muted tracking-widest ml-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-6 py-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all font-bold resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 bg-primary text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 disabled:opacity-70 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container-width">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-display font-black mb-8 tracking-tighter">
              {PERSONAL_INFO.initials}
            </h2>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed mb-10">
              Passionate Computer Science Engineer dedicated to building high-quality software solutions that make a difference.
            </p>
            <div className="flex gap-4">
              {PERSONAL_INFO.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary font-bold transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500 mb-8">Contact</h4>
              <ul className="space-y-4">
                <li className="text-slate-400 font-bold">{PERSONAL_INFO.email}</li>
                <li className="text-slate-400 font-bold">{PERSONAL_INFO.phone}</li>
                <li className="text-slate-400 font-bold">{PERSONAL_INFO.location}</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <button 
                onClick={scrollToTop}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform"
              >
                <ArrowUp size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
