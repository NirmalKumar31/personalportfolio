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
            Built the team&apos;s first automated Snowflake reporting system to compute and track
            KPIs, eliminating manual analysis and reducing report preparation time by 95% and
            giving stakeholders self-service access to insights on demand.
          </>,
          <>
            Developed a two-stage SQL data quality framework that automatically flagged
            abnormalities in social media KPIs, improving reliability across 10+ Tableau
            dashboards and reducing false alerts by 80%.
          </>,
          <>
            Identified high-value customer-channel segments across $35.6B in client asset inflows
            through impact-per-impression analysis using Power BI and DAX, translating insights
            into four strategies for customer acquisition.
          </>,
          <>
            Defined 5 core customer engagement KPIs with cross-functional analytics teams across
            agile sprints, establishing a standardized measurement framework adopted for
            executive reporting.
          </>,
          <>
            Analyzed 270K+ social media interactions by content type, platform and timing using
            SQL window functions, uncovering platform-specific behavioral patterns tied to
            13% higher user engagement.
          </>,
          <>
            Audited weekly spend and conversion data across 20 paid channels using advance Excel,
            resolving discrepancies before attribution skew distorted downstream reporting.
          </>,
          <>
            Performed social listening on brand and product sentiment, surfacing a spike in
            negative reaction to a flagship product launch and flagging the product-perception
            risk to product and marketing teams.
          </>,
          <>
            Defined core engagement metrics across a multi-channel ecosystem, translating
            community interaction data into actionable insights to terminate underperforming
            assets and maximize content reach.
          </>,
          <>
            Formulated and initiated a hypothesis-driven analytical workflow to study customer
            escalation paths, examining past social issue incidents and prior cross-channel
            activity to identify potential early-warning signals.
          </>,
          <>
            Evaluated an A/B test across 140K unique users using SQL and Python statistical
            testing, identifying a 9% cost per acquisition reduction that prompted leadership
            to scale the winning variant.
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
            Developed an end-to-end scalable pipeline in Azure Synapse, backfilling 900M+ rows
            of historical telemetry data into ADLS Gen2 and automating 2M+ daily data loads to
            feed production machine learning models.
          </>,
          <>
            Performed root-cause analysis by clustering sensor data, pinpointing a dominant
            failure pattern linked to 72% of equipment breakdowns to support anomaly model
            development.
          </>,
          <>
            Built a unified relational data model in Azure SQL, integrating 8+ data sources to
            support recurring reporting and ad hoc analysis.
          </>,
          <>
            Validated schema, duplicate, and timestamp conditions with PySpark, improving trust
            in downstream dashboards and daily metrics.
          </>,
          <>
            Quantified the operational impact of predictive-maintenance alerts using SQL,
            projecting a 31% decrease in machine downtime.
          </>,
          <>
            Designed a Power BI dashboard with anomaly-score and alerts, helping the operations
            team to shift to proactive maintenance.
          </>,
          <>
            Version-controlled data workflows in Git, utilizing structured branching to
            streamline code reviews and ensure reliable deployments.
          </>,
        ],
        images: [],
      },
      {
        company: "Qwings",
        timeframe: "July 2023 – September 2023",
        role: "Data Analyst Intern",
        achievements: [
          <>
            Built an Excel Solver allocation model using deployment forecasts and location-level
            stock; redirected 15% excess inventory and reduced planned quarterly purchases.
          </>,
          <>
            Reconstructed the B2B acquisition funnel across 200+ prospects using SQL and Excel,
            identified the largest conversion bottleneck with 41% of total drop-offs and
            prioritized 10 high-intent prospects for follow-up.
          </>,
          <>
            Cross-referenced contract and product-deployment data across 20+ clients, mapping
            usage trends to identify low-adoption offerings and present product expansion
            opportunities to business stakeholders.
          </>,
          <>
            Prototyped an LLM-assisted workflow to summarize open-ended user feedback and
            highlight critical adoption barriers.
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
            Built an Azure Data Factory pipeline to ingest nested JSON from a REST API,
            flattening the schema via Mapping Data Flows and parallelizing Copy Activities
            across 4 source partitions to cut processing time by 40%.
          </>,
          <>
            Optimized PySpark workloads in Databricks by partitioning Delta tables on time-based
            columns, reducing scanned data from 500 GB to 350 GB through partition pruning.
          </>,
          <>
            Transformed raw data into Databricks gold Delta tables, adding Delta Live Tables
            validations to eliminate manual data cleanup.
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
