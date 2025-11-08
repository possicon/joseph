import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-700 hover:text-gray-800 transition-colors tracking-wide">
                JOSEPH PETERS
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                <Link href="/">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
                </Link>
                <Link href="/about">
                  <a className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">ABOUT</a>
                </Link>
                <Link href="/innovation">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">INNOVATION</a>
                </Link>
                <Link href="/research">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">RESEARCH</a>
                </Link>
                <Link href="/community">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">COMMUNITY</a>
                </Link>
              </div>
              <a 
                href="/joseph-peters-resume.pdf" 
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reduced Height */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 mt-20">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">ABOUT ME</h1>
          <p className="text-xl md:text-2xl font-light">My journey, values, and vision</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Who I Am Section */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Who I Am</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  I'm Joseph Peters, a passionate engineer and innovator committed to leveraging technology to expand educational access, empower underrepresented communities, and create assistive solutions that increase independence for people with disabilities.
                </p>
                <p>
                  My work spans multiple domains—from winning HackBac with DiscoverU, an AI-powered career counseling platform, to designing assistive robotic arms, to raising over $50,000 for the Leukemia & Lymphoma Society. I believe that technology should serve humanity, and I'm dedicated to building solutions that make a real difference in people's lives.
                </p>
                <p>
                  As a student, leader, and community advocate, I strive to bridge the gap between innovation and impact. Whether I'm programming robots, conducting research, or volunteering at Shepherd's Table, I approach every challenge with empathy, precision, and a commitment to creating positive change.
                </p>
              </div>
            </div>

            {/* Professional Portraits */}
            <div>
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src="/joseph-portrait-1.jpeg" 
                  alt="Joseph Peters Professional Portrait" 
                  className="rounded-lg shadow-lg w-full object-cover h-96 object-[center_20%]"
                />
                <img 
                  src="/joseph-portrait-2.jpeg" 
                  alt="Joseph Peters Professional Portrait" 
                  className="rounded-lg shadow-lg w-full object-cover h-96 object-[center_15%]"
                />
              </div>
            </div>

            {/* Extracurriculars & Skills */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Extracurriculars & Skills</h2>
              <div className="space-y-6">
                {/* 1. Technical Skills - FIRST */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">💻 Technical Skills</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    From building competition robots to developing AI-powered web applications, I've cultivated a diverse technical skillset across hardware and software. My programming journey spans Java coursework at Montgomery College to full-stack development with React and Python for real-world projects like DiscoverU.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Java</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Python</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">JavaScript</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">React.js</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">HTML/CSS</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Arduino</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">CAD Design</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Git/GitHub</span>
                  </div>
                  {/* Java Certificate */}
                  <div className="mt-4 bg-white rounded-lg p-3 shadow-md">
                    <img 
                      src="/java-certificate.jpg" 
                      alt="Java Programming Certificate - Montgomery College" 
                      className="w-full rounded"
                    />
                    <p className="text-xs text-gray-600 text-center mt-2">Intermediate Java Programming - Montgomery College (August 2024)</p>
                  </div>
                </div>

                {/* 2. Chess Club Co-Captain - SECOND */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">♟️ Chess Club Co-Captain</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As Co-Captain of the school chess team, I coordinate weekly practice sessions, mentor newer players on opening theory and endgame tactics, and represent our school in competitive inter-school tournaments. Chess has sharpened my strategic thinking and taught me that the best moves often require patience and foresight.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Team leadership & mentorship</span>
                    </div>
                  </div>
                </div>

                {/* 3. Theatre & Performance - THIRD */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🎭 Theatre: Building Sets</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Behind every great performance is a team that brings the vision to life. I work on the technical theatre crew, designing and constructing stage sets for school productions. From measuring and cutting lumber to painting backdrops and problem-solving structural challenges, I've learned that theatre is as much about engineering and craftsmanship as it is about performance.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Set design & construction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Collaborative problem-solving</span>
                    </div>
                  </div>
                </div>

                {/* 4. Fencing - LAST */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🤺 Fencing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Fencing training has taught me that success comes from the intersection of physical discipline and mental strategy. Every bout is a high-speed chess match where split-second decisions matter. The sport demands unwavering focus, precise footwork, and the ability to read your opponent's intentions—skills that translate directly to problem-solving in technology and leadership.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Discipline & focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">Strategic thinking & reflexes</span>
                    </div>
                  </div>
                  {/* Fencing Video */}
                  <div className="mt-4 grid md:grid-cols-2 items-center gap-x-2">
                    <img 
                      src="/fencing.jpeg" 
                      alt="Achieve Balance Project" 
                      className="rounded-lg shadow-md w-full object-cover mb-4"
                    />
                    <div className="w-full space-y-2">
                      <video  
                        className="w-full rounded-lg shadow-lg object-cover"
                        poster="/fencing-video-poster.jpg"
                        src="/fencing-2.mp4" autoPlay muted loop playsInline
                      />
                      <video  
                        className="w-full rounded-lg shadow-lg object-cover"
                        poster="/fencing-video-poster.jpg"
                        src="/fencing.mp4" autoPlay muted loop playsInline
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Philosophy */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Leadership Philosophy</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Leadership is a privilege and a responsibility to inspire and guide others in achieving their visions and goals. In my leadership philosophy, I believe that every individual has the potential to become a leader, continuously evolving to be a better version of themselves.
                </p>
                <p>
                  For me, the key principles of leadership are <strong>collaboration, passion, and mentorship</strong>. A vital aspect of leadership is the commitment to consistently improve and challenge oneself. Despite my extensive leadership experience, I am still learning every day about what it truly means to be an effective leader.
                </p>
                <p>
                  My perspective on teamwork and collaboration has transformed through my experiences. I've learned the importance of speaking up and advocating for others, ensuring every voice is heard in the discussion. Leadership, to me, is about continuous innovation while staying connected with the people you lead.
                </p>
                <p>
                  I've also come to understand that making mistakes is a part of growth, as long as you learn from them and adapt. Moreover, I've realized that working harder doesn't always mean working smarter. Being adaptable, communicative, and flexible are essential qualities of a good leader.
                </p>
              </div>
            </div>

            {/* Journey of Impact Timeline */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Journey of Impact</h2>
              <p className="text-gray-600 mb-8 text-lg">
                A timeline of my academic achievements and extracurricular leadership
              </p>
              
              {/* Horizontal Scrolling Timeline */}
              <div className="relative">
                <div className="overflow-x-auto pb-8">
                  <div className="flex gap-6 min-w-max px-4">
                    
                    {/* Timeline Item 1 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-blue-600">2023</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Johns Hopkins Engineering Innovation</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Completed rigorous engineering program with Grade A, developing advanced problem-solving skills and technical expertise.
                      </p>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-green-600">2023</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Co-Founded Giveback Backpacks</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Launched community service organization providing backpacks and school supplies to hundreds of students in need.
                      </p>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-purple-600">2023-2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Leukemia & Lymphoma Society</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Led fundraising efforts raising over $50,000 for cancer research and patient services.
                      </p>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-orange-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-orange-600">2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Robotics Programming & Design Lead</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Led team in designing competition-ready robots using CAD, Java, and Python programming.
                      </p>
                    </div>

                    {/* Timeline Item 5 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-red-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-red-600">2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Chess Club Co-Captain</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Mentored teammates, organized tournaments, and developed strategic thinking skills through competitive play.
                      </p>
                    </div>

                    {/* Timeline Item 6 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-indigo-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-indigo-600">August 2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">NIKA Internship</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Gained professional experience in technology and business operations in a real-world work environment.
                      </p>
                    </div>

                    {/* Timeline Item 7 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-teal-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-teal-600">2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">DiscoverU Research</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Conducted rigorous research with 60+ students demonstrating gamified AI career counseling significantly outperforms traditional methods.
                      </p>
                    </div>

                    {/* Timeline Item 8 - HIGHLIGHT */}
                    <div className="flex-shrink-0 w-80 bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-400 rounded-lg p-6 hover:shadow-2xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-yellow-700">October 2024</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">🏆 Won DiscoverU HackBac</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        First place winner at HackBac competition with DiscoverU—an AI-powered career counseling platform addressing educational equity.
                      </p>
                    </div>

                    {/* Timeline Item 9 */}
                    <div className="flex-shrink-0 w-80 bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-semibold text-blue-600">Present</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Continuing the Journey</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Pursuing new opportunities to combine technology, education, and social impact to create meaningful change.
                      </p>
                    </div>

                  </div>
                </div>
                
                {/* Scroll Hint */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 italic">← Scroll to explore my journey →</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always looking for opportunities to collaborate on projects that combine technology, education, and social impact. Whether you're an educator, engineer, or changemaker—let's connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.linkedin.com/in/joseph-peters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Connect on LinkedIn
            </a>
            <Link href="/innovation">
              <a className="bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                View My Projects
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FOLLOW MY JOURNEY</h3>
            <p className="text-gray-400 mb-6">Connect with me on LinkedIn</p>
            <p className="text-gray-500 text-sm">
              © 2025 Joseph Peters. Building ethical technology for tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

