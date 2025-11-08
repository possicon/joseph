import { Link } from "wouter";

export default function Research() {
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
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">INNOVATION</a>
                </Link>
                <Link href="/research">
                  <a className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">RESEARCH</a>
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
      <section className="relative h-[300px] flex items-center justify-center mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hackbac-meeting.jpeg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            RESEARCH
          </h1>
        </div>
      </section>

      {/* HackBac Winner Highlight */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-yellow-100 px-6 py-3 rounded-full mb-6">
                <span className="text-4xl">🏆</span>
                <span className="text-xl font-bold text-yellow-800">HackBac 2025 Winner</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                DiscoverU
              </h2>
              <p className="text-xl text-gray-700">
                The Impact of Gamified, AI-Supported Career Counseling on Student Career Readiness
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="/hackbac-certificate.jpeg" 
                  alt="Joseph Peters holding HackBac 1st Place certificate" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Award-Winning Research</h3>
                <p className="text-gray-700 leading-relaxed">
                  Won first place at HackBac 2025 in the Education/Venture track with DiscoverU, an AI-powered career counseling platform that uses gamification to help students discover meaningful career paths.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">1st Place</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI/ML</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">EdTech</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">60+ Participants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Research Overview</h2>
              <a 
                href="/discoveru-research-paper.pdf" 
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Research
              </a>
            </div>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
              <p>
                Traditional career counseling methods often fail to engage students effectively, particularly those from underrepresented backgrounds. Many students lack access to personalized guidance and struggle to explore career options that align with their interests and strengths.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">The Solution</h3>
              <p>
                DiscoverU combines artificial intelligence with gamification to create an engaging, personalized career exploration platform. By using game-like elements and AI-powered recommendations, the platform makes career discovery interactive, accessible, and equitable.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">Research Methodology</h3>
              <p>
                Conducted rigorous research with <strong>60+ students across three schools</strong>, comparing gamified AI-supported career counseling against traditional methods. The study measured satisfaction, engagement, equity impact, and career readiness outcomes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">Key Findings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Significantly higher satisfaction rates</strong> compared to traditional career counseling methods</li>
                <li><strong>Improved equity outcomes</strong> for underrepresented student populations</li>
                <li><strong>Increased student engagement</strong> through gamification elements</li>
                <li><strong>Enhanced career readiness</strong> and confidence in career decision-making</li>
                <li><strong>Scalable and accessible</strong> platform design for widespread implementation</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900">Impact</h3>
              <p>
                The research demonstrates that gamified, AI-supported career counseling can significantly outperform traditional methods in both satisfaction and equity impact. This evidence-based approach provides a blueprint for making career guidance more accessible and effective for all students.
              </p>
            </div>
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

