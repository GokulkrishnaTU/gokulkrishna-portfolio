import React from 'react';
import { Mail, Calendar, MapPin, ArrowUpRight, Link as LinkIcon, Download } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Summary & Info  */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            About Me
          </h2>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mb-12">
            Versatile Fullstack Developer with over 5 years of experience specializing in building user-focused web applications and digital marketing. Expert in the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js, Nuxt, and Vue. Proven track record in optimizing application performance by up to 60% and integrating sophisticated UI/UX animations to enhance user engagement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:gokulkrishnatu11@gmail.com" className="font-medium hover:text-white transition-colors">gokulkrishnatu11@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Calendar className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Born</p>
                <p className="font-medium">Sep 23, 1998  •  India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/gokul-krishna-3a4aba212/?isSelfProfile=true" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/GokulkrishnaTU" className="flex items-center gap-2 bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors duration-300">
              <LinkIcon className="w-5 h-5" />
              <span>Github</span>
            </a>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="lg:col-span-1 rounded-3xl bg-white/5 border border-white/10 p-8 h-fit">
          <h3 className="text-2xl font-semibold mb-8">Technical Output</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-white/50 tracking-widest uppercase mb-2">Frontend</p>
              <p className="text-white/80 font-medium leading-relaxed">
                React, Next.js, Vue.js, Nuxt.js, Redux, Tailwind CSS, Framer Motion, HTML5, CSS3, JavaScript (ES6+)
              </p>
            </div>
            
            <div>
              <p className="text-sm text-white/50 tracking-widest uppercase mb-2">Backend</p>
              <p className="text-white/80 font-medium leading-relaxed">
                Node.js, Express.js, TypeScript, Python, REST APIs
              </p>
            </div>

            <div>
              <p className="text-sm text-white/50 tracking-widest uppercase mb-2">Databases</p>
              <p className="text-white/80 font-medium leading-relaxed">
                MongoDB, PostgreSQL (Schema design, Indexing, JSONB)
              </p>
            </div>

            <div>
              <p className="text-sm text-white/50 tracking-widest uppercase mb-2">Tools & Platforms</p>
              <p className="text-white/80 font-medium leading-relaxed">
                AWS, DigitalOcean, Azure, Cloudflare CDN, VS Code, Figma, JIRA
              </p>
            </div>
            
            <div>
              <p className="text-sm text-white/50 tracking-widest uppercase mb-2">Specialized</p>
              <p className="text-white/80 font-medium leading-relaxed">
                SEO Strategy, Machine Learning (PyTorch, TensorFlow), Data Structures & Algorithms
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
