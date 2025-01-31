import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform is amazing! It has helped me learn so much.",
    avatar: "/api/placeholder/150/150"
  },
  {
    name: "Jane Smith",
    feedback: "The interactive games make learning so fun and easy!",
    avatar: "/api/placeholder/150/150"
  },
  {
    name: "Sam Wilson",
    feedback: "I love the teaching style. It keeps me engaged throughout.",
    avatar: "/api/placeholder/150/150"
  },
  {
    name: "Chris Evans",
    feedback: "A wonderful learning experience for kids.",
    avatar: "/api/placeholder/150/150"
  }
];

const teamMembers = [
  {
    name: "Vedant Purkar",
    role: "Founder & CEO",
    image: "/images/team/ved.jpg",
    description: "Leading innovation in digital education"
  },
  {
    name: "Sanchita Rajurkar",
    role: "Head of Technology",
    image: "/api/placeholder/240/240",
    description: "Expert in educational technology"
  },
  {
    name: "Snehal Sanap",
    role: "Content Director",
    image: "/api/placeholder/240/240",
    description: "Crafting engaging learning experiences"
  },
  {
    name: "Piyush Sanap",
    role: "Creative Lead",
    image: "/api/placeholder/240/240",
    description: "Designing interactive learning solutions"
  }
];

const Landing = () => {
  return (
    <div className="bg-white">
      {/*<header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">WickedMouse</span>
              <h1 className="text-3xl font-bold text-gray-900">INDIC</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/login" className="text-sm font-semibold text-gray-900">Games</Link>
            <Link to="/login" className="text-sm font-semibold text-gray-900">Stories</Link>
            <Link to="/login" className="text-sm font-semibold text-gray-900">Learnings</Link>
            <Link to="/login" className="text-sm font-semibold text-gray-900">AR</Link>
            <Link to="/login" className="text-sm font-semibold text-gray-900">About Us</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-9">
            <Link to="/login" className="text-sm font-semibold text-gray-900">Log in</Link>
            <Link to="/signup" className="text-sm font-semibold text-gray-900">Sign Up</Link>
          </div>
        </nav>
      </header>*/}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}>
          </div>
          <div
            className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(25.9% 44.1%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)",
            }}
></div>
        </div>

        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-20">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Explore the World of INDIC{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Learn More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Immersive Digital Experiences
            </h1>
            <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
              Dive into a world of interactive games, captivating stories, innovative learning, and augmented reality adventures.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link to="/home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Start Exploring
              </Link>
              <Link to="/login" className="text-sm font-semibold text-gray-900">
                Log in <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 -mt-4">
          <h3 className="text-2xl font-semibold text-center mb-4">What Our Users Say</h3>
          <div className="w-full">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              centerMode
              centerSlidePercentage={33.33}
              interval={4000}
              className="max-w-5xl mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 pb-6">
                  <div className="bg-white shadow-lg rounded-lg p-4 mx-2 flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-3"
                    />
                    <p className="text-gray-600 text-center mb-3">{`"${testimonial.feedback}"`}</p>
                    <h3 className="font-bold text-lg">- {testimonial.name}</h3>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-indigo-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-16">
  <div className="absolute inset-0 overflow-hidden">
    <div 
      className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-50 opacity-95"
      
    />
  </div>
  
  <div className="relative max-w-5xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feedback Form Section */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold mb-3 text-indigo-900">Quick Feedback</h4>
        <form className="space-y-3">
          <div>
            <textarea
              id="feedback"
              rows="3"
              className="w-full px-3 py-2 text-indigo-900 bg-white/80 rounded-md border border-indigo-200 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-sm"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded text-sm font-medium text-white transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* Quick Links */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold mb-3 text-indigo-900">Links</h4>
        <ul className="space-y-1.5 text-sm text-indigo-800">
          <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition-colors">Our Games</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition-colors">Stories</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="md:col-span-1">
        <h4 className="text-lg font-semibold mb-3 text-indigo-900">Contact</h4>
        <div className="space-y-1.5 text-sm text-indigo-800">
          <p>Email: contact@indic.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>123 Learning Street<br />Education City, ED 12345</p>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-indigo-200 mt-6 pt-6 text-center text-xs text-indigo-700">
      <p>&copy; 2025 INDIC. All rights reserved.</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Landing;