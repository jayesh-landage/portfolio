import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
  title: '🏠 Hostel Management System',
  desc: 'Full-stack hostel management platform for student registration, room allocation, fee management, complaint handling, and hostel administration.',
  ss: '/gallery/hostel.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'MongoDB'],
  live: '#',
  code: 'https://github.com/jayesh-landage/Hostel-Management-System'
},

{
  title: '🚦 DigiKumbh Traffic & Parking Management',
  desc: 'Smart traffic and parking management system for large-scale events featuring real-time parking availability, interactive maps, booking, and traffic monitoring.',
  ss: '/gallery/k1.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  live: '#',
  code: 'https://github.com/jayesh-landage/design_think'
},

{
  title: '🎮 Doodle Jump Game',
  desc: 'A classic Doodle Jump-inspired arcade game developed in Python with smooth player movement, platform generation, scoring, and collision detection.',
  ss: '/gallery/d1.png',
  tech: ['Python', 'Pygame'],
  live: '#',
  code: 'https://github.com/jayesh-landage/doodle-jump-pygame'
},

{
  title: '🏗️ Building Block Game',
  desc: 'City Bloxx-inspired building construction game where players stack moving blocks to construct the tallest tower with increasing difficulty levels.',
  ss: '/gallery/b1.png',
  tech: ['Python', 'Pygame'],
  live: '#',
  code: 'https://github.com/jayesh-landage/tower-builder-game'
},

{
  title: '🛣️ AI-Powered Road Monitoring System',
  desc: 'Machine learning-based road condition monitoring platform for infrastructure assessment, traffic impact analysis, and smart maintenance prioritization.',
  ss: '/gallery/road1.png',
  tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Scikit-Learn'],
  live: '#',
  code: 'https://github.com/jayesh-landage/AI-Road-Condition-Monitoring'
},

{
  title: '⚙️ CPU Scheduler Visualizer',
  desc: 'Interactive visualization tool for CPU scheduling algorithms including FCFS, SJF, Priority Scheduling, and Round Robin with performance metrics.',
  ss: '/gallery/cpu1.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'C++'],
  live: '#',
  code: 'https://github.com/jayesh-landage/CPU-Scheduler-Visualization'
},

{
  title: '🗺️ Dijkstra Algorithm Visualizer',
  desc: 'Graph-based visualization tool demonstrating Dijkstra’s shortest path algorithm with interactive node selection and real-time pathfinding.',
  ss: '/gallery/a1.png',
  tech: ['Python', 'Tkinter', 'Matplotlib', 'NetworkX'],
  live: '#',
  code: 'https://github.com/jayesh-landage/Dijkstra-Algorithm-Visualizer-main'
},
{
  title: '🌐 Personal Portfolio Website',
  desc: 'A modern and responsive portfolio website showcasing projects, technical skills, achievements, certifications, and contact information with smooth animations and an interactive user experience.',
  ss: '/gallery/portfolio.jpg',
  tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  live: '#',
  code: 'https://github.com/jayesh-landage/Portfolio'
},
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
