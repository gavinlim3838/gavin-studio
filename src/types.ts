export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedPoints: string[];
  deliverables: string[];
  iconName: 'filter' | 'monitor' | 'layers' | 'settings';
  metrics: string;
}

export interface TargetAudience {
  id: string;
  name: string;
  icon: string;
  headline: string;
  problem: string;
  solution: string;
  keyFunnelSteps: string[];
  expectedResult: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientRole: string;
  businessType: string;
  avatar: string;
  headline: string;
  metricLabel: string;
  metricValue: string;
  quote: string;
  tags: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phoneOrWhatsApp: string;
  businessType: string;
  monthlyRevenue: string;
  primaryGoal: string;
  notes: string;
}
