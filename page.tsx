'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  useEffect(() => {
    gsap.utils.toArray('.animate-up').forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })
  }, [])

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 font-[Inter]">
      {/* Hero Section */}
      <section
        className="h-96 flex items-center justify-center text-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
        <div className="bg-white/80 p-10 rounded-lg backdrop-blur-md animate-up relative">
          <h1 className="text-5xl font-bold text-black">About BT Solution LLC</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-black">
            Delivering IT consulting & software solutions with precision since 2009.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-up">Who We Are</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 animate-up">
          BT Solution LLC provides IT consulting and software development services. Clients respect us for our reliable budget and time control, transparency, and high-quality service. We work with companies in mining, finance, manufacturing, and retail industries in Mongolia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            {
              title: "IT Consulting",
              desc: "Expert advice for businesses to navigate the complex world of IT solutions."
            },
            {
              title: "Software Development",
              desc: "Custom software solutions tailored to meet your business needs."
            },
            {
              title: "Project Management",
              desc: "Efficient project management to ensure timely delivery and quality results."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur animate-up hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-up">Our Journey</h2>
        <ol className="relative border-l border-blue-300 max-w-4xl mx-auto animate-up">
          {[
            { year: '2009', text: 'Founded in Ulaanbaatar with 3 passionate engineers.' },
            { year: '2013', text: 'Launched our first ERP product for mining sector.' },
            { year: '2017', text: 'Expanded to HR and Supply Chain software solutions.' },
            { year: '2023', text: 'Recognized as a top IT consultant in Mongolia.' }
          ].map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white" />
              <h3 className="text-lg font-semibold text-blue-900">{item.year}</h3>
              <p className="text-gray-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 animate-up">Meet Our Founder</h2>
        <div className="flex flex-col items-center animate-up">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
          />
          <h3 className="text-xl font-semibold">Батбаяр Рагчаа</h3>
          <p className="text-gray-600">Founder & CEO</p>
          <p className="mt-2 text-gray-500 max-w-lg">
           88888888888
          </p>
        </div>         
      </section>

      {/* Sticky CTA + Chatbot */}
      <div className="fixed bottom-5 right-5 z-50 space-y-3">
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-full shadow-lg transition text-sm"
        >
          💬 Let's Talk
        </a>
        <button
          onClick={() => alert('Chatbot Coming Soon 🤖')}
          className="bg-white border border-gray-300 text-sm px-4 py-2 rounded-full shadow hover:shadow-md transition"
        >
          🤖 Chat with us
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-6 text-center">
        <p>&copy; 2024 BT Solution LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}