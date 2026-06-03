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
        role: "Data Analyst",
        achievements: [
          <>
            Pulled 500K+ social interactions into SQL and Tableau, broke them down by content
            type, platform, and posting time to find what was actually driving engagement, and
            used that to build a channel-specific posting strategy that lifted engagement by 20%.
          </>,
          <>
            Built a two-stage SQL validation framework on top of the social media pipeline to
            catch data quality issues before they hit reporting - brought errors down by 60%
            across 10+ Tableau dashboards.
          </>,
          <>
            Set up a self-serve reporting table in Snowflake that pre-computed topic volumes,
            period-over-period trends, and seasonality automatically, replacing a recurring
            manual process and cutting turnaround by 95%.
          </>,
          <>
            Used Marketing Mix Model outputs to trace conversion paths by channel and customer
            segment across owned media tied to $35.6B in net new client assets, and put together
            6 prioritized recommendations to sharpen acquisition targeting.
          </>,
          <>
            Ran an A/B test analysis on paid social creatives across 140K impressions using SQL
            and Python, found a statistically significant 9% drop in cost per acquisition, and
            helped the team make the call to scale the winner and shift budget accordingly.
          </>,
          <>
            Reconciled MTA paid media spend weekly across 20+ channels against internal
            benchmarks, catching discrepancies in 5% of them before they affected budget tracking.
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
            Built an LSTM-Autoencoder on multivariate telemetry from 4 industrial stenter machines
            to flag anomalies before they became failures, hit 89% precision and 82% recall,
            catching issues 24 hours out.
          </>,
          <>
            Backtested against 12 months of maintenance history and projected a 31% reduction
            in unplanned downtime.
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
            Built a pneumonia detection model using GradCAM on 5,800 chest X-rays, hit 93% accuracy,
            and wrapped it in a Streamlit app with heatmaps so clinicians could see exactly what
            the model was flagging.
          </>,
          <>
            Built a sign language recognition system using MediaPipe and LSTM, hitting 94% accuracy
            on ASL gestures, and deployed it as a learning tool for school students.
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
            Built an Azure Data Factory pipeline to pull nested JSON from a REST API, cut
            processing time by 40% by flattening the schema and parallelizing Copy Activities
            across 4 partitions.
          </>,
          <>
            Set up Delta Lake with date-partitioned Parquet in Databricks, bringing Spark read
            volume down from 500 GB to 350 GB for time-range queries using partition pruning.
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
