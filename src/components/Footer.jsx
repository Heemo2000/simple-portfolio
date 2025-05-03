


export const Footer = () => {

    const socialMediaLinks = [
        {name:"Linkedin", link: "https://www.linkedin.com/in/himanshu-gupta-33491b1ba/", imageLink: "images/linkedin.svg"},
        {name:"Gmail", link: "mailto:hgupta01062000@gmail.com", imageLink: "images/gmail.svg"},
        {name: "X", link:"https://x.com/Himanshu4548418", imageLink:"images/x.svg"},
        {name: "Github", link:"https://github.com/Heemo2000", imageLink: "images/github.svg"}
    ]


    return (<footer className="fixed bottom-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-center items-center h-16">
                      <div className="grid grid-cols-4 gap-4 items-center sm:gap-6 md:gap-8">
                        {socialMediaLinks.map((item) => (
                          <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.name}
                            className="flex justify-center items-center transition-transform hover:-translate-y-1"
                          >
                            <img
                              src={item.imageLink}
                              alt={item.name}
                              className="w-6 h-6 sm:w-8 sm:h-8"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                </div>
            </footer>
        )
}