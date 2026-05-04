import React from "react";
import {
  Layers,
  Flame,
  ShieldCheck,
  Wrench,
  Droplets,
  FileCheck,
  Shovel,
  Landmark,
  Factory,
  Tractor,
  Zap,
  SearchCheck,
  ClipboardCheck,
  Camera,
  MapPin,
  ArrowUpRight,
  Send,
  Phone,
  Calendar,
  Maximize
} from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0f172a]">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent z-10" />
    <div className="absolute inset-0 bg-slate-800 opacity-30 bg-cover bg-center grayscale" style={{backgroundImage: "url('/images/hero-liner-site.jpg')"}} />
    <div className="relative z-20 max-w-7xl mx-auto px-6">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-white uppercase">
        Built to <span className="text-orange-500">Contain.</span> <br /> Installed to Last.
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
        Professional geosynthetic liner installation for the Southwest’s most demanding environments. 
        From material placement and field seaming to testing, repairs, and final inspection, SLS 
        delivers containment systems built for long-term performance.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition-all">
          Request a Project Review
        </a>
        <a href="#services" className="border-2 border-slate-500 hover:border-white hover:bg-white/5 text-white px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition-all">
          View Services
        </a>
      </div>
    </div>
  </section>
);

const CredibilityBar = () => (
  <div className="bg-slate-900 border-y border-slate-800 py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-bold">
      <div>
        <div className="text-4xl text-white">100M+</div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Sq. Ft. Installed</div>
      </div>
      <div>
        <div className="text-4xl text-white">15+ YRS</div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Field Experience</div>
      </div>
      <div>
        <div className="text-4xl text-white">FIELD-TESTED</div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">Installs</div>
      </div>
      <div>
        <div className="text-4xl text-white">DOCUMENTED</div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-2">QC Workflow</div>
      </div>
    </div>
  </div>
);

const ServiceCards = () => {
  const services = [
    { title: "Geosynthetic Liner Installation", focus: "Precision Deployment & Scale", icon: Layers, copy: "Expert deployment of high-performance geosynthetics including HDPE, LLDPE, and GCL. Our crews are trained for large-scale logistics, ensuring material is protected from subgrade to final anchor trench." },
    { title: "Field Seaming & Welding", focus: "Structural Integrity", icon: Flame, copy: "Utilizing industry-standard hot wedge and extrusion welding techniques. Every seam is performed by experienced field technicians focused on thermal consistency, weld geometry, and project specs." },
    { title: "Non-Destructive Testing", focus: "Verified Results", icon: ShieldCheck, copy: "Rigorous verification of field seams using air-pressure and vacuum-box testing. Our process identifies and addresses issues during installation, supporting a structurally sound containment system." },
    { title: "Pipe Boots & Penetrations", focus: "Custom Technical Fabrications", icon: Wrench, copy: "Specialized sealing for complex site geometry. From custom-fabricated pipe boots to structural concrete attachments, SLS ensures penetrations are properly detailed and integrated." },
    { title: "Floating Covers", focus: "Environmental Protection", icon: Droplets, copy: "Professional installation of tensioned and weighted floating cover systems for evaporation control and water quality. Built for long-term UV exposure and fluctuating fluid levels." },
    { title: "Final Inspection & Repairs", focus: "Project Closeout", icon: FileCheck, copy: "A comprehensive walk-down and repair log are standard. We do not consider a job complete until repairs are addressed, inspection items reviewed, and documentation organized for the owner." },
  ];
  return (
    <section id="services" className="bg-[#0f172a] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Primary Capabilities</p>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">Full-Service Containment Solutions</h2>
          <p className="text-lg leading-relaxed text-slate-400">Southwest Liner Systems supports geosynthetic containment projects from placement through testing, repairs, and final documentation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group border border-slate-700 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-slate-900">
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/30 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={26} strokeWidth={2.25} />
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-500">{service.focus}</p>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-white">{service.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MarketGrid = () => {
  const markets = [
    { title: "Mining", icon: Shovel, description: "Containment systems for process ponds, solution ponds, and demanding site conditions." },
    { title: "Water & Wastewater", icon: Droplets, description: "Wastewater lagoons, evaporation ponds, reservoirs, and water management infrastructure." },
    { title: "Landfills", icon: Landmark, description: "Large-scale liner systems supporting project specifications and regulatory requirements." },
    { title: "Industrial", icon: Factory, description: "Secondary containment and specialized liner systems for industrial facilities." },
    { title: "Agriculture", icon: Tractor, description: "Dairy lagoons, irrigation ponds, and agricultural water containment applications." },
    { title: "Energy", icon: Zap, description: "Containment support for energy, utility, and infrastructure-related project sites." },
  ];
  return (
    <section className="border-y border-slate-800 bg-slate-900 px-6 py-24 text-center">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Markets Served</p>
        <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">Built for Demanding Environments</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-12">SLS supports containment projects across the Southwest where site conditions and installation quality matter.</p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-6">
          {markets.map((market) => {
            const Icon = market.icon;
            return (
              <article key={market.title} className="group flex flex-col items-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center border border-slate-700 bg-slate-950/60 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-500 group-hover:text-orange-500">
                  <Icon size={34} strokeWidth={1.6} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{market.title}</h3>
                <p className="text-xs text-slate-500 leading-6">{market.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const QualityControlSection = () => {
  const qcPoints = [
    { title: "Field Testing", copy: "Seams are reviewed through required testing methods such as air-pressure and vacuum-box testing.", icon: SearchCheck },
    { title: "Repair Tracking", copy: "Repairs are identified, addressed, and organized as part of the final project review process.", icon: ShieldCheck },
    { title: "Inspection Support", copy: "SLS supports owners and engineers with clear field records and closeout-ready documentation.", icon: ClipboardCheck },
    { title: "Closeout Documentation", copy: "Final records are compiled into an organized package to support project turnover.", icon: FileCheck },
  ];
  return (
    <section className="bg-[#0f172a] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden border border-slate-700 bg-slate-800 aspect-[4/3] flex items-center justify-center text-sm font-mono uppercase tracking-widest text-slate-600">
          QC Field Testing Visual
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Tested. Reviewed. Documented.</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Quality Control</p>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">Quality Control You Can Build Around</h2>
          <p className="mb-10 text-lg text-slate-400 leading-relaxed">SLS supports installation quality through field testing, repair review, inspection support, and professional closeout documentation.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {qcPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="border border-slate-700 bg-slate-900/70 p-6">
                  <Icon className="mb-4 text-orange-500" size={28} />
                  <h3 className="mb-2 text-lg font-bold text-white">{point.title}</h3>
                  <p className="text-sm text-slate-400 leading-6">{point.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const MaterialsSection = () => {
  const materials = [ "HDPE", "LLDPE", "PVC", "EPDM", "XR-5", "Polypropylene", "GCL", "Geotextile", "Geonet", "Geocomposite" ];
  return (
    <section className="bg-slate-900 px-6 py-20 border-y border-slate-800">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Technical Specs</p>
          <h2 className="text-3xl font-black text-white uppercase">Material Expertise</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">Southwest Liner Systems installs a wide range of geosynthetics to meet site-specific containment goals.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {materials.map((m) => (
            <div key={m} className="border border-slate-700 bg-slate-950/40 p-5 text-center transition-all hover:border-slate-500">
              <span className="text-xl font-black text-white">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectGallery = () => {
  const projects = [
    { title: "Containment Pond Installation", market: "Water Management", location: "Southwest Region", description: "Large-scale geomembrane installation for water containment and long-term site performance." },
    { title: "Landfill Liner System", market: "Landfills", location: "Western U.S.", description: "Field seaming, testing, and final inspection support for regulated containment infrastructure." },
    { title: "Mining Process Pond", market: "Mining", location: "Southwest Region", description: "Geosynthetic containment support for demanding terrain and complex logistics." },
    { title: "Wastewater Lagoon", market: "Water & Wastewater", location: "Municipal / Industrial", description: "Liner installation and testing support for wastewater treatment applications." },
  ];
  return (
    <section className="bg-[#0f172a] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Project Gallery</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Built at Field Scale</h2>
            <p className="text-lg text-slate-400 mt-6">Field-tested installation experience across the Southwest's major industrial sectors.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:border-orange-500 hover:text-orange-500 transition-all">
            Request a Review <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="border border-slate-700 bg-slate-900 group">
              <div className="aspect-[16/10] bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-all z-10" />
                <div className="absolute left-5 top-5 bg-slate-950/80 px-3 py-2 text-xs font-bold text-orange-500 ring-1 ring-white/10 uppercase tracking-widest flex items-center gap-2 z-20">
                  <Camera size={14} /> {project.market}
                </div>
                <div className="h-full w-full flex items-center justify-center text-slate-700 font-bold uppercase tracking-widest group-hover:scale-105 transition-all duration-500">
                  Project Visual
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  <MapPin size={14} /> {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-7">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => (
  <section id="contact" className="bg-slate-900 px-6 py-24 border-t border-slate-800">
    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Request a Project Review</h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">Need a containment system installed, tested, and documented with confidence? Connect with SLS to discuss specifications, materials, and field requirements.</p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-slate-300">
            <div className="h-10 w-10 flex items-center justify-center bg-slate-800 text-orange-500">
              <Phone size={20} />
            </div>
            <span className="font-bold">Estimating & Project Review</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <div className="h-10 w-10 flex items-center justify-center bg-slate-800 text-orange-500">
              <MapPin size={20} />
            </div>
            <span className="font-bold">Serving New Mexico & the Western U.S.</span>
          </div>
        </div>
      </div>
      <div className="bg-[#0f172a] border border-slate-700 p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-8">Project Inquiry</h3>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Company</label>
              <input type="text" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Email</label>
              <input type="email" placeholder="name@company.com" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Phone</label>
              <input type="tel" placeholder="(000) 000-0000" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest flex items-center gap-2">
                <Maximize size={12}/> Project Size (Sq. Ft.)
              </label>
              <input type="text" placeholder="e.g. 150,000" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500 tracking-widest flex items-center gap-2">
                <Calendar size={12}/> Timeline / Bid Date
              </label>
              <input type="text" placeholder="e.g. Q3 2026" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Project Type / Material Required</label>
            <input type="text" placeholder="e.g. Wastewater Lagoon / 60-mil HDPE" className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-widest">Message</label>
            <textarea rows={3} className="w-full bg-slate-900 border border-slate-700 p-3 text-white focus:border-orange-500 outline-none" />
          </div>
          <button className="w-full bg-orange-500 py-4 font-black uppercase text-white tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
            Send Project Inquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-orange-500 selection:text-white font-sans scroll-smooth">
      <Hero />
      <CredibilityBar />
      <ServiceCards />
      <MarketGrid />
      <QualityControlSection />
      <MaterialsSection />
      <ProjectGallery />
      <ContactCTA />
      <footer className="bg-[#0f172a] py-12 px-6 border-t border-slate-800 text-center text-slate-500 text-sm font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Southwest Liner Systems. All Rights Reserved.
      </footer>
    </main>
  );
}
