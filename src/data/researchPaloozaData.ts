export interface PaloozaPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface PaloozaExperience {
  id: string;
  title: string;
  tagline: string;
  targetCategory?: string;
  icon: string;
}

export interface PaloozaEvent {
  id: string;
  number: string;
  title: string;
  tagline: string;
  type: 'Talk' | 'Competition' | 'Presentation' | 'Exhibition';
  audience: string;
  duration: string;
  timeSlot: string;
  venue: string;
  image?: string;
  posterPlaceholderText: string;
  description: string;
  objectives: string[];
  rules: string[];
  eligibility: string;
  prizes?: string;
  coordinators?: { name: string; contact?: string }[];
  registrationUrl: string;
  registrationOpen: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  subtitle: string;
  type: 'Ceremony' | 'Talk' | 'Film' | 'Presentation' | 'Competition' | 'Networking' | 'Demonstration';
  duration?: string;
  venue: string;
  relatedEventId?: string;
}

export interface PaloozaFAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ResearchPaloozaContent {
  meta: {
    title: string;
    edition: string;
    tagline: string;
    subTagline: string;
    date: string;
    time: string;
    year: string;
    venue: string;
    department: string;
    institution: string;
    registrationUrl: string;
    brochureUrl: string;
    videoTeaserUrl?: string;
  };
  pillars: PaloozaPillar[];
  about: {
    sectionTag: string;
    heading: string;
    paragraphs: string[];
    featuredQuote: {
      lead: string;
      punchline: string;
    };
  };
  experiences: PaloozaExperience[];
  events: PaloozaEvent[];
  schedule: ScheduleItem[];
  industry: {
    tag: string;
    heading: string;
    subheading: string;
    brochureUrl: string;
    brochureFilename: string;
    contactEmail: string;
    benefits: { title: string; description: string; icon: string }[];
  };
  faqs: PaloozaFAQItem[];
}

export const researchPaloozaData: ResearchPaloozaContent = {
  meta: {
    title: "RESEARCH PALOOZA '26",
    edition: "AMBE | IIT MADRAS | 3RD EDITION",
    tagline: "Where engineering research meets real-world application.",
    subTagline: "",
    date: "October 17, 2026 (Saturday)",
    time: "08:30 AM – 05:30 PM",
    year: "2026",
    venue: "TTJ Auditorium, ICSR, IIT Madras",
    department: "Department of Applied Mechanics & Biomedical Engineering",
    institution: "IIT Madras",
    registrationUrl: "https://linktr.ee/amsaiitm",
    brochureUrl: "#brochure",
    videoTeaserUrl: "videos/palooza-bg-teaser.mp4", // Users can drop video into public/videos/palooza-teaser.mp4
  },

  pillars: [
    {
      id: "explore",
      title: "EXPLORE",
      subtitle: "Future technologies",
      icon: "telescope"
    },
    {
      id: "communicate",
      title: "COMMUNICATE",
      subtitle: "Research storytelling",
      icon: "chat"
    },
    {
      id: "showcase",
      title: "SHOWCASE",
      subtitle: "Research exhibition",
      icon: "layers"
    },
    {
      id: "invent",
      title: "INVENT",
      subtitle: "Engineering innovation",
      icon: "lightbulb"
    },
    {
      id: "sell",
      title: "SELL",
      subtitle: "Product thinking",
      icon: "trending-up"
    },
    {
      id: "translate",
      title: "TRANSLATE",
      subtitle: "Research → real world",
      icon: "cpu"
    }
  ],

  about: {
    sectionTag: "RESEARCH PALOOZA",
    heading: "Research, beyond the paper.",
    paragraphs: [
      "Research Palooza is the annual flagship research symposium of the Department of Applied Mechanics & Biomedical Engineering, IIT Madras. Following the success of its previous editions, we are proud to return in 2026 for the third edition of Research Palooza.",
      "A day designed to bring together students, researchers, faculty, and industry to experience research from multiple perspectives — from emerging technologies and technical communication to demonstrations, entrepreneurship, industry engagement and real-world translation."
    ],
  },

  experiences: [
    {
      id: "discover",
      title: "DISCOVER",
      tagline: "Explore emerging research and technologies.",
      targetCategory: "Talk",
      icon: "compass"
    },
    {
      id: "present",
      title: "PRESENT",
      tagline: "Put your research on stage.",
      targetCategory: "Presentation",
      icon: "mic"
    },
    {
      id: "build",
      title: "BUILD",
      tagline: "Turn an engineering problem into an idea.",
      targetCategory: "Competition",
      icon: "hammer"
    },
    {
      id: "showcase",
      title: "SHOWCASE",
      tagline: "Demonstrate your research beyond a poster.",
      targetCategory: "Exhibition",
      icon: "grid"
    },
    {
      id: "pitch",
      title: "PITCH",
      tagline: "Test your creativity and persuasion.",
      targetCategory: "Competition",
      icon: "award"
    },
    {
      id: "connect",
      title: "CONNECT",
      tagline: "Meet researchers, students and industry.",
      targetCategory: "Talk",
      icon: "users"
    }
  ],

  events: [
    {
      id: "mechanics-at-the-edge",
      number: "01",
      title: "Mechanics at the Edge",
      tagline: "The next decade of engineering mechanics.",
      type: "Talk",
      audience: "All students and Faculty Members",
      duration: "40 min",
      timeSlot: "09:45 AM",
      venue: "TTJ Auditorium, IC&SR",
      posterPlaceholderText: "Mechanics at the Edge Keynote Poster",
      description: "A visionary symposium keynote exploring the emerging frontiers of engineering mechanics over the next decade. Covering fluid-structure interaction, bio-mechanics, multiscale metamaterials, and computational mechanics.",
      objectives: [
        "Explore breakthroughs reshaping engineering mechanics for the next decade",
        "Bridge theoretical continuum mechanics with real-world computational practice",
        "Interactive Q&A discussion with scholars and faculty"
      ],
      rules: [
        "Open to all students, scholars, and faculty across IIT Madras.",
        "Seating on a first-come, first-served basis.",
        "Interactive question session following the keynote."
      ],
      eligibility: "All students & faculty",
      registrationUrl: "",
      registrationOpen: true
    },
    {
      id: "3-minute-bunco",
      number: "02",
      title: "3-Minute Bunco",
      tagline: "Research, through the camera lens.",
      type: "Competition",
      audience: "M.S./M.Tech/PhD (Open to all)",
      duration: "3 min + screening",
      timeSlot: "10:30 AM",
      venue: "TTJ Auditorium, IC&SR",
      image: "/images/events/rp26/3mb.png",
      posterPlaceholderText: "3-Minute Bunco Poster",
      description: "Can you present your thesis or research in 3 minutes in an engaging video format? A fast-paced, high-impact competition testing storytelling, clarity, and the power to communicate scientific concepts to a multidisciplinary audience.",
      objectives: [
        "Master spontaneous, engaging research storytelling",
        "Explain complex investigations with minimal slide decks or mathematical jargon",
        "Compete for the Best Storyteller award judged by a multidisciplinary jury"
      ],
      rules: [
        "Strict 3-minute hard timer. Penalty applied after 3:00 min.",
        "A short video of your research work, experiments or project. Explanation with minimal text slides is encouraged.",
        "Evaluation criteria: scientific clarity, engagement, narrative structure, and accessibility."
      ],
      eligibility: "M.S., M.Tech, Ph.D. scholars & Post-Doc (Open to all students)",
      prizes: "Cash prizes & Certificate of Excellence for Winners",
      coordinators: [
        { name: "Sachin Thomas", contact: "+91 85920 76957" }
      ],
      registrationUrl: "https://forms.gle/8EzaZaj7sDRtbTmw6",
      registrationOpen: true
    },
    {
      id: "techtalk",
      number: "03",
      title: "TechTalk",
      tagline: "Selected research presented TEDx-style.",
      type: "Presentation",
      audience: "Research scholars",
      duration: "3 x 15 min",
      timeSlot: "11:30 AM",
      venue: "TTJ Auditorium, IC&SR",
      image: "/images/events/rp26/tech_talk.png",
      posterPlaceholderText: "TechTalk: Research on Stage Poster",
      description: "Selected research scholars take the main stage for 15-minute TEDx-style talks. Showcasing landmark findings, creative methodology, and the challenges faced along their research journeys.",
      objectives: [
        "High-visibility showcase of outstanding departmental investigations",
        "Inspire junior scholars and undergraduate students",
        "Foster cross-laboratory collaboration across AMBE research groups"
      ],
      rules: [
        "15 minutes presentation + 5 minutes audience interaction.",
        "Talks will be professionally recorded for academic outreach archives.",
        "Abstract submission and selection committee review required."
      ],
      eligibility: "AMBE Research Scholars (M.S., Ph.D. & Post-Doc)",
      prizes: "Cash Prize upto ₹5,000 + Certificate of Excellence",
      coordinators: [
        { name: "Kailaash RM", contact: "+91 98401 88604" }
      ],
      registrationUrl: "https://forms.gle/L4t3TFTc4MxGb9Vd6",
      registrationOpen: true
    },
    {
      id: "ambe-shark-tank",
      number: "04",
      title: "AMBE Shark Tank",
      tagline: "From engineering problem to viable product.",
      type: "Competition",
      audience: "Primarily B.Tech (Open to all)",
      duration: "Prelims + 5–7 pitches",
      timeSlot: "02:30 PM",
      venue: "KCB318 (Prelims) & TTJ Auditorium (Final Pitch)",
      image: "/images/events/rp26/shark_tank.png",
      posterPlaceholderText: "AMBE Venture Challenge Poster",
      description: "Turn an engineering problem into a tangible product concept and startup thesis. Teams pitch to seasoned mentors, startup founders, and IITM incubation leaders.",
      objectives: [
        "Spark translational and entrepreneurial thinking in student research",
        "Validate market feasibility and engineering product architecture",
        "Access pre-incubation mentorship and development grants"
      ],
      rules: [
        "Teams of 1–4 students.",
        "Preliminary review: Problem statement, technical schema, and market potential.",
        "Final pitch: 5 minutes presentation followed by 5 minutes jury Q&A.",
        "Judging rubrics: Technical viability, innovation, market potential, and presentation quality."
      ],
      eligibility: "Primarily B.Tech students - but 'Open to all' from AMBE",
      prizes: "Awards and Certificate of Excellence to the winners",
      coordinators: [
        { name: "Sai Kiran", contact: "+91 84381 72266" }
      ],
      registrationUrl: "https://forms.gle/9z3JDbvTY43RVFef8",
      registrationOpen: true
    },
    {
      id: "flash-forum",
      number: "05",
      title: "Flash Forum",
      tagline: "Research beyond the poster.",
      type: "Exhibition",
      audience: "Primarily research scholars",
      duration: "60 min",
      timeSlot: "01:30 PM ",
      venue: "Hall 4, IC&SR",
      image: "/images/events/rp26/flash_forum.png",
      posterPlaceholderText: "Flash Forum Interactive Showcase Poster",
      description: "Flash Forum is an active, tactile exhibition featuring live benchtop experimental setups,mechanical specimens, working sensor rigs, and dynamic simulations. Poster, Digital or Live demonstration - everyone is encouraged to showcase their work to a wider audience.",
      objectives: [
        "Experience research through posters, hands-on interaction and live demonstrations",
        "Direct engagement between lab researchers and visiting industry representatives",
        "Audience choice voting for most captivating prototype exhibit"
      ],
      rules: [
        "Dedicated demonstration space with power supply and poster panel support.",
        "Demonstrators must provide live or interactive tactile components.",
        "Symposium delegates receive tokens for Best Demonstration peer award."
      ],
      eligibility: "Primarily research scholars, postdocs, and laboratory groups",
      prizes: "Best Interactive Exhibit Award & Research Innovation Awards",
      coordinators: [
        { name: "Muralidharan PT", contact: "+91 9159357157" }
      ],
      registrationUrl: "https://forms.gle/K8vAXFhvcijNnm4P9",
      registrationOpen: true
    },
    {
      id: "the-pitch",
      number: "06",
      title: "Product Pitch",
      tagline: "Can you sell anything?",
      type: "Competition",
      audience: "Primarily B.Tech (Open to all)",
      duration: "5–7 pitches",
      timeSlot: "03:15 PM",
      venue: "KCB318 (Prelims) & TTJ Auditorium (Final Pitch)",
      image: "/images/events/rp26/product_pitch.png",
      posterPlaceholderText: "The Pitch Competition Poster",
      description: "A fast-paced, entertaining test of persuasion and creativity! Teams are given curious engineering contraptions, theoretical concepts, or quirky prototypes and must convince the jury to buy in on the spot.",
      objectives: [
        "Challenge lateral thinking, impromptu articulation, and humor",
        "Test product marketing and quick-witted commercial argumentation",
        "High-energy interactive event celebrating creative problem framing"
      ],
      rules: [
        "Individual or duo participation.",
        "Surprise product/prompt allocated 10 minutes prior to stage entry.",
        "3 minutes pitch followed by rapid-fire judge reactions.",
        "Judging: Humor, persuasion, creative logic, and audience applause."
      ],
      eligibility: "Primarily B.Tech students - but Open to all attendees",
      prizes: "Winner & Runner-up prizes + mementos",
      coordinators: [
        { name: "Sai Kiran", contact: "+91 84381 72266" }
      ],
      registrationUrl: "https://forms.gle/WRxquBwuxXtKJZ8p7",
      registrationOpen: true
    },
    {
      id: "from-lab-to-market",
      number: "07",
      title: "From Lab to Market",
      tagline: "What really happens after the research paper?",
      type: "Talk",
      audience: "All students",
      duration: "40 min",
      timeSlot: "04:00 PM",
      venue: "TTJ Auditorium, IC&SR",
      posterPlaceholderText: "From Lab to Market Keynote Panel Poster",
      description: "A candid, insider discussion on the journey of academic engineering inventions into real-world industry adoption. Hear stories of patents, clinical validation, regulatory hurdles, licensing agreements, and spin-offs.",
      objectives: [
        "Learn how laboratory discoveries successfully transition into patents and products",
        "Understand intellectual property (IP), translational funding, and licensing mechanisms",
        "Interactive open forum with university founders and tech-transfer specialists"
      ],
      rules: [
        "Open symposium session for all participants and guests.",
        "Floor open for questions and audience interaction."
      ],
      eligibility: "All students, scholars, faculty, and industry guests",
      registrationUrl: "",
      registrationOpen: true
    }
  ],

  schedule: [
  {
      id: "sch-01",
      time: "08:30 AM",
      title: "Registration",
      subtitle: "Coupon distribution for Attendees",
      type: "Registration",
      duration: "60 min",
      venue: "IC&SR Foyer"
    },
    {
      id: "sch-02",
      time: "09:30 AM",
      title: "Inauguration Ceremony",
      subtitle: "Opening address by Head of Department and faculty coordinators.",
      type: "Ceremony",
      duration: "15 min",
      venue: "TTJ Auditorium, IC&SR"
    },
    {
      id: "sch-03",
      time: "09:45 AM",
      title: "Mechanics at the Edge",
      subtitle: "The next decade of engineering mechanics.",
      type: "Talk",
      duration: "40 min",
      venue: "TTJ Auditorium, IC&SR",
      relatedEventId: "mechanics-at-the-edge"
    },
    {
      id: "sch-04",
      time: "10:30 AM",
      title: "3-Minute Bunco (Screening)",
      subtitle: "Research, without the PowerPoint.",
      type: "Film",
      duration: "40 min",
      venue: "TTJ Auditorium, IC&SR",
      relatedEventId: "3-minute-bunco"
    },
    {
      id: "sch-05",
      time: "11:10 AM",
      title: "Club Innauguration",
      subtitle: "Innauguration of Clubs in the department of AMBE",
      type: "Ceremony",
      duration: "20 min",
      venue: "TTJ Auditorium, IC&SR",
    },
    {
      id: "sch-06",
      time: "11:30 AM",
      title: "TechTalk — Research on Stage",
      subtitle: "Selected research presented TEDx-style.",
      type: "Presentation",
      duration: "60 min",
      venue: "TTJ Auditorium, IC&SR",
      relatedEventId: "techtalk"
    },
    {
      id: "sch-07",
      time: "12:30 PM",
      title: "Networking Lunch",
      subtitle: "Informal networking, project exploration & lunch.",
      type: "Networking",
      duration: "60 min",
      venue: "Dining Hall, IC&SR"
    },
    {
      id: "sch-08",
      time: "01:30 PM",
      title: "Flash Forum",
      subtitle: "Posters, Tactile demonstrations, experimental rigs and interactive software exhibits.",
      type: "Demonstration",
      duration: "60 min",
      venue: "Hall 4, IC&SR",
      relatedEventId: "flash-forum"
    },
    {
      id: "sch-09",
      time: "02:30 PM",
      title: "Shark Tank & Product Pitch",
      subtitle: "From engineering problem to viable product & rapid persuasion battle.",
      type: "Competition",
      duration: "90 min",
      venue: "TTJ Auditorium, IC&SR",
      relatedEventId: "ambe-venture-challenge"
    },
    
    {
      id: "sch-10",
      time: "04:00 PM",
      title: "From Lab to Market",
      subtitle: "What really happens after the research paper? Translational panel.",
      type: "Talk",
      duration: "40 min",
      venue: "TTJ Auditorium, IC&SR",
      relatedEventId: "from-lab-to-market"
    },
    {
      id: "sch-11",
      time: "05:00 PM",
      title: "Valedictory & Awards Distribution",
      subtitle: "Felicitation of winners, symposium closing remarks & high tea.",
      type: "Ceremony",
      duration: "30 min",
      venue: "TTJ Auditorium, IC&SR"
    }
  ],

  industry: {
    tag: "INDUSTRY & PARTNERS",
    heading: "Research meets industry.",
    subheading: "Engage with the researchers, students and ideas shaping the next generation of engineering.",
    brochureUrl: "/documents/AMSA_RP_Spons_Brochure.pdf",
    brochureFilename: "AMSA_RP_Spons_Brochure.pdf",
    contactEmail: "amsa@iitm.ac.in",
    benefits: [
      {
        title: "MEET TALENT",
        description: "Students across engineering, mechanics and biomedical domains.",
        icon: "graduate"
      },
      {
        title: "ENGAGE WITH RESEARCH",
        description: "Interact with faculty, researchers, demonstrations and technical work.",
        icon: "flask"
      },
      {
        title: "BUILD CONNECTIONS",
        description: "Explore internships, recruitment, technical collaborations and research opportunities.",
        icon: "handshake"
      }
    ]
  },

  faqs: [
    {
      question: "Who can participate?",
      answer: "Research Palooza '26 is open to all students, research scholars, postdocs, and faculty members from the department of AMBE. Whether you are presenting your work or coming to experience the talks and exhibitions, you are warmly invited!"
    },
    {
      question: "Do I need to be from AMBE?",
      answer: "No. While Research Palooza is hosted by the Department of Applied Mechanics & Biomedical Engineering, we welcome students to attend the events from all departments across IIT Madras. However, event registration is limited to the students of AMBE."
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Yes, as long as the event schedules do not directly overlap. There is no limit on the number of participation of events."
    },
    {
      question: "How do I register?",
      answer: "Click the 'Register Now' button at the top of this page or select 'Register for this Event' inside any event card. Registration takes less than two minutes and is completely free."
    },
    {
      question: "Are there prizes?",
      answer: "Yes! Cash prizes, Awards and official Departmental Commendation Certificates will be awarded for the events at the Valedictory Ceremony. Specific details about the prize is mentioned in the event section separately."
    },
    {
      question: "Where will the events happen?",
      answer: "The symposium takes place at the IC&SR building on the IIT Madras campus. More details on halls and the timings can be referred from the events section."
    }
  ]
};
