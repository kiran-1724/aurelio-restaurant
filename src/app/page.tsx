'use client';

import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-amber-600/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-amber-400"
          >
            AURELIO
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Menu', 'Reservations', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#f59e0b' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-20 text-center max-w-4xl px-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-amber-400">AURELIO</span>
            <br />
            <span className="text-4xl md:text-6xl">Ristorante</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 text-gray-300 font-light leading-relaxed"
          >
            Where culinary artistry meets timeless elegance.
            <br />
            Experience authentic Italian cuisine in the heart of the city.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-black px-8 py-4 text-lg font-semibold rounded-full hover:bg-amber-400 transition-all duration-300"
            >
              Reserve Your Table
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: '#f59e0b', color: '#f59e0b' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              View Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Why Choose <span className="text-amber-400">Aurelio</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond exceptional cuisine to create an unforgettable dining experience.
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
                icon: <Star className="w-12 h-12" />,
                title: "Michelin Quality",
                desc: "Award-winning cuisine crafted by renowned chefs using the finest ingredients"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Perfect Timing",
                desc: "Seamless service that respects your time while ensuring every detail is perfect"
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                title: "Prime Location",
                desc: "Located in the heart of the city with stunning views and elegant ambiance"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="text-amber-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
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

      {/* Menu Preview */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900/10 to-amber-800/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Signature <span className="text-amber-400">Dishes</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our chef&apos;s masterpieces that blend traditional Italian flavors with modern culinary techniques.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Osso Buco alla Milanese", price: "$48", desc: "Braised veal shanks with saffron risotto" },
              { name: "Lobster Ravioli", price: "$38", desc: "House-made pasta with Maine lobster and truffle cream" },
              { name: "Bistecca alla Fiorentina", price: "$85", desc: "Prime dry-aged T-bone steak for two with rosemary" },
              { name: "Branzino in Crosta", price: "$42", desc: "Mediterranean sea bass baked in herb salt crust" },
              { name: "Tiramisu della Casa", price: "$18", desc: "Traditional recipe with espresso and mascarpone" },
              { name: "Selection of Italian Wines", price: "$15-95", desc: "Curated wines from renowned Italian vineyards" }
            ].map((dish, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-black/40 backdrop-blur-sm border border-amber-600/20 p-6 rounded-lg hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-amber-400">{dish.name}</h3>
                  <span className="text-2xl font-bold text-white">{dish.price}</span>
                </div>
                <p className="text-gray-400">{dish.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Visit <span className="text-amber-400">Aurelio</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We look forward to welcoming you for an extraordinary dining experience.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Address",
                info: ["123 Culinary Boulevard", "Downtown District", "New York, NY 10001"]
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                info: ["Reservations:", "(555) 123-DINE", "(555) 123-3463"]
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Hours",
                info: ["Tue-Thu: 5:30-10:00 PM", "Fri-Sat: 5:30-11:00 PM", "Closed Sunday & Monday"]
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                info: ["reservations@aurelio.com", "info@aurelio.com", "events@aurelio.com"]
              }
            ].map((contact, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {contact.title}
                </h3>
                {contact.info.map((line, j) => (
                  <p key={j} className="text-gray-400 mb-1">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-600/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-amber-400 mb-6 md:mb-0"
            >
              AURELIO
            </motion.div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#f59e0b' }}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-500 text-center md:text-right">
              © 2024 Aurelio Ristorante. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}