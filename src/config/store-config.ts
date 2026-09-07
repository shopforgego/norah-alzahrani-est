import { StoreConfig } from '../types/store';

export const storeConfig: StoreConfig = {
  storeNameAr: import.meta.env.VITE_STORE_NAME_AR || "متجر نورة الزهراني للحقائب والأحذية",
  storeNameEn: import.meta.env.VITE_STORE_NAME_EN || "Norah Alzahrani Bags & Shoes",
  companyNameAr: import.meta.env.VITE_COMPANY_NAME_AR || "مؤسسة نوره سوقان الزهراني التجارية",
  companyNameEn: import.meta.env.VITE_COMPANY_NAME_EN || "NORAH SAWQAN ALZAHRANI Establishment Commercial",
  taglineAr: import.meta.env.VITE_TAGLINE_AR || "تشكيلات حصرية من الحقائب الجلدية النسائية والأحذية الراقية",
  taglineEn: import.meta.env.VITE_TAGLINE_EN || "Exclusive Collection of Luxury Handbags, Wallets & Footwear",
  cr: import.meta.env.VITE_COMMERCIAL_REGISTRATION || "7054962522",
  taxNumber: import.meta.env.VITE_TAX_NUMBER || "310549625220003",
  shortAddress: import.meta.env.VITE_NATIONAL_ADDRESS_SHORT || "JHMA9547",
  city: import.meta.env.VITE_CITY || "جدة",
  district: import.meta.env.VITE_DISTRICT || "حي الشويضي",
  fullAddress: import.meta.env.VITE_FULL_ADDRESS || "المملكة العربية السعودية - جدة - حي الشويضي - الرمز البريدي JHMA9547",
  phone: import.meta.env.VITE_CONTACT_PHONE || "0563715240",
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "966563715240",
  email: import.meta.env.VITE_CONTACT_EMAIL || "Na9244267@gmail.com",
  supportHours: import.meta.env.VITE_SUPPORT_HOURS || "السبت - الخميس: 9:00 ص - 10:00 م",
  currency: import.meta.env.VITE_CURRENCY || "SAR",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "ر.س",
  freeShippingThreshold: Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 200,
  shippingCost: Number(import.meta.env.VITE_SHIPPING_COST) || 25,
};
