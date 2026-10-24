export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  description: string;
  problem: string;
  outcome: string;
  engineering: string;
  badge?: {
    icon: string;
    text: string;
  };
  stripClass: string;
  github: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  link: string;
  linkText: string;
  verified: boolean;
}

export interface Hackathon {
  id: string;
  title: string;
  org: string;
  type: string;
  project: string;
  highlight: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
}

export interface StatItem {
  id: string;
  target: number;
  label: string;
  suffix?: string;
}
