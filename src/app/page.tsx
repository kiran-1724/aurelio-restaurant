'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Star, 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  Utensils, 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Menu,
  X,
  ChevronDown,
  Award,
  Shield,
  Sparkles,
  ChefHat,
  Wine,
  UtensilsCrossed
} from 'lucide-react';
import { useState } from 'react';

export default function LuxuryHotelPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "Butter Chicken Masala",
      price: "₹850",
      description: "Tender chicken in rich tomato and cream sauce with aromatic spices",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Paneer Makhani",
      price: "₹650",
      description: "Cottage cheese in silky tomato gravy with butter and cream",
      category: "Vegetarian"
    },
    {
      id: 3,
      name: "Biryani Royal",
      price: "₹950",
      description: "Fragrant basmati rice with marinated lamb and saffron",
      category: "Speciality"
    },
    {
      id: 4,
      name: "Tandoori Platter",
      price: "₹1,200",
      description: "Assorted grilled meats and vegetables from the clay oven",
      category: "Grill"
    },
    {
      id: 5,
      name: "Masala Dosa",
      price: "₹450",
      description: "Crispy rice crepe with spiced potato filling and coconut chutney",
      category: "South Indian"
    },
    {
      id: 6,
      name: "Gulab Jamun",
      price: "₹350",
      description: "Traditional milk dumplings in cardamom-rose syrup",
      category: "Dessert"
    }
  ];

  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      price: "₹12,500",
      features: ["City View", "King Bed", "Marble Bath", "Butler Service"]
    },
    {
      id: 2,
      name: "Presidential Villa",
      price: "₹25,000",
      features: ["Private Terrace", "Jacuzzi", "Personal Chef", "Exclusive Access"]
    },
    {
      id: 3,
      name: "Heritage Room",
      price: "₹8,500",
      features: ["Garden View", "Traditional Decor", "Balcony", "Premium Amenities"]
    }
  ];

  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Coffee, name: "24/7 Room Service" },
    { icon: Waves, name: "Infinity Pool" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Dumbbell, name: "Fitness Center" }
  ];

  // Aurora-like background animation
  const AuroraBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(218, 171, 45, 0.15) 0%, transparent 50%)",
            "radial-gradient(600px circle at 100% 100%, rgba(218, 171, 45, 0.15) 0%, transparent 50%)",
            "radial-gradient(600px circle at 50% 50%, rgba(218, 171, 45, 0.15) 0%, transparent 50%)",
            "radial-gradient(600px circle at 0% 100%, rgba(218, 171, 45, 0.15) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      />
    </div>
  );

  // Blob cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Blob Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-amber-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"
          >
            THE HERITAGE
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {['Menu', 'Dining', 'Rooms', 'Amenities', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  color: '#f59e0b',
                  y: -2
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hover:text-amber-400 transition-all duration-300 cursor-pointer font-medium"
              >
                {item}
              </motion.a>
            ))}
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

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed right-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900 to-black border-l border-amber-500/20 z-40 lg:hidden"
              >
                <div className="p-6 pt-20">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="space-y-6"
                  >
                    {['Menu', 'Dining', 'Rooms', 'Amenities', 'Contact'].map((item) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        variants={fadeInUp}
                        whileHover={{ 
                          x: 10,
                          color: '#f59e0b'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-xl font-medium hover:text-amber-400 transition-all duration-300 cursor-pointer border-b border-gray-700/50 pb-4"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <AuroraBackground />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-64 h-64 bg-gradient-to-r from-amber-500/10 to-yellow-400/5 rounded-full blur-xl"
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.6, 0.2, 0.3]
              }}
              transition={{
                duration: 10 + index * 2,
                repeat: Infinity,
                delay: index * 2
              }}
              style={{
                left: `${20 + index * 15}%`,
                top: `${20 + index * 10}%`
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 text-center max-w-6xl px-6"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-4 tracking-tight"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #fff, #f59e0b, #fff, #f59e0b)",
                backgroundSize: "400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              THE HERITAGE
            </motion.h1>
            <motion.div
              className="text-2xl md:text-4xl text-amber-400 font-light"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              BANGALORE
            </motion.div>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl mb-12 text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Where culinary artistry meets luxury hospitality in India&apos;s Silicon Valley.
            <br />
            Savor authentic flavors and experience unparalleled comfort.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mb-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-12 py-4 text-lg font-bold rounded-full hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-2xl"
            >
              Reserve Your Table
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                borderColor: '#f59e0b', 
                color: '#f59e0b'
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 text-lg font-bold rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              View Menu
            </motion.button>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: 150, label: "Signature Dishes" },
              { number: 25, label: "Years Legacy" },
              { number: 5, label: "Star Rating" },
              { number: 24, label: "Hour Service" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center cursor-pointer">
            <motion.div 
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Reservation Widget */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative -mt-20 z-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-black/80 backdrop-blur-lg border border-amber-500/30 rounded-2xl p-8 shadow-2xl"
            whileHover={{ 
              borderColor: 'rgba(245, 158, 11, 0.6)',
              boxShadow: '0 25px 50px rgba(245, 158, 11, 0.1)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
              <div>
                <label className="block text-sm font-medium text-amber-400 mb-2">Date</label>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center cursor-pointer hover:border-amber-500 transition-colors">
                  <Calendar className="w-5 h-5 text-amber-400 mr-3" />
                  <span className="text-gray-300">Select Date</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-400 mb-2">Time</label>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center cursor-pointer hover:border-amber-500 transition-colors">
                  <Clock className="w-5 h-5 text-amber-400 mr-3" />
                  <span className="text-gray-300">7:00 PM</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-400 mb-2">Guests</label>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center cursor-pointer hover:border-amber-500 transition-colors">
                  <Users className="w-5 h-5 text-amber-400 mr-3" />
                  <span className="text-gray-300">2 People</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-400 mb-2">Occasion</label>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center cursor-pointer hover:border-amber-500 transition-colors">
                  <span className="text-gray-300">Dinner</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              </div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-amber-400 hover:to-yellow-400 transition-all duration-300"
              >
                Reserve Table
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Signature <span className="text-amber-400">Menu</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the finest culinary traditions with our chef&apos;s specially curated dishes, blending authentic Indian flavors with modern presentation.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((dish) => (
              <motion.div 
                key={dish.id}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  rotateY: 5
                }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="h-48 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-xl mb-6 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <ChefHat className="w-16 h-16 text-amber-400" />
                  </motion.div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-400 group-hover:text-yellow-300 transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-2xl font-bold text-white">{dish.price}</span>
                  </div>
                  <div className="text-sm text-amber-300/70 mb-3">{dish.category}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gradient-to-r from-amber-600/20 to-yellow-500/20 border border-amber-500/50 text-amber-400 py-3 rounded-lg font-semibold hover:from-amber-500/30 hover:to-yellow-400/30 transition-all duration-300"
                >
                  Add to Order
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dining Experience Section */}
      <section id="dining" className="py-20 px-6 bg-gradient-to-r from-amber-900/5 to-yellow-800/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Dining <span className="text-amber-400">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in an atmosphere of elegance where every meal becomes a memorable celebration.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: ChefHat,
                title: "Master Chefs",
                desc: "Award-winning chefs with decades of experience in authentic Indian and international cuisine."
              },
              {
                icon: Wine,
                title: "Premium Selection",
                desc: "Curated wine collection and craft cocktails perfectly paired with our signature dishes."
              },
              {
                icon: UtensilsCrossed,
                title: "Fine Dining",
                desc: "Elegant ambiance with personalized service in our beautifully appointed dining rooms."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="text-amber-400 mb-6 flex justify-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-2xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-yellow-400/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-10 h-10" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Luxury <span className="text-amber-400">Suites</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Extend your culinary journey with an overnight stay in our elegantly appointed suites.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rooms.map((room) => (
              <motion.div 
                key={room.id}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  rotateY: 5
                }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 cursor-pointer group"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="h-48 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-xl mb-6 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="w-16 h-16 text-amber-400" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-amber-400 group-hover:text-yellow-300 transition-colors">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{room.price}</div>
                    <div className="text-sm text-gray-400">per night</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-amber-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full mt-6 bg-gradient-to-r from-amber-600/20 to-yellow-500/20 border border-amber-500/50 text-amber-400 py-3 rounded-lg font-semibold hover:from-amber-500/30 hover:to-yellow-400/30 transition-all duration-300"
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 px-6 bg-gradient-to-r from-amber-900/5 to-yellow-800/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              World-Class <span className="text-amber-400">Amenities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Indulge in premium facilities designed to exceed your expectations and enhance your stay.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {amenities.map((amenity, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.1,
                  rotateY: 10
                }}
                className="text-center group cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-400/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-amber-500/30 group-hover:to-yellow-400/20 transition-all duration-300">
                  <amenity.icon className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {amenity.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
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
              Bangalore&apos;s <span className="text-amber-400">Finest</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Award,
                title: "Award-Winning Service",
                desc: "Recognized globally for exceptional hospitality and personalized experiences."
              },
              {
                icon: Shield,
                title: "Heritage & Trust",
                desc: "25 years of legacy in luxury hospitality with uncompromising quality standards."
              },
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "Located in the heart of Bangalore's business district with easy access to IT parks."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="text-amber-400 mb-6 flex justify-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-2xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-yellow-400/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-10 h-10" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Visit <span className="text-amber-400">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience culinary excellence and luxury redefined in the heart of Bangalore&apos;s premium business district.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: MapPin,
                title: "Location",
                info: ["UB City Mall Area", "Vittal Mallya Road", "Bangalore, Karnataka 560001"]
              },
              {
                icon: Phone,
                title: "Contact",
                info: ["Reservations:", "+91 80 4567 8900", "Concierge: +91 80 4567 8901"]
              },
              {
                icon: Clock,
                title: "Dining Hours",
                info: ["Lunch: 12:00 PM - 3:30 PM", "Dinner: 7:00 PM - 11:30 PM", "24/7 Room Service"]
              },
              {
                icon: Mail,
                title: "Email",
                info: ["reservations@heritage.com", "dining@heritage.com", "events@heritage.com"]
              }
            ].map((contact, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center group bg-black/30 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="text-amber-400 mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-400/10 rounded-xl flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-yellow-400/20 transition-all duration-300">
                    <contact.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
                  {contact.title}
                </h3>
                {contact.info.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-400 mb-1 group-hover:text-gray-300 transition-colors">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-6 md:mb-0"
            >
              THE HERITAGE
            </motion.div>
            
            <p className="text-gray-500 text-center md:text-right">
              © 2024 The Heritage Bangalore. Culinary Excellence Redefined.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}