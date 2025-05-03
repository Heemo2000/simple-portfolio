import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = ()=> {
    
    const gameEngines = ["Unity"];
    const languages = ["C#","C++", "Java"];
    const vcs = ["Git"];
    const designPatterns = ["Singleton", "Observer", "State", "Object Pool", "Service Locator"]

    return(
        <section id="skills" className="min-h-screen flex items-center justify-center py-20">
          <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4">Game Engines</h3>
                        <div className="flex flex-wrap gap-2">
                            {gameEngines.map((engine, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {engine}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((language, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {language}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4">Version Control Systems</h3>
                        <div className="flex flex-wrap gap-2">
                            {vcs.map((vc, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {vc}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-blue-500/20">
                        <h3 className="text-xl font-bold mb-4">Design Patterns</h3>
                        <div className="flex flex-wrap gap-2">
                            {designPatterns.map((pattern, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {pattern}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </RevealOnScroll> 
            
        </section>
    )
}