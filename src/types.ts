export type Screen = 'profile' | 'skills' | 'education' | 'settings' | 'resume' | 'network' | 'career';

export interface Stat {
  label: string;
  value: string | number;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  label: string;
  value: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  years?: number;
  proficiency?: string;
  icon?: string;
  color?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: 'degree' | 'certification';
}

export interface Achievement {
  title: string;
  issuer: string;
  year: number;
  icon: string;
}
