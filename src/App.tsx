/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Edit2, 
  Verified, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  FileText, 
  Users, 
  Settings,
  Search,
  MoreHorizontal,
  Code,
  Terminal,
  Database,
  Palette,
  Layers,
  School,
  History,
  Award,
  Trophy,
  Plus,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import { PROFILE_STATS, CONTACT_INFO, SKILLS, EDUCATION_HISTORY, ACHIEVEMENTS } from './constants';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('profile');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'profile':
        return <ProfileScreen />;
      case 'skills':
        return <SkillsScreen />;
      case 'education':
        return <EducationScreen />;
      default:
        return <ProfileScreen />;
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-light border-x border-slate-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="flex-1 overflow-y-auto pb-24"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex gap-2 border-t border-slate-200 bg-white/90 backdrop-blur-lg px-4 pb-8 pt-3 z-50">
        <NavItem 
          active={currentScreen === 'profile'} 
          onClick={() => setCurrentScreen('profile')} 
          icon={<User size={20} />} 
          label="Profile" 
        />
        <NavItem 
          active={currentScreen === 'skills'} 
          onClick={() => setCurrentScreen('skills')} 
          icon={<Verified size={20} />} 
          label="Skills" 
        />
        <div className="relative -top-6 flex flex-1 justify-center">
           <button className="bg-primary text-white size-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 transition-transform">
             <Plus size={28} />
           </button>
        </div>
        <NavItem 
          active={currentScreen === 'education'} 
          onClick={() => setCurrentScreen('education')} 
          icon={<School size={20} />} 
          label="Education" 
        />
        <NavItem 
          active={currentScreen === 'settings'} 
          onClick={() => setCurrentScreen('profile')} // Just for demo
          icon={<Settings size={20} />} 
          label="Settings" 
        />
      </nav>
    </div>
  );
}

function NavItem({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400'}`}
    >
      <div className="flex h-6 items-center justify-center">
        {icon}
      </div>
      <p className={`text-[10px] uppercase tracking-wider ${active ? 'font-bold' : 'font-medium'}`}>{label}</p>
    </button>
  );
}

function ProfileScreen() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <button className="text-slate-900 size-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Profile</h2>
        <button className="text-slate-900 size-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <Share2 size={20} />
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex p-6 flex-col items-center gap-6">
        <div className="relative group">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-white shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Alex Rivers" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform">
            <Edit2 size={14} />
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight">Alex Rivers</h1>
          <p className="text-primary font-semibold text-base mt-1">Senior UX Designer</p>
          <div className="flex items-center justify-center gap-1 text-slate-500 text-sm mt-2">
            <Verified size={14} className="text-slate-400" />
            <span>Open to work</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between px-8 py-4 border-y border-slate-100 mb-6 bg-white/50">
        {PROFILE_STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{stat.value}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            {i < PROFILE_STATS.length - 1 && (
              <div className="w-px bg-slate-200 h-8 mx-6" />
            )}
          </div>
        ))}
      </div>

      {/* Personal Info */}
      <div className="px-4">
        <h3 className="text-lg font-bold pb-4 pt-2">Personal Info</h3>
        <div className="space-y-3">
          {CONTACT_INFO.map((info) => (
            <div key={info.type} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                {info.type === 'email' && <Mail size={20} />}
                {info.type === 'phone' && <Phone size={20} />}
                {info.type === 'location' && <MapPin size={20} />}
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{info.label}</p>
                <p className="text-slate-900 text-base font-semibold">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Me */}
      <div className="px-4 mt-8">
        <h3 className="text-lg font-bold pb-3">About Me</h3>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-600 text-sm leading-relaxed">
            Passionate Senior UX Designer with over 8 years of experience building digital products for startups and Fortune 500 companies. Focused on creating user-centric interfaces that drive engagement and business growth.
          </p>
        </div>
      </div>
    </div>
  );
}

function SkillsScreen() {
  const programmingSkills = SKILLS.filter(s => s.category === 'Programming');
  const designSkills = SKILLS.filter(s => s.category === 'Design & Creative');

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md px-4 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center justify-center size-10 rounded-full bg-slate-200/50">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-xl font-bold tracking-tight">Skills & Expertise</h1>
          <button className="flex items-center justify-center size-10 rounded-full bg-slate-200/50">
            <MoreHorizontal size={20} />
          </button>
        </div>
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search skills, tools, or languages"
            className="w-full bg-slate-200/50 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="px-4">
        {/* Programming */}
        <section className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Programming</h2>
            <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full uppercase tracking-wider">
              {programmingSkills.length} Skills
            </span>
          </div>
          <div className="space-y-3">
            {programmingSkills.map(skill => (
              <div key={skill.name} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-xl ${skill.color?.replace('bg-', 'bg-')}/10 flex items-center justify-center`}>
                      {skill.name === 'JavaScript' && <Code size={20} className="text-orange-500" />}
                      {skill.name === 'TypeScript' && <Terminal size={20} className="text-blue-500" />}
                      {skill.name === 'Python' && <Database size={20} className="text-emerald-500" />}
                    </div>
                    <div>
                      <p className="font-bold">{skill.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{skill.proficiency} • {skill.years} years</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    className="bg-primary h-1.5 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Design & Creative</h2>
            <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full uppercase tracking-wider">
              {designSkills.length} Skills
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {designSkills.map(skill => (
              <div key={skill.name} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    {skill.name === 'UI Design' ? <Palette size={20} className="text-purple-500" /> : <Layers size={20} className="text-pink-500" />}
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{skill.proficiency}</span>
                  </div>
                  <p className="text-sm font-bold">{skill.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-100 rounded-full h-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        className={`h-1 rounded-full ${skill.name === 'UI Design' ? 'bg-purple-500' : 'bg-pink-500'}`}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mt-8 mb-8">
          <h2 className="text-lg font-bold mb-4">Languages</h2>
          <div className="space-y-2">
            <LanguageRow 
              name="English" 
              level="Native" 
              dots={5} 
              flag="https://flagcdn.com/w40/us.png" 
            />
            <LanguageRow 
              name="Spanish" 
              level="Professional" 
              dots={4} 
              flag="https://flagcdn.com/w40/es.png" 
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function LanguageRow({ name, level, dots, flag }: { name: string, level: string, dots: number, flag: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-100">
          <img src={flag} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <span className="font-bold text-sm">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{level}</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`size-1.5 rounded-full ${i <= dots ? 'bg-primary' : 'bg-slate-200'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationScreen() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center bg-background-light/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-100">
        <button className="text-slate-900 size-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Education History</h2>
        <button className="flex items-center justify-center rounded-full size-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <Plus size={20} />
        </button>
      </header>

      <div className="px-6 pt-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-2 bottom-0 w-0.5 bg-slate-200" />
          
          <div className="space-y-10">
            {EDUCATION_HISTORY.map((edu, i) => (
              <div key={i} className="relative flex gap-6">
                <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-lg ${
                  edu.type === 'degree' ? 'bg-primary text-white shadow-primary/20' : 'bg-white border-2 border-slate-200 text-slate-400'
                }`}>
                  {edu.type === 'degree' ? (i === 0 ? <School size={20} /> : <History size={20} />) : <Verified size={20} />}
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-primary font-bold text-sm">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-1 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <History size={12} />
                      {edu.period}
                    </div>
                  </div>
                  <div className="mt-2 rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <section className="mt-12 mb-8">
          <h4 className="text-lg font-bold mb-4">Academic Achievements</h4>
          <div className="flex flex-col gap-3">
            {ACHIEVEMENTS.map((achievement, i) => (
              <div key={i} className={`flex items-center gap-4 rounded-2xl p-4 border ${
                i === 0 ? 'bg-primary/5 border-primary/10' : 'bg-white border-slate-100 shadow-sm'
              }`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  i === 0 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {achievement.icon === 'Trophy' ? <Trophy size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{achievement.title}</p>
                  <p className="text-xs font-medium text-slate-500">{achievement.issuer}, {achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
