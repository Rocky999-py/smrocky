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
  Github,
  Save,
  Plus,
  Trash2,
  Image as ImageIcon,
  Settings,
  Lock,
  Eye,
  EyeOff,
  Layout,
  Linkedin,
  Twitter, 
  Globe, 
  Server, 
  Database,
  MessageSquare,
  MessageCircle,
  SendHorizontal,
  Bot
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  TIMELINE, 
  EDUCATION, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCE 
} from './constants';
import { GoogleGenAI } from "@google/genai";

const ICON_MAP: Record<string, any> = {
  Menu, X, Moon, Sun, ChevronRight, Download, Send, ArrowUp, Search, ExternalLink, Mail, Phone, MapPin, Code2, Cpu, User, GraduationCap, Briefcase, Github, Save, Plus, Trash2, Settings, Lock, Eye, EyeOff, Layout, Linkedin, Twitter, Globe, Server, Database, ImageIcon, MessageSquare, MessageCircle, SendHorizontal, Bot
};

const Icon = ({ name, ...props }: { name: string | any, [key: string]: any }) => {
  if (!name) return null;
  
  if (typeof name === 'string') {
    const LucideIcon = ICON_MAP[name];
    return LucideIcon ? <LucideIcon {...props} /> : null;
  }
  
  // If it's a component (function or object)
  if (typeof name === 'function' || (typeof name === 'object' && Object.keys(name).length > 0)) {
    const Component = name;
    return <Component {...props} />;
  }
  
  return null;
};

// --- Components ---

const RockyLogo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  return (
    <div className={`relative flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative w-12 h-12">
        {/* Animated Hexagon Frame */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className={`absolute inset-0 w-full h-full ${light ? 'text-white' : 'text-primary'}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path 
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeDasharray="10 5"
            className="opacity-20"
          />
        </motion.svg>

        {/* Outer Hexagon */}
        <svg viewBox="0 0 100 100" className={`absolute inset-0 w-full h-full ${light ? 'text-white' : 'text-primary'} drop-shadow-xl`}>
          <path 
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
            fill="currentColor" 
            className="opacity-10"
          />
          <path 
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>

        {/* Stylized "R" + Code Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 60 60" className={`w-8 h-8 ${light ? 'text-white' : 'text-primary dark:text-white'}`}>
            {/* The "R" as a mountain peak */}
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M15 45 V15 H35 C45 15 45 25 35 25 H15 M30 25 L45 45" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Code Brackets around the R */}
            <path d="M10 20 L5 30 L10 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
            <path d="M50 20 L55 30 L50 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
          </svg>
        </div>

        {/* Floating Particle */}
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className={`absolute -top-1 -right-1 w-3 h-3 ${light ? 'bg-white' : 'bg-blue-400'} rounded-full blur-[2px]`}
        />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tighter ${light ? 'text-white' : 'text-slate-900 dark:text-white'} group-hover:text-primary transition-colors`}>
          ROCKY
        </span>
        <span className={`text-[8px] font-black uppercase tracking-[0.3em] ${light ? 'text-white/60' : 'text-primary'} opacity-80`}>
          CREATIVE CODE
        </span>
      </div>
    </div>
  );
};

const Navbar = ({ isDark, toggleTheme, onLogoClick, initials }: { isDark: boolean, toggleTheme: () => void, onLogoClick: () => void, initials: string }) => {
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
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container-width px-6">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'glass shadow-xl shadow-primary/5' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm'
        }`}>
          <button 
            onClick={onLogoClick}
            className="outline-none"
          >
            <RockyLogo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-sm font-bold rounded-full text-slate-900 dark:text-white hover:bg-primary/10 hover:text-primary transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all text-slate-900 dark:text-white shadow-sm"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white">
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
            className="md:hidden absolute top-full left-6 right-6 glass rounded-3xl p-8 shadow-2xl flex flex-col space-y-6 z-50 mt-4"
          >
            {navLinks.map((link, idx) => (
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
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

const Hero = ({ data }: { data: any }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container-width w-full relative z-10">
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
              
              <h1 className="heading-lg mb-8 text-slate-900 dark:text-white">
                Building <span className="gradient-text">Digital</span> <br />
                Experiences.
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
                I'm <span className="font-bold text-slate-900 dark:text-white underline decoration-primary decoration-4 underline-offset-4">{data.name}</span>, {data.tagline}
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
                  className="px-10 py-5 glass rounded-2xl font-black text-lg flex items-center gap-3 text-slate-900 dark:text-white"
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
                  src={data.heroImage || "https://picsum.photos/seed/rocky/1000/1250"} 
                  alt={data.name} 
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
                  <p className="font-bold text-slate-900 dark:text-white">Software Eng.</p>
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
                  <p className="font-bold text-slate-900 dark:text-white">AI & Web</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = ({ data, timeline }: { data: any, timeline: any[] }) => {
  const images = data.aboutImages || [
    "https://picsum.photos/seed/tech1/400/400",
    "https://picsum.photos/seed/tech2/400/533",
    "https://picsum.photos/seed/tech3/400/533",
    "https://picsum.photos/seed/tech4/400/400"
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"
        />
      </div>

      <div className="container-width relative z-10">
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
                  <img src={images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src={images[1]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <img src={images[2]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src={images[3]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
              {data.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: 'Born', value: data.dob, icon: User },
                { label: 'Location', value: data.location, icon: MapPin },
                { label: 'Degree', value: 'B.Sc. CSE', icon: GraduationCap },
                { label: 'Experience', value: '3+ Years', icon: Briefcase },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-muted tracking-widest">{item.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {data.socials.map((social: any) => (
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  key={social.name} 
                  href={social.url} 
                  className="icon-box hover:text-primary"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = ({ data }: { data: any[] }) => {
  return (
    <section id="education" className="section-padding bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-md mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {data.map((edu, idx) => (
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
                    <GraduationCap size={32} />
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
                    {edu.coursework.map((course: string) => (
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
                    {edu.achievements.map((ach: string, i: number) => (
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

const Skills = ({ data }: { data: any[] }) => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="container-width relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="heading-md mb-4 text-slate-900 dark:text-white">Technical <span className="text-primary">Arsenal.</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg">My toolkit for building high-performance applications and solving complex architectural challenges.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-900 dark:text-white">
              {data.length} Categories
            </div>
            <div className="px-6 py-3 rounded-2xl bg-primary text-white text-sm font-bold">
              {data.reduce((acc, cat) => acc + cat.items.length, 0)}+ Skills
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all group shadow-sm"
            >
              <h3 className="text-xl font-black mb-8 group-hover:text-primary transition-colors text-slate-900 dark:text-white">{category.category}</h3>
              <div className="space-y-8">
                {category.items.map((skill: any) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                          <Icon name={skill.icon} size={14} className="text-primary" />
                        </div>
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
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

const Projects = ({ data }: { data: any[] }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(data.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
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
                      {project.tech.slice(0, 3).map((t: string) => (
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

const Experience = ({ data }: { data: any[] }) => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 blur-[120px]"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-md mb-4 text-slate-900 dark:text-white">Professional <span className="text-primary">Journey.</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">A timeline of my growth, contributions, and the impact I've made in various roles.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {data.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[1fr_3fr] gap-8 p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-xl transition-all shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-primary font-black text-sm uppercase tracking-widest">{exp.period}</p>
                <p className="text-xs font-bold text-slate-500 uppercase">{exp.type}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{exp.company}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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

const Contact = ({ data }: { data: any }) => {
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
    <section id="contact" className="section-padding bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
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
                { label: 'Email', value: data.email, icon: Mail },
                { label: 'Phone', value: data.phone, icon: Phone },
                { label: 'Location', value: data.location, icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon name={item.icon} size={28} />
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

const Footer = ({ data }: { data: any }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container-width">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="mb-8">
              <RockyLogo light />
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed mb-10">
              Passionate Computer Science Engineer dedicated to building high-quality software solutions that make a difference.
            </p>
            <div className="flex gap-4">
              {data.socials.map((social: any) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon name={social.icon} size={20} />
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
                <li className="text-slate-400 font-bold">{data.email}</li>
                <li className="text-slate-400 font-bold">{data.phone}</li>
                <li className="text-slate-400 font-bold">{data.location}</li>
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
          <p>© 2026 {data.name}. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Chatbot = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: `Hi! I'm Rocky's AI assistant. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, userMessage].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are an AI assistant for Shah Md Rakybujjaman Rocky (known as Rocky). 
          Rocky is a 28-year-old Computer Science Engineer from Bangladesh.
          He graduated from Pundra University of Science and Technology.
          His skills and background: ${JSON.stringify(data)}.
          Be professional, helpful, and concise. Answer questions about Rocky's work, skills, and background. 
          If you don't know something, suggest contacting Rocky directly via the contact form or WhatsApp (+8801300172795).`
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/8801300172795"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
      >
        <MessageCircle size={30} />
      </motion.a>

      {/* Chatbot Toggle */}
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-48px)] h-[500px] glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800"
            >
              {/* Header */}
              <div className="p-6 bg-primary text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div>
                    <p className="font-black text-sm">Rocky AI</p>
                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online Assistant</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                <div className="relative">
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me about Rocky..."
                    className="w-full pl-6 pr-14 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-bold"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
                  >
                    <SendHorizontal size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-dark transition-colors"
        >
          {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
        </motion.button>
      </div>
    </div>
  );
};

// --- Dashboard Component ---

const DashboardModal = ({ 
  isOpen, 
  onClose, 
  data, 
  onSave 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  data: any, 
  onSave: (newData: any) => void 
}) => {
  const [activeTab, setActiveTab] = useState('hero');
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data, isOpen]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'hero', label: 'Hero & Contact', icon: Settings },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Layout },
    { id: 'experience', label: 'Experience', icon: Briefcase },
  ];

  const handleSave = () => {
    onSave(localData);
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePersonalInfo = (field: string, value: any) => {
    setLocalData({
      ...localData,
      personalInfo: { ...localData.personalInfo, [field]: value }
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-5xl h-[80vh] bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
      >
        {/* Header */}
        <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
          <div>
            <h2 className="text-2xl font-black flex items-center gap-3">
              <Settings className="text-primary" /> Personal Dashboard
            </h2>
            <p className="text-sm text-muted">Update your portfolio content in real-time</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="px-6 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-8 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 space-y-2 overflow-y-auto bg-slate-50/50 dark:bg-slate-900/20">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon name={tab.icon} size={18} /> {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-10">
            {activeTab === 'hero' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-muted tracking-widest">Hero Image</label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                        <img src={localData.personalInfo.heroImage} className="w-full h-full object-cover" alt="" />
                      </div>
                      <label className="flex-1 cursor-pointer">
                        <div className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary transition-all flex items-center justify-center gap-2 text-sm font-bold text-slate-500">
                          <ImageIcon size={18} /> Upload Image
                        </div>
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden" 
                          onChange={(e) => handleFileUpload(e, (base64) => updatePersonalInfo('heroImage', base64))}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-muted tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      value={localData.personalInfo.name}
                      onChange={(e) => updatePersonalInfo('name', e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-muted tracking-widest">Tagline</label>
                  <textarea 
                    value={localData.personalInfo.tagline}
                    onChange={(e) => updatePersonalInfo('tagline', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold resize-none"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-muted tracking-widest">Email</label>
                    <input 
                      type="text" 
                      value={localData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-muted tracking-widest">Phone</label>
                    <input 
                      type="text" 
                      value={localData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase text-muted tracking-widest">Location</label>
                    <input 
                      type="text" 
                      value={localData.personalInfo.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                      className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-muted tracking-widest">About Images (4 required)</label>
                  <div className="grid grid-cols-4 gap-4">
                    {(localData.personalInfo.aboutImages || []).map((img: string, i: number) => (
                      <label key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer relative group">
                        <img src={img} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white">
                          <ImageIcon size={20} />
                        </div>
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden" 
                          onChange={(e) => handleFileUpload(e, (base64) => {
                            const newImgs = [...(localData.personalInfo.aboutImages || [])];
                            newImgs[i] = base64;
                            updatePersonalInfo('aboutImages', newImgs);
                          })}
                        />
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-muted tracking-widest">Intro Paragraph</label>
                  <textarea 
                    value={localData.personalInfo.intro}
                    onChange={(e) => updatePersonalInfo('intro', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold resize-none"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-muted tracking-widest">Detailed Bio</label>
                  <textarea 
                    value={localData.personalInfo.bio}
                    onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary font-bold resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                {localData.education.map((edu: any, idx: number) => (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-black text-primary uppercase text-xs tracking-widest">Education #{idx + 1}</h4>
                      <button 
                        onClick={() => {
                          const newList = [...localData.education];
                          newList.splice(idx, 1);
                          setLocalData({ ...localData, education: newList });
                        }}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input 
                        type="text" 
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => {
                          const newList = [...localData.education];
                          newList[idx].degree = e.target.value;
                          setLocalData({ ...localData, education: newList });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-bold"
                      />
                      <input 
                        type="text" 
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => {
                          const newList = [...localData.education];
                          newList[idx].institution = e.target.value;
                          setLocalData({ ...localData, education: newList });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-bold"
                      />
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => setLocalData({
                    ...localData,
                    education: [...localData.education, { degree: '', institution: '', period: '', location: '', gpa: '', coursework: [], achievements: [] }]
                  })}
                  className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl text-slate-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add Education
                </button>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-10">
                {localData.skills.map((cat: any, cIdx: number) => (
                  <div key={cIdx} className="space-y-6">
                    <div className="flex justify-between items-center">
                      <input 
                        type="text" 
                        value={cat.category}
                        onChange={(e) => {
                          const newList = [...localData.skills];
                          newList[cIdx].category = e.target.value;
                          setLocalData({ ...localData, skills: newList });
                        }}
                        className="text-lg font-black bg-transparent border-none focus:ring-0 p-0 text-primary"
                      />
                      <button 
                        onClick={() => {
                          const newList = [...localData.skills];
                          newList.splice(cIdx, 1);
                          setLocalData({ ...localData, skills: newList });
                        }}
                        className="text-red-500 text-xs font-bold uppercase tracking-widest"
                      >
                        Delete Category
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {cat.items.map((skill: any, sIdx: number) => (
                        <div key={sIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                          <input 
                            type="text" 
                            value={skill.name}
                            onChange={(e) => {
                              const newList = [...localData.skills];
                              newList[cIdx].items[sIdx].name = e.target.value;
                              setLocalData({ ...localData, skills: newList });
                            }}
                            className="bg-transparent border-none focus:ring-0 p-0 font-bold text-sm w-24"
                          />
                          <input 
                            type="number" 
                            value={skill.level}
                            onChange={(e) => {
                              const newList = [...localData.skills];
                              newList[cIdx].items[sIdx].level = parseInt(e.target.value);
                              setLocalData({ ...localData, skills: newList });
                            }}
                            className="bg-transparent border-none focus:ring-0 p-0 font-bold text-sm w-12 text-right text-primary"
                          />
                        </div>
                      ))}
                      <button 
                        onClick={() => {
                          const newList = [...localData.skills];
                          newList[cIdx].items.push({ name: 'New Skill', level: 50, icon: 'Code2' });
                          setLocalData({ ...localData, skills: newList });
                        }}
                        className="p-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8">
                {localData.projects.map((proj: any, idx: number) => (
                  <div key={idx} className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 grid md:grid-cols-[1fr_2fr] gap-8">
                    <div className="space-y-4">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 relative group">
                        <img src={proj.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                          <label className="cursor-pointer p-3 bg-white text-black rounded-full shadow-xl">
                            <ImageIcon size={20} />
                            <input 
                              type="file" 
                              accept="image/*"
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, (base64) => {
                                const newList = [...localData.projects];
                                newList[idx].image = base64;
                                setLocalData({ ...localData, projects: newList });
                              })}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <input 
                          type="text" 
                          value={proj.title}
                          onChange={(e) => {
                            const newList = [...localData.projects];
                            newList[idx].title = e.target.value;
                            setLocalData({ ...localData, projects: newList });
                          }}
                          className="text-xl font-black bg-transparent border-none focus:ring-0 p-0 w-full"
                        />
                        <button 
                          onClick={() => {
                            const newList = [...localData.projects];
                            newList.splice(idx, 1);
                            setLocalData({ ...localData, projects: newList });
                          }}
                          className="text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <textarea 
                        value={proj.description}
                        onChange={(e) => {
                          const newList = [...localData.projects];
                          newList[idx].description = e.target.value;
                          setLocalData({ ...localData, projects: newList });
                        }}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-medium text-sm resize-none"
                      />
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => setLocalData({
                    ...localData,
                    projects: [...localData.projects, { title: 'New Project', description: '', tech: [], category: 'Web Dev', image: 'https://picsum.photos/seed/new/600/400', github: '#', demo: '#' }]
                  })}
                  className="w-full py-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[32px] text-slate-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={20} /> Add New Project
                </button>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                {localData.experience.map((exp: any, idx: number) => (
                  <div key={idx} className="p-8 rounded-[32px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-6">
                    <div className="flex justify-between items-center">
                      <input 
                        type="text" 
                        value={exp.role}
                        onChange={(e) => {
                          const newList = [...localData.experience];
                          newList[idx].role = e.target.value;
                          setLocalData({ ...localData, experience: newList });
                        }}
                        className="text-xl font-black bg-transparent border-none focus:ring-0 p-0 w-full"
                      />
                      <button 
                        onClick={() => {
                          const newList = [...localData.experience];
                          newList.splice(idx, 1);
                          setLocalData({ ...localData, experience: newList });
                        }}
                        className="text-red-500"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <input 
                        type="text" 
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => {
                          const newList = [...localData.experience];
                          newList[idx].company = e.target.value;
                          setLocalData({ ...localData, experience: newList });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-bold"
                      />
                      <input 
                        type="text" 
                        placeholder="Period"
                        value={exp.period}
                        onChange={(e) => {
                          const newList = [...localData.experience];
                          newList[idx].period = e.target.value;
                          setLocalData({ ...localData, experience: newList });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-bold"
                      />
                      <input 
                        type="text" 
                        placeholder="Type"
                        value={exp.type}
                        onChange={(e) => {
                          const newList = [...localData.experience];
                          newList[idx].type = e.target.value;
                          setLocalData({ ...localData, experience: newList });
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-bold"
                      />
                    </div>
                    <textarea 
                      value={exp.description}
                      onChange={(e) => {
                        const newList = [...localData.experience];
                        newList[idx].description = e.target.value;
                        setLocalData({ ...localData, experience: newList });
                      }}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-primary font-medium text-sm resize-none"
                    />
                  </div>
                ))}
                <button 
                  onClick={() => setLocalData({
                    ...localData,
                    experience: [...localData.experience, { role: 'New Role', company: '', period: '', description: '', type: 'Full-time' }]
                  })}
                  className="w-full py-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[32px] text-slate-500 font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={20} /> Add Experience
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- PIN Modal ---

const PinModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean, onClose: () => void, onSuccess: () => void }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '4343') {
      onSuccess();
      onClose();
      setPin('');
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`relative w-full max-w-sm p-10 rounded-[40px] bg-white dark:bg-slate-900 shadow-2xl border-2 ${error ? 'border-red-500 animate-shake' : 'border-primary/20'}`}
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Lock size={32} />
          </div>
          <h3 className="text-2xl font-black mb-2">Admin Access</h3>
          <p className="text-sm text-muted">Enter PIN to unlock dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="password" 
            autoFocus
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full text-center text-4xl tracking-[1em] font-black py-6 rounded-3xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-4 focus:ring-primary/20 transition-all"
            placeholder="••••"
          />
          <button 
            type="submit"
            className="w-full py-5 bg-primary text-white rounded-3xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all"
          >
            Unlock
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  
  // Dashboard State
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    if (saved) return JSON.parse(saved);
    return {
      personalInfo: PERSONAL_INFO,
      timeline: TIMELINE,
      education: EDUCATION,
      skills: SKILLS,
      projects: PROJECTS,
      experience: EXPERIENCE
    };
  });

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(portfolioData));
  }, [portfolioData]);

  const handleLogoClick = () => {
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);
    if (newClicks >= 10) {
      setShowPinModal(true);
      setLogoClicks(0);
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <div className="animated-bg">
        <div className="blob w-[500px] h-[500px] bg-primary/20 top-[-10%] left-[-10%]"></div>
        <div className="blob w-[600px] h-[600px] bg-blue-400/20 bottom-[-10%] right-[-10%]"></div>
        <div className="blob w-[400px] h-[400px] bg-purple-400/10 top-[40%] left-[60%]"></div>
      </div>

      <Navbar 
        isDark={isDark} 
        toggleTheme={() => setIsDark(!isDark)} 
        onLogoClick={handleLogoClick}
        initials={portfolioData.personalInfo.initials}
      />
      
      <main>
        <Hero data={portfolioData.personalInfo} />
        <About data={portfolioData.personalInfo} timeline={portfolioData.timeline} />
        <Education data={portfolioData.education} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
        <Contact data={portfolioData.personalInfo} />
      </main>

      <Footer data={portfolioData.personalInfo} />
      <Chatbot data={portfolioData} />

      <AnimatePresence>
        {showPinModal && (
          <PinModal 
            isOpen={showPinModal} 
            onClose={() => setShowPinModal(false)} 
            onSuccess={() => setShowDashboard(true)} 
          />
        )}
        {showDashboard && (
          <DashboardModal 
            isOpen={showDashboard} 
            onClose={() => setShowDashboard(false)} 
            data={portfolioData}
            onSave={(newData) => setPortfolioData(newData)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
