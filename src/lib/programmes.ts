export type Programme = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  duration: string;
  award: string;
  description: string;
  overview: string;
  features: string[];
  modules?: string[];
  entry: string[];
  progression: string;
};

export const programmes: Programme[] = [
  {
    slug: "ug-foundation-business",
    category: "Qualifications Scotland",
    title: "UG Foundation in Business",
    shortTitle: "Foundation in Business",
    duration: "6 months",
    award: "SCQF Level 6",
    description:
      "Build a confident foundation in business, communication, digital skills and higher education study.",
    overview:
      "The UG Foundation in Business provides a strong starting point for learners beginning their undergraduate journey. It combines core business knowledge with study skills and practical preparation for higher education.",
    features: [
      "Business and communication foundations",
      "Digital skills and data analysis",
      "Higher education study skills",
      "Progression-focused learning",
    ],
    modules: [
      "Context of Business",
      "Study Skills for Higher Education",
      "Introduction to Information Technology",
      "Business Communication",
      "Numeracy and Data Analysis",
      "Integrated Professional Skills in the Digital Age",
    ],
    entry: [
      "G.C.E. Ordinary Level (G.C.E. O/L)",
      "An equivalent recognised secondary-school qualification",
      "Cambridge O Level, IGCSE or comparable national qualifications may be considered",
    ],
    progression:
      "Successful completion provides a progression route into the UG HND in Business Administration (QS), subject to the applicable requirements.",
  },
  {
    slug: "ug-hnd-business-administration",
    category: "Qualifications Scotland",
    title: "UG HND in Business Administration",
    shortTitle: "HND in Business Administration",
    duration: "24 months",
    award: "SCQF Level 8",
    description:
      "Develop higher-level knowledge and professional skills across business and management.",
    overview:
      "The UG HND in Business Administration provides comprehensive higher-level study across key areas of business and management, with optional areas aligned to different interests and future goals.",
    features: [
      "Comprehensive business education",
      "Wide range of business disciplines",
      "Flexible module choices",
      "Research and professional development",
    ],
    modules: [
      "Marketing Management",
      "Quantitative Techniques in Business",
      "Personal and Professional Development",
      "Organisational Theory and Practice",
      "Human Resource Management",
      "Accounting for Business",
      "Research Methodologies",
      "International Business",
      "Business Law and Ethics",
      "Digital Business",
    ],
    entry: [
      "G.C.E. Advanced Level (G.C.E. A/L)",
      "An equivalent recognised upper-secondary qualification",
      "Mature applicants with relevant work experience may be considered case by case",
    ],
    progression:
      "Successful completion provides an opportunity to progress to the BA (Hons) in Business Management Top-Up with the University of Suffolk, subject to requirements.",
  },
  {
    slug: "ba-business-management-top-up",
    category: "University of Suffolk",
    title: "BA (Hons) Business Management Top-Up",
    shortTitle: "Business Management Top-Up",
    duration: "12 months",
    award: "University of Suffolk",
    description:
      "Build on suitable previous higher education study towards a business management honours degree.",
    overview:
      "The BA (Hons) Business Management Top-Up is designed for applicants with appropriate prior study who want to build towards an honours degree in business management.",
    features: [
      "A route to degree completion",
      "Build on previous higher education study",
      "University of Suffolk award",
      "Eligibility assessment by Admissions",
    ],
    entry: [
      "An appropriate prior higher education qualification",
      "Evidence of previous study for assessment",
      "Applicable progression and admissions requirements",
    ],
    progression:
      "Applicants with a completed UG HND in Business Administration (QS) may be considered for progression, subject to the applicable requirements.",
  },
  {
    slug: "mba",
    category: "University of Suffolk",
    title: "Master of Business Administration",
    shortTitle: "Master of Business Administration",
    duration: "18 months part time",
    award: "University of Suffolk",
    description:
      "Develop management judgement and prepare for greater responsibility in business.",
    overview:
      "This part-time MBA route combines taught modules, electives and a major project. It is designed for professionals who want to strengthen business decision-making and their approach to management.",
    features: [
      "Five core modules",
      "Two elective modules",
      "Major project stage",
      "Teaching weekend every six to eight weeks",
    ],
    modules: [
      "Marketing Management",
      "Managing Strategic Change",
      "Strategic Human Resource Management",
      "Financial Management and Entrepreneurship",
      "Research Methodologies",
      "Electives: International Business, International Marketing Management or Corporate Finance",
    ],
    entry: [
      "A recognised bachelor's degree equivalent to a UK honours degree",
      "Appropriate professional experience",
      "Minimum age of 21",
    ],
    progression:
      "The route leads to an MBA awarded by the University of Suffolk, subject to successful completion of the approved requirements.",
  },
  {
    slug: "cambridge-english",
    category: "English language",
    title: "Cambridge English Qualifications",
    shortTitle: "Cambridge English",
    duration: "3 months",
    award: "A2 Key · B1 Preliminary · B2 First",
    description:
      "Develop English for study, work and everyday communication while preparing for a Cambridge English examination.",
    overview:
      "The course combines communication practice with preparation for the relevant Cambridge English examination. Your level should be matched to your current ability and learning goals.",
    features: [
      "Reading, writing, listening and speaking",
      "Grammar and vocabulary development",
      "Two scheduled sessions each week",
      "Preparation for A2, B1 or B2",
    ],
    modules: [
      "A2 Key",
      "B1 Preliminary",
      "B2 First",
      "Revision and practice tasks",
      "Progress checks",
    ],
    entry: [
      "Your current English ability will be discussed with Admissions",
      "Course level should match your learning goals",
      "Examination registration and fees should be confirmed separately",
    ],
    progression:
      "Cambridge English certification depends on examination performance. Universities and employers may set their own requirements for result recency.",
  },
  {
    slug: "professional-excellence",
    category: "Professional development",
    title: "Professional Excellence Programme",
    shortTitle: "Professional Excellence",
    duration: "3 months / 12 weeks",
    award: "45 hours of learning",
    description:
      "Prepare for further study and working life through English, academic communication and professional skills.",
    overview:
      "Designed for school leavers making their next education or career decision, this programme strengthens English, academic communication and professional confidence.",
    features: [
      "36 hours of core learning",
      "9 hours of practical activities",
      "Presentations, discussions and interviews",
      "Professional emails and application documents",
    ],
    modules: [
      "Grammar for Effective Communication",
      "Reading for Academic Success",
      "Academic Writing",
      "Listening Skills",
      "Speaking Skills",
      "Workplace Communication",
    ],
    entry: [
      "Applicants should be at least 16",
      "Educational background should be confirmed with Admissions",
      "Contact the team for the next available intake",
    ],
    progression:
      "Discuss your plans for further study or employment with Admissions before enrolling.",
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
