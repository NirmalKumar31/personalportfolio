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
      end-to-end: getting raw data into shape, finding what's worth knowing, and
      delivering something people can actually act on
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
            Analyzed and segmented 270K+ social media interactions by content type, platform,
            and timing using SQL, surfacing posting patterns that fed into a platform-specific
            strategy and lifted engagement 13%.
          </>,
          <>
            Built a Snowflake Task-backed reporting table that pre-computes topic volume, growth,
            and seasonality, replacing recurring manual pulls and cutting report turnaround by
            95% for the team.
          </>,
          <>
            Designed a two-stage SQL data quality validation framework for social media data,
            reducing reporting errors by 60% across 10+ downstream Tableau dashboards.
          </>,
          <>
            Translated MMM outputs attributing $35.6B in new client assets to owned media into
            6 recommendations that mapped the highest-converting paths and surfaced underserved
            segments.
          </>,
<>
            Monitored weekly spend and conversion across 20 paid channels, flagging anomalies
            in 2% of them before they skewed attribution.
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
            Built an LSTM-Autoencoder based anomaly detection system on industrial machine sensor
            telemetry that flagged developing failures from reconstruction-error spikes, achieving
            89% precision with a 6-hour detection lead time.
          </>,
          <>
            Built a Python pipeline to pull from SQL Server and apply dimensionality reduction,
            converting noisy multi-channel signals into clean, model-ready sequences.
          </>,
          <>
            Projected a 31% reduction in unplanned downtime by backtesting the model against
            a year of unseen data and historical maintenance logs.
          </>,
          <>
            Built a Power BI dashboard surfacing anomaly scores and threshold alerts, giving the
            maintenance team a way to shift from reactive to proactive intervention.
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
            Built an explainable pneumonia detection model trained on 5,800 chest X-rays,
            with GradCAM highlighting the regions behind each prediction so the output was
            clinically interpretable rather than just a confidence score.
          </>,
          <>
            Built a real-time computer vision system that recognizes sign language gestures
            from a live webcam feed and converts them to on-screen text, deployed as an
            interactive educational demo.
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
            Built an Azure Data Factory pipeline that ingested nested JSON from a REST API,
            flattened the schema via Mapping Data Flows, and parallelized Copy Activities
            across 4 source partitions, cutting processing time by 40%.
          </>,
          <>
            Set up Delta Lake with date-partitioned Parquet in Databricks, reducing Spark scan
            volume from 500 GB to 350 GB on time-range queries using partition pruning.
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
