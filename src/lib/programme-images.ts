// Keep course-card and course-page photography consistent as the catalogue grows.
export const programmeImages: Record<
  string,
  { src: string; alt: string; position?: string }
> = {
  "ug-foundation-business": {
    src: "/images/graduates-campus.jpg",
    alt: "Two students working together on a laptop",
  },
  "ug-hnd-business-administration": {
    src: "/images/student-study.jpg",
    alt: "Students collaborating around a laptop",
  },
  "ba-business-management-top-up": {
    src: "/images/student-campus.jpg",
    alt: "A graduate in a cap and gown smiling outdoors",
    position: "center 35%",
  },
  mba: {
    src: "/images/student-laptop.jpg",
    alt: "Students exchanging ideas around a seminar table",
  },
  "cambridge-english": {
    src: "/images/student-outdoors.jpg",
    alt: "Students listening and participating in a classroom",
  },
  "professional-excellence": {
    src: "/images/lecture-hall.jpg",
    alt: "A student standing outside a modern university building",
    position: "center 35%",
  },
};
