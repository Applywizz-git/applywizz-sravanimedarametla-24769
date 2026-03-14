export const portfolioData = {
  personal: {
    name: "Sravani Medarametla",
    title: "Data Analyst",
    location: "Rocky Hill, CT (Open to Relocate)",
    phone: "+1 (940) 999-7157",
    email: "sravanich7773@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sravani-m-901496361/",
    tagline: "4+ years of experience delivering reporting, analytics visualization, and data insights.",
    description: "Data Analyst professional with 4+ years of experience delivering reporting, analytics visualization, and data insights across healthcare, financial services, and technology domains using SQL, Python, Power BI, Tableau, Azure Data Factory, Synapse Analytics, and Snowflake.",
    resumeUrl: "/resume.pdf",
  },

  about: {
    summary: "Data Analyst professional with 4+ years of experience delivering reporting, analytics visualization, and data insights across healthcare, financial services, and technology domains. Experienced in transforming high-volume operational and transactional data into structured reporting datasets and analytical models that support performance monitoring and operational decision making.",
    highlights: [
      "Expertise in SQL (Window Functions, CTEs, Query Optimization)",
      "Skilled in building interactive Power BI and Tableau dashboards using DAX and Power Query",
      "Developed automated ETL pipelines using Azure Data Factory and Synapse Analytics",
      "Proficient in Python (Pandas, NumPy) for data wrangling and statistical analysis",
      "Strong background in Dimensional Modeling (Star Schema, Snowflake Schema)"
    ],
    metrics: [
      { label: "Years Experience", value: "4+", description: "In data analytics" },
      { label: "Data Accuracy", value: "35%", description: "Improvement via validation" },
      { label: "Reporting ROI", value: "30%", description: "Cycle time reduction" },
      { label: "Records Processed", value: "15M+", description: "Daily records analyzed" }
    ]
  },

  experience: [
    {
      company: "Google (Contract)",
      role: "Data Analyst - GenAI & Analytics",
      location: "Nov 2025 - Present",
      duration: "Nov 2025 - Present",
      description: "Designed structured evaluation datasets and automated preprocessing for LLM response records.",
      achievements: [
        "Designed structured evaluation datasets using SQL CTEs and window functions to analyze 500K+ LLM response records, increasing model quality scores by 15%",
        "Automated preprocessing of annotated evaluation datasets through Python pipelines, reducing manual data preparation time by 40%",
        "Investigated prompt-response behavior through EDA, identifying reasoning failure patterns that guided prompt redesign",
        "Implemented validation workflows using SQL data profiling and Python checks, increasing dataset reliability by 25%",
        "Developed operational Power BI dashboards to track LLM evaluation KPIs across 10+ generative AI workstreams"
      ],
      technologies: ["SQL", "Python", "Pandas", "NumPy", "Power BI", "DAX", "Azure SQL", "Git", "Azure DevOps"]
    },
    {
      company: "Humana",
      role: "BI Analyst",
      location: "Oct 2024 - Oct 2025",
      duration: "Oct 2024 - Oct 2025",
      description: "Built healthcare reporting datasets and interactive dashboards for operational visibility.",
      achievements: [
        "Built healthcare reporting datasets using optimized SQL queries on claims and membership data, reducing reporting turnaround time by 30%",
        "Designed interactive Power BI dashboards for 200+ healthcare stakeholders to track processing efficiency and provider performance",
        "Structured dimensional reporting models in Azure Synapse using star schema design, improving query performance by 25%",
        "Integrated fragmented healthcare datasets through Azure Data Factory ETL pipelines into centralized reporting layers",
        "Established automated data validation workflows, detecting schema inconsistencies and reducing manual efforts by 40%"
      ],
      technologies: ["Azure Synapse Analytics", "Power BI", "DAX", "Azure Data Factory", "SQL", "Python", "Pandas", "NumPy"]
    },
    {
      company: "Citi Group",
      role: "Reporting Analyst",
      location: "Aug 2020 - Jul 2023",
      duration: "Aug 2020 - Jul 2023",
      description: "Built regulatory reporting datasets and executive dashboards for financial transaction monitoring.",
      achievements: [
        "Built regulatory reporting datasets for risk teams to evaluate 5M+ daily transactions and monitor credit exposure trends",
        "Designed executive reporting dashboards in Power BI to track delinquency ratios and portfolio risk metrics, increasing efficiency by 35%",
        "Optimized high-volume reporting queries through SQL indexing, reducing dataset refresh time by 45%",
        "Investigated payment transaction activity using SQL analytics, uncovering irregular patterns that supported fraud monitoring",
        "Structured analytical reporting tables in Snowflake using dimensional modeling, improving efficiency by 30%"
      ],
      technologies: ["SQL Server", "Snowflake", "Power BI", "DAX", "Azure Data Factory", "Python", "SQL"]
    }
  ],

  projects: [
    {
      title: "Enterprise Analytics Platform & Executive KPI Dashboard",
      description: "Integrated operational, financial, and product datasets through Azure Data Factory ETL pipelines, creating centralized reporting tables for enterprise performance analysis.",
      image: "/src/assets/project-enterprise.png",
      technologies: ["Azure Data Factory", "Azure Synapse Analytics", "Power BI", "DAX", "SQL"],
      features: [
        "Centralized reporting tables in Azure Synapse",
        "Dimensional modeling with star schema",
        "Secure analytics access for 500+ users",
        "Role-based data controls"
      ],
      metrics: {
        improvement: "30%",
        metric: "Reporting cycle time reduction"
      }
    },
    {
      title: "Customer Behavior Analytics & Fraud Detection System",
      description: "Analyzed high-volume transaction datasets to identify irregular patterns and abnormal spending activity across large financial datasets.",
      image: "/src/assets/project-fraud.png",
      technologies: ["Snowflake", "Python", "Pandas", "NumPy", "Tableau", "SQL"],
      features: [
        "Fraud monitoring across payment systems",
        "Statistical analysis of transaction behavior",
        "Interactive Tableau risk indicators",
        "Large-scale transaction sequence analysis"
      ],
      metrics: {
        improvement: "25%",
        metric: "Reporting accuracy increase"
      }
    },
    {
      title: "Healthcare Operational Analytics Dashboard",
      description: "Consolidated fragmented healthcare claims and operational datasets into centralized reporting tables optimized for SQL analytics queries.",
      image: "/src/assets/project-healthcare.png",
      technologies: ["Azure Data Factory", "SQL", "Power BI", "DAX", "Power Query"],
      features: [
        "Centralized claims and operational data",
        "Provider and patient volume trend tracking",
        "Claims turnaround time analysis",
        "Interactive visual analytics for administrators"
      ],
      metrics: {
        improvement: "40%",
        metric: "Manual reconciliation reduction"
      }
    }
  ],

  skills: {
    languages: [
      { name: "SQL", level: 95, category: "Programming" },
      { name: "Python", level: 90, category: "Programming" },
      { name: "Power Query", level: 92, category: "Programming" },
      { name: "DAX", level: 90, category: "Programming" }
    ],
    frameworks: [
      { name: "Power BI", level: 95, category: "Visualization" },
      { name: "Tableau", level: 90, category: "Visualization" },
      { name: "Pandas", level: 88, category: "Data Analysis" },
      { name: "NumPy", level: 85, category: "Data Analysis" }
    ],
    cloud: [
      { name: "Azure Data Factory", level: 90, category: "Cloud" },
      { name: "Azure Synapse", level: 88, category: "Cloud" },
      { name: "Snowflake", level: 85, category: "Cloud" },
      { name: "Azure SQL Database", level: 90, category: "Cloud" },
      { name: "Azure Data Lake (ADLS Gen2)", level: 85, category: "Cloud" }
    ],
    tools: [
      { name: "Git", level: 85, category: "DevOps" },
      { name: "Azure DevOps", level: 80, category: "DevOps" },
      { name: "JIRA", level: 90, category: "Collaboration" },
      { name: "Confluence", level: 85, category: "Collaboration" }
    ]
  },

  certifications: [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      platform: "Microsoft",
      date: "2024",
      credentialId: "MS-PBI-DAA",
      verificationUrl: "#"
    },
    {
      name: "Azure Data Engineer Associate (DP-203)",
      issuer: "Microsoft",
      platform: "Microsoft",
      date: "2024",
      credentialId: "MS-ADE-DP203",
      verificationUrl: "#"
    },
    {
      name: "Tableau Desktop Specialist Certification",
      issuer: "Tableau",
      platform: "Tableau",
      date: "2023",
      credentialId: "TDS-CERT",
      verificationUrl: "#"
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      platform: "Coursera",
      date: "2023",
      credentialId: "GOOGLE-DA",
      verificationUrl: "#"
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      platform: "Microsoft",
      date: "2023",
      credentialId: "MS-ADF-DP900",
      verificationUrl: "#"
    }
  ],

  education: [
    {
      degree: "Master of Science in Computer Information Systems",
      institution: "New England College",
      location: "Henniker, NH",
      duration: "Completed",
      gpa: "N/A",
      relevantCourses: []
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "QIS Institute of Technology",
      location: "India",
      duration: "Completed",
      gpa: "N/A",
      relevantCourses: []
    }
  ]
};

export type PortfolioData = typeof portfolioData;