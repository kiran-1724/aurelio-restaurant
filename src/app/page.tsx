'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu as MenuIcon, 
  X, 
  Clock, 
  Phone, 
  MapPin, 
  Mail,
  Calendar,
  Users,
  ChefHat,
  Wine,
  Star,
  Heart,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
    specialRequests: ''
  });

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Advanced stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const glowVariants = {
    initial: { boxShadow: '0 0 0 0 rgba(218, 165, 32, 0)' },
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(218, 165, 32, 0.4)',
        '0 0 20px 10px rgba(218, 165, 32, 0.1)',
        '0 0 0 0 rgba(218, 165, 32, 0.4)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const menuItems = [
    { name: 'Home', section: 'home' },
    { name: 'Reservations', section: 'reservations' },
    { name: 'Menu', section: 'menu' },
    { name: 'About', section: 'about' },
  ];

  const tables = [
    { id: 1, seats: 2, type: 'Intimate', position: { x: 20, y: 30 } },
    { id: 2, seats: 4, type: 'Family', position: { x: 60, y: 25 } },
    { id: 3, seats: 6, type: 'Group', position: { x: 40, y: 60 } },
    { id: 4, seats: 2, type: 'Window', position: { x: 80, y: 50 } },
    { id: 5, seats: 4, type: 'Garden View', position: { x: 15, y: 70 } },
    { id: 6, seats: 8, type: 'Private', position: { x: 70, y: 80 } }
  ];

  const menuCategories = [
    {
      name: 'Starters',
      items: [
        'Mediterranean Mezze Platter',
        'Truffle Arancini with Parmesan',
        'Pan-Seared Foie Gras',
        'Ceylonese Spiced Prawns',
        'French Onion Soup Reimagined'
      ]
    },
    {
      name: 'Mains',
      items: [
        'Bouillabaisse Marseillaise',
        'Osso Buco alla Milanese',
        'Ceylon Curry with Fresh Coconut',
        'Mediterranean Sea Bass',
        'French Duck Confit',
        'Sicilian Pasta with Wild Mushrooms'
      ]
    },
    {
      name: 'Desserts',
      items: [
        'Tiramisu with Gold Leaf',
        'French Chocolate Soufflé',
        'Baklava with Pistachio Ice Cream',
        'Ceylon Cinnamon Crème Brûlée',
        'Limoncello Panna Cotta'
      ]
    },
    {
      name: 'Beverages',
      items: [
        'Curated Wine Collection',
        'Artisan Coffee Selection',
        'Ceylon Tea Varieties',
        'Signature Cocktails',
        'French Champagne Selection'
      ]
    },
    {
      name: "Chef's Specials",
      items: [
        'Seven-Course Tasting Menu',
        'Wine Pairing Experience',
        'Seasonal Truffle Menu',
        'Mediterranean Seafood Feast',
        'Heritage Ceylon Curry Experience'
      ]
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Advanced Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gold/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              animate={{
                textShadow: [
                  '0 0 5px rgba(218, 165, 32, 0.5)',
                  '0 0 20px rgba(218, 165, 32, 0.8)',
                  '0 0 5px rgba(218, 165, 32, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold via-copper to-gold bg-clip-text text-transparent"
            >
              JOSEPH SALVADORE VICTORIA
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#DAA520',
                  textShadow: '0 0 10px rgba(218, 165, 32, 0.8)'
                }}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  activeSection === item.section 
                    ? 'text-gold' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                    initial={false}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative z-50"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-8 h-8 text-gold" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuIcon className="w-8 h-8 text-gold" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                  }
                }}
                exit={{ 
                  x: '100%', 
                  opacity: 0,
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                  }
                }}
                className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-black via-gray-900 to-black border-l border-gold/30 shadow-2xl lg:hidden"
              >
                <div className="pt-24 px-8">
                  <motion.nav
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.section}
                        variants={itemVariants}
                        onClick={() => scrollToSection(item.section)}
                        whileHover={{ 
                          x: 10,
                          scale: 1.05,
                          color: '#DAA520'
                        }}
                        className="block w-full text-left text-xl py-3 px-4 rounded-lg bg-gradient-to-r from-transparent to-gold/10 hover:from-gold/10 hover:to-gold/20 transition-all duration-300"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </motion.nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="inline-block p-8 rounded-full bg-gradient-to-br from-gold/20 to-copper/20 backdrop-blur-sm border border-gold/30"
            >
              <ChefHat className="w-16 h-16 text-gold" />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gold via-copper to-gold bg-clip-text text-transparent">
              JOSEPH SALVADORE
            </span>
            <br />
            <span className="text-beige text-3xl md:text-5xl">VICTORIA</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-beige/80 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the harmony of Mediterranean, French, Italian, and Ceylonese cuisines
            <br />
            in an atmosphere of timeless elegance and sophistication
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { icon: Clock, title: 'Hours', info: 'Tue-Sun: 6PM-11PM' },
              { icon: Phone, title: 'Reservations', info: '+1 (555) 123-DINE' },
              { icon: MapPin, title: 'Location', info: 'Downtown Heritage District' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(218, 165, 32, 0.3)'
                }}
                className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gold mb-2">{item.title}</h3>
                <p className="text-beige/80">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('reservations')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(218, 165, 32, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-copper text-black px-8 py-4 text-lg font-semibold rounded-full hover:from-copper hover:to-gold transition-all duration-500 flex items-center justify-center gap-2"
            >
              Reserve Your Experience
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your <span className="text-gold">Journey</span> Begins
            </h2>
            <p className="text-xl text-beige/80 max-w-3xl mx-auto">
              Choose your path to an extraordinary culinary adventure
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Reservations',
                subtitle: 'Book Your Table',
                icon: Calendar,
                section: 'reservations',
                description: 'Secure your place in our intimate dining experience'
              },
              {
                title: 'Our Menu',
                subtitle: 'Culinary Excellence',
                icon: Wine,
                section: 'menu',
                description: 'Discover our carefully crafted culinary offerings'
              },
              {
                title: 'Our Story',
                subtitle: 'Heritage & Passion',
                icon: Heart,
                section: 'about',
                description: 'Learn about our journey and culinary philosophy'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => scrollToSection(card.section)}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(218, 165, 32, 0.2)'
                }}
                className="group relative bg-gradient-to-br from-gold/10 to-copper/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 mb-6"
                >
                  <card.icon className="w-12 h-12 text-gold mx-auto" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-center mb-2 text-gold group-hover:text-copper transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-beige/60 text-center mb-4">{card.subtitle}</p>
                <p className="text-beige/80 text-center leading-relaxed">
                  {card.description}
                </p>

                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-6 h-6 text-gold" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Table <span className="text-gold">Reservations</span>
            </h2>
            <p className="text-xl text-beige/80 max-w-3xl mx-auto">
              Select your preferred seating and complete your reservation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Table Selection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-copper/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Choose Your Table</h3>
              
              <div className="relative bg-black/50 rounded-xl p-6 h-96 overflow-hidden">
                <div className="absolute inset-4 border-2 border-gold/20 rounded-lg">
                  {/* Restaurant Layout Animation */}
                  {tables.map((table) => (
                    <motion.div
                      key={table.id}
                      style={{
                        left: `${table.position.x}%`,
                        top: `${table.position.y}%`
                      }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedTable(table.id)}
                    >
                      <motion.div
                        animate={selectedTable === table.id ? {
                          boxShadow: '0 0 20px rgba(218, 165, 32, 0.6)',
                          scale: 1.1
                        } : {}}
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center text-xs font-bold ${
                          selectedTable === table.id
                            ? 'bg-gold text-black border-gold'
                            : 'bg-black/80 text-gold border-gold/50 hover:border-gold'
                        } transition-all duration-300`}
                      >
                        {table.seats}
                      </motion.div>
                      
                      <AnimatePresence>
                        {selectedTable === table.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gold text-black px-2 py-1 rounded text-xs whitespace-nowrap font-semibold"
                          >
                            {table.type} Table
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
                
                <div className="absolute bottom-4 left-4 text-xs text-beige/60">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gold"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-gold/50"></div>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Reservation Details</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={reservationForm.name}
                      onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-beige/50 focus:border-gold focus:outline-none transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={reservationForm.email}
                      onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-beige/50 focus:border-gold focus:outline-none transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={reservationForm.phone}
                      onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-beige/50 focus:border-gold focus:outline-none transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <select
                      value={reservationForm.guests}
                      onChange={(e) => setReservationForm({...reservationForm, guests: parseInt(e.target.value)})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-all duration-300"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="date"
                      value={reservationForm.date}
                      onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <select
                      value={reservationForm.time}
                      onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select Time</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    placeholder="Special Requests or Dietary Requirements"
                    value={reservationForm.specialRequests}
                    onChange={(e) => setReservationForm({...reservationForm, specialRequests: e.target.value})}
                    rows={4}
                    className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder-beige/50 focus:border-gold focus:outline-none transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(218, 165, 32, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!selectedTable}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    selectedTable
                      ? 'bg-gradient-to-r from-gold to-copper text-black hover:from-copper hover:to-gold'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {selectedTable ? 'Confirm Reservation' : 'Please Select a Table'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Culinary <span className="text-gold">Excellence</span>
            </h2>
            <p className="text-xl text-beige/80 max-w-3xl mx-auto">
              A symphony of flavors from Mediterranean, French, Italian, and Ceylonese traditions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(218, 165, 32, 0.1)'
                }}
                className="bg-gradient-to-br from-gold/10 to-copper/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 group"
              >
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-gold mb-6 text-center group-hover:text-copper transition-colors duration-300"
                >
                  {category.name}
                </motion.h3>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      whileHover={{ 
                        x: 10,
                        scale: 1.02,
                        color: '#DAA520'
                      }}
                      className="text-beige/90 hover:text-gold transition-all duration-300 cursor-pointer border-b border-gold/10 pb-2 leading-relaxed"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gold">Heritage</span>
            </h2>
            <p className="text-xl text-beige/80 max-w-3xl mx-auto">
              In honor of Joseph Salvadore Victoria - a legacy of culinary passion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                whileInView={{ scale: 1.05 }}
                className="text-3xl font-bold text-gold"
              >
                A Legacy of Flavor
              </motion.h3>
              
              <div className="space-y-4 text-beige/90 leading-relaxed">
                <p>
                  Named in honor of Joseph Salvadore Victoria, our restaurant carries forward 
                  a proud tradition of culinary excellence that spans generations. Born from 
                  a passion for bringing together the finest flavors from across the Mediterranean 
                  and beyond.
                </p>
                
                <p>
                  Our kitchen celebrates the rich tapestry of Mediterranean cuisine, the 
                  refined elegance of French culinary arts, the heartful tradition of 
                  Italian gastronomy, and the aromatic spices of Ceylonese heritage.
                </p>
                
                <p>
                  Every dish tells a story, every meal creates a memory, and every guest 
                  becomes part of our continuing legacy of hospitality and excellence.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  'Mediterranean Traditions',
                  'French Culinary Arts',
                  'Italian Gastronomy',
                  'Ceylonese Heritage'
                ].map((cuisine, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-gold/20 to-copper/20 backdrop-blur-sm border border-gold/30 rounded-lg p-4 text-center"
                  >
                    <Star className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gold">{cuisine}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative overflow-hidden rounded-2xl border-2 border-gold/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Chef at work"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              {/* Testimonials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 space-y-6"
              >
                <div className="bg-gradient-to-br from-gold/10 to-copper/10 backdrop-blur-sm border border-gold/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-beige/90 italic mb-4">
                    &ldquo;An extraordinary culinary journey that honors tradition while embracing innovation. 
                    Every visit is a celebration of exceptional taste and impeccable service.&rdquo;
                  </p>
                  <p className="text-gold font-semibold">— Maria Rodriguez, Food Critic</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-gold mb-4">JOSEPH SALVADORE VICTORIA</h3>
              <p className="text-beige/80 leading-relaxed">
                Where culinary traditions meet modern excellence in an atmosphere 
                of timeless sophistication.
              </p>
            </motion.div>

            <div className="text-center">
              <h4 className="text-lg font-semibold text-gold mb-4">Contact Information</h4>
              <div className="space-y-2 text-beige/80">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-DINE
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  reservations@jsv-restaurant.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Downtown Heritage District
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-gold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ 
                      scale: 1.2, 
                      color: '#DAA520',
                      rotate: 5 
                    }}
                    className="text-beige/60 hover:text-gold transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gold/20 pt-8 text-center text-beige/60"
          >
            <p>&copy; 2024 Joseph Salvadore Victoria Restaurant. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}