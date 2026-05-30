export type IndustryContent = {
  slug: string;
  name: string;
  chip: string;
  seo: { title: string; description: string };
  h1: string;
  subhead: string;
  intro: string[];
  highlights: string[];
};

const list: IndustryContent[] = [
  {
    slug: 'multifamily',
    name: 'Multifamily & Residential',
    chip: 'Multifamily',
    seo: {
      title: 'Multifamily & Residential | DishNet Direct',
      description:
        'Low voltage, security, fire/life safety, and in-building wireless for high-rise residential, podium, and mixed-income multifamily developments across California.',
    },
    h1: 'Multifamily & Residential Development',
    subhead:
      'Riser cabling, resident access control, code-driven life safety, and resident cellular coverage — delivered as one coordinated scope.',
    intro: [
      'High-rise residential and podium buildings carry some of the densest low-voltage, life-safety, and RF requirements of any vertical. The systems also interact constantly — riser pathway shared between structured wiring and ERRCS coax, access control tied into the property-management platform, cellular DAS sharing antenna infrastructure with public-safety radio.',
      'DishNet Direct delivers all of it on one contract, with one project manager who coordinates the disciplines against your construction schedule instead of bolting them on after drywall.',
    ],
    highlights: [
      'In-unit structured wiring and central satellite distribution',
      'Resident and amenity-space access control with package-room security',
      'Code-driven fire alarm and ERRCS for high-rise and podium construction',
      'Cellular DAS for resident coverage, shared with ERRCS where engineering allows',
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial & Mixed-Use',
    chip: 'Commercial',
    seo: {
      title: 'Commercial & Mixed-Use | DishNet Direct',
      description:
        'Class A office and mixed-use low voltage, security, fire/life safety, and in-building wireless. Tenant-improvement and base-building integration across California.',
    },
    h1: 'Commercial Office & Mixed-Use',
    subhead:
      'Class A cabling backbones, multi-tenant security, life-safety integration, and the wireless coverage brokers ask about before signing leases.',
    intro: [
      'Commercial tenants now evaluate cellular coverage, conference-room AV, and security during the tour. Mixed-use towers add the complexity of integrating tenant-improvement scope with existing base-building systems without breaking certification.',
      'DishNet Direct delivers the full low-voltage, security, and fire/life-safety stack for commercial and mixed-use properties — with DAS Systems handling the in-building wireless layer that increasingly drives leasing decisions.',
    ],
    highlights: [
      'Class A office cabling backbone and conference-room AV',
      'Multi-tenant access control and after-hours access management',
      'Tenant-improvement fire-alarm scope integrated with base-building systems',
      'Cellular DAS and Wi-Fi delivered as a leasing-grade coverage experience',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Hospitals',
    chip: 'Healthcare',
    seo: {
      title: 'Healthcare & Hospitals | DishNet Direct',
      description:
        'Clinical cabling, HIPAA-aware security, hospital life safety, and integrated in-building wireless for healthcare facilities. Joint Commission and OSHPD experience.',
    },
    h1: 'Healthcare & Hospitals',
    subhead:
      'Clinical cabling, restricted-area security, hospital-grade life safety, and the integrated wireless stack clinical communication depends on.',
    intro: [
      'Healthcare is where integrated wireless and life safety matter most. Clinical communication, patient devices, staff workflow, nurse-call, ERRCS, and visitor connectivity all run on different layers of the same physical stack — and all of it is governed by dense regulatory requirements.',
      'DishNet Direct coordinates the structured cabling, security, fire/life safety, and RF engineering as one accountable scope, with the Joint Commission and OSHPD experience these environments demand.',
    ],
    highlights: [
      'Clinical cabling, nurse-call infrastructure, and patient-room AV',
      'Restricted-area access, infant security, and HIPAA-aware video retention',
      'Hospital fire alarm, smoke control, and dense life-safety integration',
      'ERRCS, cellular DAS, Wi-Fi, and private LTE engineered as one stack',
    ],
  },
  {
    slug: 'education',
    name: 'Education — K-12 & Higher Ed',
    chip: 'Education',
    seo: {
      title: 'Education — K-12 & Higher Ed | DishNet Direct',
      description:
        'Multi-building campus cabling, lockdown-integrated security, life safety, and district-wide in-building wireless for K-12 and higher education across California.',
    },
    h1: 'Education — K-12 & Higher Ed',
    subhead:
      'Multi-building campus cabling, lockdown-integrated security, campus-wide life safety, and district-scale wireless rollouts.',
    intro: [
      'Campuses combine multiple buildings, varied construction eras, and district-level AHJ relationships. Lockdown integration between security and life safety has to be designed explicitly and tested — it is one of the most safety-critical and most commonly mis-implemented integrations in the vertical.',
      'DishNet Direct handles district-wide rollouts end to end, standardizing cabling, AV, security, and wireless across buildings while coordinating with the relevant AHJs as one program.',
    ],
    highlights: [
      'Multi-building campus cabling, classroom AV, and auditorium/athletic AV',
      'Campus access control with lockdown integration into life safety',
      'Multi-building fire alarm and ERRCS across mixed construction eras',
      'District-wide cellular DAS, Wi-Fi, and private wireless for labs and athletics',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    chip: 'Hospitality',
    seo: {
      title: 'Hospitality | DishNet Direct',
      description:
        'Guest-room AV and connectivity, back-of-house security, hotel life safety, and coordinated in-building wireless for hospitality properties across California.',
    },
    h1: 'Hospitality',
    subhead:
      'Guest-room connectivity, back-of-house security, hotel life safety, and the coordinated wireless experience guests judge within an hour of check-in.',
    intro: [
      'Hotels lose guest-satisfaction scores faster from bad cellular and Wi-Fi than from almost any other single issue. Hospitality properties need ERRCS for code, cellular DAS for guests, and high-density Wi-Fi delivered as a coordinated experience — not three competing systems fighting for the same ceiling space.',
      'DishNet Direct delivers the full stack — AV, connectivity, security, life safety, and RF — integrated with the property-management systems hospitality operations run on.',
    ],
    highlights: [
      'Guest-room AV and connectivity plus conference and event AV',
      'Back-of-house security, vault and cashier monitoring, and guest-room access',
      'Hotel fire alarm, in-room notification, and ERRCS for guest-radio coverage',
      'Cellular DAS and high-density Wi-Fi delivered as one coordinated experience',
    ],
  },
  {
    slug: 'industrial',
    name: 'Industrial & Warehouse',
    chip: 'Industrial',
    seo: {
      title: 'Industrial & Warehouse | DishNet Direct',
      description:
        'Harsh-environment cabling, perimeter security, large-footprint life safety, and private wireless for industrial, warehouse, and distribution facilities across California.',
    },
    h1: 'Industrial & Warehouse',
    subhead:
      'Harsh-environment cabling, perimeter security, large-footprint life safety, and the private wireless operational traffic actually needs.',
    intro: [
      'Rack-and-stack warehouse environments and structural steel cause severe RF attenuation, and operational devices — barcode scanners, IoT sensors, push-to-talk radios — need cellular-grade reliability that Wi-Fi roaming alone cannot deliver. Industrial sites are the strongest case for private wireless.',
      'DishNet Direct delivers the operational cabling, perimeter security, large-footprint fire alarm, and private LTE alongside the rest of the stack, engineered for the harsh-environment installation industrial scope requires.',
    ],
    highlights: [
      'Operational cabling with fiber backbone and harsh-environment terminations',
      'Perimeter security, loading-dock access, and inventory protection',
      'Industrial fire alarm, special-hazard suppression integration, and ERRCS',
      'Cellular DAS paired with CBRS private LTE for full operational coverage',
    ],
  },
];

export const industryPages: Record<string, IndustryContent> = Object.fromEntries(
  list.map((i) => [i.slug, i])
);

export const industryList = list;
