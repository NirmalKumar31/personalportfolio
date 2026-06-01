import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

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
      <Row gap="12" vertical="center">
        <strong className="ml-4">Vacation Rental Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/data-platform-vacation-rental-marketplace",
  },
  subline: (
    <>
      I build pipelines, models, and dashboards that make data useful. I like going
      end-to-end – getting raw data into shape, finding what's worth knowing, and
      delivering something people can actually act on.
      <br /><br />
      Previously @<Text as="span" size="xl" weight="strong">Fidelity Investments</Text>
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
        Hey, I'm Nirmal – glad you're here. I'm a data professional, and this is the part where
        I tell you a bit about myself.
        <br /><br />
        Over the last year and a half I've built things and worked across some pretty different
        spaces – predictive maintenance on factory machines, medical imaging models, data pipelines
        and marketing analytics at a financial firm. Not the most linear path, but the domains kept
        changing, which I think is what kept it interesting.
        <br /><br />
        My experience sits somewhere between data engineering, analytics, and ML. I've moved between
        all three depending on what the problem needed, and honestly I think that's made me better
        at each of them.
        <br /><br />
        I'm finishing up my master's at Northeastern this summer and actively looking for full-time
        opportunities. Please go through the site to explore my work – if something I've built looks
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
        role: "Data Analyst",
        achievements: [
          <>
            Built a double-layer SQL statistical data quality framework for social media data –
            reduced quality incidents by <strong>60%</strong> across 10+ downstream dashboards
            by catching schema drift and value anomalies before they hit reporting.
          </>,
          <>
            Automated daily social metrics reporting using scheduled Snowflake TASK – eliminated
            manual query workflows entirely and cut report preparation time by <strong>95%</strong>.
          </>,
          <>
            Analyzed <strong>250K+</strong> social interactions and sentiment patterns using SQL
            and Power BI for channel and content optimization – surfaced opportunities that drove a{" "}
            <strong>20% engagement lift</strong> and informed platform-specific posting strategy.
          </>,
          <>
            Identified high-value conversion paths across owned media channels tied to{" "}
            <strong>$35.6B in New Money</strong> using Marketing Mix Model outputs – uncovered
            segment-level effectiveness gaps and delivered <strong>6 recommendations</strong> to
            sharpen customer acquisition and drive New Money growth.
          </>,
          <>
            Reconciled paid media (MTA) data weekly across <strong>20+ channels</strong> against
            internal benchmarks – flagged discrepancies in 10% of channels, keeping budget
            tracking accurate and surfacing issues before they compounded.
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
            Built an LSTM-Autoencoder to detect anomalies in time-series telemetry from 4
            industrial stenter machines – hit <strong>89% precision and 82% recall</strong>,
            catching failures 24 hours before they happened.
          </>,
          <>
            Backtested against 12 months of maintenance logs and projected a{" "}
            <strong>31% drop</strong> in unplanned downtime.
          </>,
          <>
            Built a Plotly Dash dashboard so operators could see real-time sensor metrics, anomaly
            scores, and alerts all in one place.
          </>,
        ],
        images: [],
      },
      {
        company: "Qwings",
        timeframe: "July 2023 – November 2023",
        role: "AI and Machine Learning Intern",
        achievements: [
          <>
            Built a pneumonia detection model using GradCAM on 5,800 chest X-rays – got to{" "}
            <strong>93% accuracy</strong> and wrapped it in a Streamlit app with heatmaps so
            clinicians could see exactly what the model was flagging.
          </>,
          <>
            Built a sign language recognition system using MediaPipe and LSTM – hit{" "}
            <strong>94% accuracy</strong> on ASL gestures and deployed it as a learning tool for
            school students.
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
            Built an Azure Data Factory pipeline to pull nested JSON from a REST API – cut
            processing time by <strong>40%</strong> by flattening the schema and parallelizing
            Copy Activities across 4 partitions.
          </>,
          <>
            Set up Delta Lake with date-partitioned Parquet in Databricks – brought Spark read
            volume down from <strong>500 GB to 350 GB</strong> for time-range queries using
            partition pruning.
          </>,
          <>
            Wired up Airflow DAGs to coordinate daily PySpark jobs across staging and serving
            layers.
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
        name: "Northeastern University",
        description: (
          <>
            Master of Science – Data Analytics Engineering · CGPA: 3.8 · Expected August 2026
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
        name: "Sri Venkateswara College of Engineering (Anna University)",
        description: (
          <>
            Bachelor of Engineering – Electronics and Communication · May 2024
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
        title: "Analytics & Visualization",
        description: <></>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "R", icon: "r" },
          { name: "Pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "SciPy", icon: "scipy" },
          { name: "Plotly", icon: "plotly" },
          { name: "Tableau", icon: "tableau" },
          { name: "SQL", icon: "document" },
          { name: "Jupyter", icon: "jupyter" },
        ],
        images: [],
      },
      {
        title: "Cloud & Data Engineering",
        description: <></>,
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "S3", icon: "s3" },
          { name: "Redshift", icon: "redshift" },
          { name: "Snowflake", icon: "snowflake" },
          { name: "Databricks", icon: "databricks" },
          { name: "dbt", icon: "dbt" },
          { name: "Airflow", icon: "airflow" },
          { name: "Spark", icon: "spark" },
          { name: "Hadoop", icon: "hadoop" },
          { name: "Kafka", icon: "kafka" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
      {
        title: "Machine Learning",
        description: <></>,
        tags: [
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Keras", icon: "keras" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "Scikit-learn", icon: "sklearn" },
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "pandas" },
          { name: "Jupyter", icon: "jupyter" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: <></>,
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "SQL", icon: "document" },
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
