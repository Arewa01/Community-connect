import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col">

      {/* Hero Section */}
      <section
  className="bg-[#E8E8E8] bg-[url('/hero-illustration.png')] bg-cover bg-center bg-no-repeat py-16 px-4 flex flex-col items-center h-[900px]"
>
  <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#000]">
    Connect. Share. Thrive
  </h1>
  <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mb-8">
    Connect with people near you. Join interest groups, and professional communities. Get updates. Split bills. Buy together
  </p>
  {/* Email Signup Form */}
          <div className="flex items-center justify-center max-w-md mx-auto mb-12">
            <div className="flex w-full bg-white rounded-full shadow-sm border-white">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-6 py-4 rounded-l-full border-none outline-none text-gray-600"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-8  rounded-full">Get Started</Button>
            </div>
          </div>
</section>


      {/* How It Works */}
      <section className="container py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How Community Connect Works</h2>
        <p className="text-center text-gray-600 mb-12">From finding your people to splitting bills and saving on essentials – it's all seamless.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21-1.79-4-4-4S4 8.79 4 11c0 2.21 1.79 4 4 4s4-1.79 4-4zm0 0c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4s-4-1.79-4-4z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center">Join or Create a Community</h3>
            <p className="text-gray-600 text-center">Search and join existing communities based on your location, profession, or interests – or create your own in just a few taps.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center">Engage, Split Bills & Organize</h3>
            <p className="text-gray-600 text-center">Stay updated on announcements, chat with members, split costs for things like electricity, security, or events – from one place.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M9 16h6" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center">Buy Together & Save More</h3>
            <p className="text-gray-600 text-center">Access exclusive group deals on groceries, gas refills, internet bundles, and more — all made possible through community!</p>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4s-4-1.79-4-4z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center">Enjoy Secure, Verified Communities</h3>
            <p className="text-gray-600 text-center">Every member is verified. Every payment is tracked. We prioritize your safety and trust at every step.</p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-green-700 py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why It Works for Everyday People</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-center">Verified & Secure</h3>
            <p className="text-gray-600 text-center">All users are verified and every payment is securely processed. Trust is core of every community interaction.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-center">Real-Time Updates</h3>
            <p className="text-gray-600 text-center">Get announcements, reminders, and updates from your community. The more you make use of it, the more it works for everyone.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a4 4 0 100-8 4 4 0 000 8z" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-center">Group Savings</h3>
            <p className="text-gray-600 text-center">Join bulk purchases for essentials and enjoy community-driven savings. The more you connect, the more you save.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px] max-w-xs flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 10v4m8-8h-4m-8 0H4" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-center">Location-Based Discovery</h3>
            <p className="text-gray-600 text-center">Easily find and join communities around you – estate, school, church, or interest-based.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </div>
          <blockquote className="text-center text-lg italic text-gray-700 mb-6">"I joined a tech community on the app and ended up meeting people I now work with. It's like LinkedIn, but actually useful and local!"</blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center overflow-hidden">
              <Image src="/testimonial-avatar.png" alt="Testimonial avatar" width={64} height={64} />
            </div>
            <div className="font-bold">Joy Omotoso</div>
            <div className="text-gray-500 text-sm">Lagos</div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-[#f8fafc] py-20 px-4 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 w-full max-w-[1300px] min-h-[500px]">
          <div className="flex flex-col items-start justify-center mb-8 lg:mb-0 lg:w-1/2 pl-2 lg:pl-16">
            <h2 className="text-5xl font-bold mb-4 text-left">Download the app</h2>
            <p className="text-2xl text-left text-gray-700 mb-2">Join. Connect. Coordinate.</p>
            <p className="text-xl text-left text-gray-700 mb-8">All your communities, in one place.</p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="inline-block"><Image src="/appstore-badge.png" alt="Download on the App Store" width={180} height={54} /></a>
              <a href="#" className="inline-block"><Image src="/googleplay-badge.png" alt="Get it on Google Play" width={180} height={54} /></a>
            </div>
          </div>
          <div className="w-full max-w-[700px] lg:w-1/2 flex justify-end">
            <Image src="/app-screens.png" alt="App screenshots" width={900} height={500} className="rounded-xl w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#d1fae5] py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Find your people.<br />Join real communities near you.</h2>
        <div className="flex gap-4 mt-4">
          <button className="rounded-full bg-green-700 text-white px-8 py-3 font-semibold hover:bg-green-800 transition">Find Your Community</button>
          <button className="rounded-full border border-green-700 text-green-700 px-8 py-3 font-semibold hover:bg-green-50 transition">Explore Features</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-bold">Community Connect</span>
              <span className="bg-white text-green-700 px-2 py-1 rounded-full text-xs font-bold">NG</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>About</li>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>How It Works</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="font-bold mb-2">Quick Links</div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Explore Communities</li>
              <li>Group Buys</li>
              <li>Split a Bill</li>
              <li>FAQs</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <div className="font-bold mb-2">Legal</div>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Community Guidelines</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Social</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400">Twitter</a>
              <a href="#" className="hover:text-green-400">Instagram</a>
              <a href="#" className="hover:text-green-400">Facebook</a>
              <a href="#" className="hover:text-green-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
