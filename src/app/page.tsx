'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Star, 
  Waves, 
  MapPin, 
  Phone, 
  Mail, 
  Menu,
  X,
  Shield,
  Sparkles,
  ChefHat,
  Wine,
  Play,
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Quote,
  Camera,
  Zap,
  Heart
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PremiumHotelWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(0);
  
  const { scrollY, scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sample data with better content
  const rooms = [
    {
      id: 1,
      name: "Emperor Suite",
      price: "₹35,000",
      originalPrice: "₹42,000",
      size: "120 sqm",
      view: "City Skyline",
      guests: "3 Guests",
      features: ["Private Butler", "Infinity View", "Wine Cellar", "Helipad Access", "24K Gold Fixtures"],
      image: "imperial-suite",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Presidential Villa",
      price: "₹65,000",
      originalPrice: "₹75,000",
      size: "300 sqm",
      view: "Panoramic",
      guests: "6 Guests",
      features: ["Private Chef", "Infinity Pool", "Cinema Room", "Spa Suite", "Dedicated Concierge"],
      image: "presidential-villa",
      badge: "Ultra Luxury"
    },
    {
      id: 3,
      name: "Royal Penthouse",
      price: "₹28,500",
      originalPrice: "₹32,000",
      size: "85 sqm",
      view: "Garden Vista",
      guests: "2 Guests",
      features: ["Marble Bath", "Private Terrace", "Art Collection", "Premium Amenities", "Personal Valet"],
      image: "royal-penthouse",
      badge: "Romantic"
    }
  ];

  const experiences = [
    {
      icon: ChefHat,
      title: "Michelin-Star Dining",
      description: "Curated by world-renowned chefs",
      details: "3 award-winning restaurants featuring molecular gastronomy and authentic regional cuisine",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Waves,
      title: "Infinity Wellness",
      description: "Rejuvenate mind, body & soul",
      details: "25,000 sqft spa with thermal pools, cryotherapy, and ancient healing treatments",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Wine,
      title: "Sommelier Collection",
      description: "Rare wines from around the globe",
      details: "Temperature-controlled cellars housing over 3,000 vintage selections",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Bespoke Experiences",
      description: "Tailored luxury beyond imagination",
      details: "Private helicopter tours, yacht charters, and exclusive cultural experiences",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Ratan Tata",
      title: "Chairman Emeritus, Tata Group",
      quote: "Unparalleled service that redefines luxury hospitality in India.",
      rating: 5,
      image: "guest-1"
    },
    {
      name: "Priya Krishnan",
      title: "CEO, Tech Innovation",
      quote: "Every detail crafted to perfection. A truly transformative experience.",
      rating: 5,
      image: "guest-2"
    },
    {
      name: "Ambassador Williams",
      title: "Diplomatic Corps",
      quote: "The epitome of elegance meets modern sophistication.",
      rating: 5,
      image: "guest-3"
    }
  ];

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Loading Screen
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            className="w-20 h-20 border-4 border-amber-500/30 border-t-amber-500 rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            THE HERITAGE
          </motion.h1>
          <p className="text-amber-400/70">Crafting your luxury experience...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-black text-white overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-amber-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  THE HERITAGE
                </div>
                <div className="text-xs text-amber-400/70 -mt-1">BANGALORE</div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Suites', href: '#rooms' },
                { name: 'Dining', href: '#dining' },
                { name: 'Wellness', href: '#wellness' },
                { name: 'Experiences', href: '#experiences' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-amber-400 font-medium transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/25 transition-all"
              >
                Reserve Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-amber-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/20"
            >
              <div className="px-6 py-6 space-y-4">
                {['Home', 'Suites', 'Dining', 'Wellness', 'Experiences'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-xl font-medium text-white/80 hover:text-amber-400 py-2"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-bold mt-6"
                >
                  Reserve Your Stay
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <div 
            className="w-full h-full bg-gradient-to-br from-amber-900/20 via-black to-gray-900 bg-cover bg-center"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(245,158,11,0.1) 0%, transparent 70%), linear-gradient(135deg, #000 0%, #1a1a1a 100%)"
            }}
          />
          {/* Floating Elements */}
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: index * 0.2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          style={{ y: textY }}
          className="relative z-20 text-center max-w-6xl px-6"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ 
              staggerChildren: 0.2,
              delayChildren: 0.1,
              ease: "easeOut"
            }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨ Bangalore&apos;s Most Prestigious Address
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="block bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200%"
                  }}
                >
                  THE
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["100%", "0%", "100%"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200%"
                  }}
                >
                  HERITAGE
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
            >
              Where architectural grandeur meets contemporary luxury. 
              <span className="text-amber-400"> Experience India&apos;s finest hospitality </span>
              in the heart of Bangalore&apos;s tech capital.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-12 py-4 text-lg font-bold rounded-full hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(245, 158, 11, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-amber-400/50 text-amber-400 px-12 py-4 text-lg font-bold rounded-full hover:border-amber-400 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Virtual Tour
              </motion.button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto"
            >
              {[
                { number: "50+", label: "Luxury Suites" },
                { number: "25", label: "Years Legacy" },
                { number: "98", label: "Guest Satisfaction" },
                { number: "24/7", label: "Concierge" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-12 border-2 border-amber-400/50 rounded-full flex justify-center cursor-pointer hover:border-amber-400 transition-colors">
            <motion.div 
              className="w-1.5 h-4 bg-amber-400 rounded-full mt-2"
              animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Booking Widget */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative -mt-32 z-30 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-2xl border border-amber-500/30 rounded-3xl p-8 shadow-2xl"
            whileHover={{ 
              borderColor: 'rgba(245, 158, 11, 0.6)',
              boxShadow: '0 25px 50px rgba(245, 158, 11, 0.2)'
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Reserve Your Luxury Experience</h3>
              <p className="text-amber-400/70">Best rates guaranteed • Instant confirmation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-amber-400 mb-3">Check-in & Check-out</label>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center cursor-pointer hover:border-amber-500/50 transition-all group">
                  <Calendar className="w-5 h-5 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">Mar 15 - 18, 2024</div>
                    <div className="text-gray-400 text-sm">3 nights</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-400 mb-3">Guests</label>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center cursor-pointer hover:border-amber-500/50 transition-all group">
                  <Users className="w-5 h-5 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">2 Adults</div>
                    <div className="text-gray-400 text-sm">1 Room</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-400 mb-3">Suite Type</label>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center cursor-pointer hover:border-amber-500/50 transition-all group">
                  <Sparkles className="w-5 h-5 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">Emperor</div>
                    <div className="text-gray-400 text-sm">Premium</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-400 mb-3">Experiences</label>
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center cursor-pointer hover:border-amber-500/50 transition-all group">
                  <Wine className="w-5 h-5 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-medium">Add-ons</div>
                    <div className="text-gray-400 text-sm">Optional</div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-amber-400/70">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2" />
                Free Cancellation
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Secure Booking
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Instant Confirmation
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Premium Suites Section */}
      <section id="rooms" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              🏰 Luxury Accommodations
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Palatial <span className="text-amber-400">Suites</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Each suite is a masterpiece of design, featuring bespoke furnishings, 
              premium amenities, and breathtaking views of Bangalore&apos;s skyline.
            </p>
          </motion.div>

          {/* Room Selection Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 flex">
              {rooms.map((room, index) => (
                <motion.button
                  key={room.id}
                  onClick={() => setSelectedRoom(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedRoom === index
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {room.name.split(' ')[0]}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Featured Room */}
          <motion.div
            key={selectedRoom}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    rooms[selectedRoom].badge === 'Most Popular' ? 'bg-green-500/20 text-green-400' :
                    rooms[selectedRoom].badge === 'Ultra Luxury' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-pink-500/20 text-pink-400'
                  }`}>
                    {rooms[selectedRoom].badge}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  {rooms[selectedRoom].name}
                </h3>

                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl font-bold text-amber-400">
                    {rooms[selectedRoom].price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {rooms[selectedRoom].originalPrice}
                  </span>
                  <span className="text-lg text-gray-400">per night</span>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">{rooms[selectedRoom].size}</div>
                    <div className="text-gray-400 text-sm">Suite Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">{rooms[selectedRoom].view}</div>
                    <div className="text-gray-400 text-sm">View</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">{rooms[selectedRoom].guests}</div>
                    <div className="text-gray-400 text-sm">Capacity</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-white mb-4">Exclusive Features</h4>
                  {rooms[selectedRoom].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4 pt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:from-amber-400 hover:to-yellow-400 transition-all"
                  >
                    Reserve Suite
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-amber-500/50 text-amber-400 rounded-xl font-bold hover:border-amber-400 transition-all"
                  >
                    Virtual Tour
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/20 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-transparent">
                    <Camera className="w-24 h-24 text-amber-400/50" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                  >
                    <Play className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-2xl font-bold text-lg shadow-2xl">
                  360° View
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Curated Experiences
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Beyond <span className="text-amber-400">Luxury</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in extraordinary experiences crafted exclusively for our distinguished guests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 2
                }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${experience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {experience.title}
                  </h3>
                  
                  <p className="text-amber-400/80 text-lg font-medium mb-4">
                    {experience.description}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {experience.details}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center text-amber-400 font-semibold group-hover:text-amber-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                  <experience.icon className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              💬 Guest Stories
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Cherished <span className="text-amber-400">Memories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 relative group cursor-pointer"
              >
                <Quote className="w-12 h-12 text-amber-400/20 mb-6" />
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-amber-400/70 text-sm">{testimonial.title}</div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Heart className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900/50 border-t border-amber-500/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                    THE HERITAGE
                  </div>
                  <div className="text-sm text-amber-400/70">BANGALORE</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Where architectural grandeur meets contemporary luxury in India&apos;s tech capital. 
                Experience unparalleled hospitality redefined.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter, Linkedin].map((Social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Social className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div className="text-gray-400">
                    <div>UB City Mall Complex</div>
                    <div>Vittal Mallya Road</div>
                    <div>Bangalore 560001</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">+91 80 4567 8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">concierge@heritage.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Explore</h4>
              <div className="space-y-3">
                {['Luxury Suites', 'Fine Dining', 'Spa & Wellness', 'Experiences', 'Events', 'Gallery'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 The Heritage Bangalore. Luxury Hospitality Redefined.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-black shadow-2xl hover:shadow-amber-500/25 transition-all"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}