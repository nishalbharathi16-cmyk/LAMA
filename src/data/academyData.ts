export interface NavItem {
  label: string;
  href: string;
}

export interface CurriculumTopic {
  title: string;
  description: string;
}

export interface CurriculumDomain {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  summary: string;
  topics: CurriculumTopic[];
}

export interface PedagogyItem {
  letter: string;
  title: string;
  description: string;
  note?: string;
}

export interface MentorSlot {
  id: string;
  imageSrc: string;
  imageAlt: string;
  slotLabel: string;
  roleTitle: string;
  focusArea: string;
  statusNote: string;
}

export interface OutcomeItem {
  title: string;
  summary: string;
  capabilities: string[];
}

export interface AssessmentQuestion {
  id: string;
  prompt: string;
}

export interface AssessmentStep {
  stepNumber: number;
  pillar: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
}

export interface GallerySlot {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  caption: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programme', href: '#programme' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Learning Experience', href: '#learning-experience' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const ACADEMY_TAGLINE =
  'Bridging Academia to Executive Action: Architecting Next-Gen Engineering & Business Leaders.';

export const HERO_INFO_STRIP = [
  'Three core learning domains',
  'Experiential business simulations',
  'Industry-informed leadership learning',
];

export const CURRICULUM_DOMAINS: CurriculumDomain[] = [
  {
    id: 'domain-01',
    code: 'DOMAIN 01',
    title: 'AI-Powered Leadership & Executive Tech Operations',
    subtitle: 'Leading technology-enabled teams and data-informed managerial decisions',
    summary:
      'Equip first-time managers to evaluate AI opportunities responsibly, augment team workflows, and translate complex technical realities into clear executive decisions.',
    topics: [
      {
        title: 'Executive AI Readiness & Decision Intelligence',
        description:
          'Frame operational and strategic decisions using structured evidence, capability maturity benchmarks, and human-in-the-loop accountability.',
      },
      {
        title: 'Generative AI and Predictive Analytics',
        description:
          'Apply generative workflows and forecasting concepts to accelerate operational analysis, scenario planning, and managerial synthesis.',
      },
      {
        title: 'Agentic AI & Team Augmentation',
        description:
          'Design human-AI team operating models that clarify ownership, review checkpoints, and productivity standards without eroding quality.',
      },
      {
        title: 'AI Governance & Ethics for Managers',
        description:
          'Establish practical guardrails around data privacy, bias mitigation, transparency, and regulatory responsibility in business deployments.',
      },
      {
        title: 'Technical-to-Executive Translation',
        description:
          'Bridge engineering constraints, architectural trade-offs, and delivery timelines into commercial impact that leadership teams can act upon.',
      },
    ],
  },
  {
    id: 'domain-02',
    code: 'DOMAIN 02',
    title: 'Strategic Business Operations & P&L Management',
    subtitle: 'Connecting daily execution with financial health and operational discipline',
    summary:
      'Build fluency in financial statements, unit economics, supply chain friction, and enterprise execution frameworks so managerial actions protect margin and momentum.',
    topics: [
      {
        title: 'Financial Acumen for Non-Finance Managers',
        description:
          'Read financial indicators confidently and understand how operational, hiring, and product choices affect business viability.',
      },
      {
        title: 'Income Statements and Operating Budgets',
        description:
          'Construct, defend, and track departmental operating budgets while evaluating revenue drivers, cost structures, and variance.',
      },
      {
        title: 'Working Capital and Unit Economics',
        description:
          'Manage cash conversion cycles, customer acquisition economics, and contribution margins in fast-moving operating environments.',
      },
      {
        title: 'Supply Chain & Operational Friction Control',
        description:
          'Diagnose bottlenecks across vendor dependencies, handoffs, and capacity planning to stabilise service delivery.',
      },
      {
        title: 'Agile & Scrum Enterprise Execution',
        description:
          'Coordinate multi-team delivery cadences, backlog prioritisation, and predictable execution beyond textbook ceremonies.',
      },
      {
        title: 'Project Portfolio Management',
        description:
          'Balance competing initiatives across resource constraints, business value, risk exposure, and delivery timelines.',
      },
      {
        title: 'Sprint-to-OKR Alignment',
        description:
          'Translate quarterly strategic Objectives and Key Results into measurable sprint commitments and team-level accountability.',
      },
    ],
  },
  {
    id: 'domain-03',
    code: 'DOMAIN 03',
    title: 'People Management, Power Dynamics & Crisis Control',
    subtitle: 'Navigating human complexity, stakeholder tension, and high-pressure moments',
    summary:
      'Prepare emerging leaders for the realities of cross-functional conflict, client negotiations, organisational dynamics, and disciplined crisis response.',
    topics: [
      {
        title: 'Cross-Functional Team Conflict Resolution',
        description:
          'Surface root causes of interpersonal and priority friction early and guide teams toward constructive, accountable resolution.',
      },
      {
        title: 'Engineering vs Sales vs Product Dynamics',
        description:
          'Align competing incentives across technical feasibility, commercial urgency, and product roadmap integrity.',
      },
      {
        title: 'High-Stakes Negotiation & Client Dynamics',
        description:
          'Structure principled negotiations, manage scope expectations, and protect long-term trust with enterprise stakeholders.',
      },
      {
        title: 'Contract Disputes and Account Expansion',
        description:
          'Handle SLA disagreements, commercial escalations, and structured pathways to grow healthy client relationships.',
      },
      {
        title: 'Crisis Management & Turnaround Leadership',
        description:
          'Lead with composure under ambiguity, assign clear command roles, and execute rapid stabilisation plans.',
      },
      {
        title: 'Product Outages and PR Crisis Management',
        description:
          'Coordinate incident response, internal escalation, and disciplined external communication during critical service disruptions.',
      },
    ],
  },
];

export const PEDAGOGY_ITEMS: PedagogyItem[] = [
  {
    letter: 'A',
    title: 'War Room Simulations',
    description:
      'Live four-hour simulated business crises where students respond to product failures, operational challenges and PR issues using simulated dashboard information.',
  },
  {
    letter: 'B',
    title: 'AI Co-Pilot Coaching',
    description:
      'Personalised feedback on executive communication, presentation skills, speech pacing and negotiation.',
    note: 'All audio or video-based analysis is strictly consent-based.',
  },
  {
    letter: 'C',
    title: 'Industry Capstone Projects',
    description:
      'Practical projects guided by experienced industry professionals, addressing real-world business challenges.',
  },
  {
    letter: 'D',
    title: 'Experiential Learning',
    description:
      'Case studies, team discussions, role-playing, decision-making exercises and business scenarios.',
  },
];

export const GALLERY_SLOTS: GallerySlot[] = [
  {
    id: 'gallery-workshops',
    title: 'Corporate Strategy Workshops',
    category: 'Workshops',
    src: '/images/student-workshop.jpg',
    alt: 'Instructor facilitating a corporate strategy seminar with seated students',
    caption: 'Interactive classroom sessions examining corporate strategy and real business cases.',
  },
  {
    id: 'gallery-team',
    title: 'Operations & Technical Briefings',
    category: 'Team Activities',
    src: '/images/team-activity.jpg',
    alt: 'Facilitator presenting operational monitoring and incident prevention concepts to a cohort',
    caption: 'Bridging technical execution, incident prevention, and operational leadership.',
  },
  {
    id: 'gallery-warroom',
    title: 'Cohort Keynote & Colloquium',
    category: 'Academy Gallery',
    src: '/images/academy-gallery-1.jpg',
    alt: 'Speaker addressing a large cohort of participants from the podium',
    caption: 'Plenary leadership briefings addressing large student and early-career cohorts.',
  },
  {
    id: 'gallery-cohort',
    title: 'Cohort Dialogue & Debrief',
    category: 'Academy Gallery',
    src: '/images/academy-gallery-2.jpg',
    alt: 'Students engaged in an interactive management seminar with sticky-note boards',
    caption: 'Structured faculty and peer debriefs turning exercises into repeatable habits.',
  },
];

export const MENTOR_SLOTS: MentorSlot[] = [
  {
    id: 'mentor-slot-1',
    imageSrc: '/images/mentor-session-1.jpg',
    imageAlt: 'Executive trainer leading an interactive leadership seminar session',
    slotLabel: 'Cohort Mentoring Session 01',
    roleTitle: 'Industry Executive Coach',
    focusArea: 'AI-Powered Leadership & Executive Tech Operations',
    statusNote: 'Mentor name, designation, and biography to be announced.',
  },
  {
    id: 'mentor-slot-2',
    imageSrc: '/images/mentor-session-2.jpg',
    imageAlt: 'Facilitator engaging seminar participants on business operations and strategy',
    slotLabel: 'Cohort Mentoring Session 02',
    roleTitle: 'Industry Practice Mentor',
    focusArea: 'Strategic Business Operations & P&L Management',
    statusNote: 'Mentor name, designation, and biography to be announced.',
  },
  {
    id: 'mentor-slot-3',
    imageSrc: '/images/mentor-session-3.jpg',
    imageAlt: 'Executive mentor discussing stakeholder leadership with seated professionals',
    slotLabel: 'Cohort Mentoring Session 03',
    roleTitle: 'Leadership & People Coach',
    focusArea: 'People Management, Power Dynamics & Crisis Control',
    statusNote: 'Mentor name, designation, and biography to be announced.',
  },
];

export const OUTCOME_ITEMS: OutcomeItem[] = [
  {
    title: 'Business Decision-Making',
    summary:
      'Move beyond single-discipline analysis to evaluate commercial, customer, and execution trade-offs with clarity.',
    capabilities: [
      'Structured problem framing under incomplete information',
      'Prioritising initiatives against strategic objectives',
      'Executive synthesis and persuasive stakeholder briefings',
    ],
  },
  {
    title: 'Financial & Operational Understanding',
    summary:
      'Understand how managerial decisions shape unit economics, operating budgets, and cross-team delivery.',
    capabilities: [
      'Reading income statements and operating budgets',
      'Diagnosing workflow friction and delivery bottlenecks',
      'Aligning sprint execution with measurable OKRs',
    ],
  },
  {
    title: 'People & Team Leadership',
    summary:
      'Transition from individual contributor habits to guiding cross-functional teams through alignment and tension.',
    capabilities: [
      'Constructive conflict resolution across functions',
      'Principled client and stakeholder negotiation',
      'Calm, accountable coordination during operational crises',
    ],
  },
  {
    title: 'AI-Enabled Management',
    summary:
      'Lead modern teams using practical AI workflows while upholding governance, ethics, and sound judgement.',
    capabilities: [
      'Evaluating generative and agentic AI use cases',
      'Designing human-in-the-loop team augmentation',
      'Translating technical realities for business leadership',
    ],
  },
];

export const PARTNER_ANNOUNCEMENT = {
  title: 'Industry & Placement Partners',
  status: 'Coming Soon',
  description:
    'Official corporate capstone collaborators, industry advisory partners, and placement network organisations will be published here once formal agreements are confirmed.',
};

export const ADMISSIONS_DETAILS = [
  {
    label: 'Eligibility',
    value:
      'Designed for final-year and graduating B.Tech / B.E. Engineering students and MBA students preparing to step into first-time managerial responsibilities. Specific academic eligibility criteria: Coming Soon.',
  },
  {
    label: 'Student Categories',
    value:
      'Two dedicated tracks tailored to background: Engineering Graduates (translating technical depth into business and team leadership) and MBA Graduates (strengthening operational, financial, AI, and people execution).',
  },
  {
    label: 'Programme Structure',
    value:
      'Built around three core learning domains, four-hour facilitated War Room simulations, consent-based AI Co-Pilot coaching, and industry capstone projects. Cohort schedule, duration, and intake dates: Coming Soon.',
  },
  {
    label: 'Admission Process',
    value:
      'Prospective candidates may register their interest through the enquiry form to receive upcoming cohort briefings. Formal application steps and selection criteria: Coming Soon.',
  },
  {
    label: 'Fee & Payment Information',
    value:
      'Programme tuition, scholarship provisions, and payment schedules: Coming Soon.',
  },
];

export const ASSESSMENT_STEPS: AssessmentStep[] = [
  {
    stepNumber: 1,
    pillar: 'Decision-Making & Problem-Solving',
    title: 'Step 1 of 3 — Decision-Making & Problem-Solving',
    description:
      'Reflect on how you currently approach ambiguity, competing priorities, and operational trade-offs.',
    questions: [
      {
        id: 'q1',
        prompt:
          'When faced with an unfamiliar business or project problem without complete data, I can structure key assumptions and move toward a reasoned decision.',
      },
      {
        id: 'q2',
        prompt:
          'I regularly look beyond my immediate technical or functional task to ask how a decision impacts customers, timelines, and budgets.',
      },
      {
        id: 'q3',
        prompt:
          'Under tight deadlines or unexpected disruptions, I stay composed and prioritise the actions that reduce the highest operational risk first.',
      },
    ],
  },
  {
    stepNumber: 2,
    pillar: 'Team Communication & Conflict Resolution',
    title: 'Step 2 of 3 — Team Communication & Conflict Resolution',
    description:
      'Assess how prepared you feel to align diverse peers, handle disagreement, and communicate with stakeholders.',
    questions: [
      {
        id: 'q4',
        prompt:
          'I can adapt my communication clearly when speaking with people from different backgrounds (for example, engineers, product owners, or commercial teams).',
      },
      {
        id: 'q5',
        prompt:
          'When teammates disagree on priorities or ownership, I address the underlying issue constructively rather than avoiding the conversation.',
      },
      {
        id: 'q6',
        prompt:
          'I feel confident presenting recommendations concisely to senior stakeholders and defending trade-offs when challenged.',
      },
    ],
  },
  {
    stepNumber: 3,
    pillar: 'Business Understanding & AI Readiness',
    title: 'Step 3 of 3 — Business Understanding & AI Readiness',
    description:
      'Gauge your familiarity with core P&L concepts, operational metrics, and responsible AI adoption in management.',
    questions: [
      {
        id: 'q7',
        prompt:
          'I understand how revenue, operating budgets, unit economics, and working capital influence day-to-day managerial choices.',
      },
      {
        id: 'q8',
        prompt:
          'I can evaluate where generative or agentic AI tools add practical value to a team workflow—and where human judgement and governance remain essential.',
      },
      {
        id: 'q9',
        prompt:
          'I understand how quarterly business goals (such as OKRs) connect to weekly sprint execution and cross-team accountability.',
      },
    ],
  },
];

export const RATING_SCALE = [
  { value: 1, label: '1 — Beginning' },
  { value: 2, label: '2 — Developing' },
  { value: 3, label: '3 — Capable' },
  { value: 4, label: '4 — Confident' },
  { value: 5, label: '5 — Ready to Lead' },
];

