import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Nav from "./Nav";

export default function Community() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Nav/>

      {/* Hero Section - Reduced Height */}
      <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 mt-20">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">WE GIVE</h1>
          <p className="text-xl md:text-2xl font-light">Serving communities and empowering the next generation</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Giveback Backpacks</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column: Website Screenshot and Visit Button */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/giveback-backpacks-website.webp" 
                    alt="Giveback Backpacks Website" 
                    className="w-full"
                  />
                </div>
                
                {/* Visit Website Button - Directly under screenshot */}
                <div className="text-center">
                  <a 
                    href="http://givebackpacks.co" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Visit Website
                  </a>
                </div>
              </div>
              
              {/* Right Column: Text */}
              <div className="space-y-6">
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Educational equity is not just an ideal—it's a necessity. Too many students lack the basic supplies they need to succeed in school. That's why I co-founded <strong>Giveback Backpacks</strong>, a community service organization dedicated to providing backpacks and essential school supplies to students in need.
                  </p>
                  <p>
                    Through organizing fundraising campaigns, coordinating supply drives, and partnering with local schools, we ensure that every child has the tools they need to learn and grow. This initiative has supported hundreds of students, removing barriers to education and creating opportunities for success.
                  </p>
                  <p>
                    Starting this program taught me valuable lessons about community organizing, resource mobilization, and the power of collective action. It's proof that when we come together with a shared purpose, we can make a real difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Two Photos Side by Side - Same Size and Aligned */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mb-10 max-w-5xl mx-auto">
              <img 
                src="/giveback-backpacks-distribution.jpeg" 
                alt="Giveback Backpacks Distribution - Handing out laptops" 
                className="rounded-lg shadow-lg w-full h-80 object-cover object-[center_0%]"
              />
              <img 
                src="/communitybag.jpeg" 
                alt="Giveback Backpacks Distribution - Handing out laptops" 
                className="rounded-lg shadow-lg w-full h-80 object-cover object-[center_0%]"
              />
              <img 
                src="/giveback-backpacks-team.jpeg" 
                alt="Giveback Backpacks Team - Joseph and team" 
                className="rounded-lg shadow-lg w-full h-80 object-cover object-[center_0%]"
              />
            </div>
            
            {/* Impact Section */}
            <div className=" shadow-sm p-6 rounded-lg max-w-5xl items-center mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Impact</h3>
                <p className="text-gray-700 mb-4">
                  Hundreds of students supported with essential school supplies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-700 text-sm">Multiple fundraising campaigns</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-700 text-sm">Community supply drives</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-700 text-sm">School partnerships</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg h-24 flex items-start flex-col justify-center">
                <p className="text-2xl font-bold text-blue-900">$70,000+ raised</p>
                <p className="text-gray-600 text-sm mt-1">Supporting educational equality and creating opportunities for success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Community Impact */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Additional Community Impact</h2>
            
            <div className="grid gap-6">
              {/* Leukemia & Lymphoma Society */}
              <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="text-3xl">Leukemia & Lymphoma Society</CardTitle>
                  <p className="text-gray-600 font-semibold">Fundraising Leadership</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Organized and led fundraising efforts for the Leukemia & Lymphoma Society, coordinating events, engaging community members, and building awareness about blood cancer research. This experience taught me how to mobilize people around a meaningful cause and demonstrated the real-world impact of persistent, organized effort.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-purple-900">$50,000+ raised</p>
                        <p className="text-gray-600 text-sm mt-1">Supporting cancer research and patient services</p>
                      </div>
                      <a 
                        href="/lls-award-letter.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Award Letter
                      </a>
                    </div>
                    <div>
                      <embed 
                        src="/lls-award-letter.pdf" 
                        type="application/pdf" 
                        className="w-full h-96 rounded-lg shadow-lg border-2 border-purple-200"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shepherd's Table */}
              <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-3xl">Shepherd's Table</CardTitle>
                  <p className="text-gray-600 font-semibold">Volunteer | 2024-Present</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="md:col-span-2">
                    <p className="text-gray-700 leading-relaxed">
                      Dedicated 2 years to volunteering at a local community center established for helping people in need. I help cook and clean to serve community members, contributing to an organization that feeds hundreds of people daily.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    <img 
                      src="/shepherds.jpeg" 
                      alt="Shepherd's Table Volunteer Work" 
                      className="rounded-lg shadow-md w-full object-fill h-72 object-[center_0%]"
                    />
                    <img 
                      src="/shepherds-table.jpeg" 
                      alt="Shepherd's Table Volunteer Work" 
                      className="rounded-lg shadow-md w-full object-fill h-72 object-[center_0%]"
                    />
                    <video 
                      src="/shepherd's Table.mp4"  loop autoPlay muted playsInline
                      className="rounded-lg shadow-md w-full object-fill h-72 object-[center_40%]"
                    />
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900">Impact:</p>
                    <p className="text-gray-700 mt-2">Hundreds of people being fed daily through consistent volunteer service.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Chess Club */}
              <Card className="hover:shadow-xl transition-shadow border-l-4 border-l-orange-600">
                <CardHeader>
                  <CardTitle className="text-3xl">Chess Club - Lions</CardTitle>
                  <p className="text-gray-600 font-semibold">Co-Captain | Current</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Helped revive and now lead the school's chess team, organizing weekly practice sessions, coordinating inter-school matches, and mentoring newer players. I also prototyped a mobile app to connect chess clubs across schools, expanding competitive opportunities beyond our immediate community.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-semibold text-orange-900">Impact:</p>
                    <p className="text-gray-700 mt-2">Revived dormant chess program, built active team, and created vision for regional chess community connectivity.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">FOLLOW MY JOURNEY</h3>
          {/* <p className="text-gray-300 mb-6">Connect with me on LinkedIn!</p> */}
          <p className="text-sm text-gray-400">© 2025 Joseph Peters. Building ethical technology for tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}

