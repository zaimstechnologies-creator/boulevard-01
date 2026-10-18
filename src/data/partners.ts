import { PartnerAgency } from '@/types';

export const PARTNER_AGENCIES: PartnerAgency[] = [
  {
    id: 'partner-apex',
    agency_name: 'Apex Real Estate Advisors',
    partner_slug: 'apex-properties',
    approval_status: 'approved',
    lead_agent_name: 'Malik Tariq Mehmood',
    license_number: 'ET-LHR-2024-089',
    contact_phone: '+92 300 845 2211',
    whatsapp_number: '+92 300 845 2211',
    contact_email: 'tariq@apexproperties.pk',
    office_address: 'Suite 402, Al-Latif Center, Main Boulevard, Gulberg III & Bahria Town, Lahore',
    brand_logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80',
    agent_photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Premier commercial and luxury residential real estate consultancy with 12 years of specialized brokerage leadership across Bahria Town and Etihad Town developments.',
    active_project_ids: ['grand-15', 'grand-14', 'grand-x'],
    exclusive_commission_rate: 'Tier 1 Certified (3.5% + Volume Rebates)',
  },
  {
    id: 'partner-al-haya',
    agency_name: 'Al-Haya Luxury Estates & Overseas Advisory',
    partner_slug: 'al-haya-associates',
    approval_status: 'approved',
    lead_agent_name: 'Syed Hamza Bukhari',
    license_number: 'ET-ISB-2023-114',
    contact_phone: '+92 333 555 9812',
    whatsapp_number: '+92 333 555 9812',
    contact_email: 'hamza@alhayaluxury.com',
    office_address: 'Executive Tower 2, Business Bay, Phase 8, Bahria Town Islamabad',
    brand_logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80',
    agent_photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Dedicated overseas Pakistani investment desk servicing NRP clients across the United Kingdom, United Arab Emirates, and North America for high-yield mixed-use developments.',
    active_project_ids: ['grand-12', 'grand-15'],
    exclusive_commission_rate: 'NRP Global Partner (4.0% Protected Remittance)',
  },
  {
    id: 'partner-qaswa',
    agency_name: 'Qaswa Real Estate & Marketing',
    partner_slug: 'qaswa-marketing',
    approval_status: 'approved',
    lead_agent_name: 'Chaudhry Salman Gujjar',
    license_number: 'ET-BHR-2024-342',
    contact_phone: '+92 322 411 7890',
    whatsapp_number: '+92 322 411 7890',
    contact_email: 'info@qaswamarketing.com',
    office_address: 'Commercial Plaza 12-B, Sector C Commercial, Bahria Town Lahore',
    brand_logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=300&q=80',
    agent_photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialists in high-velocity off-plan retail spaces, Midway commercial towers, and theme park food court acquisitions with guaranteed investor onboarding.',
    active_project_ids: ['grand-x', 'grand-11', 'grand-14'],
    exclusive_commission_rate: 'Commercial Specialist (3.5% Direct Developer Escrow)',
  },
];

export const PARTNER_BENEFITS = [
  {
    title: 'Guaranteed 3.5% – 5.0% Commission Escrow',
    description: 'Direct commission disbursement cleared within 14 business days of client first installment clearance, backed by Etihad Town Developer Escrow.',
    metric: '14-Day Escrow Payout',
  },
  {
    title: 'Real-Time Inventory Hold Priority',
    description: 'Instant 48-hour temporary inventory lock privilege for authorized brokers directly through the broker portal and WhatsApp API.',
    metric: '48-Hour Priority Lock',
  },
  {
    title: 'Dedicated Co-Branded Web Engine',
    description: 'Every approved partner receives a white-glove landing page (boulevard01.com.pk/partners/etihad/[slug]) featuring their headshots, direct WhatsApp routing, and attributed lead tracking.',
    metric: '100% Attributed Leads',
  },
  {
    title: 'Exclusive NRP & Investor Collateral',
    description: 'Full unbranded and co-branded digital brochures, 4K architectural render packs, video walkthroughs, and legal investment dockets.',
    metric: 'Instant Marketing Suite',
  },
];

export const PARTNER_FAQS = [
  {
    question: 'How does the Boulevard 01 × Etihad Town Chapter collaboration operate?',
    answer: 'The collaboration establishes a premier sales alliance between master community developer Etihad Town and Boulevard 01. It grants authorized Etihad sales partners direct, priority inventory allocations across Boulevard 01 high-rises in Bahria Town Lahore and Islamabad with unified legal contracts and verified commissions.',
  },
  {
    question: 'How do co-branded partner landing pages attribute leads?',
    answer: 'Each partner is given a unique slug (e.g., /partners/etihad/apex-properties). Inbound leads and WhatsApp calls generated through this page automatically carry your unique broker ID. Our central CRM tags the prospect to your agency profile, notifying both your agent and our partnership liaison.',
  },
  {
    question: 'What are the criteria to become an authorized Etihad Sales Partner?',
    answer: 'Brokerages must hold an active real estate tax registration (NTN/FBR), possess a verifiable physical commercial office in Pakistan or overseas, and demonstrate an active pipeline of genuine high-net-worth or NRP property investors.',
  },
  {
    question: 'Are overseas brokerages and international agents eligible?',
    answer: 'Yes. We have specialized onboarding pipelines for agencies operating in the United Kingdom, Canada, United States, Saudi Arabia, and UAE targeting Non-Resident Pakistani (NRP) expatriates investing through Roshan Digital Accounts (RDA).',
  },
];
