export const COMPANY_INFO = {
  name: 'Boulevard 01',
  legalName: 'Boulevard 01 (Pvt) Ltd',
  tagline: 'Landmark of trust',
  fullTitle: 'Boulevard 01 — Landmark of Trust',
  description: 'Premium Living & High-Yield Commercial Developments in Bahria Town Lahore & Islamabad',
  phone: '+92 321 000 4000',
  phoneClean: '923210004000',
  email: 'boulevard01official@gmail.com',
  address: {
    street: 'Plaza No. 39 AA Commercial, Sector D, Main Boulevard',
    locality: 'Bahria Town',
    city: 'Lahore',
    region: 'Punjab',
    postalCode: '53720',
    country: 'PK',
  },
  operatingHours: 'Saturday – Thursday: 10:00 AM – 8:00 PM (Friday by Prior Appointment)',
  websiteUrl: 'https://www.boulevard01.com.pk',
  social: {
    facebook: 'https://facebook.com/boulevard01official',
    instagram: 'https://instagram.com/boulevard01official',
    linkedin: 'https://linkedin.com/company/boulevard01',
    youtube: 'https://youtube.com/@boulevard01official',
  },
  trackRecord: {
    yearsInOperation: '9+',
    deliveredUnits: '500+',
    completedTowers: '15',
    onTimeRate: '100%',
    defaultRate: '0.0%',
  },
};

export const formatPKR = (amount: number): string => {
  if (amount >= 10000000) {
    const crore = amount / 10000000;
    return `PKR ${crore.toFixed(2)} Crore`;
  } else if (amount >= 100000) {
    const lakh = amount / 100000;
    return `PKR ${lakh.toFixed(2)} Lac`;
  }
  return new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 }).format(amount);
};

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
};
