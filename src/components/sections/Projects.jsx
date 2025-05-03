import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = ()=>{
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                  <div>
                    <video width="640" height="360" autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: "100%",
                                                        height: "200px", // Fixed height
                                                        objectFit: "cover", // Or "contain" based on your needs
                                                        borderRadius: "12px",
                                                        display: "block"
                                                      }}
                    >
                      <source src="videos/FAndF.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Fast and Foolish</h3>
                    <p className="text-gray-400 mb-4">
                        It's a 3D racing game where you compete with AI cars to win the race but with crazy speed and foolish driving.
                    </p>
                    <div className="flex flex-wrap gap-2">
                            {["Unity","C#"].map((tech, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between items-center text-center justify-center">
                      <a
                        href="https://maziminds.itch.io/car-racing"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                  
                  <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                  <div>
                    <video width="640" height="360" autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: "100%",
                                                        height: "200px", // Fixed height
                                                        objectFit: "cover", // Or "contain" based on your needs
                                                        borderRadius: "12px",
                                                        display: "block"
                                                      }}  
                    >
                      <source src="videos/BB.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Buggy Bot</h3>
                    <p className="text-gray-400 mb-4">
                        It's a 2D cum 3D top down shooting game made for Brackeys Game Jam 2025.1.
                    </p>
                    <div className="flex flex-wrap gap-2">
                            {["Unity","C#"].map((tech, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between items-center text-center justify-center">
                      <a
                        href="https://umbrason.itch.io/buggybot"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>

                  <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                  <div>
                    <video width="640" height="360" autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: "100%",
                                                        height: "200px", // Fixed height
                                                        objectFit: "contain", // Or "contain" based on your needs
                                                        borderRadius: "12px",
                                                        display: "block"
                                                      }}  
                    >
                      <source src="videos/TTT.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Real Tic Tac Toe</h3>
                    <p className="text-gray-400 mb-4">
                        It's a simple tic tac toe game made for Android.
                    </p>
                    <div className="flex flex-wrap gap-2">
                            {["Unity","C#"].map((tech, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between items-center text-center justify-center">
                      <a
                        href="https://squashyheemo.itch.io/tic-tac-toe"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>

                  <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                  <div>
                    <video width="640" height="360" autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: "100%",
                                                        height: "200px", // Fixed height
                                                        objectFit: "cover", // Or "contain" based on your needs
                                                        borderRadius: "12px",
                                                        display: "block"
                                                      }}  
                    >
                      <source src="videos/ER.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Endless Runner</h3>
                    <p className="text-gray-400 mb-4">
                        It's a simple endless runner game where as a cat, the player has to collect coins and avoid obstacles.
                    </p>
                    <div className="flex flex-wrap gap-2">
                            {["Unity","C#"].map((tech, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between items-center text-center justify-center">
                      <a
                        href="https://squashyheemo.itch.io/endless-runner-game"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>

                  <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                  <div>
                    <video width="640" height="360" autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    style={{
                                                        width: "100%",
                                                        height: "200px", // Fixed height
                                                        objectFit: "cover", // Or "contain" based on your needs
                                                        borderRadius: "12px",
                                                        display: "block"
                                                      }}  
                    >
                      <source src="videos/SS.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Space Shooter</h3>
                    <p className="text-gray-400 mb-4">
                        It's a shooting game where you shoot rocks and enemy spacecrafts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                            {["Unity","C#"].map((tech, key)=> (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow[0px_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                                </span>
                            ))}
                    </div>
                    <div className="flex justify-between items-center text-center justify-center">
                      <a
                        href="https://squashyheemo.itch.io/space-shooter"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </RevealOnScroll>
            
        </section>
    )
}