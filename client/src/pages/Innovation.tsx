import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Nav from "./Nav";

export default function Innovation() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Nav/>

      {/* Hero Section - Solid Color */}
      <section className="relative h-[200px] flex items-center justify-center mt-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            INNOVATION
          </h1>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured Innovations</h2>
          
          <div className="grid gap-8 max-w-5xl mx-auto">
            {/* DiscoverU */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">DiscoverU – Gamified Career Exploration (2023 – 2025)</CardTitle>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">🏆 2025 HackBack Winner</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  DiscoverU began with a simple question: what if exploring careers could feel as engaging as playing a game? Most students are asked to choose a career path without ever experiencing what that path feels like. I wanted to change that.
                  <br />
                  DiscoverU is an AI-supported, game-based platform that lets students explore careers through interactive storytelling and adaptive feedback. The system presents real-world challenges tied to different professions, and students make choices that reveal how their interests align with those fields.
                  I built the prototype, wrote the decision logic, and connected it to key career development frameworks. DiscoverU won First Place at HackBack among 60 participants for its innovative approach to making career discovery personal and accessible.
                  <br />
                  My next goal is to pilot DiscoverU in schools, measure its impact on student motivation, and expand it into a scalable platform that can help students everywhere navigate their futures with confidence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Game Development</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">EdTech</Badge>
                  <Badge variant="outline">Research</Badge>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">Research Impact:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Higher satisfaction and engagement compared to traditional counseling</li>
                    <li>Increased confidence in career decision-making</li>
                    <li>Notable equity impact for first-generation and female students</li>
                  </ul>
                </div>
                
                {/* Side-by-side layout: Website screenshot and Joseph's photo */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* DiscoverU Website Screenshot */}
                  <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/discoveru-website.webp" 
                      alt="DiscoverU AI Platform Website" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Joseph's Photo */}
                  <div>
                    <img 
                      src="/hackbac-meeting-table.jpeg" 
                      alt="Joseph working with students on DiscoverU" 
                      className="rounded-lg shadow-lg w-full h-full object-cover object-[center_0%]"
                    />
                  </div>
                </div>
                
                {/* Visit Website Button */}
                <div className="text-center mt-6">
                  <a 
                    href="https://discoveru.ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Visit DiscoverU Website
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Assistive Robotic Arm */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">Rover with Sorting Arm (2024 – Present)</CardTitle>
                <p className="text-gray-600">Passion Project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  What began as a small idea about waste management has become one of my most ambitious engineering challenges. I am building a rover that can detect, identify, and sort plastics, metals, and other recyclables. Built on a Raspberry Pi and programmed in Python, the rover uses sensors to classify materials by type. <br />
                  This project has pushed me to think like both an engineer and a designer, balancing mechanical precision with software logic. Each prototype teaches me something new about control systems, power management, and the importance of iteration. <br />
                  My goal is to add a robotic arm and integrate computer vision so the rover can recognize materials using OpenCV. It is still in development, but the process has already taught me what true engineering persistence looks like: hundreds of small improvements leading toward a smarter and more sustainable system. <br />

                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">Arduino</Badge>
                  <Badge variant="outline">CAD Design</Badge>
                  <Badge variant="outline">3D Printing</Badge>
                  <Badge variant="outline">Assistive Tech</Badge>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900">Technical Features:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Arduino-based control with PCA9685 servo driver</li>
                    <li>Four high-torque servo motors for strength and range</li>
                    <li>Joystick interface for intuitive operation</li>
                    <li>Modular 3D-printed design for customization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Johns Hopkins Engineering Innovation */}
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-3xl">Johns Hopkins Engineering Innovation Program (Summer 2024)</CardTitle>
                <p className="text-gray-600">Summer 2025 Program • Grade A</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I completed a four-week pre-college course in Electrical and Computer Engineering through Johns Hopkins University’s Engineering Innovation Program. The course deepened my understanding of programming logic, circuit design, and problem solving through real engineering projects. <br />
                  I also completed a month-long Workforce Development course in Intermediate Java Programming, where I built object-oriented projects that improved my ability to translate concepts into working code. <br />
                  Together, these experiences strengthened both my technical foundation and my confidence in applying theory to hands-on design. <br />
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="w-full">
                    <img src="/johns-hopkins-engineering.jpeg" className="rounded-lg shadow-md w-full object-cover mb-4 "/>
                  </div>
                  <div className="w-full relative h-[360px] overflow-hidden rounded-lg shadow-md">
                    <video src="/johns-hopkin.mp4" autoPlay playsInline muted loop className=" w-full object-cover mb-4 absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"></video>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Engineering</Badge>
                  <Badge variant="outline">Design Thinking</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Grade A</Badge>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900">Program Highlights:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>College-level engineering curriculum and projects</li>
                    <li>Hands-on technical design and development</li>
                    <li>Collaborative problem-solving with peers</li>
                    <li>Strengthened foundation in engineering principles</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Robotics Competition */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">Robotics Competition Team</CardTitle>
                <p className="text-gray-600">Programming & Design Lead</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      As Programming and Design Lead for my school's robotics team, I lead the development of competition-ready robots from concept through execution. I design and manufacture robot components using CAD software, write control code for autonomous and driver-controlled operations, and guide strategy during competitions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Robotics</Badge>
                      <Badge variant="outline">Java</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">CAD</Badge>
                      <Badge variant="outline">Team Leadership</Badge>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Successfully competed in multiple robotics tournaments, demonstrating technical expertise, teamwork, and leadership under pressure.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <img 
                      src="/robotics-joseph-pro.jpeg" 
                      alt="Joseph with Competition Robot" 
                      className="rounded-lg shadow-lg w-full object-cover object-[center_10%] h-80"
                    />
                    <img 
                      src="/robotics-team-trophy.jpeg" 
                      alt="Robotics Competition Team with Trophy" 
                      className="rounded-lg shadow-lg w-full object-cover object-[center_35%] h-64"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NIKA Internship */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">NIKA Internship</CardTitle>
                <p className="text-gray-600">Professional Experience (August 2024)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 grid grid-cols-2 items-center gap-2">
                  <div>
                    <img 
                      src="/nika.jpeg" 
                      alt="Joseph with Competition Robot" 
                      className="rounded-lg shadow-lg w-full object-fill object-[center_0%] h-72 mb-4"
                    />
                    <img 
                      src="/nika-internship.jpeg" 
                      alt="NIKA Internship" 
                      className="rounded-lg shadow-md w-full object-fill object-[center_0%] h-72"
                    />
                  </div>
                    <img 
                      src="/nika-1.jpeg" 
                      alt="Robotics Competition Team with Trophy" 
                      className="rounded-lg shadow-lg w-full object-fill object-[center_0%] h-90"
                    />
                  </div>
                <p className="text-gray-700 leading-relaxed">
                  Gained valuable professional experience in the technology sector through a summer internship at NIKA. Applied technical skills in a real-world business environment and contributed to meaningful projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Professional Development</Badge>
                  <Badge variant="outline">Technology Sector</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Achieve Balance */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Achieve Balance – Student Athlete Planner (Summer 2023)
                </CardTitle>
                <p className="text-gray-600">American University Project (2023)</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-2">
                  <div className="w-full">
                    <img 
                      src="/achieve-balance.jpeg" 
                      alt="Achieve Balance Project" 
                      className="rounded-lg h-full shadow-md w-full object-cover mb-4"
                    />
                  </div>
                  <div className="w-full">
                    <video src="/achieve_.mp4" autoPlay muted loop playsInline className="rounded-lg shadow-md w-full object-cover mb-4 h-full"></video>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Achieve Balance was built for students who are managing both academics and athletics. During a summer program at American University, I led a small team to design a productivity app that helps student-athletes track their goals, assignments, and training schedules in one place.
                  <br />
                  Our vision was to create a planner that encourages not just time management but balance, blending achievement with well-being. The project won First Place among eight teams for combining thoughtful design with meaningful purpose.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">UX Design</Badge>
                  <Badge variant="outline">Mental Health Tech</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Chess Club Connect */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl">Chess Club Connect</CardTitle>
                <p className="text-gray-600">Mobile App Prototype</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Prototyped a mobile application to connect chess clubs across different schools, fostering inter-school competition and collaboration. As Chess Club Co-Captain, I identified the need for broader competitive opportunities and designed a solution to build a regional chess community.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">App Development</Badge>
                  <Badge variant="outline">Community Building</Badge>
                  <Badge variant="outline">UX Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">FOLLOW MY JOURNEY</h3>
          <p className="text-gray-300 mb-6">Connect with me on LinkedIn!</p>
          <p className="text-sm text-gray-400">© 2025 Joseph Peters. Building ethical technology for tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}

