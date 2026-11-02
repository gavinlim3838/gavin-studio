import { ServiceItem, TargetAudience, CaseStudy } from '../types';

export const HERO_TAGLINE = 'WEBSITE + MARKETING + AUTOMATION';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'sales-funnels',
    number: '01',
    title: 'Sales Funnels',
    shortDesc: 'Turn interest into qualified leads and sales through psychological, high-converting offer journeys.',
    detailedPoints: [
      'Multi-stage lead capture mechanisms tailored to your audience temperature',
      'Value-driven micro-commitment hooks and seamless scheduling flows',
      'Direct CRM integration with immediate sales qualification triggers'
    ],
    deliverables: ['Custom Funnel Wireframe & Copy', 'High-Converting Checkout / Opt-In Pages', 'Lead Scoring Architecture'],
    iconName: 'filter',
    metrics: '+185% Average Opt-in Rate'
  },
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    shortDesc: 'Build a professional, modern and mobile-friendly business website engineered to establish instant authority.',
    detailedPoints: [
      'Bespoke visual identity combining modern cyber aesthetics with crystal clarity',
      'Lightning-fast load performance optimized for mobile and desktop screens',
      'Conversion-centered hierarchy guiding visitors straight to high-value actions'
    ],
    deliverables: ['Full Custom Responsive UI/UX', 'SEO & Speed Optimization', 'Interactive Booking & Showcase Portals'],
    iconName: 'monitor',
    metrics: '99+ PageSpeed & Mobile Score'
  },
  {
    id: 'landing-pages',
    number: '03',
    title: 'Landing Pages',
    shortDesc: 'Create focused pages that drive qualified leads, sign-ups, and direct sales for specific campaigns and offers.',
    detailedPoints: [
      'Single-objective architecture eliminating distractions and decision fatigue',
      'Persuasive copywriting structured around pain points, transformation, and social proof',
      'Dynamic A/B testing infrastructure ready for paid ad traffic (Meta, Google, LinkedIn)'
    ],
    deliverables: ['High-Velocity Ad Landing Page', 'Sticky Mobile CTA Experience', 'Conversion Analytics Tracking'],
    iconName: 'layers',
    metrics: '3.4x Higher Conversion vs Generic Sites'
  },
  {
    id: 'marketing-automation',
    number: '04',
    title: 'Marketing Automation',
    shortDesc: 'Automate your follow-ups with email sequences, WhatsApp notifications, and CRM systems to nurture leads 24/7.',
    detailedPoints: [
      'Instant automated WhatsApp message triggers within 60 seconds of form submission',
      'Behavioral email nurturing sequences that educate, overcome objections, and warm prospects',
      'Two-way calendar syncing with automated SMS/email reminders to slash no-show rates'
    ],
    deliverables: ['WhatsApp Business API Workflows', 'Drip Email Automation System', 'No-Show Reduction Pipeline'],
    iconName: 'settings',
    metrics: '82% Drop in Unanswered Inquiries'
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'business-coaches',
    name: 'Business Coaches',
    icon: 'Briefcase',
    headline: 'Fill Your Calendar with High-Paying 1-on-1 & Group Coaching Clients',
    problem: 'Relying on manual direct messaging and inconsistent referrals while losing warm leads to poor follow-up.',
    solution: 'A high-authority personal brand site paired with a qualification funnel that screens out low-budget tire-kickers automatically.',
    keyFunnelSteps: [
      'High-Value Case Study Video Landing Page',
      'Client Qualification Application Form',
      'Automated Calendar Booking & Preparation Questionnaire',
      'Automated WhatsApp/Email Reminder Cadence'
    ],
    expectedResult: '3x more qualified strategy sessions booked per month with pre-sold clients.'
  },
  {
    id: 'fitness-coaches',
    name: 'Fitness & Personal Trainers',
    icon: 'Dumbbell',
    headline: 'Turn Social Media Followers into Committed Fitness & Transformation Members',
    problem: 'Answering repetitive DMs asking for pricing, only to be ghosted after sending generic PDF links.',
    solution: 'A mobile-optimized transformation funnel with instant WhatsApp opt-ins and automated consultation scheduling.',
    keyFunnelSteps: [
      'Transformation Challenge / Workout Routine Lead Magnet',
      'Instant WhatsApp Chat Starter with Automated Diagnostic',
      '1-Click Free Assessment Call Booking',
      'Automated Testimonial Drip Nurture Sequence'
    ],
    expectedResult: 'Zero wasted hours in Instagram DMs; steady stream of new transformation signups.'
  },
  {
    id: 'online-creators',
    name: 'Course Creators & Educators',
    icon: 'GraduationCap',
    headline: 'Scale Course Enrollments with Evergreen Automated Funnels',
    problem: 'Exhausting yourself on live launch cycles without a dependable daily evergreen sales machine.',
    solution: 'An automated masterclass and video sales funnel with behavioral email triggers that sell your digital products 24/7.',
    keyFunnelSteps: [
      'Free Mini-Training / Workshop Opt-in Page',
      'Engaging Video Presentation with Dynamic Offer Reveals',
      'Limited-Time Incentive & Deadline Automation',
      'Stripe / Checkout Integration with Instant Access Setup'
    ],
    expectedResult: 'Predictable daily course sales without constantly hosting manual live webinars.'
  },
  {
    id: 'consultants',
    name: 'Strategic Consultants',
    icon: 'UserCheck',
    headline: 'Position as the De Facto Industry Expert & Win Enterprise Retainers',
    problem: 'Outdated corporate website that fails to reflect your true expertise, forcing you into competitive price wars.',
    solution: 'An ultra-sleek, modern cyber-minimalist authority website and diagnostic funnel that commands premium fees.',
    keyFunnelSteps: [
      'Executive Whitepaper / Industry Benchmark Report Access',
      'Diagnostic Assessment Tool Scoring Organization Readiness',
      'Direct Partner Strategy Call Scheduling',
      'Automated Pre-Call Authority Asset Delivery'
    ],
    expectedResult: 'Shortened B2B sales cycles and closing high-ticket retainer engagements.'
  },
  {
    id: 'smb-service',
    name: 'Service Businesses & Agencies',
    icon: 'Building',
    headline: 'Transform Organic Traffic into High-Intent Commercial Inquiries',
    problem: 'Website visitors bounce because contact forms are cumbersome and nobody follows up within the first hour.',
    solution: 'Rapid-response landing pages equipped with immediate multi-channel lead distribution and instant routing.',
    keyFunnelSteps: [
      'Service Calculator & Instant Estimate Request',
      'SMS & WhatsApp Alert Dispatched to Sales Team in Real Time',
      'Automated Quote Confirmation Sent to Customer',
      'Pipeline CRM Sync with Stage Automation'
    ],
    expectedResult: 'Sub-5-minute lead response times, resulting in a 74% increase in closed deals.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Build Your Online Presence',
    description: 'We architect a modern, mobile-responsive website or targeted landing page designed purely for credibility and high conversion.',
    detail: 'No template bloat. Custom visuals, clear hierarchy, and persuasive copy engineered for your target market.'
  },
  {
    number: '02',
    title: 'Generate Leads',
    description: 'Attract high-intent visitors and capture their verified contact details through compelling lead magnets and frictionless capture mechanisms.',
    detail: 'Transform passive browsers into identifiable prospects eager to explore your solutions.'
  },
  {
    number: '03',
    title: 'Automate Follow-Up',
    description: 'Nurture leads automatically through integrated WhatsApp messages, SMS alerts, and targeted email sequences within seconds of contact.',
    detail: 'Keep your brand top-of-mind, answer initial objections, and build trust while you sleep.'
  },
  {
    number: '04',
    title: 'Get More Clients',
    description: 'Deliver pre-sold, qualified prospects straight onto your calendar or checkout, turning conversations into predictable paying clients.',
    detail: 'Close deals with prospects who already know your value proposition and are ready to buy.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    clientName: 'Alexander Vance',
    clientRole: 'Founder & Executive Coach',
    businessType: 'Executive Leadership Consultancy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    headline: 'From Random Inquiries to 24 Consistent Monthly Retainer Applications',
    metricLabel: 'Monthly Inbound Pipeline',
    metricValue: '+$78,000',
    quote: 'Before Gavin Studio, my website was essentially a static digital business card. Within 30 days of deploying the new sales funnel and automated WhatsApp reminders, our calendar booked out completely.',
    tags: ['Sales Funnel', 'WhatsApp Automation', 'Website Redesign']
  },
  {
    id: 'case-2',
    clientName: 'Elena Rostova',
    clientRole: 'Head Coach & Transformation Specialist',
    businessType: 'Elite Fitness & Longevity Academy',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    headline: 'Eliminated DM Fatigue with Instant Automated WhatsApp Qualification',
    metricLabel: 'Consultation Show-Up Rate',
    metricValue: '91.4%',
    quote: 'I used to spend 3 hours every evening manually texting leads on Instagram. Gavin Studio replaced that with an automated WhatsApp nurture funnel that gets high-ticket clients onto calls ready to sign up.',
    tags: ['Fitness Funnel', 'WhatsApp CRM', 'Landing Page']
  },
  {
    id: 'case-3',
    clientName: 'Daniel Moreau',
    clientRole: 'Managing Director',
    businessType: 'Cloud & Tech Advisory Practice',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    headline: 'Shortened 6-Month B2B Enterprise Sales Cycles Down to 21 Days',
    metricLabel: 'Lead-to-Client Conversion',
    metricValue: '+210%',
    quote: 'The design aesthetic alone elevates us miles ahead of our traditional competitors. The integration of design, strategy, and CRM automation is exactly what our agency needed to scale.',
    tags: ['B2B Website', 'Email Drip System', 'Lead Qualification']
  }
];

export const TRUSTED_BRANDS = [
  { name: 'FitnessCoach', label: 'Health & Personal Training' },
  { name: 'BusinessCoach', label: 'Executive Mentorship' },
  { name: 'EduCreator', label: 'Academy & Course Creators' },
  { name: 'ConsultPro', label: 'Strategy & Advisory' },
  { name: 'LocalBusiness', label: 'Commercial & SMB Services' }
];
