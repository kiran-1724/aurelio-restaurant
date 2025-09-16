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
  Quote,
  Search,
  Filter,
  Grid,
  List,
  Sparkles,
  Flame,
  Leaf,
  Crown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LuxuryHotelRestaurant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuCategories = [
    { id: 'all', name: 'All Items', icon: Utensils, count: 24 },
    { id: 'appetizers', name: 'Appetizers', icon: Wine, count: 8 },
    { id: 'mains', name: 'Main Course', icon: ChefHat, count: 12 },
    { id: 'desserts', name: 'Desserts', icon: Heart, count: 6 },
    { id: 'beverages', name: 'Beverages', icon: Sparkles, count: 8 },
    { id: 'specials', name: 'Chef Specials', icon: Crown, count: 4 }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Tandoori Lamb Chops",
      description: "Succulent lamb marinated in aromatic spices, grilled to perfection in our traditional clay oven",
      price: 2850,
      originalPrice: 3200,
      category: "mains",
      image: "tandoori-lamb",
      badge: "Chef's Special",
      rating: 4.9,
      reviews: 127,
      cookTime: "25 min",
      spiceLevel: 3,
      isVeg: false,
      isPopular: true,
      ingredients: ["Lamb", "Yogurt", "Garam Masala", "Mint"],
      allergens: ["Dairy"],
      calories: 485
    },
    {
      id: 2,
      name: "Truffle Paneer Tikka",
      description: "Premium cottage cheese infused with black truffle, served with mint chutney and pomegranate",
      price: 1650,
      originalPrice: 1850,
      category: "appetizers",
      image: "truffle-paneer",
      badge: "Vegetarian Premium",
      rating: 4.8,
      reviews: 94,
      cookTime: "15 min",
      spiceLevel: 2,
      isVeg: true,
      isPopular: true,
      ingredients: ["Paneer", "Black Truffle", "Mint", "Pomegranate"],
      allergens: ["Dairy"],
      calories: 320
    },
    {
      id: 3,
      name: "Saffron Kulfi Tasting",
      description: "Traditional Indian ice cream trio with cardamom, pistachio, and rose varieties, garnished with gold leaf",
      price: 850,
      originalPrice: 950,
      category: "desserts",
      image: "saffron-kulfi",
      badge: "Signature",
      rating: 4.7,
      reviews: 156,
      cookTime: "5 min",
      spiceLevel: 0,
      isVeg: true,
      isPopular: false,
      ingredients: ["Milk", "Saffron", "Cardamom", "Gold Leaf"],
      allergens: ["Dairy", "Nuts"],
      calories: 280
    },
    {
      id: 4,
      name: "Heritage Butter Chicken",
      description: "Our signature recipe with tender chicken in rich tomato and cashew gravy, slow-cooked for 6 hours",
      price: 1950,
      originalPrice: 2200,
      category: "mains",
      image: "butter-chicken",
      badge: "Heritage Recipe",
      rating: 4.9,
      reviews: 203,
      cookTime: "20 min",
      spiceLevel: 2,
      isVeg: false,
      isPopular: true,
      ingredients: ["Chicken", "Tomato", "Cashews", "Cream"],
      allergens: ["Dairy", "Nuts"],
      calories: 520
    },
    {
      id: 5,
      name: "Royal Biryani Experience",
      description: "Fragrant basmati rice layered with marinated lamb and saffron, served with raita and pickle",
      price: 2450,
      originalPrice: 2700,
      category: "mains",
      image: "royal-biryani",
      badge: "Royal Special",
      rating: 4.8,
      reviews: 178,
      cookTime: "35 min",
      spiceLevel: 3,
      isVeg: false,
      isPopular: true,
      ingredients: ["Basmati Rice", "Lamb", "Saffron", "Yogurt"],
      allergens: ["Dairy"],
      calories: 650
    },
    {
      id: 6,
      name: "Masala Chai Flight",
      description: "Traditional spiced tea served three ways: classic, cardamom, and chocolate variants",
      price: 450,
      originalPrice: 550,
      category: "beverages",
      image: "masala-chai",
      badge: "Traditional",
      rating: 4.6,
      reviews: 89,
      cookTime: "8 min",
      spiceLevel: 1,
      isVeg: true,
      isPopular: false,
      ingredients: ["Tea", "Milk", "Cardamom", "Ginger"],
      allergens: ["Dairy"],
      calories: 120
    },
    {
      id: 7,
      name: "Caviar Samosas",
      description: "Hand-crafted pastries filled with spiced potatoes, topped with premium Iranian caviar",
      price: 3200,
      originalPrice: 3500,
      category: "appetizers",
      image: "caviar-samosa",
      badge: "Ultra Luxury",
      rating: 4.6,
      reviews: 45,
      cookTime: "12 min",
      spiceLevel: 1,
      isVeg: true,
      isPopular: false,
      ingredients: ["Potato", "Caviar", "Pastry", "Spices"],
      allergens: ["Gluten", "Fish"],
      calories: 380
    },
    {
      id: 8,
      name: "Gold Leaf Rasmalai",
      description: "Cottage cheese dumplings in cardamom-scented milk, garnished with pistachios and 24k gold",
      price: 1200,
      originalPrice: 1400,
      category: "desserts",
      image: "gold-rasmalai",
      badge: "Premium Gold",
      rating: 4.8,
      reviews: 112,
      cookTime: "6 min",
      spiceLevel: 0,
      isVeg: true,
      isPopular: true,
      ingredients: ["Paneer", "Milk", "Gold Leaf", "Pistachios"],
      allergens: ["Dairy", "Nuts"],
      calories: 250
    }
  ];

  // Filter and sort menu items
  const filteredMenuItems = menuItems
    .filter(item => {
      const matchesCategory = activeMenuCategory === 'all' || item.category === activeMenuCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = priceFilter === 'all' || 
                          (priceFilter === 'under1000' && item.price < 1000) ||
                          (priceFilter === '1000-2000' && item.price >= 1000 && item.price <= 2000) ||
                          (priceFilter === 'above2000' && item.price > 2000);
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'popular': return b.reviews - a.reviews;
        default: return 0;
      }
    });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30 text-gray-900 overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Floating Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.5
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-80" />
      </motion.div>

      {/* Modern Navigation Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-amber-200/50 shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className={`rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                isScrolled 
                  ? 'w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500' 
                  : 'w-14 h-14 bg-gradient-to-r from-amber-600 to-yellow-600'
              }`}>
                <ChefHat className={`text-white ${isScrolled ? 'w-7 h-7' : 'w-8 h-8'}`} />
              </div>
              <div>
                <div className={`font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? 'text-2xl' : 'text-3xl'
                }`}>
                  The Heritage
                </div>
                <div className={`text-amber-600/70 -mt-1 transition-all duration-300 ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}>
                  BANGALORE
                </div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.div className="flex items-center space-x-6">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Menu', href: '/menu' },
                  { name: 'Reservations', href: '/reservations' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className="relative text-gray-700 hover:text-amber-600 font-medium transition-colors cursor-pointer group"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                      />
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>UB City</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Book Table
                </motion.button>
              </div>
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

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-amber-200/50"
            >
              <div className="px-6 py-8">
                <div className="space-y-6">
                  {[
                    { name: 'Home', href: '/', icon: Utensils },
                    { name: 'Menu', href: '/menu', icon: ChefHat },
                    { name: 'Reservations', href: '/reservations', icon: Calendar },
                    { name: 'Contact', href: '/contact', icon: Phone }
                  ].map((item) => (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className="flex items-center space-x-4 text-xl font-medium text-gray-700 hover:text-amber-600 py-3"
                        whileHover={{ x: 10 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-bold mt-8"
                >
                  Reserve Your Table
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-6 overflow-hidden">
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
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full"
              >
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700 font-medium">Authentic Indian Fine Dining</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-bold leading-tight"
              >
                Savor the Taste of
                <motion.span 
                  className="block bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent"
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
                  Perfection
                </motion.span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Fresh ingredients, mouth-watering recipes, and a passion for authentic Indian flavors 
                delivered to your table in the most elegant setting in Bangalore.
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
                  className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 text-lg font-bold rounded-2xl hover:from-amber-400 hover:to-yellow-400 transition-all flex items-center justify-center"
                >
                  <span>Order Now</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(245, 158, 11, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-amber-500 text-amber-600 px-10 py-4 text-lg font-bold rounded-2xl hover:border-amber-400 transition-all flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch Story</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                {[
                  { number: "25+", label: "Years Legacy", icon: Crown },
                  { number: "150+", label: "Signature Dishes", icon: ChefHat },
                  { number: "50K+", label: "Happy Guests", icon: Heart }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-1 group-hover:text-amber-500 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-3xl blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="text-center space-y-6"
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ChefHat className="w-32 h-32 text-amber-500 mx-auto" />
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-amber-700">Signature Collection</div>
                        <div className="text-amber-600">Heritage Recipes</div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-10 h-10 text-amber-600 ml-1" />
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -right-6 bg-white border-4 border-amber-400 rounded-2xl px-6 py-4 shadow-lg"
                >
                  <div className="text-amber-600 font-bold text-xl">NEW</div>
                  <div className="text-gray-600 text-sm -mt-1">Menu</div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    x: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-2xl px-6 py-4 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold">4.9</span>
                  </div>
                  <div className="text-xs opacity-90">Premium Rating</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Menu Section */}
      <section id="menu" className="py-32 px-6 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Crown className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-medium">Heritage Collection</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Our Signature <span className="text-amber-600">Menu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From classic favorites to modern culinary creations, every dish is crafted with premium ingredients 
              and authentic spices to deliver an unforgettable dining experience.
            </p>
          </motion.div>

          {/* Advanced Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Search and View Toggle */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search dishes, ingredients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-colors text-lg"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Price Filter */}
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="all">All Prices</option>
                  <option value="under1000">Under ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="above2000">Above ₹2000</option>
                </select>

                {/* Sort Filter */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                {/* View Toggle */}
                <div className="flex items-center bg-gray-100 rounded-2xl p-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all ${
                      viewMode === 'grid' ? 'bg-white shadow-md text-amber-600' : 'text-gray-400'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all ${
                      viewMode === 'list' ? 'bg-white shadow-md text-amber-600' : 'text-gray-400'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {menuCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveMenuCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all border-2 ${
                    activeMenuCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-transparent shadow-lg'
                      : 'bg-white text-gray-600 hover:text-amber-600 hover:bg-amber-50 border-gray-200 hover:border-amber-300'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeMenuCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Menu Items */}
          <motion.div layout className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            <AnimatePresence mode="popLayout">
              {filteredMenuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ 
                    y: viewMode === 'grid' ? -8 : -3, 
                    scale: viewMode === 'grid' ? 1.02 : 1.01,
                    transition: { duration: 0.2 }
                  }}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 overflow-hidden ${
                    viewMode === 'grid' ? 'aspect-[4/3]' : 'w-48 h-48'
                  }`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChefHat className="w-20 h-20 text-amber-400" />
                      </motion.div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        item.badge.includes('Chef') ? 'bg-red-500' :
                        item.badge.includes('Popular') || item.badge.includes('Heritage') ? 'bg-green-500' :
                        item.badge.includes('Luxury') || item.badge.includes('Royal') ? 'bg-purple-500' :
                        item.badge.includes('Premium') || item.badge.includes('Gold') ? 'bg-yellow-600' :
                        'bg-amber-500'
                      }`}>
                        {item.badge}
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold">{item.rating}</span>
                        <span className="text-xs text-gray-500">({item.reviews})</span>
                      </div>
                    </div>

                    {/* Veg/Non-veg Indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        item.isVeg ? 'border-green-500' : 'border-red-500'
                      }`}>
                        <div className={`w-3 h-3 rounded-full ${
                          item.isVeg ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                      </div>
                    </div>

                    {/* Popular Indicator */}
                    {item.isPopular && (
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-full"
                      >
                        <Flame className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-3 mt-1 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.cookTime}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <span className="text-red-500">🌶️</span>
                            <span>{'🌶️'.repeat(item.spiceLevel)}</span>
                          </span>
                          <span>{item.calories} cal</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-600">₹{item.price}</div>
                        {item.originalPrice > item.price && (
                          <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.ingredients.slice(0, 3).map((ingredient, i) => (
                        <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{item.ingredients.length - 3} more
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 text-amber-700 py-3 rounded-2xl font-semibold hover:from-amber-100 hover:to-yellow-100 hover:border-amber-300 transition-all flex items-center justify-center group/btn"
                    >
                      <span>Add to Cart</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredMenuItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No dishes found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Ready for an unforgettable dining experience?
            </motion.h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Book your table now and embark on a culinary journey through authentic Indian flavors, 
              crafted with love and served with elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-amber-600 px-12 py-4 text-lg font-bold rounded-2xl hover:shadow-2xl transition-all flex items-center justify-center"
              >
                <span>Reserve Table</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-12 py-4 text-lg font-bold rounded-2xl hover:bg-white hover:text-amber-600 transition-all flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                <span>Call Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">The Heritage</div>
                  <div className="text-sm text-amber-400">BANGALORE</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                Where culinary artistry meets luxury hospitality. Experience the finest Indian cuisine 
                in Bangalore&apos;s most elegant setting.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Social className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'Menu', 'Reservations', 'About Us', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
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
              <h4 className="text-lg font-semibold mb-6">Our Specialties</h4>
              <div className="space-y-3">
                {['Appetizers', 'Main Course', 'Desserts', 'Beverages', 'Chef Specials'].map((category) => (
                  <motion.a
                    key={category}
                    href="#menu"
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {category}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <div>UB City Mall Complex</div>
                    <div>Vittal Mallya Road</div>
                    <div>Bangalore 560001</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">+91 794-676-4735</span>
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

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 The Heritage Restaurant. Crafted with passion in Bangalore.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}