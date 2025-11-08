import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Innovation() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-700 hover:text-gray-800 transition-colors tracking-wide">
                Joseph Peters
              </a>
            </Link>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                <Link href="/">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ABOUT</a>
                </Link>
                <Link href="/innovation">
                  <a className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">INNOVATION</a>
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

      {/* Hero Section - Solid Color */}
      <section className="relative h-[300px] flex items-center justify-center mt-20 bg-gradient-to-br from-orange-600 to-red-600">
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
                    <CardTitle className="text-3xl mb-2">DiscoverU</CardTitle>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">🏆 2025 HackBack Winner</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Won first place at HackBac 2025 in the Education/Venture track with DiscoverU, an AI-powered career counseling platform that uses gamification to help students discover meaningful career paths. Conducted rigorous research with 60+ students across three public schools, demonstrating that DiscoverU achieved significantly higher satisfaction, increased confidence, and greater career exploration compared to traditional counseling methods.
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
                <CardTitle className="text-3xl">Assistive Robotic Arm</CardTitle>
                <p className="text-gray-600">Passion Project</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A 4-degree-of-freedom robotic arm designed to help people with limited mobility complete essential daily tasks such as picking up small objects, pressing switches, and holding utensils. Built with Arduino, servo motors, and 3D-printed components, this open-source prototype demonstrates how affordable robotics can increase independence and improve quality of life.
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
                <CardTitle className="text-3xl">Johns Hopkins Engineering Innovation</CardTitle>
                <p className="text-gray-600">Summer 2025 Program • Grade A</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Completed the rigorous Johns Hopkins Engineering Innovation program, earning Grade A while developing advanced engineering problem-solving skills. The program provided hands-on experience with college-level engineering concepts, design thinking, and technical project development.
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
                <CardTitle className="text-3xl">Achieve Balance</CardTitle>
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
                  Co-created a comprehensive scheduling tool designed specifically for student-athletes to balance academics, sports training, and mental health. The platform helps users manage their time effectively by providing intelligent scheduling, workload visualization, and wellness check-ins.
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

