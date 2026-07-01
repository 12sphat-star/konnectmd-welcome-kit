/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SavingsItem {
  product: string;
  avgPrice: number;
  youPay: number;
  savings: number;
  percentSaved?: number;
}

export interface Benefit {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  iconName: string;
  keyPoints: string[];
  howToUse: string[];
  phone?: string;
  website?: string;
  promoCode?: string;
  code?: string;
  networks?: string;
  savingsTable?: SavingsItem[];
  conditionsOrCategories?: string[];
  note?: string;
}

export interface MemberInfo {
  fullName: string;
  memberId: string;
  groupNumber: string;
  householdCount: number;
  effectiveDate: string;
  status: 'Active' | 'Pending' | 'Expired';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
