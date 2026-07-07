import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Nirmalkumar",
  lastName: "Thirupallikrishnan Kesavan",
  name: `Nirmalkumar Thirupallikrishnan Kesavan`,
  role: "Data Engineer | Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "thirupallikrishnan.n@northeastern.edu",
  location: "America/New_York",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on data engineering, analytics, and machine learning.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NirmalKumar31",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nirmalkumartk/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Engineer and Data Analyst</>,
  featured: {
    display: false,
    title: (
      <>
        <strong>Vacation Rental Platform</strong>{" "}
        — Featured project
      </>
    ),
    href: "/work/data-platform-vacation-rental-marketplace",
  },
  subline: (
    <>
      I build pipelines, models, and dashboards that make data useful. I like going
      end-to-end: getting raw data into shape, finding what's worth knowing, and
      delivering something people can actually act on
      <br /><br />
      Previously @<strong>Fidelity Investments</strong>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Me",
  description: `${person.name} – ${person.role} based in Boston, MA`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey, I'm Nirmal - glad you're here. I'm a data professional, and this is the part where
        I tell you a bit about myself.
        <br /><br />
        Over the last year and a half I've built things and worked across some pretty different
        spaces: predictive maintenance on factory machines, medical imaging models, data pipelines
        and marketing analytics at a financial firm. Not the most linear path, but the domains kept
        changing, which I think is what kept it interesting.
        <br /><br />
        My experience sits somewhere between data engineering, analytics, and ML. I've moved between
        all three depending on what the problem needed, and honestly I think that's made me better
        at each of them.
        <br /><br />
        I'm finishing up my master's at Northeastern this summer and actively looking for full-time
        opportunities. Please go through the site to explore my work. If something I've built looks
        interesting to you, I'd love to talk. Reach out through my socials.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Fidelity Investments",
        timeframe: "July 2025 – December 2025",
        role: "Data Analyst, Marketing & Social Analytics",
        achievements: [
          <>
            Designed a two-stage SQL data quality framework using statistical boundary thresholds
            to automatically detect abnormalities in social media metrics before they reached the
            dashboards. Reduced reporting errors by 80% across 10+ Tableau dashboards.
          </>,
          <>
            Analyzed Marketing Mix Model (MMM) outputs covering $35.6B in new client assets across
            owned media by segment, computing impact-per-impression ratios to map conversion paths
            and delivering 4 high-value targeting recommendations that shaped how the team approached customer
            acquisition.
          </>,
          <>
            Analyzed 270K+ social media interactions by content type, platform, and timing using
            SQL window functions. Uncovered platform-specific behavioral patterns that were tied
            to a 13% increase in user engagement.
          </>,
          <>
            Automated a Snowflake Task to compute topic volume, growth, and seasonality metrics,
            eliminating manual calculations and cutting report turnaround by 97%.
          </>,
          <>
            Evaluated an A/B test across 140K ad impressions using SQL and Python statistical
            testing, identifying a statistically significant 9% reduction in cost per acquisition
            that prompted leadership to scale the winning variant.
          </>,
          <>
            Audited weekly Multi-Touch Attribution spend and conversion data across 20 paid channels,
            catching discrepancies before they skewed attribution and distorted downstream reporting.
          </>,
        ],
        images: [],
      },
      {
        company: "Ideatec Softwares",
        timeframe: "January 2024 – May 2024",
        role: "Analytics Engineer Intern",
        achievements: [
          <>
            Architected an Azure Synapse Spark ETL pipeline to backfill 900M+ rows from the
            client's on-premises historian into Azure Data Lake Storage, then automated daily
            ingestion of 2M+ new rows, bringing data latency down from days to under 3 hours.
          </>,
          <>
            Built PySpark jobs to restructure raw sensor exports into analysis-ready Parquet
            tables. The partitioning and format change alone cut query scan time by 60% for
            anyone querying downstream.
          </>,
          <>
            Analyzed and clustered machine sensor signatures to identify what failure patterns
            actually looked like in the data. Found that elevated vibration was the dominant
            signal behind 72% of equipment breakdowns.
          </>,
          <>
            Integrated Azure Monitor alerts into the pipeline to catch duplicate inserts from
            retry logic before they compounded into data quality problems. Reduced data quality
            issues by 25%.
          </>,
          <>
            Backtested the anomaly detection model in SQL against a full year of historical
            maintenance logs to estimate real-world impact. The projection came out to a 31%
            reduction in unplanned downtime.
          </>,
          <>
            Built a Power BI dashboard that surfaced anomaly scores and threshold alerts so the
            operations team could stop reacting to equipment failures and start scheduling
            maintenance before things broke.
          </>,
        ],
        images: [],
      },
      {
        company: "Qwings – IIT Madras Research Park",
        timeframe: "July 2023 – November 2023",
        role: "AI and Machine Learning Intern",
        achievements: [
          <>
            Trained a CNN on 5,800 labeled chest X-rays to detect pneumonia, reaching 92%
            accuracy. Added Grad-CAM visualizations so the model would highlight the exact
            region of each image driving its prediction — making the output explainable rather
            than just a confidence score.
          </>,
          <>
            Built a real-time computer vision system that reads live webcam input and recognizes
            15 sign language gestures at 95% accuracy, converting them into on-screen text.
            Packaged and deployed it as an interactive accessibility demo.
          </>,
        ],
        images: [],
      },
      {
        company: "Diggibyte Technologies Pvt Ltd",
        timeframe: "March 2023 – April 2023",
        role: "Data Engineering Intern",
        achievements: [
          <>
            Built an Azure Data Factory pipeline to pull nested JSON from a REST API and load
            it into a structured format. Parallelized copy operations across 4 source partitions
            and used Mapping Data Flows to flatten the schema — bringing total processing time
            down by 40%.
          </>,
          <>
            Set up Delta Lake in Databricks with date-partitioned Parquet files so time-range
            queries only scan the data they actually need. Reduced query scan volume from 500 GB
            to 350 GB through partition pruning.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        degree: "MS – Data Analytics Engineering",
        name: "Northeastern University · Boston, MA",
        description: (
          <>
            CGPA: 3.8 · Expected August 2026
            <br /><br />
            <strong>Coursework</strong>
            <br />
            Data Management for Analytics (IE6700)
            <br />
            Data Mining in Engineering (IE7275)
            <br />
            Machine Learning 1 (MATH7243)
            <br />
            Parallel Processing for Data Analytics (EECE5645)
            <br />
            Time Series and Geospatial Data Science (CIVE7100)
          </>
        ),
      },
      {
        degree: "BE – Electronics and Communication",
        name: "Sri Venkateswara College of Engineering · Chennai, India",
        description: (
          <>
            May 2024
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Analytics & BI",
        description: <></>,
        tags: [
          { name: "SQL", icon: "document" },
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "SciPy", icon: "scipy" },
          { name: "Tableau", icon: "tableau" },
          { name: "Power BI", icon: "document" },
          { name: "Excel", icon: "document" },
          { name: "DAX", icon: "document" },
          { name: "Matplotlib", icon: "plotly" },
          { name: "Seaborn", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: <></>,
        tags: [
          { name: "dbt", icon: "dbt" },
          { name: "Airflow", icon: "airflow" },
          { name: "Snowflake", icon: "snowflake" },
          { name: "Azure Synapse", icon: "document" },
          { name: "Databricks", icon: "databricks" },
          { name: "PySpark", icon: "spark" },
          { name: "Hadoop", icon: "hadoop" },
          { name: "Kafka", icon: "kafka" },
          { name: "ETL/ELT", icon: "document" },
          { name: "Data Modeling", icon: "document" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
      {
        title: "Cloud & Databases",
        description: <></>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "S3", icon: "s3" },
          { name: "Redshift", icon: "redshift" },
          { name: "Glue", icon: "document" },
          { name: "Lambda", icon: "document" },
          { name: "Azure", icon: "document" },
          { name: "ADLS", icon: "document" },
          { name: "Docker", icon: "docker" },
          { name: "CI/CD", icon: "document" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "DynamoDB", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: <></>,
        tags: [
          { name: "Scikit-learn", icon: "sklearn" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "XGBoost", icon: "document" },
          { name: "LangChain", icon: "document" },
          { name: "RAG", icon: "document" },
          { name: "Time Series", icon: "document" },
          { name: "Keras", icon: "keras" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data engineering and analytics...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Data engineering and ML projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
