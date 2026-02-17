import { Wrench, ShieldCheck, Clock, MapPin, Phone, Car, Settings, Battery, Gauge } from 'lucide-react';
import { ServiceItem, FeatureItem, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Vidal & Brothers",
  fullName: "Vidal & Brothers Auto Repair",
  phone: "819-209-4146",
  email: "vidalbrothers.garage@outlook.com",
  areas: ["Ottawa", "Gatineau", "Kanata", "Orleans"],
  fullAddress: "Mobile Service - We Come To You",
  social: {
    instagram: "https://www.instagram.com/vidalbrothers.garage/",
    facebook: "https://www.facebook.com/vidalandbrothers/"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Mobile Repair",
    description: "Engine work, tire fixes, and comprehensive mechanical service at your location.",
    details: "Think of us as a premium roadside service with full shop capabilities. We handle everything from flat tire repairs and emergency assistance to complex engine work. Whether it's a simple tire fix or major mechanical repair, we save you the tow and get you back on the road immediately.",
    icon: Wrench,
  },
  {
    title: "On-Site Diagnostics",
    description: "Advanced computer diagnostics to identify issues without moving your vehicle.",
    details: "Stop guessing what that check engine light means. We use dealership-grade diagnostic scanners to read engine codes and live data right in your driveway. You get a clear, honest explanation of the issue and a transparent quote before any work begins.",
    icon: Gauge,
  },
  {
    title: "Brake Service",
    description: "Premium brake pads and rotors replaced at your home for your convenience.",
    details: "Squeaking or grinding brakes are a safety hazard. We come to you to inspect calipers, lines, and fluid, and replace worn pads and rotors with premium ceramic parts. We ensure your vehicle has quiet, reliable stopping power without you leaving home.",
    icon: ShieldCheck,
  },
  {
    title: "Scheduled Maintenance",
    description: "Oil changes, tune-ups, and fluid checks without the repair shop wait.",
    details: "Keep your warranty intact and your car running smoothly without the dealership markup. We perform manufacturer-recommended maintenance including synthetic oil changes, filter replacements, spark plug tune-ups, and fluid flushes at your convenience.",
    icon: Settings,
  },
  {
    title: "Battery & Start",
    description: "We come to you to test and replace batteries, alternators, and starters.",
    details: "If your car won't start, don't panic. We test your entire charging system—battery, alternator, and starter—on the spot. We carry high-quality replacement batteries and parts to get you back on the road immediately, rain or shine.",
    icon: Battery,
  },
  {
    title: "Suspension Checks",
    description: "Inspecting and repairing suspension components to keep your ride smooth.",
    details: "A rough ride or drifting steering often means worn suspension. We inspect and replace shocks, struts, control arms, ball joints, and tie rods. Restoring your suspension improves safety, handling, and tire life, making your drive comfortable again.",
    icon: Car,
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "We Come To You",
    description: "Skip the towing fees and waiting rooms. We perform repairs at your location.",
    icon: Car,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. We explain every cost before we start the work.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Pros",
    description: "Decades of experience brought directly to your driveway.",
    icon: Settings,
  },
];