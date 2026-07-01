import { Benefit, FAQItem, MemberInfo } from '../types';

export const INITIAL_MEMBER_INFO: MemberInfo = {
  fullName: 'John Doe',
  memberId: 'KMD-9482103',
  groupNumber: 'GA-AFFINITY-01',
  householdCount: 3,
  effectiveDate: '2026-07-01',
  status: 'Active',
};

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'rx',
    name: 'KonnectMD RX Program',
    shortDescription: 'Acute & chronic medications — many at NO COST',
    description: 'No one should have to choose between feeding their family or taking their medications. KonnectMD has created a new concept that allows our members to SAVE BIG on their prescription needs. This includes an extensive formulary of common acute and chronic medications provided at zero cost to members.',
    iconName: 'Pill',
    keyPoints: [
      'Acute Medications: Up to 21-day supply at NO COST',
      'Chronic Medications: Up to 90-day supply at NO COST',
      'Accepted at over 64,000 pharmacies nationwide',
      'Includes over-the-counter benefits & coaching'
    ],
    howToUse: [
      'For Acute Medications: Fill at any of the 64,000 participating local pharmacies. Present your KonnectMD card. You may fill any eligible acute medication up to two (2) times within a 180-day period.',
      'For Chronic/Maintenance Medications: Order via our Akron, Ohio home delivery pharmacy for a 90-day supply at zero cost. We purchase direct from American Producers to cut out the middleman and pass the savings to you.',
      'To get started: Call 877-273-3932 or visit konnectmd.com/rx to see the full list of covered medications.'
    ],
    phone: '877-273-3932',
    website: 'konnectmd.com/rx',
    conditionsOrCategories: [
      'Acute Medications',
      'Maintenance (Chronic) Medications',
      'Over-The-Counter Medications',
      'Diabetes Supplies & Medications',
      'Pharmacy Coaching'
    ],
    note: 'Acute medications are limited to a 21-day supply, fillable twice in a 180-day period. Chronic medications are delivered via home delivery in 90-day batches.'
  },
  {
    id: 'dental',
    name: 'Dental Discounts',
    shortDescription: 'Save 15%–50% at thousands of dental locations',
    description: 'Save significantly on dental care. Members save 15% to 50% per visit on dental services at thousands of practice locations nationwide through the prestigious Aetna Dental Access® network.',
    iconName: 'Smile',
    keyPoints: [
      'Save 15% to 50% on almost all dental procedures',
      'Access to Aetna Dental Access® network nationwide',
      'No limits on visits and no tedious insurance paperwork',
      'Covers cleanings, X-rays, root canals, crowns, and orthodontics'
    ],
    networks: 'Aetna Dental Access®',
    howToUse: [
      'Find a participating provider at www.findbestbenefits.com or call Customer Service.',
      'Identify yourself as an Aetna Dental Access® network member when booking your appointment.',
      'Present your physical or digital KonnectMD membership card at the office before treatment.',
      'Pay the discounted rate directly to the dentist at the time of service — no forms or claim submissions required!'
    ],
    savingsTable: [
      { product: 'Cleaning (Adult)', avgPrice: 111, youPay: 67, savings: 44, percentSaved: 40 },
      { product: 'Cleaning (Child)', avgPrice: 86, youPay: 52, savings: 34, percentSaved: 40 },
      { product: 'Complete X-rays', avgPrice: 165, youPay: 99, savings: 66, percentSaved: 40 },
      { product: 'Root Canal (Anterior)', avgPrice: 951, youPay: 571, savings: 380, percentSaved: 40 },
      { product: 'Complete Upper Denture', avgPrice: 1616, youPay: 970, savings: 646, percentSaved: 40 }
    ],
    note: '*Actual costs and savings vary by provider, service, and geographic area. Not available to residents of Vermont.'
  },
  {
    id: 'vision',
    name: 'Eye Care & Vision Discounts',
    shortDescription: 'Save 10%–60% on exams, eyewear, and LASIK',
    description: 'Ensure clear vision for your whole household. Save 10% to 60% off eyeglasses, contact lenses, and other retail eyewear, plus 10% to 30% off standard eye examinations, and 40% to 50% off LASIK surgery.',
    iconName: 'Eye',
    keyPoints: [
      'Save 10% to 60% on frames and prescription lenses',
      'Over 20,000 participating eye care professionals nationwide',
      'Major chains: LensCrafters, Pearle Vision, Target Optical, Visionworks, etc.',
      '10% to 30% off comprehensive eye exams'
    ],
    networks: 'Coast to Coast Vision™',
    howToUse: [
      'Locate a provider on findbestbenefits.com and present your card with the Coast to Coast Vision™ logo.',
      'For LASIK Savings: Call 877-582-2010 to secure your 40%–50% discount off the national average and book at an approved specialist.',
      'For Contact Lenses (Home Delivery): Visit nbcontacts.nbm.store or call 800-878-3901 to order discount premium contacts.'
    ],
    savingsTable: [
      { product: 'Regular Eye Exam', avgPrice: 91.67, youPay: 79.25, savings: 12.42, percentSaved: 14 },
      { product: 'Single Vision Lenses', avgPrice: 95.67, youPay: 70.43, savings: 25.24, percentSaved: 26 },
      { product: 'Progressive Lenses', avgPrice: 259.33, youPay: 191.53, savings: 67.80, percentSaved: 26 },
      { product: 'Designer Frames', avgPrice: 194.33, youPay: 144.20, savings: 50.13, percentSaved: 26 }
    ],
    note: '*Savings examples only. Savings vary by procedure, provider and geographical area. No limits on benefit use per year.'
  },
  {
    id: 'counseling',
    name: 'Virtual Counseling & Support',
    shortDescription: '24/7 unlimited master\'s level mental health support',
    description: 'Connect confidentially with Master\'s Level Counselors anytime, anywhere. This service provides confidential, unlimited consultation, counseling, and direct referrals for anxiety, stress, family difficulties, and crisis support.',
    iconName: 'MessageSquareText',
    keyPoints: [
      '24/7 immediate access with absolutely NO CO-PAY or fee',
      'Confidential consultations from the comfort of home',
      '100% follow-up sessions with your original counselor',
      'Includes crisis support and referrals to local resources'
    ],
    howToUse: [
      'Call the dedicated toll-free helpline at 855-399-5547.',
      'Complete a brief registration and intake process with a professional dispatcher.',
      'Get immediately connected with an expert Master\'s Level Counselor for your therapy session.'
    ],
    phone: '855-399-5547',
    conditionsOrCategories: [
      'Anxiety & Stress Management',
      'Relationship & Family Support',
      'Grief, Loss, & Life Transitions',
      'Substance Abuse Referral',
      'Crisis Intervention & Stabilization'
    ],
    note: 'Counseling is unlimited and completely free of any co-pays. Perfect for day-to-day emotional well-being.'
  },
  {
    id: 'psychiatry',
    name: 'Virtual Psychiatry Service',
    shortDescription: 'Board-certified psychiatrists by phone or video 24/7',
    description: 'Get clinical, board-certified psychiatric care on your schedule. Connect with US-based psychiatrists who can diagnose, treat, conduct psychotherapy, and prescribe appropriate medications for mental health conditions.',
    iconName: 'Stethoscope',
    keyPoints: [
      'US-based, Board-Certified Psychiatrists available 24/7',
      'Video and phone consultations available',
      'Full diagnostic evaluation, medication management, & therapy',
      'Private, secure, and fully HIPAA compliant'
    ],
    howToUse: [
      'First register your account by calling 877-273-3932 or visiting portal.konnectmd.com. Have the primary member\'s last name, date of birth, and zip code handy.',
      'Once registered, request a consult by phone or video via the portal or by calling 877-273-3932.',
      'Consult with your doctor, receive custom treatment plans, and have prescriptions sent directly to your local pharmacy.'
    ],
    phone: '877-273-3932',
    website: 'portal.konnectmd.com',
    conditionsOrCategories: [
      'Clinical Depression',
      'Anxiety Disorders',
      'Trauma & PTSD',
      'Panic Disorders',
      'Bipolar Disorder',
      'Addictive Behaviors'
    ],
    note: '**A consultation fee may apply. Prescriptions are not guaranteed and are subject to clinical evaluation.'
  },
  {
    id: 'labs',
    name: 'Laboratory Services',
    shortDescription: 'Direct access laboratory testing via DirectLabs®',
    description: 'Take charge of your health. Access major clinical laboratories nationwide directly through DirectLabs®, the leader in direct access testing. Avoid doctors\' visits and get direct, confidential results on thousands of standard blood tests.',
    iconName: 'FlaskConical',
    keyPoints: [
      'Confidential results online in as little as 24 hours',
      'Access major national lab systems without a doctor\'s referral',
      'Order standard blood, urine, allergy, and specialty tests',
      'Highly secure personal online health portal (MyDLS)'
    ],
    networks: 'DirectLabs®',
    code: 'R-BESB',
    howToUse: [
      'Order Your Tests: Visit www.directlabs.com/BestBenefits or call 800-908-0000 and provide the discount code: R-BESB.',
      'Print Requisition: DirectLabs® will generate your official lab requisition form within 2–4 business hours and upload it to your account.',
      'Visit Lab: Use the online Lab Locator to find a patient service center near you and walk in with your printed requisition.',
      'Get Results: View your secure, private results online within 24–48 hours on your personal MyDLS portal.'
    ],
    note: '*Note: Not available to residents of NJ, NY, or RI.'
  },
  {
    id: 'supplies',
    name: 'Diabetic & Home Medical Supplies',
    shortDescription: 'Save an additional 10% on supplies & health products',
    description: 'Get medical essentials delivered directly to your door at a discount. Members enjoy access to fast, high-quality, and affordable diabetic, medical, and wellness supplies with an extra 10% off through ADW Diabetes.',
    iconName: 'Activity',
    phone: '800-210-9222',
    website: 'www.adwdiabetes.com',
    promoCode: 'COV10',
    keyPoints: [
      'Save an extra 10% on all products using code COV10',
      'Covers diabetic test strips, monitor systems, and lancets',
      'Includes mobility aids, bath safety, and general wellness gear',
      'Includes specialty pet diabetes and pet care items'
    ],
    howToUse: [
      'Go online to www.adwdiabetes.com or dial 800-210-9222.',
      'Select your required products from the thousands of options.',
      'Enter the coupon code COV10 at checkout (or state it on the phone) to apply your additional 10% discount.'
    ],
    conditionsOrCategories: [
      'Diabetic Supplies (test strips, insulin pump gear, lancets)',
      'Home Medical Supplies (bath seats, walkers, crutches)',
      'Pet Health (pet insulin supplies, diabetic care, pet food)',
      'Health & Wellness (blood pressure monitors, baby formula, incontinence)'
    ],
    note: 'ADW customer service is available Monday through Friday, 9:00 AM – 5:00 PM EST.'
  },
  {
    id: 'chiropractic',
    name: 'Chiropractic Care',
    shortDescription: 'Save 20%–40% plus free initial consultation',
    description: 'Alleviate pain and increase range of motion. Save 20% to 40% on chiropractic fees at participating providers nationwide. Your membership covers initial diagnostics, examinations, and ongoing physical therapy.',
    iconName: 'Flame',
    networks: 'Uni-Care',
    keyPoints: [
      'FREE Initial Consultation included for all members',
      'Save 20% to 40% on standard exams, adjustment, and x-rays',
      '40% savings on diagnostic services',
      '20% savings on electrical stimulation and physical therapies'
    ],
    howToUse: [
      'Locate a network provider by searching the Uni-Care network at www.findbestbenefits.com or calling Customer Service.',
      'Inform the provider that you are a Uni-Care network member when booking your consultation.',
      'Present your KonnectMD card during check-in.',
      'Pay your special discounted fee at the time of your appointment — no forms needed.'
    ],
    savingsTable: [
      { product: 'Initial Consultation', avgPrice: 60, youPay: 0, savings: 60, percentSaved: 100 },
      { product: 'Initial Examination', avgPrice: 115, youPay: 35, savings: 80, percentSaved: 70 },
      { product: 'X-Ray (Full Spine)', avgPrice: 200, youPay: 150, savings: 50, percentSaved: 25 },
      { product: 'Electrical Stimulation', avgPrice: 27, youPay: 21.6, savings: 5.4, percentSaved: 20 }
    ],
    note: '*Savings examples only. Savings vary by procedure, provider, and geographical area. Cannot be used with other discount programs.'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'General',
    question: 'Is KonnectMD an insurance plan?',
    answer: 'No. This plan is NOT insurance. It is a discount membership program that provides you and your household with access to highly discounted rates and no-cost medications/consultations at participating providers.'
  },
  {
    category: 'Coverage',
    question: 'Who is covered under my membership?',
    answer: 'Your KonnectMD Plus membership extends to anyone living in your household! There is no limit to how often or how much your household members can save.'
  },
  {
    category: 'Billing',
    question: 'How do I cancel my membership?',
    answer: 'You may cancel at any time by submitting a request at konnectmd.com/contact, calling 844-563-2863, or writing to KonnectMD, 9520 North May Ave #231, Oklahoma City, OK 73120. You have the right to cancel within 30 days of the effective date for a full refund of fees paid.'
  },
  {
    category: 'General',
    question: 'Can I use this with my standard health insurance?',
    answer: 'These discounts cannot be combined with insurance or other network-based discount programs, but you can use KonnectMD for items and procedures that your standard insurance doesn\'t cover, or if you have a high deductible.'
  },
  {
    category: 'RX Program',
    question: 'Are medications actually free?',
    answer: 'Yes! For medications on our extensive acute and chronic formularies, you pay $0. Acute medications are filled at 64,000 local pharmacies (up to 21-day supply, twice per 180 days). Chronic medications are delivered to your home in 90-day batches from our delivery pharmacy in Akron, Ohio, completely free of charge.'
  }
];

export const CONTACT_INFO = {
  customerService: '1-866-770-5259',
  customerServiceHours: 'Weekdays 8:00AM – 5:00PM CT',
  billingAndCancellations: '844-563-2863',
  konnectmdDirect: '877-273-3932',
  portalUrl: 'portal.konnectmd.com',
  websiteUrl: 'www.findbestbenefits.com'
};
