import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Code2,
  ArrowUp,
  Smartphone,
  Brain,
  Bot,
  ChevronRight,
  Globe,
  Github,
  Users,
  Timer,
  CheckCircle2,
  Rocket,
  Database,
  Cpu,
} from "lucide-react";
import cubiclestext from "/public/White Icon.png";
import { useNavigate } from "react-router-dom";

const CubiclesLanding = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  
  const domains = [
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      description:
        "Master modern web technologies like React, Next.js, and Node.js. Build responsive, scalable, and secure web applications.",
      color: "from-blue-500 via-blue-600 to-indigo-700",
      details: [
        "Learn front-end frameworks like React and Vue.js",
        "Master back-end development with Node.js and Express",
        "Build full-stack applications with MongoDB and PostgreSQL",
        "Deploy applications using Docker and Kubernetes",
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "Build native mobile applications for iOS and Android using Flutter and React Native. Learn to publish apps on the App Store and Google Play.",
      color: "from-purple-500 via-purple-600 to-pink-700",
      details: [
        "Develop cross-platform apps with Flutter",
        "Create native apps using Swift and Kotlin",
        "Integrate APIs and databases into mobile apps",
        "Publish apps on App Store and Google Play",
      ],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      description:
        "Create intelligent systems using Python, TensorFlow, and PyTorch. Learn data preprocessing, model training, and deployment.",
      color: "from-emerald-500 via-emerald-600 to-teal-700",
      details: [
        "Learn data preprocessing and feature engineering",
        "Train models using TensorFlow and PyTorch",
        "Deploy ML models with Flask and FastAPI",
        "Work on real-world datasets and projects",
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <Bot className="w-6 h-6" />,
      description:
        "Develop AI solutions like chatbots, recommendation systems, and computer vision applications using advanced AI techniques.",
      color: "from-orange-500 via-orange-600 to-red-700",
      details: [
        "Build chatbots using NLP and GPT models",
        "Develop recommendation systems",
        "Work on computer vision projects with OpenCV",
        "Explore reinforcement learning and neural networks",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub Pro Access",
      description:
        "Full access to GitHub Pro features for seamless collaboration and version control.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "JetBrains IDEs",
      description:
        "Free access to JetBrains IDEs like WebStorm, PyCharm, and IntelliJ IDEA for professional development.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Premium Domains",
      description:
        "3 free premium domains for your projects and hosting support.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Work in agile teams on real projects using industry-standard collaboration tools and workflows.",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Days of Immersive Learning",
      icon: <Timer className="w-6 h-6" />,
    },
    {
      number: "25",
      label: "Selected Students",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "4",
      label: "In-Depth Technical Domains",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      number: "12+",
      label: "Real-World Projects",
      icon: <Database className="w-6 h-6" />,
    },
  ];

  const timeline = [
    {
      phase: 1,
      title: "Foundation Building",
      description:
        "Learn core concepts and foundational skills to set a strong base.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      phase: 2,
      title: "Hands-On Projects",
      description:
        "Work on real-world projects to apply your knowledge and gain practical experience.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      phase: 3,
      title: "Advanced Techniques",
      description:
        "Dive deeper into advanced topics, optimization, and industry best practices.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      phase: 4,
      title: "Final Showcase",
      description:
        "Showcase your final project to industry experts and receive valuable feedback.",
      icon: <Bot className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,_transparent_70%)] opacity-70 animate-glow"
          style={{
            animation: "glow 6s infinite ease-in-out",
          }}
        ></div>
      </div>

      {/* Star Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95 -z-10" />

      {/* Rest of your content */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Logo with Unique Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="flex justify-center mb-12"
          >
            <span className="text-7xl font-bold text-white font-montserrat">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                CUBICLES
              </span>
            </span>
          </motion.div>

          {/* Hero Section Content */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.4 }}
              className="text-6xl font-bold mb-6 text-white"
            >
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Technical Skills
              </span>{" "}
              with Project-Based Learning
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Join an exclusive cohort of 25 students for an immersive journey
              into practical development and real-world problem-solving.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-400 px-4 py-2 rounded-full mb-8 border border-blue-800"
            >
              <Timer className="w-4 h-4" />
              <span className="text-sm font-medium">
                It already started on February 8, 2025.
              </span>
            </motion.div>
            {/* Registration Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://forms.gle/tnGo4a4acXZQVEic6"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all"
              >
                Fill The Sarvey Form Now
              </a>
            </motion.div> */}
          </div>
        </div>
      </div>




      {/* Stats Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              Program Highlights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.4 }}
              className="text-gray-400"
            >
              A comprehensive learning experience designed for success
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.2 * index }}
                className="text-center bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all"
              >
                <div className="text-blue-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Domains Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              Technical Domains
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.4 }}
              className="text-gray-400"
            >
              Master cutting-edge technologies through hands-on project
              development
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.2 * index }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${domain.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {domain.title}
                </h3>
                <p className="text-gray-400 mb-4">{domain.description}</p>
                <ul className="text-gray-400 mb-4 space-y-2">
                  {domain.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              Benefits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.4 }}
              className="text-gray-400"
            >
              Get access to professional tools and resources to accelerate your
              learning
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.2 * index }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all"
              >
                <div className="text-blue-400 mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-white"
            >
              Your Learning Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg"
            >
              A structured approach to mastering technical skills
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.2 * index }}
                className="flex items-start mb-12 relative group"
              >
                {/* Icon with gradient background */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                  {phase.icon}
                </div>

                {/* Content */}
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Vertical line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Contact Section */}
            <div className="text-gray-400">
              <p className="font-medium mb-2">Contact Us:</p>
              <div className="space-y-1">
                
                <div className="space-y-1 text-center">
                  <p>Phone | Email </p>
                  +91 90111 56314 | aadilinamdar@cubicl3s.live ,<br />+91 70714 72143 | omghante@cubicl3s.live ,<br />+91 91129 12786 | nehakaji@cubicl3s.live
                </div>
                <p>info@cubicl3s.live</p>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-gray-500 text-sm">
              © 2025 Cubicles Initiative. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CubiclesLanding;
