const projects = [
  {
    id: 1,
    featured: true,
    title: "EcoScrap",
    subtitle: "Smart Scrap Management System",
    description:
      "A full-stack web application designed to connect users, scrap collectors, and administrators for efficient scrap pickup and management.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
    ],
    features: [
      "Secure authentication and role-based access",
      "Scrap pickup request workflow",
      "Scrap details and image upload",
      "Pickup assignment and status tracking",
      "Scrap collector acceptance or rejection",
      "QR code verification",
      "Admin dashboard and notifications",
    ],
    github:
      "https://github.com/sreenandha0/ECOSCRAP-DIGITAL-SCRAPMANAGEMENT",
    demo: "",
    accent: "pink",
    type: "Full-Stack Web Application",
  },

  {
    id: 2,
    featured: true,
    title: "Student Score Predictor",
    subtitle: "Machine Learning Web Application",
    description:
      "A machine learning web application that predicts whether a student is likely to PASS or FAIL using academic information and a Logistic Regression classification model.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Streamlit",
    ],
    features: [
      "PASS or FAIL prediction",
      "Study hours input",
      "Attendance percentage input",
      "Previous score input",
      "Model confidence display",
      "Personalized improvement suggestions",
      "Responsive Streamlit interface",
    ],
    github: "https://github.com/sreenandha0/student-score-predictor",
    demo: "https://academic-outcome-predictor.streamlit.app/",
    accent: "cyan",
    type: "Machine Learning Application",
  },

  {
    id: 3,
    featured: false,
    title: "Victory Sports Academy",
    subtitle: "Football Academy Management System",
    description:
      "A centralized web application for managing football academy operations, including player information, attendance, and performance tracking.",
    technologies: [
      "Python",
      "Django",
      "MySQL",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    features: [
      "Player management",
      "Attendance tracking",
      "Performance tracking",
      "Secure authentication",
      "Database-driven dashboards",
      "Responsive user interface",
    ],
    github: "",
    demo: "",
    accent: "purple",
    type: "Full-Stack Web Application",
  },

  {
    id: 4,
    featured: false,
    title: "Migration Community",
    subtitle: "Community Resource & Job Portal",
    description:
      "A Django-based community platform designed to connect users with job opportunities, education resources, and local community services.",
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    features: [
      "Secure user authentication",
      "Community resource access",
      "Job-related information",
      "Education resource access",
      "SQLite database integration",
      "Responsive web interface",
    ],
    github: "",
    demo: "",
    accent: "pink",
    type: "Full-Stack Web Application",
  },
];

export default projects;