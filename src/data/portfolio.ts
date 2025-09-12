export const portfolioData = {
  personal: {
    name: "Sambasivarao Anumolu",
    title: "Data Analyst Specialist",
    location: "Memphis, TN",
    phone: "+1(662) 408-0390",
    email: "ssr.anumolu@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sambasivarao-anumolu/",
    tagline: "Delivering Enterprise-Scale Data Solutions with Precision",
    description: "Data Analyst Specialist with 6+ years of experience delivering enterprise-scale data solutions across financial services, manufacturing, and retail domains. Expertise in designing and automating ETL pipelines, developing interactive dashboards, and driving actionable insights through advanced analytics.",
    resumeUrl: "/resume.pdf", // placeholder
  },

  about: {
    summary: "Data Analyst Specialist with 6+ years of experience delivering enterprise-scale data solutions across financial services, manufacturing, and retail domains. Expertise in designing and automating ETL pipelines using Informatica PowerCenter, Azure Data Factory, SQL, and cloud platforms, improving data accuracy and reporting efficiency.",
    highlights: [
      "Skilled in developing interactive dashboards and visualizations in Power BI, Tableau, and Looker",
      "Strong programming and analytics proficiency in Python, PySpark, R, SQL, and predictive analytics",
      "Experienced in data modeling, governance, and security frameworks including RBAC, GDPR, and CCPA",
      "Proven track record of ensuring compliant, scalable, and reliable analytics in Agile environments"
    ],
    metrics: [
      { label: "Years Experience", value: "6+", description: "In data analytics" },
      { label: "Data Accuracy", value: "30%", description: "Average improvement" },
      { label: "Report Delivery", value: "40%", description: "Faster processing" },
      { label: "System Uptime", value: "99.9%", description: "ETL reliability" }
    ]
  },

  experience: [
    {
      company: "Jack Henry & Associates",
      role: "Data Analyst",
      location: "Monett, MO",
      duration: "Sep 2024 - Present",
      description: "Leading data analytics initiatives for financial services solutions, focusing on executive dashboards and predictive analytics.",
      achievements: [
        "Designed interactive dashboards in Power BI and Tableau with drill-throughs, KPIs, and custom calculations, empowering executives to monitor key metrics and cut decision-making time by 20%",
        "Applied Python (Pandas, NumPy, Matplotlib) to analyze customer transactions and forecast behavior, enabling the business to improve loan default prediction accuracy by 18%",
        "Collaborated with business teams to define metrics and translate complex requirements into technical specifications, which streamlined cross-functional reporting and reduced errors by 30%",
        "Built automated ETL pipelines using SQL Server procedures and Azure Data Factory, eliminating repetitive data prep tasks and accelerating report delivery by 40%"
      ],
      technologies: ["Power BI", "Tableau", "Python", "Azure Data Factory", "SQL Server", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      company: "Safelite Glass",
      role: "Reporting Analyst",
      location: "Columbus, OH",
      duration: "Jan 2024 - Aug 2024",
      description: "Developed ETL workflows and interactive dashboards for vehicle service operations, optimizing fleet performance tracking and reporting.",
      achievements: [
        "Streamlined high-volume vehicle service data ingestion by developing ETL workflows in Informatica PowerCenter and SQL Loader, which reduced processing time by 35%",
        "Created interactive Tableau dashboards with Mapbox geospatial integration, enabling operations teams to track fleet performance in real time and improve dispatch efficiency by 20%",
        "Enhanced SQL Server and Oracle data models to optimize query execution, which accelerated reporting cycles by 25% across service and finance departments",
        "Reduced manual data handling by automating REST API ingestion with Python and Shell scripts, improving data accuracy and saving 30% of integration effort"
      ],
      technologies: ["Informatica PowerCenter", "Tableau", "Mapbox", "SQL Server", "Oracle", "Python", "Shell Scripting", "Azure Synapse"]
    },
    {
      company: "Frontdoor",
      role: "Data Analyst Intern",
      location: "Memphis, TN",
      duration: "Jul 2023 - Dec 2023",
      description: "Engineered ETL pipelines and developed interactive dashboards for home warranty service operations, focusing on operational efficiency and predictive modeling.",
      achievements: [
        "Engineered ETL pipelines with Informatica PowerCenter and PowerExchange, processing structured and unstructured service data, improving data availability and reducing processing delays by 35%",
        "Optimized PL/SQL procedures for data warehousing, accelerating report generation and shortening analytics turnaround by 25% for operational and production teams",
        "Developed interactive Tableau and Power BI dashboards with operational KPIs and geospatial insights, increasing contractor dispatch efficiency by 20%",
        "Transformed large datasets using Apache Spark and PySpark, enabling faster analytics processing and enhancing predictive modeling accuracy by 15%"
      ],
      technologies: ["Informatica PowerCenter", "Tableau", "Power BI", "Apache Spark", "PySpark", "PL/SQL", "Python", "GitHub"]
    },
    {
      company: "Triboclad Tech Private Limited",
      role: "Data Visualization Analyst",
      location: "Hyderabad, India",
      duration: "Aug 2018 - May 2022",
      description: "Developed enterprise-wide ETL pipelines and data models, leading legacy system migrations and establishing data governance frameworks.",
      achievements: [
        "Engineered ETL pipelines using Informatica PowerCenter and Oracle 10g, improving data accuracy for client reporting and reducing processing errors by 30%",
        "Built enterprise-wide logical and physical data models in ERwin, enhancing reporting infrastructure and boosting query performance by 25%",
        "Led legacy system data migration and batch validation, ensuring seamless transition and cutting post-migration discrepancies by 40%",
        "Streamlined reporting by creating materialized views and optimizing SQL queries, which accelerated report generation by 20% for finance and HR teams"
      ],
      technologies: ["Informatica PowerCenter", "Oracle 10g", "ERwin", "SQL", "Shell Scripting", "Control-M", "RBAC"]
    }
  ],

  projects: [
    {
      title: "Executive Analytics Dashboard",
      description: "Developed interactive Power BI and Tableau dashboards with drill-throughs, KPIs, and custom DAX measures, reducing executive report generation time by 20%.",
      image: "/src/assets/project-executive-dashboard.jpg",
      technologies: ["Power BI", "Tableau", "DAX", "Azure Data Factory", "SQL Server", "Python", "Pandas"],
      features: [
        "Interactive dashboards with drill-through capabilities",
        "Custom DAX measures and calculations",
        "Automated ETL pipelines for real-time data",
        "Data profiling and quality assurance"
      ],
      metrics: {
        improvement: "20%",
        metric: "Report generation time reduction"
      }
    },
    {
      title: "Fleet Operations & Performance Tracking",
      description: "Built Tableau dashboards with Mapbox geospatial integration to monitor fleet operations in real-time, increasing dispatch efficiency by 20%.",
      image: "/src/assets/project-fleet-tracking.jpg",
      technologies: ["Tableau", "Mapbox", "SQL Server", "Oracle", "Python", "Shell Scripting", "REST APIs"],
      features: [
        "Real-time fleet performance monitoring",
        "Geospatial analytics with Mapbox integration",
        "Automated data ingestion from REST APIs",
        "Optimized data models for performance"
      ],
      metrics: {
        improvement: "20%",
        metric: "Dispatch efficiency increase"
      }
    },
    {
      title: "Service & Home Warranty Analytics",
      description: "Engineered ETL pipelines with Informatica PowerCenter for structured and unstructured service data, improving data availability by 35%.",
      image: "/src/assets/project-service-analytics.jpg",
      technologies: ["Informatica PowerCenter", "Apache Spark", "PySpark", "Tableau", "Power BI", "PL/SQL"],
      features: [
        "Processing structured and unstructured data",
        "Operational KPIs and geospatial insights",
        "Predictive analytics workflows",
        "Large dataset transformation capabilities"
      ],
      metrics: {
        improvement: "35%",
        metric: "Data availability improvement"
      }
    },
    {
      title: "Enterprise Reporting & Data Modeling",
      description: "Maintained ETL pipelines and designed logical and physical data models using ERwin, enhancing query performance by 25%.",
      image: "/src/assets/project-enterprise-modeling.jpg",
      technologies: ["Informatica PowerCenter", "Oracle 10g", "ERwin", "SQL", "Shell Scripting", "Control-M"],
      features: [
        "Enterprise-wide data model design",
        "Automated data validation processes",
        "RBAC policy enforcement",
        "Legacy system migration capabilities"
      ],
      metrics: {
        improvement: "25%",
        metric: "Query performance enhancement"
      }
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90, category: "Programming" },
      { name: "SQL", level: 95, category: "Programming" },
      { name: "R", level: 85, category: "Programming" },
      { name: "PL/SQL", level: 88, category: "Programming" },
      { name: "T-SQL", level: 90, category: "Programming" },
      { name: "Shell Scripting", level: 80, category: "Programming" }
    ],
    frameworks: [
      { name: "Power BI", level: 95, category: "Visualization" },
      { name: "Tableau", level: 90, category: "Visualization" },
      { name: "Looker", level: 75, category: "Visualization" },
      { name: "Apache Spark", level: 85, category: "Big Data" },
      { name: "PySpark", level: 85, category: "Big Data" },
      { name: "Pandas", level: 90, category: "Data Analysis" }
    ],
    cloud: [
      { name: "Azure Data Factory", level: 90, category: "Cloud" },
      { name: "Azure Synapse", level: 85, category: "Cloud" },
      { name: "AWS Redshift", level: 80, category: "Cloud" },
      { name: "Snowflake", level: 75, category: "Cloud" },
      { name: "Google BigQuery", level: 70, category: "Cloud" },
      { name: "Databricks", level: 80, category: "Cloud" }
    ],
    tools: [
      { name: "Informatica PowerCenter", level: 95, category: "ETL" },
      { name: "Talend", level: 80, category: "ETL" },
      { name: "Apache Airflow", level: 75, category: "ETL" },
      { name: "Git", level: 85, category: "DevOps" },
      { name: "Docker", level: 70, category: "DevOps" },
      { name: "Jenkins", level: 75, category: "DevOps" }
    ]
  },

  certifications: [
    {
      name: "IBM Data Analyst Professional Certificate",
      issuer: "IBM",
      platform: "Coursera",
      date: "2024",
      credentialId: "IBM-DA-2024",
      verificationUrl: "https://coursera.org/verify/professional-cert/ibm-data-analyst"
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      platform: "Coursera", 
      date: "2024",
      credentialId: "GOOGLE-DA-2024",
      verificationUrl: "https://coursera.org/verify/professional-cert/google-data-analytics"
    },
    {
      name: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      platform: "LinkedIn Learning",
      date: "2024",
      credentialId: "MSFT-PBI-2024",
      verificationUrl: "https://linkedin.com/learning/certificates/powerbi-analyst"
    },
    {
      name: "Data Visualization with Tableau Specialization",
      issuer: "UC Davis",
      platform: "Coursera",
      date: "2023",
      credentialId: "TABLEAU-SPEC-2023",
      verificationUrl: "https://coursera.org/verify/specialization/tableau-visualization"
    },
    {
      name: "Python for Data Science and AI",
      issuer: "IBM",
      platform: "Coursera",
      date: "2023",
      credentialId: "IBM-PYTHON-2023",
      verificationUrl: "https://coursera.org/verify/course/python-data-science-ai"
    }
  ],

  education: [
    {
      degree: "Master of Science in Information Systems",
      institution: "University of Memphis",
      location: "Memphis, TN",
      duration: "Aug 2022 - May 2024",
      gpa: "3.8/4.0",
      relevantCourses: [
        "Database Management Systems",
        "Data Analytics and Visualization",
        "Business Intelligence",
        "Statistical Analysis",
        "Information Systems Management"
      ]
    },
    {
      degree: "Bachelor of Mechanical Engineering",
      institution: "KL University",
      location: "Andhra Pradesh, India",
      duration: "Jun 2012 - May 2016", 
      gpa: "3.6/4.0",
      relevantCourses: [
        "Engineering Mathematics",
        "Computer Programming",
        "Statistics and Probability",
        "Operations Research",
        "Project Management"
      ]
    }
  ]
};

export type PortfolioData = typeof portfolioData;