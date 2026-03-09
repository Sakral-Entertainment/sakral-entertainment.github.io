import { Helmet } from 'react-helmet-async'
import robloxpng from './assets/1.png'

export default function App() {
    return (
        <div className="bg-neutral-950 text-white font-sans selection:bg-indigo-500">
            <Helmet>
                <title>Sakral Entertainment</title>
                <meta name="description" content="A collaborative open-source ecosystem designed for high-impact contributions and streamlined peer-to-peer development." />
                <meta name="keywords" content="Sakral Entertainment, Web Development, React, Open Source, Roblox" />
                <meta name="author" content="Sakral Entertainment" />

                {/* Open Graph (buat preview di WhatsApp, Discord, dll) */}
                <meta property="og:title" content="Sakral Entertainment" />
                <meta property="og:description" content="A collaborative open-source ecosystem designed for high-impact contributions and streamlined peer-to-peer development." />
                <meta property="og:image" content="/icon.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sakralentertainment.com" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sakral Entertainment" />
                <meta name="twitter:description" content="A collaborative open-source ecosystem designed for high-impact contributions and streamlined peer-to-peer development." />
                <meta name="twitter:image" content="/icon.png" />

                <link rel="canonical" href="https://sakralentertainment.com" />
            </Helmet>

            <nav className='bg-neutral-900 w-full h-20 sticky top-0 z-[9999] px-6 md:px-12 flex items-center justify-between border-b border-white/10'>
                <div className="flex flex-col leading-tight">
                    <h1 className="text-xl font-bold tracking-tighter">Sakral</h1>
                    <h1 className="text-xs text-indigo-500 font-medium">Entertainment</h1>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                        <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                        <li><a href="#project" className="hover:text-white transition-colors">Project</a></li>
                    </ul>
                    <a href="#contact" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                        Contact Me
                    </a>
                </div>
            </nav>

            <div id='home' className='flex flex-col justify-center items-center min-h-[90vh] p-6'>
                <img src="/icon.png" alt="icon" className="w-24 h-24 mb-6" />
                <h1 className='text-5xl font-bold text-center mb-6'>Sakral Entertainment</h1>
                <div className='flex flex-col items-center gap-8 w-full'>
                    <div className='w-full max-w-[500px] bg-blue-950/30 p-6 text-center border border-indigo-500/50 rounded-2xl text-gray-300 leading-relaxed'>
                        A collaborative open-source ecosystem designed for high-impact contributions and streamlined peer-to-peer development.
                    </div>
                    <div className="flex gap-4">
                        <a className='no-underline px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-xl transition-all border border-white/20' href='#project'>
                            See Project
                        </a>
                        <a className='no-underline px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white' href='#contact'>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <section id="skills" className="py-20 px-6 bg-neutral-900/50">
                <h2 className="text-2xl font-bold text-center mb-10">Skills</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-[300px] p-6 bg-neutral-900 border border-white/10 rounded-2xl flex items-center gap-4">
                        <span className="material-symbols-outlined text-indigo-500 text-3xl">code</span>
                        <div>
                            <h3 className="font-bold">Web Development</h3>
                            <p className="text-xs text-gray-400">React, Tailwind, & Firebase</p>
                        </div>
                    </div>
                    <div className="w-[300px] p-6 bg-neutral-900 border border-white/10 rounded-2xl flex items-center gap-4">
                        <span className="material-symbols-outlined text-fuchsia-500 text-3xl">brush</span>
                        <div>
                            <h3 className="font-bold">UI/UX Design</h3>
                            <p className="text-xs text-gray-400">Clean & Professional Layouts</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="project" className="py-20 px-6">
                <h2 className="text-2xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4">
                    <div className="group relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
                        <div className="relative h-48 w-full overflow-hidden">
                            <img src={robloxpng} alt="Roblox Account Age Preview"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-bold text-xl text-white tracking-tight">Roblox Account Age</h3>
                                <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
                                    API
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Check any Roblox account creation date and age instantly using our streamlined API integration.
                            </p>
                            <div className="flex items-center justify-between">
                                <a href="/roblox-account-age" className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm group/link hover:text-indigo-300 transition-colors">
                                    View Live Demo
                                    <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                                <div className="flex gap-3 text-gray-500">
                                    <span className="material-symbols-outlined text-lg">code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-6 text-center border-t border-white/5">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p className="text-gray-400 mb-6">Let's work together on your next project.</p>
                <a href="mailto:sakralentertainment@gmail.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all inline-block">
                    Send Message
                </a>
            </section>

            <footer className="py-10 text-center border-t border-white/5 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Sakral Entertainment. All Rights Reserved.
            </footer>
        </div>
    )
}
