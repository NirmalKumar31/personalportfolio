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
            Built a two-stage SQL framework that automatically flagged bad data in social media
            feeds before it reached the dashboards — using statistical boundary thresholds to
            catch outliers at ingestion. Cut reporting errors by 60% across 10+ Tableau reports.
          </>,
          <>
            Dug into 270K+ social media posts and interactions to understand what content was
            actually performing, where, and when. Used SQL window functions to surface
            platform-specific patterns that fed into a strategy change that lifted engagement by 13%.
          </>,
          <>
            Replaced a manual weekly reporting process by building an automated Snowflake pipeline
            that computed topic volume, growth trends, and seasonality on a schedule. What used to
            take hours of manual work got cut by 95%.
          </>,
          <>
            Ran the analysis on an A/B test across 140K ad impressions to figure out which creative
            was actually working. Found a statistically significant 9% drop in cost per acquisition
            that gave the team the signal they needed to scale the winning variant.
          </>,
          <>
            Synthesized Marketing Mix Model (MMM) outputs across $35.6B in new client assets to
            identify which owned media channels were driving the most value per impression. Mapped
            high-value audience paths by segment and channel, and delivered 4 targeting
            recommendations that shaped how the team allocated spend.
          </>,
          <>
            Audited weekly Multi-Touch Attribution data across 20 paid channels to catch spend and
            conversion discrepancies early — the kind that silently distort attribution if no one
            is checking before the numbers go upstream.
          </>,
        ],
        images: [],
      },
      {
        company: "Ideatec Softwares",
        timeframe: "January 2024 – May 2024",
        role: "Data Science Intern",
        achievements: [
          <>
            Built an LSTM-Autoencoder on industrial sensor telemetry to catch developing machine
            failures before they happened — the model reached 89% precision and could flag a
            problem 6 hours before the equipment actually failed, giving the team time to act.
          </>,
          <>
            Built the data pipeline underneath the model: extracted raw sensor readings from SQL
            Server, cleaned and transformed them in Python, then applied correlation analysis and
            PCA to strip out noisy or redundant features before feeding the data into training.
          </>,
          <>
            Backtested the model against a full year of historical sensor data and maintenance
            records to estimate real-world impact — the results projected a 31% reduction in
            unplanned downtime if the model was deployed in production.
          </>,
          <>
            Built a Power BI dashboard that surfaced anomaly scores and fired visual alerts when
            readings crossed thresholds — so the operations team could stop reacting to failures
            after the fact and start scheduling maintenance before things broke.
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
        name: "Northeastern University · Boston, MA",
        description: (
          <>
            Master of Science – Data Analytics Engineering
            <br />
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
        name: "Sri Venkateswara College of Engineering · Chennai, India",
        description: (
          <>
            Bachelor of Engineering – Electronics and Communication
            <br />
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
