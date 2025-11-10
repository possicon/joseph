import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lightbulb, Users, Rocket, Heart } from "lucide-react";
import Nav from "./Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Nav/>

      {/* Word Cloud Hero Section */}
      <section className="pt-10 bg-white">
        <div className="w-full">
          <img 
            src="/joseph-wordcloud-suit.jpeg" 
            alt="Joseph Peters - Engineer & Community Leader" 
            className="w-full h-auto object-cover object-[center_0%]"
          />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
            Building Tomorrow's Solutions Today
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm Joseph Peters, a passionate engineer and innovator committed to leveraging technology 
            to expand educational access, empower underrepresented communities, and create assistive 
            solutions that increase independence for people with disabilities.
          </p>
        </div>
        <div className="flex flex-col mx-auto px-6 md:px-16 py-10 md:flex-row gap-y-4 w-full justify-between">
                <div className="md:w-3/5 shadow-[inset_0px_3.33px_20.42px_0px_#1650F51F] bg-[#F7F7F7] p-6 rounded-2xl space-y-4 text-[#111111]">
                    <div className="bg-white space-y-4 p-4 rounded-2xl text-[15px] font-base">
                        <p>"What sets me apart is my commitment to connecting technical innovation with ethical and moral reasoning, reflecting my studies in Justice and Biblical Theology.
                        </p>
                        <p>
                            Through my work with HackBack, robotics competitions, and community service initiatives like Giveback Backpacks, I have consistently demonstrated that technology can be a powerful force for social good. 
                        </p>
                    </div>
                    <div className="bg-white space-y-4 p-4 rounded-2xl text-[15px] font-base">
                        <p>
                            My approach is analytical and persistent—I break down complex problems into solvable parts and push through challenges until meaningful solutions emerge.

                        </p>
                        <p>
                            Currently, I am conducting independent research on the gamification of education and its impact on student motivation. I love taking apart and reassembling systems—whether robotics, automotive parts, or software—because understanding how things work is the first step to making them better."
                        </p>
                    </div>
                </div>
                <div className="md:w-1/3 shadow-[inset_0px_3.33px_20.42px_0px_#1650F51F] bg-[#F7F7F7] md:p-6 p-3 rounded-xl flex justify-center items-center">
                    <div className="flex justify-center items-center gap-x-3 md:gap-y-10 gap-y-5 flex-wrap text-[#1F1F1F]">
                        <div className="bg-white space-y-2 p-4 rounded-2xl text-[16.6px] font-base md:w-[130px] h-32 flex flex-col items-center justify-center w-[40%] text-center shadow-soft">
                            <h3 className="leading-[1.3rem]">2025 Hackathon Winner</h3>
                            <img src="certificate-check-svgrepo-com.svg" className="w-8" alt="" />
                        </div>
                        <div className="bg-white space-y-2 p-4 rounded-2xl text-[16.6px] font-base md:w-[130px] h-32 flex flex-col items-center justify-center w-[40%] text-center shadow-soft">
                            <h3 className="font-base leading-[1.3rem]">Robotics Competition Win</h3>
                            <img src="icons8-checkmark.svg" className="w-8" alt="" />
                        </div>
                        <div className="bg-white space-y-2 p-4 rounded-2xl flex-col text-[16.6px] font-base md:w-[130px] h-32 flex items-center justify-center w-[40%] text-center shadow-soft"><h3 className="leading-[1.3rem]">College Java Cert</h3>
                            <img src="rocket-svgrepo-com (1).svg" className="w-8" alt="" />
                        </div>
                        <div className="bg-white space-y-2 p-4 flex-col rounded-2xl text-[16.6px] font-base md:w-[130px] h-32 flex items-center justify-center w-[40%] text-center shadow-soft"><h3 className="leading-[1.3rem]">2023 Hackaton win</h3>
                            <img src="flag-svgrepo-com.svg" className="w-8" alt="" />
                        </div>
                    </div>
                </div>
        </div>
      </section>

      {/* Interactive Activity Showcase - 4 Hero Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Impact Areas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Innovation Hero */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/robotics-team.jpeg" 
                  alt="Innovation & Technology" 
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="w-8 h-8 text-orange-400" />
                    <h3 className="text-3xl font-bold text-white">Innovation</h3>
                  </div>
                  <p className="text-white/90 text-sm">Building AI-powered solutions and robotics</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  From winning HackBack with <strong>DiscoverU</strong>—an AI-powered career counseling platform—to 
                  designing assistive robotic arms, I create technology that solves real-world problems with empathy and precision.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-orange-50">AI/ML</Badge>
                  <Badge variant="outline" className="bg-orange-50">Robotics</Badge>
                  <Badge variant="outline" className="bg-orange-50">Research</Badge>
                </div>
                <Link href="/innovation">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 group">
                    Explore Projects
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Community Hero */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/giveback-backpacks-team.jpeg" 
                  alt="Community Impact" 
                  className="w-full h-full object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-8 h-8 text-blue-400" />
                    <h3 className="text-3xl font-bold text-white">Community</h3>
                  </div>
                  <p className="text-white/90 text-sm">Serving those in need and creating equity</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Co-founded <strong>Giveback Backpacks</strong>, raised over <strong>$50,000</strong> for the Leukemia & Lymphoma Society, 
                  and volunteer regularly at Shepherd's Table—because leadership means lifting others up.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50">Service</Badge>
                  <Badge variant="outline" className="bg-blue-50">Fundraising</Badge>
                  <Badge variant="outline" className="bg-blue-50">Equity</Badge>
                </div>
                <Link href="/community">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                    See Impact
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Leadership Hero */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/johns-hopkins-engineering.jpeg" 
                  alt="Leadership & Learning"
                  className="w-full h-64 object-cover object-[center_0%] bg-gray-100 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8 text-purple-400" />
                    <h3 className="text-3xl font-bold text-white">Leadership</h3>
                  </div>
                  <p className="text-white/90 text-sm">Guiding teams and mentoring peers</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As <strong>Programming & Design Lead</strong> for my robotics team and <strong>Co-Captain</strong> of Chess Club, 
                  I lead through collaboration, strategic thinking, and empowering teammates to excel.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-purple-50">Team Leadership</Badge>
                  <Badge variant="outline" className="bg-purple-50">Mentorship</Badge>
                  <Badge variant="outline" className="bg-purple-50">Strategy</Badge>
                </div>
                <Link href="/philosophy">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 group">
                    My Philosophy
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Research Hero */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/achieve-balance.jpeg" 
                  alt="Research & Innovation" 
                  className="w-full h-full object-cover object-[center_90%] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="w-8 h-8 text-green-400" />
                    <h3 className="text-3xl font-bold text-white">Research</h3>
                  </div>
                  <p className="text-white/90 text-sm">Evidence-based solutions for real problems</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Conducted rigorous research with <strong>60+ students</strong> across three schools, demonstrating that 
                  gamified career counseling significantly outperforms traditional methods in satisfaction and equity impact.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-green-50">Research</Badge>
                  <Badge variant="outline" className="bg-green-50">Data Analysis</Badge>
                  <Badge variant="outline" className="bg-green-50">EdTech</Badge>
                </div>
                <Link href="/innovation">
                  <Button className="w-full bg-green-600 hover:bg-green-700 group">
                    View Research
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always looking for opportunities to collaborate on projects that combine technology, 
            education, and social impact. Whether you're an educator, engineer, or changemaker—let's connect.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://www.linkedin.com/in/joseph-peters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white">
                Connect on LinkedIn
              </Button>
            </a>
            <Link href="/philosophy">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800 border-2 border-purple-700">
                Learn My Philosophy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">FOLLOW MY JOURNEY</h3>
          <p className="text-gray-400 mb-6">Connect with me on LinkedIn</p>
          <p className="text-gray-500 text-sm">
            © 2025 Joseph Peters. Building ethical technology for tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
}

