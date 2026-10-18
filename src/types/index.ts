export type City = 'lahore' | 'islamabad';

export type ProjectStatus = 'launch' | 'selling' | 'construction' | 'delivered';

export type UnitType = 
  | 'studio' 
  | '1_bed' 
  | '2_bed' 
  | '3_bed' 
  | 'commercial' 
  | 'office' 
  | 'hotel_suite';

export type InventoryStatus = 'available' | 'on_hold' | 'reserved' | 'sold';

export interface ValueDriver {
  title: string;
  description: string;
  metric?: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface PaymentScheduleTier {
  phase: string;
  percentage: string;
  milestone: string;
}

export interface ProjectPaymentSchedule {
  title: string;
  duration: string;
  downPayment: string;
  installments: string;
  onPossession: string;
  tiers: PaymentScheduleTier[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  city: City;
  location_text: string;
  status: ProjectStatus;
  status_badge: string;
  offering_types: UnitType[];
  hero_headline: string;
  concept_theme: string;
  footfall_metric?: string;
  floor_count: string;
  overview_body: string;
  value_drivers: ValueDriver[];
  gallery_renders: string[];
  cover_image: string;
  walkthrough_url?: string;
  brochure_file: string;
  residential_plan_file?: string;
  commercial_plan_file?: string;
  geo_latitude: number;
  geo_longitude: number;
  starting_price_pkr: number;
  max_price_pkr: number;
  handover_timeline: string;
  amenities: string[];
  payment_schedules?: {
    residential?: ProjectPaymentSchedule;
    commercial?: ProjectPaymentSchedule;
  };
}

export interface InventoryUnit {
  id: string;
  project_id: string;
  project_slug: string;
  project_title: string;
  city: City;
  unit_code: string;
  floor_level: string;
  unit_type: UnitType;
  covered_area: number; // in sq ft
  current_price: number; // PKR
  availability_status: InventoryStatus;
  payment_plan_label: string;
  last_updated: string;
}

export interface PartnerAgency {
  id: string;
  agency_name: string;
  partner_slug: string;
  approval_status: 'approved' | 'pending' | 'under_review';
  lead_agent_name: string;
  license_number: string;
  contact_phone: string;
  whatsapp_number: string;
  contact_email: string;
  office_address: string;
  brand_logo: string;
  agent_photo: string;
  bio: string;
  active_project_ids: string[];
  exclusive_commission_rate: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Investment Strategy' | 'Buyers Guide' | 'Project News' | 'Company Track Record';
  published_at: string;
  read_time_minutes: number;
  excerpt: string;
  content: string;
  cover_image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  recommended_project_slug?: string;
  faqs?: { question: string; answer: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Executive Leadership' | 'Corporate Sales Directorate' | 'Islamabad Regional Office';
  location: string;
  bio: string;
  image: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid';
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  kpis: string[];
  whatsappRouting: string;
}

export interface InboundLeadPayload {
  full_name: string;
  phone_number: string;
  email_address?: string;
  inquiry_channel: 'brochure_gate' | 'consultation' | 'inventory_hold' | 'partner_page' | 'career_intake' | 'contact_form';
  project_interest?: string;
  unit_interest_type?: string;
  investor_type?: 'domestic' | 'nrp';
  inquiry_notes?: string;
  partner_id?: string;
  unit_code?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}
