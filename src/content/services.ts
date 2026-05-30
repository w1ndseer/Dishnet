import {
  ShieldAlert, MapPinned, RadioTower, CalendarCheck,
  Signal, Scale, Building2, Waves,
  Users, Clock4, Cpu, Gauge,
} from 'lucide-react';
import type { PageContent, IndustryRef } from './types';
import { DAS_URL } from '../seo/org';

const SERVICES_PARENT = { name: 'Services', path: '/#services' };

function industries(blurbs: Record<string, string>): IndustryRef[] {
  return [
    { slug: 'multifamily', name: 'Multifamily & Residential', blurb: blurbs.multifamily },
    { slug: 'commercial', name: 'Commercial & Mixed-Use', blurb: blurbs.commercial },
    { slug: 'healthcare', name: 'Healthcare & Hospitals', blurb: blurbs.healthcare },
    { slug: 'education', name: 'Education — K-12 & Higher Ed', blurb: blurbs.education },
    { slug: 'hospitality', name: 'Hospitality', blurb: blurbs.hospitality },
    { slug: 'industrial', name: 'Industrial & Warehouse', blurb: blurbs.industrial },
  ];
}

const errcs: PageContent = {
  kind: 'service',
  slug: 'errcs',
  path: '/services/errcs',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'Emergency Responder Communication Systems (ERRCS)',
  seo: {
    title: 'Emergency Responder Communication Systems (ERRCS) | DishNet Direct',
    description:
      'Code-compliant first-responder radio coverage engineered, installed, and AHJ-coordinated by DishNet Direct with DAS Systems — meeting IFC, NFPA 72, and NFPA 1221.',
  },
  hero: {
    chip: 'ERRCS',
    h1: 'Emergency Responder Communication Systems (ERRCS)',
    subhead:
      'Code-compliant first-responder radio coverage, engineered and installed as part of your integrated low-voltage scope.',
    primaryCta: { label: 'Request a site survey', to: '/#contact' },
    secondaryCta: { label: 'Talk to an ERRCS engineer', to: '/#contact' },
  },
  overview: {
    heading: 'What an ERRCS does and why your building needs one',
    body: [
      'Inside large or RF-shielded buildings, public-safety radios often do not work. Concrete, structural steel, low-emissivity glass, parking levels, and stairwells all block the VHF, UHF, 700 MHz, and 800 MHz frequencies that fire, police, and EMS depend on. When first responders enter a building and lose contact with command, lives and your certificate of occupancy are both at risk.',
      'An Emergency Responder Communication System — also called a Bi-Directional Amplifier (BDA) system or public-safety DAS — is engineered to fix that. We design, install, test, and commission ERRCS that meet IFC, NFPA 72, NFPA 1221, and your local Authority Having Jurisdiction (AHJ) requirements, and that continue to pass annual inspection year after year.',
      'DishNet Direct delivers ERRCS as part of an integrated low-voltage scope. Cabling, fire/life safety integration, RF engineering — three disciplines that already live under one roof. Our specialist division, DAS Systems, brings 25 years of focused RF engineering depth to every project.',
    ],
  },
  whyItMatters: {
    heading: 'Why building owners and developers get this wrong',
    bullets: [
      { icon: ShieldAlert, title: 'Failed ERRCS inspection holds up your certificate of occupancy', body: 'We get called in routinely to fix the work of contractors who underestimated IFC 510 or NFPA 1221 requirements. A retest costs weeks.' },
      { icon: MapPinned, title: 'AHJ requirements vary by jurisdiction', body: 'San Francisco, San Jose, Oakland, and most Bay Area counties each interpret grid-coverage and frequency requirements differently. There is no generic compliance.' },
      { icon: RadioTower, title: 'Public-safety frequency plans shift over time', body: 'P25 Phase II, FirstNet (Band 14), and county-specific mutual-aid channels all need to be designed into the system from day one.' },
      { icon: CalendarCheck, title: 'Annual inspection is mandatory', body: 'Once your ERRCS is installed, you are required to test and certify it every year for the life of the building. A pass at commissioning is not a pass forever.' },
    ],
  },
  includes: {
    heading: 'What is included when DishNet Direct delivers an ERRCS',
    scope: [
      { title: 'Pre-design RF survey', body: 'Signal-strength readings on all required public-safety frequencies, throughout the building, before any design begins.' },
      { title: 'Direct AHJ coordination', body: 'We file with your local fire marshal and run the feedback loop ourselves.' },
      { title: 'Full system design', body: 'BDA selection, donor antenna placement, coaxial and fiber routing, battery-backup sizing per NFPA 1221.' },
      { title: 'Stamped engineering drawings', body: 'Suitable for plan check and AHJ submittal.' },
      { title: 'Installation', body: 'Cabling, antenna mounting, head-end equipment, and fire-alarm integration per NFPA 72.' },
      { title: 'Acceptance testing', body: 'Full grid testing, DAQ measurements, and a written test report for AHJ sign-off.' },
      { title: 'Annual inspection', body: 'Ongoing compliance testing for the life of the building.' },
      { title: 'Complete documentation package', body: 'As-builts, equipment manuals, and test history — everything your fire marshal will ask for in year five.' },
    ],
  },
  process: {
    heading: 'How an ERRCS project moves from kickoff to inspection',
    steps: [
      { title: 'RF site survey', body: 'Walk the building with calibrated test equipment to establish baseline coverage on every required public-safety frequency.' },
      { title: 'AHJ pre-application meeting', body: 'Confirm frequency lists, grid requirements, and submittal expectations specific to your jurisdiction before design starts.' },
      { title: 'System design & engineering', body: 'Full RF design with link budgets, coverage maps, equipment selection, and stamped drawings.' },
      { title: 'Permit submittal & plan check', body: 'We run the back-and-forth with the fire marshal directly so your GC and architect stay out of the loop.' },
      { title: 'Installation', body: 'Coordinated with your other low-voltage and fire/life safety trades through DishNet Direct project management.' },
      { title: 'Acceptance testing & AHJ sign-off', body: 'Grid testing, DAQ verification, written report. We do not leave until the inspection passes.' },
      { title: 'Handoff & annual inspection setup', body: 'System documentation, on-site training, and a scheduled inspection cadence so year-two compliance is already booked.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this service to',
    refs: industries({
      multifamily: 'Code-driven ERRCS scope for new ground-up and major renovations. Common trigger: high-rise residential, podium buildings, large garage levels.',
      commercial: 'Class A office, mixed-use towers, and tenant-improvement work where ERRCS gets added late and has to coexist with existing scope.',
      healthcare: 'Hospital ERRCS sits alongside cellular DAS, paging, and nurse-call. Tight integration matters; we coordinate it as one stack.',
      education: 'Campuses with multiple buildings, varied construction eras, and district-level AHJ relationships. We handle the multi-building rollouts.',
      hospitality: 'Hotels and conference properties where ERRCS must coexist with cellular DAS, Wi-Fi, and guest amenities without interference.',
      industrial: 'Large-footprint warehouses, distribution centers, and manufacturing where structural steel and rack systems cause severe RF attenuation.',
    }),
  },
  whyDishNet: {
    heading: 'ERRCS as part of an integrated low-voltage delivery',
    body: [
      'Most ERRCS contractors do one thing. We do the whole low-voltage stack — structured cabling, security, fire/life safety, audio-visual — and we deliver ERRCS as part of that scope through our DAS Systems specialist division. That matters because ERRCS does not live in isolation. It ties into your fire alarm per NFPA 72, shares pathway with your other low-voltage runs, and often shares head-end space with cellular DAS and other in-building wireless systems.',
      'When one integrator owns the whole picture, you stop paying for redundant cable runs, you stop dealing with finger-pointing when something fails, and you get one project manager who can speak fluently to your fire marshal, your GC, and your IT director in the same conversation.',
      'DishNet Direct has been the parent company of DAS Systems for 25 years. Same ownership, same engineering bench, same field crews. The handoff between the integrator and the RF specialist is internal — not a subcontractor relationship with a margin and a delay attached.',
    ],
  },
  crossLink: {
    heading: 'Looking for the deep technical specifications?',
    body: 'Our specialist division DAS Systems has 25 years of focused RF engineering experience. Read the technical service page on the specialist division site.',
    linkLabel: 'Read more at dassystems.com/errcs',
    href: `${DAS_URL}/errcs/`,
    external: true,
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'What is the difference between ERRCS, BDA, and public-safety DAS?', a: 'These terms refer to overlapping technologies. ERRCS is the regulatory category, BDA is the most common amplifier hardware used, and public-safety DAS refers to the antenna distribution side. A real ERRCS deployment usually includes all three.' },
      { q: 'When does my building actually need ERRCS?', a: 'Most large new construction in California triggers ERRCS requirements through IFC 510 or local amendments. Your fire marshal will require an in-building survey, and if signal levels fall below grid-coverage thresholds, an ERRCS is required. We do the survey as a fixed-fee engagement before design.' },
      { q: 'Who is the Authority Having Jurisdiction (AHJ) on my project?', a: "Usually the local fire marshal's office. In some jurisdictions the AHJ is shared between fire and the radio communications division of the police or sheriff. We identify and coordinate with all relevant AHJs as part of pre-design." },
      { q: 'Do you handle the annual inspection after installation?', a: 'Yes. Once we commission your ERRCS, we set up the recurring annual inspection so you stay continuously compliant. We file the test report directly with your fire marshal each year.' },
      { q: 'What happens if my ERRCS fails inspection?', a: 'We do not deliver projects that fail. When we are brought in to remediate work that another contractor delivered, we start with a diagnostic survey, identify the failure mode (donor antenna, BDA gain, isolation, fire-alarm integration, or coverage gaps), and scope remediation against the specific AHJ findings.' },
      { q: 'Can ERRCS be added to an existing occupied building?', a: 'Yes. Retrofit ERRCS is one of the most common projects we take on. We design around occupied conditions, sequence installation around tenant activity, and minimize disruption.' },
      { q: 'How long does an ERRCS project take from survey to inspection?', a: 'For a straightforward new-construction project, 8 to 14 weeks from survey to acceptance test. Retrofit projects vary based on building access and AHJ responsiveness.' },
    ],
  },
  finalCta: {
    heading: 'Looking at a code citation, a failed inspection, or a new build?',
    subhead: 'A site survey is the right first step. We do them fast and we do them as a fixed fee.',
    primary: { label: 'Request a site survey', to: '/#contact' },
    secondary: { label: 'Call our ERRCS team', to: '/#contact' },
  },
};

const cellularDas: PageContent = {
  kind: 'service',
  slug: 'cellular-das',
  path: '/services/cellular-das',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'Cellular Distributed Antenna Systems',
  seo: {
    title: 'Cellular Distributed Antenna Systems | DishNet Direct',
    description:
      'Carrier-grade in-building cellular coverage designed, installed, and carrier-approved by DishNet Direct with DAS Systems — passive and active DAS for Verizon, AT&T, T-Mobile, and FirstNet.',
  },
  hero: {
    chip: 'Cellular DAS',
    h1: 'Cellular Distributed Antenna Systems',
    subhead:
      'Carrier-grade cellular coverage throughout your building — designed, installed, and integrated with the rest of your low-voltage scope.',
    primaryCta: { label: 'Request a coverage assessment', to: '/#contact' },
    secondaryCta: { label: 'Talk to a DAS engineer', to: '/#contact' },
  },
  overview: {
    heading: 'What a cellular DAS does and when you need one',
    body: [
      "Same building, same materials, different problem. Where ERRCS solves first-responder radio coverage, a cellular Distributed Antenna System solves the everyday problem: tenants, guests, patients, and employees can't get a usable signal on their phones inside your building. Concrete, low-e glass, and depth from the exterior wall block carrier signal the same way they block public-safety radio.",
      'A cellular DAS distributes carrier signal — Verizon, AT&T, T-Mobile, FirstNet — throughout your building using a network of remote antennas fed by a head-end source. The result: full-bar coverage on every floor, in every elevator, throughout every basement level.',
      'DishNet Direct designs and installs both passive DAS (smaller buildings, single or limited carrier scope) and active DAS (large buildings, multi-carrier, fiber-fed). We also manage the carrier approval process required before any signal can be lawfully repeated.',
    ],
  },
  whyItMatters: {
    heading: 'Why cellular coverage is now infrastructure, not amenity',
    bullets: [
      { icon: Signal, title: 'Tenants check signal during the tour', body: 'Leasing decisions, hotel choices, and apartment selections all factor in cellular coverage. Bad signal is a quiet deal-killer.' },
      { icon: Scale, title: 'Carrier approval is required by law', body: "You can't legally amplify or repeat a carrier signal without that carrier's sign-off. We've been doing carrier coordination for 25 years and know the submission process for each major carrier." },
      { icon: Building2, title: 'Modern buildings are RF-hostile by default', body: 'Low-emissivity glass, spray-foam insulation, and high-performance envelopes block more RF every year. Class A construction makes the in-building problem worse, not better.' },
      { icon: Waves, title: '5G does not fix the in-building problem', body: 'mmWave 5G penetrates buildings even worse than 4G. C-band and low-band 5G help marginally but do not eliminate the need for a designed in-building system.' },
    ],
  },
  includes: {
    heading: 'What is included when DishNet Direct delivers a cellular DAS',
    scope: [
      { title: 'RF site survey', body: 'Carrier-specific signal-strength measurements throughout the building.' },
      { title: 'System design', body: 'Passive or active DAS, sized to your carrier mix and building footprint.' },
      { title: 'Carrier approval submittals', body: 'Ongoing carrier coordination through every approval cycle.' },
      { title: 'Head-end & signal-source coordination', body: 'Off-air, fiber-fed, or small-cell sourced signal strategy.' },
      { title: 'Coaxial & fiber distribution', body: 'The distribution infrastructure that carries signal to every zone.' },
      { title: 'Antenna selection & placement', body: 'Antenna selection, placement, and installation tuned to the building.' },
      { title: 'Commissioning & acceptance', body: 'Optimization and per-carrier acceptance testing.' },
      { title: 'Documentation & monitoring', body: 'As-builts and ongoing system monitoring or maintenance contracts.' },
    ],
  },
  process: {
    heading: 'How a cellular DAS project moves from coverage problem to live system',
    steps: [
      { title: 'Needs assessment', body: 'Which carriers matter to your tenant or guest mix, where the priority coverage zones sit, and what call and data volume the system has to support.' },
      { title: 'RF site survey', body: 'On-site signal measurements for each target carrier, room by room, to establish what you have today and where the gaps are.' },
      { title: 'System design & equipment selection', body: 'Passive or active architecture, signal-source strategy, antenna count and placement, head-end sizing.' },
      { title: 'Carrier approval', body: 'We submit to each target carrier and run the back-and-forth. Carrier approval is the longest lead-time item; we start early.' },
      { title: 'Installation', body: 'Coordinated with your construction or operations schedule. Most retrofit installations are sequenced over evenings and weekends.' },
      { title: 'Commissioning & carrier acceptance', body: "Per-carrier testing, optimization, and sign-off. We don't close the project until every approved carrier has issued acceptance." },
      { title: 'Documentation & ongoing support', body: 'Final as-builts, monitoring setup if applicable, and an ongoing maintenance agreement so your system keeps performing.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this service to',
    refs: industries({
      multifamily: 'Cellular coverage is now a top-three resident complaint in high-rise multifamily. We design DAS in alongside ERRCS to capture infrastructure sharing.',
      commercial: 'Class A tenants expect carrier-grade coverage on every floor. Cellular DAS is increasingly a leasing requirement, not an amenity.',
      healthcare: 'Patient and visitor connectivity, staff BYOD, and clinical communication all depend on in-building cellular performance.',
      education: 'Campus-wide cellular coverage with multi-building DAS deployments. We also handle stadium and large-venue DAS.',
      hospitality: 'Hotels lose guest satisfaction scores faster from bad cellular than from almost any other single issue. DAS is a direct ROI investment.',
      industrial: 'Rack-and-stack warehouse environments cause severe RF attenuation. DAS is often paired with private LTE for full operational coverage.',
    }),
  },
  whyDishNet: {
    heading: 'Cellular DAS designed alongside the rest of your low-voltage scope',
    body: [
      'Cellular DAS usually shows up late in a construction project — after the structured cabling is bid, after the ERRCS is in design, after the conduit is roughed in. That late arrival is what drives most of the cost. Designing cellular DAS at the same time as the other low-voltage scopes lets us share pathway, share head-end real estate, and in some cases share antenna infrastructure across systems. That savings goes directly to your project budget.',
      'DishNet Direct delivers cellular DAS as part of an integrated low-voltage offering. Our DAS Systems specialist division handles the RF engineering and carrier coordination; our low-voltage team handles the pathway and cabling; our project management ties it all to your construction schedule. One contract, one project manager, one accountable party.',
      'We also bring carrier relationships built over two and a half decades. The single biggest variable in a DAS project schedule is carrier responsiveness. We know which submitters at each carrier actually return calls, and we route around the ones who don’t.',
    ],
  },
  crossLink: {
    heading: 'Looking for the deep technical specifications?',
    body: 'Our specialist division DAS Systems has 25 years of focused RF engineering experience. Read the technical service page on the specialist division site.',
    linkLabel: 'Read more at dassystems.com/cellular-das',
    href: `${DAS_URL}/cellular-das/`,
    external: true,
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Do I need cellular DAS if I already have ERRCS?', a: 'Yes. They serve different users on different frequencies. ERRCS is for first responders on public-safety bands; cellular DAS is for everyday users on commercial carrier bands. The two systems can sometimes share antenna infrastructure but they are not interchangeable.' },
      { q: 'What is the difference between passive DAS and active DAS?', a: 'Passive DAS uses coaxial cable and signal splitters from a single head-end source — cost-effective for smaller buildings or single-carrier coverage. Active DAS uses fiber to remote radio units throughout the building — required for larger footprints and multi-carrier deployments. We size the architecture to your building.' },
      { q: 'Which carriers do you support?', a: 'Verizon, AT&T, T-Mobile, and FirstNet are the most commonly approved carriers in our market. We can also coordinate with regional carriers on request. Each carrier has its own approval process and timeline; we manage all of them.' },
      { q: 'How long does carrier approval take?', a: 'Typically 8 to 16 weeks per carrier, sometimes longer. This is the single longest lead-time item in a DAS project. We start carrier submissions in parallel with design to compress the overall timeline.' },
      { q: 'Can I add carriers later?', a: "If the system was designed with future-carrier capacity, yes. If it wasn't, retrofitting an additional carrier ranges from straightforward to a near-complete rebuild. Designing for expansion at the start is dramatically cheaper than adding later." },
      { q: 'Will cellular DAS work with 5G?', a: 'Modern DAS systems support sub-6 GHz 5G (low-band and C-band) alongside 4G LTE on the same infrastructure. mmWave 5G generally requires its own dedicated antenna infrastructure due to severe propagation loss.' },
      { q: 'Do I need separate systems for each carrier?', a: 'No. A properly designed multi-carrier DAS combines all approved carriers onto shared antenna infrastructure. This is the entire point of distributed antenna systems versus per-carrier solutions like cell boosters.' },
      { q: 'How is cellular DAS priced?', a: 'Pricing is driven by building square footage, number of floors, number of carriers, signal-source strategy, and existing pathway. We provide fixed-fee site surveys; project pricing follows once we have the actual coverage data.' },
    ],
  },
  finalCta: {
    heading: 'Bad signal complaints from tenants, guests, or staff?',
    subhead: 'A coverage assessment will measure what you actually have today and quantify what it costs to fix.',
    primary: { label: 'Request a coverage assessment', to: '/#contact' },
    secondary: { label: 'Talk to a DAS engineer', to: '/#contact' },
  },
};

const inBuildingWireless: PageContent = {
  kind: 'service',
  slug: 'in-building-wireless',
  path: '/services/in-building-wireless',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'In-Building Wireless Solutions',
  seo: {
    title: 'In-Building Wireless Solutions | DishNet Direct',
    description:
      'ERRCS, cellular DAS, Wi-Fi, and private wireless engineered as one integrated stack by DishNet Direct with DAS Systems — one contract, one project manager, one accountable party.',
  },
  hero: {
    chip: 'In-Building Wireless',
    h1: 'In-Building Wireless Solutions',
    subhead:
      'ERRCS, cellular DAS, Wi-Fi, and private wireless — engineered as one integrated stack instead of four disconnected installs.',
    primaryCta: { label: 'Request a wireless strategy session', to: '/#contact' },
    secondaryCta: { label: 'Talk to an integration lead', to: '/#contact' },
  },
  overview: {
    heading: 'Why in-building wireless has to be designed as one system',
    body: [
      'In-building wireless is not one system. It is a stack: public-safety radio coverage (ERRCS), cellular carrier coverage (DAS), enterprise Wi-Fi, and increasingly private wireless networks built on CBRS, private LTE, or private 5G. Each one solves a different problem, follows different standards, and operates on different frequencies — but they all share the same physical pathways through your building.',
      'Treated separately, they fight each other for ceiling space, conduit runs, and equipment-closet real estate. Treated as one integrated wireless strategy from the start, they cost less to install, perform better, and pass inspection on the first attempt.',
      'DishNet Direct designs and installs the full in-building wireless stack as one coordinated scope. Our DAS Systems specialist division handles the RF engineering. Our low-voltage team handles cabling and pathway. Our project management owns the cross-trade coordination. One contract; one source of truth.',
    ],
  },
  whyItMatters: {
    heading: 'What goes wrong when wireless is bought piece by piece',
    bullets: [
      { icon: Users, title: 'Three contractors, three timelines, three sets of finger-pointing', body: 'Separate vendors at separate times means redundant cabling, overlapping coverage in some areas, dead zones in others, and no single accountable party when something fails.' },
      { icon: Clock4, title: 'New construction has a narrow integration window', body: 'Wireless infrastructure is cheap before drywall and expensive after. Designing the full stack during DD or early CD captures the savings; designing it later is a series of change orders.' },
      { icon: Cpu, title: 'Private wireless is no longer experimental', body: 'CBRS-based private LTE is now standard for industrial, healthcare, and warehouse environments where Wi-Fi alone is not reliable enough for operational traffic.' },
      { icon: Gauge, title: 'Faster Wi-Fi raises cellular expectations', body: 'Wi-Fi 6E and Wi-Fi 7 change user expectations. When Wi-Fi handoff fails, users expect cellular to pick up seamlessly — and they notice when it does not.' },
    ],
  },
  includes: {
    heading: 'What a full in-building wireless engagement looks like',
    scope: [
      { title: 'Wireless strategy & design', body: 'Across all four layers — ERRCS, cellular DAS, Wi-Fi, and private wireless.' },
      { title: 'ERRCS', body: 'Design, installation, AHJ coordination, and annual inspection.' },
      { title: 'Cellular DAS', body: 'Design, carrier approval, installation, and commissioning.' },
      { title: 'Enterprise Wi-Fi', body: 'Design, installation, site-survey tuning, and ongoing optimization.' },
      { title: 'Private wireless', body: 'CBRS / private LTE / private 5G where the use case supports it.' },
      { title: 'Shared antenna infrastructure', body: 'Distributed antenna infrastructure shared across systems where RF engineering permits.' },
      { title: 'Single project management', body: 'One project manager across all wireless trades.' },
      { title: 'Unified documentation & maintenance', body: 'One set of as-builts and one maintenance agreement covering the entire stack.' },
    ],
  },
  process: {
    heading: 'How an integrated in-building wireless engagement runs',
    steps: [
      { title: 'Wireless needs analysis', body: 'Map the four wireless layers against your actual use cases. Not every building needs every layer; the analysis decides which ones.' },
      { title: 'Combined RF site survey', body: 'A single survey capturing public-safety bands, cellular bands, Wi-Fi spectrum, and CBRS — instead of three separate surveys by three separate vendors.' },
      { title: 'Integrated design', body: 'Shared pathway, shared head-end, shared antenna infrastructure where the engineering allows. Each system gets the performance it needs without redundant build-out.' },
      { title: 'Phased installation', body: 'Sequenced against your construction or operations schedule so each layer comes online at the right time.' },
      { title: 'Per-system commissioning & acceptance', body: 'ERRCS gets AHJ sign-off, cellular DAS gets carrier acceptance, Wi-Fi gets coverage and throughput validation, private wireless gets operational testing.' },
      { title: 'Unified documentation handoff', body: 'One package, one set of as-builts, one inventory of equipment across all four layers.' },
      { title: 'Ongoing maintenance', body: 'A single maintenance agreement covering every wireless system. Annual ERRCS inspection is included by default.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this service to',
    refs: industries({
      multifamily: 'Multifamily increasingly needs all four layers: ERRCS for code, cellular DAS for residents, Wi-Fi for common areas, and sometimes private wireless for building operations.',
      commercial: 'Class A buildings are now expected to deliver all four wireless layers as baseline. Tenants and brokers ask about coverage before signing leases.',
      healthcare: 'Healthcare is where integrated wireless matters most. Clinical communication, patient devices, staff workflow, and visitor connectivity all run on different layers of the same stack.',
      education: 'Multi-building campuses with mixed construction eras. We handle district-wide rollouts including private wireless for shop, lab, and athletic facilities.',
      hospitality: 'Guests judge wireless within an hour of check-in. Hotels need ERRCS, cellular DAS, and high-density Wi-Fi delivered as a coordinated experience, not three competing systems.',
      industrial: 'Industrial environments are the strongest case for private wireless. We design private LTE alongside the rest of the stack for the operational reliability Wi-Fi cannot deliver.',
    }),
  },
  whyDishNet: {
    heading: 'One integrator, four wireless layers, no finger-pointing',
    body: [
      'Anyone can sell you ERRCS. Anyone can sell you DAS. Anyone can sell you Wi-Fi. Selling you all four as a single engineered system, delivered against a single project schedule, with a single project manager who understands how the layers interact — that is harder, and that is the work DishNet Direct exists to do.',
      'We have been a full-service low-voltage integrator for over two decades and the parent company of DAS Systems for 25 years. Our wireless engineering bench is the same bench whether you need one layer or all four. Our field crews are the same crews. The internal handoffs are not subcontractor handoffs with margin and delay baked in; they are intra-company.',
      'And because we own the entire scope, we also own the outcome. One throat to choke when something needs fixing. One number to call for annual inspection, maintenance, expansion, or troubleshooting. That single point of accountability is the actual product.',
    ],
  },
  crossLink: {
    heading: 'Looking for the deep technical specifications?',
    body: 'Our specialist division DAS Systems has 25 years of focused RF engineering experience. Read the technical service page on the specialist division site.',
    linkLabel: 'Read more at dassystems.com/in-building-wireless',
    href: `${DAS_URL}/in-building-wireless/`,
    external: true,
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: "What is the difference between Wi-Fi and cellular DAS — don't I need both?", a: 'You typically need both. Wi-Fi serves data-heavy stationary use (laptops, video, large file transfers). Cellular DAS serves voice, mobile data, and the seamless handoff users expect as they move through and exit your building. They complement rather than replace each other.' },
      { q: 'What is CBRS / private LTE and do I need it?', a: 'CBRS (Citizens Broadband Radio Service) is a shared-spectrum band that lets enterprises operate their own private LTE network. It is useful where you need cellular-grade reliability for operational devices — barcode scanners, IoT sensors, push-to-talk radios — and Wi-Fi roaming is not reliable enough. Most commercial offices do not need it. Most warehouses, hospitals, and large industrial sites do.' },
      { q: 'Can you take over an existing in-building wireless system from another contractor?', a: 'Yes. Take-over engagements are common. We start with a system audit across whichever layers exist, document what we find, and propose a remediation or expansion path.' },
      { q: 'How does this work for new construction versus retrofit?', a: 'For new construction, we engage during DD or early CD to capture the cost savings of shared pathway and integrated design. For retrofit, we work around occupied conditions, sequence installation in stages, and prioritize layers based on your highest-pain use case.' },
      { q: 'Do you handle ongoing maintenance?', a: 'Yes. One maintenance agreement covers the full wireless stack. Annual ERRCS inspection is included. Wi-Fi tuning, DAS performance monitoring, and private-wireless operational support are all available.' },
      { q: 'What if I only need part of the stack?', a: 'We deliver any single layer as a standalone engagement. The integrated approach saves money when multiple layers are in play; if you only need ERRCS, we deliver ERRCS.' },
      { q: 'How is this priced compared to hiring separate contractors?', a: 'Single-integrator pricing is typically 10 to 20 percent lower than multi-vendor for new construction at parity scope, primarily from shared pathway and shared project management. For retrofit work the savings are smaller but the schedule and accountability benefits are larger.' },
      { q: 'Can you work with our existing IT team and Wi-Fi vendor?', a: 'Yes. We frequently integrate with in-house IT teams and existing Wi-Fi vendors, particularly in healthcare and education. We design the RF systems to coexist cleanly with the Wi-Fi infrastructure your team already owns.' },
    ],
  },
  finalCta: {
    heading: 'Planning a new building, or untangling a fragmented wireless stack?',
    subhead: 'A strategy session is the right starting point. Two hours, no commitment, ends with a clear map of what you actually need.',
    primary: { label: 'Request a wireless strategy session', to: '/#contact' },
    secondary: { label: 'Talk to an integration lead', to: '/#contact' },
  },
};

export const servicePages: Record<string, PageContent> = {
  errcs,
  'cellular-das': cellularDas,
  'in-building-wireless': inBuildingWireless,
};
