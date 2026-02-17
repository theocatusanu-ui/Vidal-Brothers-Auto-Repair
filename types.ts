import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}