export interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  features: string[];
  isPopular?: boolean;
  shipping?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  quote: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ScienceJournal {
  journal: string;
  year: string;
  finding: string;
}

export interface CompanyInfo {
  name?: string;
  address?: string;
}

export interface ShippingInfo {
  codCities?: string[];
  couriers?: string[];
}

export interface PaymentOptions {
  bankAccounts: Array<{
    bank: string;
    number: string;
    holder: string;
  }>;
  ewallets?: Array<{
    name: string;
    number: string;
  }>;
}