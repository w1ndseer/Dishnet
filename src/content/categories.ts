import {
  Network, Clock4, Route, Layers,
  ShieldAlert, Wifi, FileCheck2, Camera,
  Radio, Building2, BookOpen,
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

const lowVoltage: PageContent = {
  kind: 'category',
  slug: 'low-voltage',
  path: '/services/low-voltage',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'Low Voltage Systems Integration',
  seo: {
    title: 'Low Voltage Systems | DishNet Direct',
    description:
      'DishNet Direct designs, builds, and maintains low-voltage systems — structured wiring, AV, satellite, antenna, and digital signage — as one integrated scope across California.',
  },
  hero: {
    chip: 'Low Voltage',
    h1: 'Low Voltage Systems',
    subhead:
      'The infrastructure layer everything else runs on — designed, installed, and maintained as one coordinated scope.',
    primaryCta: { label: 'Discuss a project', to: '/#contact' },
    secondaryCta: { label: 'Talk to a low-voltage lead', to: '/#contact' },
  },
  overview: {
    heading: 'What we deliver as your low-voltage systems integrator',
    body: [
      'Low voltage is the connective tissue of every modern building — data, AV, signal distribution, signage, antenna. Done well it disappears into the walls and ceilings. Done poorly, every other system that depends on it inherits the problems.',
      'DishNet Direct delivers low-voltage systems integration for businesses, healthcare facilities, entertainment venues, education campuses, and industrial properties. We design, build, monitor, and maintain — and we deliver low voltage as part of an integrated low-voltage, security, and fire/life-safety stack rather than as a standalone trade.',
      "That integrated delivery model is the difference. Single-discipline cabling contractors don't think about how their pathway interacts with security, fire alarm, ERRCS, or cellular DAS. We do — because we own all of those scopes.",
    ],
  },
  whyItMatters: {
    heading: 'Why low voltage is the highest-leverage decision in your building',
    bullets: [
      { icon: Network, title: 'Most building problems trace back here', body: 'Slow networks, bad AV, broken signage, dropped wireless — the root cause is almost always somewhere in the cabling, pathway, or termination quality.' },
      { icon: Clock4, title: 'Structured wiring is your longest-lived infrastructure', body: 'A properly engineered low-voltage backbone serves you 15 to 20 years. An undersized or poorly documented one gets re-pulled at every major upgrade.' },
      { icon: Route, title: 'Pathway has to be designed against future systems', body: 'ERRCS, cellular DAS, private wireless, security cameras, access control — all of them will need pathway. Designing for tomorrow at install costs 5% extra. Adding pathway after drywall costs 10x.' },
      { icon: Layers, title: 'Integration matters more than any single product spec', body: 'The brand of the cable, the model of the switch, the make of the AV head-end — none of these matter as much as whether the disciplines were designed together.' },
    ],
  },
  includes: {
    heading: "What's covered in low-voltage scope",
    intro: 'Five sub-disciplines, delivered under one coordinated scope and one project manager.',
    cards: [
      { title: 'Audio Visual Systems', body: 'Conference rooms, training spaces, lobby experiences, video walls, digital boardrooms. Design, installation, and ongoing support for AV environments that have to work the first time a CEO walks in.', to: '/services/low-voltage' },
      { title: 'Structured Wiring', body: 'The data and voice cabling backbone for your building. Cat6/6A copper, single-mode and multi-mode fiber, termination, testing, certification, and documentation that survives staff turnover.', to: '/services/low-voltage' },
      { title: 'Central Satellite Systems', body: 'Centralized satellite reception with distribution to suites, units, or zones throughout the property. Common in multifamily and hospitality where every unit needs signal without 200 individual dishes on the roof.', to: '/services/low-voltage' },
      { title: 'Off Air Antenna Systems', body: "Off-air broadcast antenna systems for buildings where over-the-air channels are the cost-effective answer to satellite or cable distribution. Designed and installed to match the building's RF environment.", to: '/services/low-voltage' },
      { title: 'Digital Signage', body: 'Network-attached digital signage from lobbies to wayfinding to back-of-house operations displays. Design, content infrastructure, installation, and ongoing content management support.', to: '/services/low-voltage' },
    ],
  },
  process: {
    heading: 'How a low-voltage engagement runs from kickoff to handoff',
    steps: [
      { title: 'Discovery & needs assessment', body: 'Understand the use cases, the user populations, the operational context, and the future-systems roadmap before any cable gets specified.' },
      { title: 'Site walk & pathway analysis', body: 'Walk the building. Identify existing pathway, available ceiling space, telecom rooms, and risk areas. We coordinate with security and fire/life safety scopes here.' },
      { title: 'Design & engineering', body: 'Backbone design, horizontal cabling design, equipment selection, telecom-room layout, riser diagrams, and pathway documentation.' },
      { title: 'Installation', body: 'Coordinated with your GC and other low-voltage trades through DishNet Direct project management, sequenced around drywall, ceiling, and finishes to minimize rework.' },
      { title: 'Testing & certification', body: 'Every cable tested to the appropriate standard (TIA-568, OFL/EFL fiber loss budgets) and certified, with results delivered in the documentation package.' },
      { title: 'Documentation handoff', body: 'As-built drawings, port maps, labeling schemes, equipment inventory, and warranty registrations — everything your IT team or facility manager needs on day one.' },
      { title: 'Ongoing maintenance', body: 'Optional service agreement covering moves/adds/changes, troubleshooting, and infrastructure expansion as your needs grow.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this category to',
    refs: industries({
      multifamily: 'Riser cabling, in-unit structured wiring, central satellite distribution, and common-area AV — all on one coordinated low-voltage scope.',
      commercial: 'Class A office cabling backbone, conference-room AV, digital signage, and tenant-improvement low-voltage scopes.',
      healthcare: 'Clinical cabling, nurse-call infrastructure, patient-room AV, and the dense structured wiring that healthcare environments demand.',
      education: 'Multi-building campus cabling, classroom AV, auditorium and athletic AV, and district-wide standardization.',
      hospitality: 'Guest-room AV and connectivity, conference and event AV, digital signage, and the high-density cabling hospitality properties run.',
      industrial: 'Operational cabling for industrial environments — including fiber backbone and harsh-environment terminations.',
    }),
  },
  whyDishNet: {
    heading: 'Low voltage delivered by an integrator, not a cable puller',
    body: [
      'Anyone can pull cable. The difference between a cable-pulling contractor and a systems integrator is what happens when something has to interact with something else — when the AV head-end has to share rack space with security, when the riser pathway has to carry low voltage alongside ERRCS coax, when the structured wiring has to support a private wireless network that isn’t designed yet.',
      'DishNet Direct has been delivering integrated low-voltage scope for over two decades. The same project team that installs your structured cabling also owns your security and fire/life-safety scope — and our specialist division DAS Systems handles the RF engineering that increasingly overlaps with low voltage in modern buildings.',
      "One contract. One project manager. One accountable team for the entire low-voltage stack. That single point of accountability is what you're actually paying for.",
    ],
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Can you take over an existing low-voltage system installed by another contractor?', a: "Yes. Take-over engagements start with an infrastructure audit — what's installed, what's documented, what's labeled, what's tested. From there we propose a remediation or expansion path." },
      { q: 'Do you handle just cabling, or also the equipment that connects to it?', a: 'Both. We deliver structured cabling alongside the active equipment that lives on it — switches, AV systems, signage, satellite head-ends. Many low-voltage contractors stop at the cable; we stay through commissioning and handoff.' },
      { q: 'How do you handle moves, adds, and changes after installation?', a: 'Through an optional service agreement, or on a project-by-project basis. We document everything at install so MAC work years later is straightforward.' },
      { q: 'What standards do you certify cabling to?', a: 'TIA-568 for copper, OFL/EFL loss budgets for fiber, and BICSI installation standards across the board. Every cable is tested and certified, and the test results are delivered with project documentation.' },
      { q: "Can you design for future systems my IT or operations team hasn't fully scoped yet?", a: 'Yes — and we recommend it. Future-systems pathway capacity is cheap to design in at install and expensive to add later. Common future-systems we design for: ERRCS, cellular DAS, private wireless, expanded security camera coverage, and additional AV.' },
      { q: 'Do you work with our existing IT department?', a: 'Frequently. In larger organizations, low-voltage cabling is the boundary between facilities and IT. We work directly with IT teams on labeling schemes, port maps, and rack layouts so the handoff is clean.' },
    ],
  },
  finalCta: {
    heading: 'Planning a new build or untangling an existing low-voltage scope?',
    subhead: "Let's walk the building together. Site walks are no-commitment and end with a clear scope conversation.",
    primary: { label: 'Discuss a project', to: '/#contact' },
    secondary: { label: 'Talk to a low-voltage lead', to: '/#contact' },
  },
};

const security: PageContent = {
  kind: 'category',
  slug: 'security',
  path: '/services/security',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'Security Systems Integration',
  seo: {
    title: 'Security Systems | DishNet Direct',
    description:
      'Access control, intrusion detection, and surveillance engineered to integrate with your building systems. DishNet Direct delivers security as part of one accountable low-voltage stack.',
  },
  hero: {
    chip: 'Security',
    h1: 'Security Systems',
    subhead:
      'Access control, surveillance, and intrusion detection — engineered to work with your other building systems, not against them.',
    primaryCta: { label: 'Discuss a project', to: '/#contact' },
    secondaryCta: { label: 'Talk to a security lead', to: '/#contact' },
  },
  overview: {
    heading: 'What we deliver as your security systems integrator',
    body: [
      'Security systems used to be standalone. A camera was a camera, an alarm was an alarm, a card reader was a card reader. That world is gone. Modern security is IP-based, network-resident, and integrates with access control, building automation, life safety, and IT identity systems. The integration is what makes a security deployment effective — or what makes it brittle.',
      'DishNet Direct understands security from both the technology and integration sides. We design, install, and maintain security systems across access control, intrusion detection, and surveillance — and we deliver them as part of an integrated low-voltage, security, and fire/life-safety stack.',
      "That matters because security incidents tend to happen at the seams between disciplines. The card reader works and the door lock works, but the integration with fire alarm during an evacuation fails. The camera works but the network it depends on is misconfigured. The alarm works but the access-control system doesn't know to disarm a zone when a credentialed user enters. A real integrator owns those seams.",
    ],
  },
  whyItMatters: {
    heading: 'Why security has to be designed as a system, not a collection of products',
    bullets: [
      { icon: ShieldAlert, title: 'Failures happen at the boundary between systems', body: 'The hardware almost always works. The integration with fire alarm, building automation, HR identity systems, and IT networks is where things go wrong — and where single-discipline contractors run out of expertise.' },
      { icon: Wifi, title: 'Security is now IP-based and IT-resident', body: 'Your security contractor needs to understand network design, VLANs, PoE budgets, and cybersecurity posture — not just door hardware and DVR setup. We do.' },
      { icon: FileCheck2, title: 'Compliance requirements vary by industry', body: 'Healthcare HIPAA, education FERPA, multifamily property requirements, and commercial tenant lease requirements all impose different rules on what gets recorded, retained, and accessed.' },
      { icon: Camera, title: 'Camera count is not the metric that matters', body: 'Coverage geometry, lighting design, network capacity, retention policy, and integration with access control matter far more than how many cameras are installed. Most over-cameraed properties are under-secured.' },
    ],
  },
  includes: {
    heading: "What's covered in security scope",
    intro: 'Three disciplines, designed against your threat model and integrated with the rest of your building.',
    cards: [
      { title: 'Access Control Systems', body: 'Card, mobile credential, biometric, and visitor-management access control. Designed against your operational workflow first, then provisioned with the right hardware. Integration with HR systems, building automation, and life safety is part of the design — not an afterthought.', to: '/services/security' },
      { title: 'Intrusion Alarm Systems', body: 'Perimeter and interior intrusion detection sized to the actual threat model. Properly designed monitoring relationships, response protocols, and integration with access control so the system disarms when authorized users enter.', to: '/services/security' },
      { title: 'Surveillance Systems (CCTV)', body: 'IP camera systems with proper coverage geometry, lighting design, storage and retention planning, and network capacity. Designed against use cases — evidence collection, real-time monitoring, deterrence — rather than camera count.', to: '/services/security' },
    ],
  },
  process: {
    heading: 'How a security engagement runs from threat model to acceptance',
    steps: [
      { title: 'Threat model & use-case analysis', body: 'Before any product gets specified, we define what the system has to protect against, who needs access, and what evidence or monitoring outcomes you actually need.' },
      { title: 'Site walk & integration analysis', body: 'Walk the building. Identify door hardware, sightlines, lighting conditions, existing pathway, and integration points with fire/life safety and IT.' },
      { title: 'Design & engineering', body: 'Camera placement and coverage maps, access-control door schedule, intrusion-detection zoning, network architecture, and storage/retention sizing.' },
      { title: 'IT & identity integration design', body: 'Network design for security traffic, VLAN segmentation, integration with HR or identity systems for credential provisioning, and cybersecurity posture review.' },
      { title: 'Installation', body: 'Coordinated with low-voltage and fire/life-safety scopes under unified project management.' },
      { title: 'Commissioning & acceptance', body: 'Every device tested, every integration verified, every retention policy confirmed. Owner-side training included.' },
      { title: 'Ongoing monitoring & maintenance', body: 'Optional service agreement for monitoring, MAC work, credential management, and system health monitoring.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this category to',
    refs: industries({
      multifamily: 'Resident access control, amenity-space monitoring, package room security, parking access, and integration with property-management systems.',
      commercial: 'Multi-tenant access control, lobby and elevator security, after-hours access management, and tenant-specific security zones.',
      healthcare: 'Restricted-area access, infant security, medication-room access, video monitoring with HIPAA-compliant retention, and emergency lockdown integration.',
      education: 'Campus access control, classroom security, lockdown integration with life safety, and multi-building credential management.',
      hospitality: 'Guest-room access, back-of-house security, vault and cashier monitoring, and integration with property-management systems.',
      industrial: 'Perimeter security, loading-dock access, inventory protection, and integration with operational systems.',
    }),
  },
  whyDishNet: {
    heading: 'Security delivered as part of one accountable stack',
    body: [
      'If your access control system, your fire alarm, and your IT network are each from a different vendor with a different project manager and a different support contract, you have three vendors and three lines of accountability. When something goes wrong at the seam between them, all three point at the other two.',
      'DishNet Direct delivers security as part of an integrated low-voltage, security, and fire/life-safety stack — one project team, one accountable contractor, one set of as-builts. Our specialist RF division, DAS Systems, handles the in-building wireless layer that security cameras and access control increasingly depend on.',
      'The integrated model is also how we keep cost down. Shared pathway, shared head-end space, shared project management — the savings show up directly in the install budget. The accountability is what shows up later.',
    ],
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Can you take over an existing security system from another vendor?', a: "Yes. Take-over engagements start with a system audit — what's installed, what's documented, what's still under manufacturer warranty, and what the integration gaps look like. From there we propose either remediation or full replacement." },
      { q: 'Do you handle monitoring, or just installation?', a: 'Both. We install, and we offer ongoing monitoring through partner monitoring centers with established response protocols. For properties that already have in-house security operations, we integrate with their existing workflow.' },
      { q: 'How do you handle credential management at scale?', a: 'Through integration with your HR or identity system. New employees provision automatically, departures revoke automatically, and credential changes flow through a single source of truth rather than manual badge office updates.' },
      { q: "What's your approach to cybersecurity for IP-based security systems?", a: 'Security cameras and access controllers are common attack vectors. We segment security traffic on dedicated VLANs, harden device configurations against default credentials, and patch firmware as part of ongoing maintenance.' },
      { q: 'Can you integrate with our existing access control or camera system?', a: 'Frequently yes. Most modern access-control and VMS platforms support open standards (ONVIF, OSDP) that allow new components to be added without forklift replacement. We audit the existing platform first and design accordingly.' },
      { q: 'How is video footage retained and accessed?', a: 'Retention policy is part of design — driven by your industry, evidence needs, and storage budget. Access is role-based with audit logging. Cloud, on-premise, and hybrid storage are all options depending on requirements.' },
      { q: 'What about emergency lockdown and integration with fire alarm?', a: 'Lockdown integration is one of the most important and most commonly mis-implemented features. We design it explicitly and test it as part of acceptance — including the priority interactions between lockdown and fire-alarm evacuation.' },
    ],
  },
  finalCta: {
    heading: 'Planning a new security deployment or refreshing an existing one?',
    subhead: 'A threat-model and integration conversation is the right starting point. We do them free, on-site, and with no commitment.',
    primary: { label: 'Discuss a project', to: '/#contact' },
    secondary: { label: 'Talk to a security lead', to: '/#contact' },
  },
};

const fireLifeSafety: PageContent = {
  kind: 'category',
  slug: 'fire-life-safety',
  path: '/services/fire-life-safety',
  breadcrumbParent: SERVICES_PARENT,
  serviceType: 'Fire & Life Safety Systems',
  seo: {
    title: 'Fire & Life Safety Systems | DishNet Direct',
    description:
      'Code-compliant fire alarm, ERRCS, and life-safety integration delivered alongside DAS Systems, our 25-year RF specialist division. AHJ-coordinated across the Bay Area.',
  },
  hero: {
    chip: 'Fire & Life Safety',
    h1: 'Fire & Life Safety Systems',
    subhead:
      'Code-compliant fire alarm, ERRCS, and life-safety integration — delivered by the contractor who also owns your low voltage and security.',
    primaryCta: { label: 'Discuss a project', to: '/#contact' },
    secondaryCta: { label: 'Talk to a life-safety lead', to: '/#contact' },
  },
  overview: {
    heading: 'What we deliver as your fire and life-safety partner',
    body: [
      'Fire and life safety is the most regulated layer of your building. AHJs, NFPA, IFC, state and local code — every device, every wire, every test is governed by standards refined over decades because lives depend on them. A small mistake at install means failed inspection, delayed certificate of occupancy, and direct financial exposure.',
      "DishNet Direct partners with leading suppliers and engineered system distributors to deliver design/build, design/assist, and plan-spec engineering services using current 3D AutoCAD and design technologies. We've been filing with Bay Area AHJs for over two decades. We know the inspectors. We know what each jurisdiction is going to ask for. That institutional knowledge is the actual product.",
      'And critically, our specialist division DAS Systems brings 25 years of RF engineering depth to the ERRCS, cellular DAS, and in-building wireless work that increasingly overlaps with fire alarm via NFPA 72 integration. Most fire/life safety contractors hand the RF scope off to a subcontractor. We deliver it internally.',
    ],
  },
  whyItMatters: {
    heading: 'Why fire and life safety is where most projects lose time',
    bullets: [
      { icon: FileCheck2, title: 'Failed life-safety inspection is direct financial exposure', body: 'Every day past your target certificate of occupancy is a financing day, a leasing day, a delay-claim day. Life safety is one of the most common inspection failures and one of the most expensive to fix retroactively.' },
      { icon: Radio, title: 'ERRCS now integrates with fire alarm per NFPA 72', body: 'The days of treating ERRCS as a separate scope from fire alarm are gone. The two systems share monitoring, share power, and share documentation. Treating them as separate scopes leads to integration failures at acceptance.' },
      { icon: Building2, title: 'AHJ relationships compress timeline', body: 'Every jurisdiction has its own interpretations, its own preferred submittal formats, and its own inspector temperament. Knowing the AHJ before you walk in the door is worth weeks of schedule.' },
      { icon: BookOpen, title: 'Code does not stand still', body: 'NFPA, IFC, and California state code updates affect what gets installed every cycle. A contractor without current code mastery delivers obsolete designs that fail review.' },
    ],
  },
  includes: {
    heading: "What's covered in fire and life-safety scope",
    intro: 'Four sub-disciplines. The ERRCS / DAS Turnkey scope is backed by three deep service pages engineered by DAS Systems.',
    cards: [
      {
        title: 'ERRCS / DAS Turnkey',
        body: 'Emergency Responder Communication Systems, Cellular DAS, and full in-building wireless — designed, installed, AHJ-coordinated, carrier-approved where applicable, and supported through annual inspection. Three deep service pages cover the specifics.',
        to: '/services/errcs',
        related: [
          { label: 'Cellular DAS', to: '/services/cellular-das' },
          { label: 'In-Building Wireless', to: '/services/in-building-wireless' },
        ],
      },
      { title: 'FA Smoke / Fire Detection', body: 'Engineered fire alarm and smoke detection — design, installation, AHJ submittal, acceptance testing, and ongoing inspection. Initiating devices, notification appliances, control panels, and integration with the rest of the life-safety stack.', to: '/services/fire-life-safety' },
      { title: 'Two-Way Communication', body: 'Two-way communication systems for areas of refuge, elevator emergency communication, and stairwell communications — designed to meet IBC, IFC, and accessibility code. Often integrated with ERRCS and fire alarm scopes.', to: '/services/fire-life-safety' },
      { title: 'Systems Integration', body: 'The cross-system integration that makes everything else function: fire alarm to ERRCS, life safety to access control, mass notification, elevator recall, HVAC smoke control sequences. The work that most often determines whether a building passes acceptance.', to: '/services/fire-life-safety' },
    ],
  },
  process: {
    heading: 'How a fire and life-safety engagement moves from kickoff to inspection',
    steps: [
      { title: 'AHJ pre-application meeting', body: 'Before design, we sit down with the local fire marshal or designated AHJ to confirm submittal format, current code interpretations, and inspector expectations. This single step saves weeks.' },
      { title: 'Code analysis & design', body: 'Full code analysis (IBC, IFC, NFPA, local amendments) drives device count, placement, circuit design, and integration scope.' },
      { title: 'Permit drawings & submittal', body: "Stamped engineering drawings, calculations, equipment cut sheets, and submittal narrative — formatted to the specific AHJ's preferences." },
      { title: 'Plan check & revisions', body: 'We run the back-and-forth with the AHJ directly so your architect and GC stay out of the loop. Revisions get turned around within days, not weeks.' },
      { title: 'Installation', body: 'Coordinated with your low-voltage, security, and structural trades through unified project management. Every device installed against approved drawings.' },
      { title: 'Pre-test & acceptance test', body: 'Internal pre-test to identify and fix issues before the AHJ arrives. Then formal acceptance test with the AHJ present. We do not deliver projects that fail.' },
      { title: 'Annual inspection & ongoing compliance', body: 'Once the system is live, recurring annual inspection is required. We schedule and file the inspection automatically so you stay continuously compliant.' },
    ],
  },
  industries: {
    heading: 'Industries we deliver this category to',
    refs: industries({
      multifamily: 'Code-driven fire alarm, ERRCS, and in-unit life-safety scope for new construction and major renovation. Common trigger: high-rise residential and podium buildings.',
      commercial: 'Class A office life safety, mixed-use tower integration, and tenant-improvement fire-alarm scope where new TI has to integrate with existing base-building systems.',
      healthcare: 'Hospital fire alarm, smoke control, ERRCS, and the dense life-safety integration healthcare facilities require. Joint Commission and OSHPD experience.',
      education: 'Campus-wide life safety, lockdown integration, multi-building fire alarm, and ERRCS across older and newer construction.',
      hospitality: 'Hotel fire alarm, in-room notification, ERRCS for guest-radio coverage, and the complex integration hospitality life safety demands.',
      industrial: 'Industrial fire alarm, special hazard suppression integration, ERRCS for large-footprint warehouses, and harsh-environment installation.',
    }),
  },
  whyDishNet: {
    heading: 'Fire and life safety delivered alongside the RF specialist work it now depends on',
    body: [
      "Modern fire and life safety is no longer just smoke detectors and pull stations. It's an integrated stack: fire alarm, smoke control, mass notification, ERRCS for first-responder radio coverage, two-way communication for areas of refuge, elevator emergency communication, and the cross-system integration that ties all of it to access control and HVAC.",
      'Most fire/life-safety contractors handle the alarm scope and subcontract the ERRCS to an RF specialist. The subcontractor relationship is where most project failures originate — different schedules, different priorities, different accountability, finger-pointing at acceptance.',
      'DishNet Direct delivers fire/life safety alongside ERRCS, cellular DAS, and in-building wireless through our specialist division DAS Systems — same ownership, same engineering bench, same field crews. There is no subcontractor margin and no subcontractor delay. The handoff between the fire-alarm scope and the RF scope happens inside one company.',
      'That integrated delivery is also why we don’t lose projects at acceptance. The most common ERRCS failure mode is fire-alarm integration. When the same team owns both sides of the integration, that failure mode disappears.',
    ],
    callout: {
      heading: 'Need ERRCS engineered with 25 years of dedicated RF specialist depth?',
      body: "DishNet Direct's specialist division, DAS Systems, has been the Bay Area's go-to ERRCS engineering team since 2000. Read the technical service pages on the specialist division site.",
      linkLabel: 'Visit dassystems.com/errcs',
      href: `${DAS_URL}/errcs/`,
      external: true,
    },
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      { q: 'Are ERRCS and fire alarm separate systems or one system?', a: 'Technically separate systems, but integrated under NFPA 72. ERRCS monitors itself to your fire alarm control panel, draws backup power coordinated with fire-alarm power supplies, and shares acceptance-test cycles. Treating them as fully separate scopes is the single most common cause of acceptance failure.' },
      { q: 'When does my building need ERRCS?', a: 'Most large new construction in California triggers ERRCS requirements through IFC 510 or local amendments. Your fire marshal will require an in-building radio coverage survey, and if signal levels fall below grid-coverage thresholds, ERRCS is required. We do that survey as a fixed-fee engagement before design starts. The detailed service page is at /services/errcs/.' },
      { q: 'Who is the AHJ on a fire/life-safety project?', a: "Usually the local fire marshal's office. In some jurisdictions the AHJ is shared between fire and the radio-communications division of the police or sheriff for ERRCS specifically. We identify and coordinate with all relevant AHJs as part of pre-design." },
      { q: 'What happens if a fire/life-safety system fails inspection?', a: "We do not deliver systems that fail. When we're brought in to remediate work that another contractor delivered, we start with a diagnostic of the AHJ's specific findings and scope remediation against those findings — not against a generic checklist." },
      { q: 'Do you handle annual inspections and ongoing testing?', a: 'Yes. Once we commission a system, recurring inspection cadence is set up automatically. We file the inspection report with the AHJ each cycle so your building stays continuously compliant without you having to chase it.' },
      { q: "How does DishNet Direct's relationship with DAS Systems actually work?", a: 'DAS Systems is the RF engineering specialist division of DishNet Direct. Same ownership, same engineering bench, same field crews. When you contract DishNet Direct for fire/life safety that includes ERRCS or any in-building wireless scope, the RF work is delivered internally by DAS Systems — not subcontracted out.' },
      { q: 'Can you take over a fire/life-safety system from another contractor?', a: 'Yes. Take-over engagements start with a system audit and a review of the most recent inspection history. From there we propose either ongoing maintenance, system remediation, or full replacement depending on age and condition.' },
      { q: "What's the lead time for a fire/life-safety design from first call to AHJ submittal?", a: 'For a straightforward new-construction project, typically 4 to 8 weeks from kickoff to permit submittal. Retrofit and remediation projects vary based on existing system condition and AHJ responsiveness.' },
    ],
  },
  finalCta: {
    heading: 'Facing a code citation, planning a new build, or remediating a failed inspection?',
    subhead: 'An AHJ pre-application conversation is the right first step. We do them at no cost and they save weeks downstream.',
    primary: { label: 'Discuss a project', to: '/#contact' },
    secondary: { label: 'Talk to a life-safety lead', to: '/#contact' },
  },
};

export const categoryPages: Record<string, PageContent> = {
  'low-voltage': lowVoltage,
  security,
  'fire-life-safety': fireLifeSafety,
};
