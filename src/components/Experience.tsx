import React from 'react';

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Automillennium Group",
    location: "Dubai, UAE",
    period: "September 2025 – Present",
    points: [
      "Corporate Web Development: Spearheaded the full-stack design and development of the corporate website using Next.js, ensuring a high-performance and responsive digital presence.",
      "Advanced UI/UX: Integrated Framer Motion to implement fluid user interactions and visual storytelling, significantly increasing brand engagement.",
      "Performance Engineering: Built a robust media delivery pipeline using Cloudflare CDN for high-resolution assets, ensuring seamless playback for premium car showcases.",
      "E-commerce Leadership: Managed the Rhinomotive WordPress/WooCommerce platform and currently leading the UI strategy for Arcane Warrior on Shopify to optimize conversion rates."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Odix Pay LLC",
    location: "Freelance",
    period: "2025",
    points: [
      "Dashboard Architecture: Developed scalable admin dashboards using Nuxt.js and Next.js with full SSR/CSR support.",
      "Security & Logic: Implemented Role-Based Access Control (RBAC) and JWT-based authentication flows to secure enterprise-grade UI components.",
      "Data Visualization: Integrated ApexCharts and Chart.js to render complex business metrics from large datasets."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Virtual Minds LLC",
    location: "Dubai, UAE",
    period: "March 2024 – February 2025",
    points: [
      "Full-Stack Ownership: Engineered the E-Voucher e-commerce application from the ground up, managing both frontend and backend development in the MERN stack.",
      "End-to-End Admin Solutions: Designed, developed, and deployed a comprehensive role-based admin panel from scratch, integrating complex data algorithms and interactive charts.",
      "System Optimization: Redesigned data structures for the admin panel, resulting in a 60% improvement in data fetching speeds.",
      "Product Growth: Optimized the core e-commerce platform, improving overall product performance and system efficiency by 40%."
    ]
  },
  {
    role: "Junior MERN Stack Developer",
    company: "Apro IT Solutions",
    location: "Kerala, India",
    period: "January 2022 – February 2024",
    points: [
      "SSR Implementation: Enhanced SEO and page load speeds by 60% through the implementation of Server-Side Rendering (SSR).",
      "Modular Design: Leveraged React and Styled Components to build a library of reusable UI components."
    ]
  },
  {
    role: "Digital Marketing & Word Press Developer",
    company: "Mediacrow",
    location: "Kerala, India",
    period: "Dec 2019 - Dec 2021",
    points: [
      "Facebook Ads, SEC Optimization, Keyword Research, Google Ads.",
      "Wordpress (CMS) Web Development."
    ]
  }
];

const educationList = [
  {
    title: "Bachelor of Arts in Economics",
    institution: "Sree Kerala Varma College, Calicut University",
    year: "2020",
  }
];

const certsList = [
  "Certified Digital Marketing Expert (CDME) – Digiperform Institute.",
  "SEO Fundamentals & Fundamentals of Digital Marketing – Google.",
  "Complete Web Development – Udemy."
];

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Work Experience */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Work Experience
          </h2>
          
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className="absolute w-4 h-4 bg-[#0a0a0a] border-4 border-white rounded-full -left-[9px] top-1" />
                
                <h3 className="text-2xl font-semibold text-white/90">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 mb-6 text-white/50 font-medium">
                  <span className="text-white/70">{exp.company}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{exp.location}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{exp.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((pt, j) => {
                    const [highlight, text] = pt.includes(':') ? pt.split(':') : ['', pt];
                    return (
                      <li key={j} className="text-white/70 leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-white/30 rounded-full" />
                        {highlight ? (
                          <>
                            <span className="text-white font-semibold">{highlight}:</span>
                            {text}
                          </>
                        ) : (
                          pt
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="lg:col-span-1 space-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
            <div className="space-y-8">
              {educationList.map((edu, i) => (
                <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white/90 mb-2">{edu.title}</h3>
                  <p className="text-white/60 mb-2">{edu.institution}</p>
                  <p className="text-white/40 text-sm font-medium">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
            <ul className="space-y-3">
              {certsList.map((cert, i) => (
                <li key={i} className="flex gap-4 items-start text-white/70 rounded-2xl bg-white/5 border border-white/10 p-6">
                  <span className="shrink-0 w-2 h-2 rounded-full bg-white/40 mt-2" />
                  <span className="leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
