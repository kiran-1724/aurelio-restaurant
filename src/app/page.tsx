'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Menu,
  X,
  ChefHat,
  Wine,
  Play,
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  Award,
  Shield,
  Utensils,
  Heart,
  Quote
} from 'lucide-react';
import { useState } from 'react';

export default function LuxuryHotelRestaurant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const menuCategories = [
    { id: 'all', name: 'All Menu', icon: Utensils },
    { id: 'appetizers', name: 'Appetizers', icon: Wine },
    { id: 'mains', name: 'Main Course', icon: ChefHat },
    { id: 'desserts', name: 'Desserts', icon: Heart }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Tandoori Lamb Chops",
      description: "Succulent lamb marinated in aromatic spices, grilled to perfection in our clay oven",
      price: "₹2,850",
      category: "mains",
      image: "tandoori-lamb",
      badge: "Chef's Special",
      rating: 4.9
    },
    {
      id: 2,
      name: "Truffle Paneer Tikka",
      description: "Premium cottage cheese infused with black truffle, served with mint chutney",
      price: "₹1,650",
      category: "appetizers",
      image: "truffle-paneer",
      badge: "Vegetarian",
      rating: 4.8
    },
    {
      id: 3,
      name: "Saffron Kulfi Tasting",
      description: "Traditional Indian ice cream with cardamom, pistachio, and rose varieties",
      price: "₹850",
      category: "desserts",
      image: "saffron-kulfi",
      badge: "Signature",
      rating: 4.7
    },
    {
      id: 4,
      name: "Butter Chicken Royal",
      description: "Heritage recipe with tender chicken in rich tomato and cashew gravy",
      price: "₹1,950",
      category: "mains",
      image: "butter-chicken",
      badge: "Popular",
      rating: 4.9
    },
    {
      id: 5,
      name: "Caviar Samosas",
      description: "Crispy pastries filled with spiced potatoes, topped with Iranian caviar",
      price: "₹3,200",
      category: "appetizers",
      image: "caviar-samosa",
      badge: "Luxury",
      rating: 4.6
    },
    {
      id: 6,
      name: "Gold Leaf Rasmalai",
      description: "Cottage cheese dumplings in cardamom milk, garnished with 24k gold",
      price: "₹1,200",
      category: "desserts",
      image: "gold-rasmalai",
      badge: "Premium",
      rating: 4.8
    }
  ];

  const testimonials = [
    {
      name: "Arjun Kapoor",
      role: "Film Producer",
      review: "Every dish is a masterpiece. The flavors transported me back to my grandmother's kitchen, but with a luxurious twist.",
      rating: 5,
      image: "guest-1"
    },
    {
      name: "Priya Sharma",
      role: "Food Critic",
      review: "The Heritage redefines Indian fine dining. Impeccable service meets authentic flavors in the most elegant setting.",
      rating: 5,
      image: "guest-2"
    },
    {
      name: "David Williams",
      role: "Hotel Consultant",
      review: "As someone who's dined at Michelin-starred restaurants globally, this stands among the very best.",
      rating: 5,
      image: "guest-3"
    }
  ];

  const filteredMenuItems = activeMenuCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeMenuCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30 text-gray-900 overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-20"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-lg border-b border-amber-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  The Heritage
                </div>
                <div className="text-xs text-amber-600/70 -mt-1">BANGALORE</div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Menu', href: '#menu' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>UB City, Bangalore</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Book Table
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-amber-600"
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
              className="lg:hidden bg-white border-t border-amber-200/50"
            >
              <div className="px-6 py-6 space-y-4">
                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-xl font-medium text-gray-700 hover:text-amber-600 py-2"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold mt-6"
                >
                  Reserve Your Table
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-700 text-sm font-medium"
              >
                ✨ Authentic Indian Fine Dining
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Savor the Taste of
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Perfection
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Fresh ingredients, mouth-watering recipes, and a passion for authentic Indian flavors 
                delivered to your table in the most elegant setting.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 text-lg font-bold rounded-full hover:from-amber-400 hover:to-yellow-400 transition-all flex items-center justify-center group"
                >
                  Order Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(245, 158, 11, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-amber-500 text-amber-600 px-10 py-4 text-lg font-bold rounded-full hover:border-amber-400 transition-all flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Menu
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <ChefHat className="w-24 h-24 text-amber-500 mx-auto" />
                      <div className="text-amber-700 font-medium">Signature Dishes</div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  >
                    <Play className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white border-4 border-amber-500 rounded-2xl px-6 py-3 shadow-lg"
                >
                  <div className="text-amber-600 font-bold text-lg">NEW</div>
                  <div className="text-gray-600 text-sm -mt-1">Menu</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Preview */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold text-gray-800">A Feast for Your Eyes</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                  <ChefHat className="w-16 h-16 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600">{item.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section id="menu" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Heritage Menu</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Signature <span className="text-amber-600">Dishes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds. 
              Every dish is made with the freshest ingredients and an extra dash of love.
            </p>
          </motion.div>

          {/* Menu Categories */}
          <div className="flex justify-center mb-16">
            <div className="bg-white border border-amber-200 rounded-2xl p-2 flex flex-wrap gap-2 shadow-lg">
              {menuCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveMenuCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeMenuCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredMenuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-amber-100"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-100 to-yellow-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <ChefHat className="w-20 h-20 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        item.badge === 'Chef\'s Special' ? 'bg-red-500' :
                        item.badge === 'Popular' ? 'bg-green-500' :
                        item.badge === 'Luxury' ? 'bg-purple-500' :
                        'bg-amber-500'
                      }`}>
                        {item.badge}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 text-amber-600 py-3 rounded-xl font-semibold hover:from-amber-100 hover:to-yellow-100 hover:border-amber-300 transition-all flex items-center justify-center group/btn"
                    >
                      Add to Order
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-800">They Love&apos;s Us</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classic favorites to modern culinary creations, our menu is designed to tantalize your taste buds. Every 
              dish is made with the freshest ingredients and an extra dash of love.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-amber-100"
              >
                <Quote className="w-12 h-12 text-amber-400/30 mb-6" />
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-amber-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Don&apos;t Wait - Order Now!
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Fresh ingredients, mouth-watering recipes, and a passion for good food 
              delivered to your door or ready for pick-up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-12 py-4 text-lg font-bold rounded-full hover:shadow-2xl transition-all flex items-center justify-center group"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">The Heritage</div>
                  <div className="text-sm text-amber-400">BANGALORE</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Where culinary artistry meets luxury hospitality in India&apos;s tech capital.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Social className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigate</h4>
              <div className="space-y-3">
                {['Home', 'Menu', 'About', 'Contact', 'Book Now'].map((link) => (
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

            {/* Menu Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Menu</h4>
              <div className="space-y-3">
                {['Appetizers', 'Main Course', 'Desserts', 'Beverages', 'Chef Specials'].map((category) => (
                  <motion.a
                    key={category}
                    href="#"
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">+91-794-676-4735</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                  <div className="text-gray-400">
                    <div>UB City Mall Complex</div>
                    <div>Vittal Mallya Road</div>
                    <div>Bangalore, Karnataka 560001</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">info@heritageuc.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div className="text-gray-400">
                    <div>Daily: 11:00 AM - 11:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              ©2024, The Heritage Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}