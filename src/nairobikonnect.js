import React from "react";
import { Heart, Leaf, Mountain, MapPin, Calendar, Star } from "lucide-react";

import Karura from "./images/3a1fcd3d-0a14-4ea7-ad7e-eca07060b4af.jpg";
import Longonot from "./images/af8dd303-3881-433f-8481-01deb6012c97.jpg";
import Img1 from "./images/0b8c39aa-e015-4551-a419-e7b45b23e181.jpg";
import Img2 from "./images/66996167-c3f6-431a-bcd7-8fb4a425ddfa.jpg";
import Img3 from "./images/e1cce1bb-04ee-4f1d-8401-22b35c16a986.jpg";
import Img4 from "./images/3b01b901-c1c8-43e1-a974-c832e6474e7b.jpg";
import Img5 from "./images/adaa3b6e-d57a-4b60-932a-05cbd5810d85.jpg";
import Tree from "./images/da43976f-c49a-4fd1-9bb9-4e1caf8dc9bc.jpg";
import Hero from "./images/dusk.jpg";
import Logo from "./images/logo.jpg";

export default function Nairobikonnect() {
  const events = [
    {
      title: "Karura Forest Healing Walk",
      date: "March 15, 2026",
      location: "Karura Forest, Nairobi",
      image: Karura,
    },
    {
      title: "Mt. Longonot Sunrise Hike",
      date: "March 22, 2026",
      location: "Mt. Longonot, Naivasha",
      image: Longonot,
    },
    {
      title: "Community Tree Planting",
      date: "March 29, 2026",
      location: "Ngong Hills",
      image: Tree,
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      review:
        "This community changed my life. The healing walks helped me reconnect with myself and nature.",
      rating: 5,
    },
    {
      name: "John K.",
      review:
        "The Longonot hike was challenging but empowering. Amazing people and great organization.",
      rating: 5,
    },
    {
      name: "Grace W.",
      review:
        "Tree planting made me feel part of something bigger. I love the positive energy here.",
      rating: 5,
    },
  ];

  const gallery = [Img1, Img2, Img3, Img4, Img5];

  const socials = [
    { name: "TikTok", url: "https://www.tiktok.com/@nairobi.konnect", icon: "🎵" },
    { name: "Instagram", url: "https://www.instagram.com/nairobikonnect001", icon: "📷" },
    { name: "Twitter", url: "https://x.com/nairobikonnect", icon: "🐦" },
    { name: "YouTube", url: "https://www.youtube.com/@NairobiKonnect", icon: "▶️" },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6">
            <img src={Logo} alt="Nairobi Konnect Logo" className="w-32 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Nairobi Konnect
          </h1>

          <p className="text-yellow-400 font-semibold mb-6">
            Mental Health • Climate Action • Outdoor Adventures
          </p>

          <p className="text-white/90 text-base md:text-lg mb-10 leading-relaxed">
            A nature-powered community connecting people through wellness,
            conservation, and unforgettable outdoor experiences.
          </p>

          <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Join the Community
          </button>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-14">
            Our Mission
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Heart, title: "Mental Wellness", desc: "Healing through nature and connection." },
              { icon: Leaf, title: "Climate Action", desc: "Protecting our environment together." },
              { icon: Mountain, title: "Outdoor Adventures", desc: "Exploring Kenya’s beauty responsibly." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <item.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-14">
            Upcoming Events
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {events.map((event, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-bold text-lg text-green-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Calendar size={16} /> {event.date}
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} /> {event.location}
                  </p>

                  <button className="mt-4 w-full bg-green-900 text-white py-2 rounded-lg hover:bg-yellow-400 hover:text-green-900 transition">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-14">
            Community Reviews
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow">
                <h4 className="font-bold text-green-900 mb-2">{r.name}</h4>
                <div className="flex mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{r.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-14">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                loading="lazy"
                className="rounded-xl object-cover h-60 w-full hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-12">
        <div className="text-center">
          <p className="text-yellow-400 font-semibold mb-4">
            Healing through nature, together 🌿
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-green-900 transition"
              >
                {s.icon} {s.name}
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/70">
            © 2026 Nairobi Konnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
