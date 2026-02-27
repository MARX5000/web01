import { Stat, ContactInfo, Skill, Education, Achievement } from './types';

export const PROFILE_STATS: Stat[] = [
  { label: 'APPLIED', value: 128 },
  { label: 'INTERVIEWS', value: 42 },
  { label: 'OFFERS', value: 15 },
];

export const CONTACT_INFO: ContactInfo[] = [
  { type: 'email', label: 'EMAIL', value: 'alex.rivers@design.com' },
  { type: 'phone', label: 'PHONE', value: '+1 (555) 012-3456' },
  { type: 'location', label: 'LOCATION', value: 'San Francisco, CA' },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 95, category: 'Programming', years: 5, proficiency: 'Expert', color: 'bg-orange-500' },
  { name: 'TypeScript', level: 82, category: 'Programming', years: 3, proficiency: 'Advanced', color: 'bg-blue-500' },
  { name: 'Python', level: 65, category: 'Programming', years: 2, proficiency: 'Intermediate', color: 'bg-emerald-500' },
  { name: 'UI Design', level: 90, category: 'Design & Creative', proficiency: 'FIGMA', color: 'bg-purple-500' },
  { name: 'Prototyping', level: 85, category: 'Design & Creative', proficiency: 'EXPERT', color: 'bg-pink-500' },
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    period: '2020 — 2022',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Optimizing Neural Architectures for Edge Devices." Maintained a 4.0 GPA.',
    type: 'degree',
  },
  {
    degree: 'Bachelor of Design',
    institution: 'Rhode Island School of Design',
    period: '2016 — 2020',
    description: 'Focused on User Experience and Interaction Design. Awarded the Presidential Scholar award for academic excellence and leadership.',
    type: 'degree',
  },
  {
    degree: 'Certified Solutions Architect',
    institution: 'AWS Training & Certification',
    period: '2023',
    description: 'Professional certification validating technical skills and expertise in designing and deploying scalable systems on AWS.',
    type: 'certification',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Dean's Honor List",
    issuer: 'Stanford University',
    year: 2022,
    icon: 'Trophy',
  },
  {
    title: 'National Design Award',
    issuer: 'AIGA Student Chapter',
    year: 2019,
    icon: 'Award',
  },
];
