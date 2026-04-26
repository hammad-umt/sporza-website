'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const problemSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleLearnMore = () => {
    problemSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-0 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00DD44]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A54F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00DD44]/3 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
              SPORZA
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#00DD44] mx-auto rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-white tracking-wide"
          >
            Connect. Compete. Celebrate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300 font-medium"
          >
            Pakistan's first location-based sports matchmaking platform. Find nearby teams, challenge opponents, and never miss a match again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10 md:mb-16 flex-wrap"
          >
            <button className="group bg-[#00DD44] text-black px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00DD44]/50 transition-all duration-300 hover:scale-105 border-2 border-[#00DD44] w-full sm:w-auto">
              <span className="flex items-center gap-2 justify-center">
                Coming Soon
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </button>
            <button className="group border-2 border-[#00DD44] text-[#00DD44] px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-[#00DD44] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00DD44]/30 w-full sm:w-auto" onClick={handleLearnMore}>
              Learn More
            </button>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-xs sm:max-w-sm mx-auto mb-8 sm:mb-12 lg:mb-0"
          >
            <div className="relative mx-auto w-full h-auto bg-black rounded-3xl border-4 border-gray-700 p-3 shadow-2xl aspect-[9/16]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-[#0F172A] rounded-2xl flex flex-col relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 pt-8 pb-2 text-white text-xs">
                  <span>11:03</span>
                  <div className="flex gap-1">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-3 border-b border-[#2D3F52]">
                  <div className="text-white font-bold text-lg mb-1">Captain Chat</div>
                  <div className="text-gray-400 text-xs flex items-center gap-1">
                    💬 Testing Team
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="px-4 py-3 flex-1 overflow-y-auto space-y-3">
                  {/* Opponent Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#D4A54F] text-black rounded-full flex items-center justify-center font-bold text-xs">
                      O
                    </div>
                    <div className="bg-[#1A2740] border border-[#2D3F52] rounded-2xl px-4 py-2 max-w-[70%]">
                      <div className="text-white text-sm">Ready for the challenge! Let's play at 3 PM?</div>
                      <div className="text-gray-400 text-xs mt-1">2:45 PM</div>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-[#00DD44] text-black rounded-2xl px-4 py-2 max-w-[70%]">
                      <div className="text-sm font-semibold">Perfect! See you at the ground.</div>
                      <div className="text-xs mt-1 opacity-75">2:47 PM</div>
                    </div>
                    <div className="w-8 h-8 bg-[#00DD44] text-black rounded-full flex items-center justify-center font-bold text-xs">
                      Y
                    </div>
                  </div>

                  {/* Challenge Message */}
                  <div className="flex items-center justify-center">
                    <div className="bg-[#2D3F52] text-gray-300 px-4 py-2 rounded-full text-xs">
                      ⚡ Match Challenge Accepted
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="px-4 py-3 border-t border-[#2D3F52]">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-[#1A2740] border border-[#2D3F52] rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-[#00DD44]"
                    />
                    <button className="bg-[#00DD44] text-black p-2 rounded-full hover:shadow-lg transition-all duration-300">
                      📤
                    </button>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-[#2D3F52] flex justify-around py-3 text-xs">
                  <div className="text-[#00DD44] flex flex-col items-center gap-1">
                    <span className="text-lg">🔍</span>
                    <span>Discover</span>
                  </div>
                  <div className="text-gray-500 flex flex-col items-center gap-1">
                    <span className="text-lg">👥</span>
                    <span>My Team</span>
                  </div>
                  <div className="text-gray-500 flex flex-col items-center gap-1">
                    <span className="text-lg">⚡</span>
                    <span>Challenges</span>
                  </div>
                  <div className="text-gray-500 flex flex-col items-center gap-1">
                    <span className="text-lg">💬</span>
                    <span>Chat</span>
                  </div>
                  <div className="text-gray-500 flex flex-col items-center gap-1">
                    <span className="text-lg">👤</span>
                    <span>Profile</span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center pb-1">
                  <div className="w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-[#00DD44] rounded-full flex items-center justify-center text-2xl shadow-lg"
            >
              🏏
            </motion.div>
            <motion.div
              animate={{ rotate: -360, y: [0, 10, 0] }}
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
              className="absolute -bottom-8 -left-8 w-14 h-14 bg-[#D4A54F] rounded-full flex items-center justify-center text-xl shadow-lg"
            >
              ⚽
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-[#0F172A] relative overflow-hidden" ref={problemSectionRef}>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
          >
            The Problem We're Solving
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "📍",
                title: "No way to find nearby teams",
                desc: "Hours spent scrolling through social media or asking around for opponents."
              },
              {
                icon: "💬",
                title: "WhatsApp chaos for every match",
                desc: "Endless group chats, lost messages, and no organization."
              },
              {
                icon: "👻",
                title: "No accountability — teams ghost you",
                desc: "Matches get canceled last minute with no consequences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group border-2 border-[#2D3F52] bg-[#1A2740] rounded-2xl p-6 sm:p-8 text-center hover:shadow-2xl hover:border-[#00DD44] transition-all duration-500 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-7xl mb-8"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[#00DD44] transition-colors">{item.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
          >
            How Sporza Works
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Create your team",
                desc: "Set up your team profile in minutes with player details and preferences.",
                icon: "👥"
              },
              {
                step: "02",
                title: "Discover nearby teams",
                desc: "GPS finds opponents within your radius for instant matchmaking.",
                icon: "📍"
              },
              {
                step: "03",
                title: "Send a challenge",
                desc: "Pick date, time, venue and send a match challenge.",
                icon: "⚔️"
              },
              {
                step: "04",
                title: "Play the match",
                desc: "Confirm and get automatic reminders. Score tracking coming soon.",
                icon: "🏆"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group text-center relative"
              >
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-[#00DD44] text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl hover:shadow-2xl hover:shadow-[#00DD44]/50 transition-all duration-300 relative"
                >
                  <span className="text-lg font-bold">{item.step}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border-2 border-[#2D3F52] bg-[#1A2740] rounded-2xl p-6 hover:shadow-xl hover:border-[#00DD44] transition-all duration-500"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00DD44] transition-colors">{item.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* V1 Features Section */}
      <section id="features" className="py-24 px-4 bg-[#0F172A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
          >
            What's Coming in V1
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { feature: "Phone OTP Authentication", status: "✅", desc: "Secure login with SMS verification" },
              { feature: "Team Creation & Management", status: "✅", desc: "Build and manage your sports teams" },
              { feature: "Location-Based Discovery", status: "✅", desc: "Find teams within your area" },
              { feature: "Instant Match Feature", status: "✅", desc: "Quick match setup and scheduling" },
              { feature: "Push Notifications", status: "✅", desc: "Stay updated with match alerts" },
              { feature: "Challenge System", status: "✅", desc: "Send and receive match challenges" },
              { feature: "Captain's Chat", status: "✅", desc: "Communicate with other captains for match confirmation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group border-2 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 relative overflow-hidden ${
                  item.status === '✅'
                    ? 'border-[#00DD44] bg-[#00DD44]/5'
                    : 'border-[#2D3F52] bg-[#1A2740]'
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className={`text-2xl ${item.status === '✅' ? 'text-[#00DD44]' : 'text-[#D4A54F]'}`}
                  >
                    {item.status}
                  </motion.span>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  item.status === '✅' ? 'bg-[#00DD44]' : 'bg-[#D4A54F]'
                }`}></div>

                <div className="pr-8">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#00DD44] transition-colors">{item.feature}</h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Roadmap Section */}
      <section id="sports" className="py-24 px-4 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
          >
            Starting with Cricket. Built for Every Sport.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { sport: "🏏 Cricket", status: "Launching Soon" },
              { sport: "⚽ Football", status: "Coming Next" },
              { sport: "🎾 Padel", status: "In Roadmap" },
              { sport: "🏸 Badminton", status: "In Roadmap" },
              { sport: "🏀 Basketball", status: "In Roadmap" },
              { sport: "➕ More", status: "Coming Soon" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group border-2 border-[#2D3F52] bg-[#1A2740] rounded-2xl p-4 sm:p-6 text-center hover:shadow-2xl hover:border-[#00DD44] transition-all duration-500 cursor-pointer relative overflow-hidden min-w-[200px] sm:min-w-[220px] flex-1 max-w-xs"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    className="text-5xl mb-4"
                  >
                    {item.sport.split(' ')[0]}
                  </motion.div>
                  <div className="font-bold mb-2 text-white group-hover:text-[#00DD44] transition-colors text-lg">{item.sport.split(' ')[1]}</div>
                  <div className={`text-sm px-3 py-1 rounded-full font-medium inline-block ${
                    item.status === 'Launching Soon' ? 'bg-[#00DD44] text-black' :
                    item.status === 'Coming Next' ? 'bg-[#D4A54F] text-black' :
                    'bg-[#2D3F52] text-gray-300'
                  }`}>
                    {item.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon / Waitlist Section */}
      <section id="download" className="py-24 px-4 bg-[#0F172A] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Download Sporza Now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
          >
            Get early access to Pakistan's first sports super app. Available for Android devices.
          </motion.p>

          {/* APK Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.a
              href="/sporza.apk"
              download="sporza-v0.1.0.apk"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#00DD44] text-black px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#00DD44]/50 transition-all duration-300 border-2 border-[#00DD44] relative overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="flex items-center gap-4 relative z-10 justify-center">
                <span className="text-2xl">📱</span>
                Download APK (Beta)
                <span className="text-lg opacity-80">v0.1.0</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2"
            >
              <span>🔒</span>
              For Android devices • 52MB • Free Download • Secure & Safe
            </motion.p>
          </motion.div>

          {/* Social Media & Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Follow for Updates</h3>
            <p className="text-gray-300 mb-8">Stay updated with the latest features and sports news</p>

            <div className="flex justify-center gap-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#1A2740] border-2 border-[#2D3F52] hover:border-[#00DD44] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#00DD44]/20"
              >
                <div className="text-4xl mb-3 flex justify-center">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-white font-semibold group-hover:text-[#00DD44] transition-colors">Facebook</div>
                <div className="text-sm text-gray-400">Follow us</div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#1A2740] border-2 border-[#2D3F52] hover:border-[#00DD44] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#00DD44]/20"
              >
                <div className="text-4xl mb-3 flex justify-center">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="text-white font-semibold group-hover:text-[#00DD44] transition-colors">Instagram</div>
                <div className="text-sm text-gray-400">Follow Us</div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#1A2740] border-2 border-[#2D3F52] hover:border-[#00DD44] p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#00DD44]/20"
              >
                <div className="text-4xl mb-3 flex justify-center">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="text-white font-semibold group-hover:text-[#00DD44] transition-colors">Twitter</div>
                <div className="text-sm text-gray-400">@sporzaapp</div>
              </motion.a>
            </div>
          </motion.div>

          {/* Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group border-2 border-[#2D3F52] bg-[#1A2740] rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:border-[#00DD44] transition-all duration-500 cursor-pointer w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
            >
              <div className="text-2xl sm:text-3xl mb-3">📱</div>
              <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#00DD44] transition-colors">App Store</div>
              <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Coming Soon</div>
              <div className="w-full h-1 bg-[#2D3F52] rounded-full mt-3 group-hover:bg-[#00DD44] transition-all duration-300"></div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group border-2 border-[#2D3F52] bg-[#1A2740] rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:border-[#00DD44] transition-all duration-500 cursor-pointer w-full sm:w-auto max-w-xs mx-auto sm:mx-0"
            >
              <div className="text-2xl sm:text-3xl mb-3">🤖</div>
              <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#00DD44] transition-colors">Google Play</div>
              <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Coming Soon</div>
              <div className="w-full h-1 bg-[#2D3F52] rounded-full mt-3 group-hover:bg-[#00DD44] transition-all duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#0A0F1C] border-t border-[#1A2332] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00DD44] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A54F] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-2xl sm:text-3xl font-bold text-[#00DD44] mb-3 sm:mb-4">SPORZA</div>
              <div className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">Connect. Compete. Celebrate</div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
                Pakistan's premier location-based sports matchmaking platform. Connect, compete, and conquer with teams near you.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-[#00DD44] transition-colors text-sm sm:text-base">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-[#00DD44] transition-colors text-sm sm:text-base">How It Works</a></li>
                <li><a href="#sports" className="hover:text-[#00DD44] transition-colors text-sm sm:text-base">Sports</a></li>
                <li><a href="#download" className="hover:text-[#00DD44] transition-colors text-sm sm:text-base">Download</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hammadurrehmanse@gmail.com" className="hover:text-[#00DD44] transition-colors text-sm sm:text-base">Contact Support</a></li>
                <li><span className="text-gray-500 text-sm sm:text-base">Privacy Policy - Coming Soon</span></li>
                <li><span className="text-gray-500 text-sm sm:text-base">Terms of Service - Coming Soon</span></li>
                <li><span className="text-gray-500 text-sm sm:text-base">About Us - Coming Soon</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 sm:pt-8 border-t border-[#1A2332] gap-4">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2026 Sporza. All rights reserved. Made with ❤️ in Pakistan 🇵🇰
            </div>

            <div className="text-gray-400 text-xs sm:text-sm">
              Questions? <a href="mailto:hammadurrehmanse@gmail.com" className="text-[#00DD44] hover:underline">Contact us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
