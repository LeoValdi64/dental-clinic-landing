"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Users,
  Award,
  Heart,
  Smile,
  Sparkles,
  AlertCircle,
  CircleDot,
  Gem,
  Menu,
  X,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description:
        "Comprehensive exams, cleanings, fillings, and preventive care to maintain your oral health.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description:
        "Veneers, bonding, and smile makeovers to enhance your natural beauty.",
    },
    {
      icon: CircleDot,
      title: "Orthodontics",
      description:
        "Invisalign and traditional braces to straighten your teeth and perfect your bite.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Care",
      description:
        "Same-day appointments for dental emergencies. We're here when you need us most.",
    },
    {
      icon: Gem,
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments for a brighter, more confident smile.",
    },
    {
      icon: Shield,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that look and feel like natural teeth.",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Our team brings decades of dental expertise to your care.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities.",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise, comfortable treatments.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments to fit your busy life.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Welcoming patients of all ages, from toddlers to seniors.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Dentist & Founder",
      bio: "With over 15 years of experience, Dr. Mitchell specializes in cosmetic and restorative dentistry.",
      image: "/team-1.jpg",
    },
    {
      name: "Dr. James Chen",
      role: "Orthodontics Specialist",
      bio: "Board-certified orthodontist passionate about creating beautiful, healthy smiles.",
      image: "/team-2.jpg",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      bio: "Dedicated to making dental visits fun and stress-free for children of all ages.",
      image: "/team-3.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      rating: 5,
      text: "Best dental experience I've ever had! Dr. Mitchell and her team made me feel completely at ease. My smile has never looked better.",
      date: "2 weeks ago",
    },
    {
      name: "Jennifer Walsh",
      rating: 5,
      text: "The staff is incredibly friendly and professional. They explained every procedure clearly and the results exceeded my expectations.",
      date: "1 month ago",
    },
    {
      name: "David Kim",
      rating: 5,
      text: "Emergency appointment on a Saturday - they fit me in within an hour. Truly grateful for their dedication to patient care.",
      date: "3 weeks ago",
    },
  ];

  const insuranceProviders = [
    "Delta Dental",
    "Cigna",
    "Aetna",
    "MetLife",
    "United Healthcare",
    "Blue Cross Blue Shield",
    "Guardian",
    "Humana",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Smile className="w-8 h-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">
                BrightSmile Dental
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition">
                About
              </a>
              <a href="#team" className="text-gray-600 hover:text-teal-600 transition">
                Our Team
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition">
                Reviews
              </a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">
                Contact
              </a>
              <a
                href="tel:+12065551234"
                className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (206) 555-1234
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-gray-600 hover:text-teal-600">
                  Services
                </a>
                <a href="#about" className="text-gray-600 hover:text-teal-600">
                  About
                </a>
                <a href="#team" className="text-gray-600 hover:text-teal-600">
                  Our Team
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-teal-600">
                  Reviews
                </a>
                <a href="#contact" className="text-gray-600 hover:text-teal-600">
                  Contact
                </a>
                <a
                  href="tel:+12065551234"
                  className="bg-teal-600 text-white px-4 py-2 rounded-full text-center"
                >
                  (206) 555-1234
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-teal-600 via-teal-500 to-sky-600">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Smile,
                <br />
                <span className="text-teal-100">Our Priority</span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 max-w-lg">
                Experience exceptional dental care in a warm, welcoming environment.
                Our expert team is dedicated to helping you achieve and maintain a
                healthy, beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition flex items-center justify-center gap-2"
                >
                  Book Appointment
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+12065551234"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Today
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-teal-100 text-sm">Happy Patients</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-teal-100 text-sm">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-teal-100 text-sm">Star Rating</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-white/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Smile className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-lg">Professional Dental Care</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Certified Experts</div>
                      <div className="text-sm text-gray-500">ADA Accredited</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Dental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for your entire family, from preventive
              treatments to advanced cosmetic procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition">
                  <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BrightSmile Dental?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At BrightSmile Dental, we believe everyone deserves a healthy,
                beautiful smile. Our commitment to excellence and patient care sets
                us apart.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-teal-100 to-sky-100 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-24 h-24 mx-auto mb-4 text-teal-600" />
                  <p className="text-teal-700 font-medium">Excellence in Dental Care</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-teal-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-sm text-teal-100">
                    Patient
                    <br />
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our skilled and compassionate dental professionals are dedicated to
              providing you with the best possible care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="h-64 bg-gradient-to-br from-teal-200 to-sky-200 flex items-center justify-center">
                  <Users className="w-24 h-24 text-teal-600/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Smile Transformations
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              See the amazing results our patients have achieved with our
              treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
              >
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/20 rounded-lg h-40 flex items-center justify-center">
                    <span className="text-white/60 text-sm">Before</span>
                  </div>
                  <div className="bg-white/20 rounded-lg h-40 flex items-center justify-center">
                    <span className="text-white/60 text-sm">After</span>
                  </div>
                </div>
                <p className="text-center text-white/80 mt-4 text-sm">
                  Smile Makeover #{item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We accept most major dental insurance plans and offer flexible
              payment options to make your care affordable.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{provider}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your insurance?{" "}
              <a href="#contact" className="text-teal-600 font-medium hover:underline">
                Contact us
              </a>{" "}
              to verify coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to schedule your appointment? Have questions about our
                services? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      123 Smile Street, Suite 100
                      <br />
                      Seattle, WA 98101
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(206) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@brightsmiledental.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="mt-8 h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <span>Map - Seattle, WA</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request an Appointment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                      placeholder="(206) 555-1234"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition resize-none"
                    placeholder="Tell us about your dental needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Smile className="w-8 h-8 text-teal-400" />
                <span className="text-xl font-bold">BrightSmile Dental</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing exceptional dental care to Seattle families since 2004.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    General Dentistry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Cosmetic Dentistry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Orthodontics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Dental Implants
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-teal-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-teal-400 transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-teal-400 transition">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-400 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>
                    123 Smile Street, Suite 100
                    <br />
                    Seattle, WA 98101
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span>(206) 555-1234</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span>hello@brightsmiledental.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} BrightSmile Dental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
