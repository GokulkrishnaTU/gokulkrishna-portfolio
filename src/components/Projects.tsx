import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Admin Dashboard",
    description: "Developed a high-performance admin panel with role-based access control and advanced data calculations. Optimized data fetching using MERN, resulting in a 60% speed increase.",
    tags: ["MERN Stack", "Role-Based Access", "Performance"],
    category: "Virtual Minds LLC",
  },
  {
    id: 2,
    title: "E-Commerce Platform (E-Voucher)",
    description: "Built a full-featured e-commerce system including product management, cart functionality, and order processing using MongoDB, Node.js, and React.",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    category: "Fullstack E-Commerce",
  },
  {
    id: 3,
    title: "Developer Social Media",
    description: "Full-stack social platform enabling user profiles, content sharing, and real-time interactions integrated with a robust REST API.",
    tags: ["Node.js", "Express", "React.js", "MongoDB"],
    category: "Social Platform",
  },
  {
    id: 4,
    title: "Automillennium Corporate",
    description: "Performance-optimized site with Cloudflare media pipeline ensuring seamless playback for premium car showcases.",
    tags: ["Next.js", "Cloudflare", "Framer Motion"],
    category: "Corporate Web",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description: "Dynamic website with React.js using API from TMDB. Implemented responsive design and cross-browser compatibility.",
    tags: ["React.js", "REST API", "CSS"],
    category: "Entertainment",
  },
  {
    id: 6,
    title: "Clickekart & idenDT",
    description: "Creative UI Development and modern web applications leveraging Next.js and Supabase for seamless integrations.",
    tags: ["Next.js", "Supabase", "CSS"],
    category: "Creative Development",
  },
  {
    id: 7,
    title: "Custom E-Commerce Engine",
    description: "Feature-rich e-commerce app with Razorpay integration, product/category management, and HBS Template engine.",
    tags: ["Node.js", "HBS", "MongoDB", "Razorpay"],
    category: "Custom Web App",
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white/90">
          My Work
        </h2>
        <p className="text-xl text-white/60 leading-relaxed max-w-3xl mb-8">
          The following projects showcase my skills and experience through real-world examples. Each project reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 overflow-hidden"
          >
            {/* Subtle Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 to-white/0 rounded-2xl blur-sm" />
            </div>

            <div className="relative z-10 h-full flex flex-col pt-4">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {project.category}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 flex justify-between items-start group-hover:text-white transition-colors text-white/90">
                {project.title}
                <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </h3>
              
              <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium tracking-wider uppercase px-3 py-1 bg-white/10 rounded-full text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
