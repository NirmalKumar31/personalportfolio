"use client";
import { motion } from "framer-motion";
import styles from "./contact.module.css";

const fade = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function Contact() {
  return (
    <motion.div
      className={styles.page}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div variants={fade} transition={{ duration: 0.5 }}>
        <h1 className={styles.heading}>Let&apos;s Talk</h1>
        <p className={styles.intro}>
          I enjoy a good conversation, especially around data, interesting problems, and what teams
          are building. Whether you have a role, a project idea, or just want to connect, my inbox
          is open.
        </p>
      </motion.div>

      <motion.blockquote
        variants={fade}
        transition={{ duration: 0.5 }}
        className={styles.callout}
      >
        If your team is building{" "}
        <strong>data pipelines that power real decisions</strong>,{" "}
        <strong>analytics systems that people actually trust</strong>, or{" "}
        <strong>ML models that go beyond the notebook</strong>, I want to hear about it.
        I care about doing the data work well, not just getting it done.
      </motion.blockquote>

      <motion.p variants={fade} transition={{ duration: 0.5 }} className={styles.reachOut}>
        The best way to reach me is directly at{" "}
        <a href="mailto:thirupallikrishnan.n@northeastern.edu" className={styles.emailLink}>
          thirupallikrishnan.n@northeastern.edu
        </a>
        . I check it regularly and usually respond within a day. You can also reach out on
        LinkedIn — I check it often and genuinely enjoy connecting with people there.
      </motion.p>

      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.terminal}>
        <div className={styles.terminalBar}>
          <div className={styles.termDots}>
            <span className={styles.dot} style={{ background: "#ff5f57" }} />
            <span className={styles.dot} style={{ background: "#febc2e" }} />
            <span className={styles.dot} style={{ background: "#28c840" }} />
          </div>
          <span className={styles.terminalTitle}>bash — nk@portfolio</span>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.termRow}>
            <span className={styles.termKey}>NAME</span>
            <span className={styles.termVal}>Nirmalkumar Kesavan</span>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>ROLE</span>
            <span className={styles.termVal}>Data Analyst / Data Engineer (seeking full-time)</span>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>LOCATION</span>
            <span className={styles.termVal}>Boston, MA · open to relocate anywhere</span>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>STATUS</span>
            <span className={styles.termVal}>
              <span className={styles.statusDot}>•</span> Actively looking
            </span>
          </div>
          <div className={styles.termSpacer} />
          <div className={styles.termRow}>
            <span className={styles.termKey}>STACK</span>
            <span className={styles.termVal}>SQL · Python · Snowflake · dbt · Airflow</span>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey} />
            <span className={styles.termVal}>Databricks · PySpark · Tableau · Power BI</span>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey} />
            <span className={styles.termVal}>Azure · AWS · scikit-learn · TensorFlow</span>
          </div>
          <div className={styles.termSpacer} />
          <div className={styles.termComment}>Running eligibility check...</div>
          <div className={styles.termCheck}>✓ OPT + STEM. No sponsorship needed to start</div>
          <div className={styles.termCheck}>✓ Available immediately</div>
          <div className={styles.termCheck}>✓ MS Data Analytics Engineering · Northeastern · GPA: 3.8</div>
          <div className={styles.termSpacer} />
          <div className={styles.termComment}>Opening contact channels...</div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>EMAIL</span>
            <a
              href="mailto:thirupallikrishnan.n@northeastern.edu"
              className={styles.termLink}
            >
              thirupallikrishnan.n@northeastern.edu
            </a>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/nirmalkumartk/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.termLink}
            >
              linkedin.com/in/nirmalkumartk
            </a>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>RESUME</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.termLink}
            >
              /resume.pdf
            </a>
          </div>
          <div className={styles.termSpacer} />
          <div className={styles.termPrompt}>nk@portfolio:~$</div>
        </div>
      </motion.div>

      <motion.div variants={fade} transition={{ duration: 0.5 }} className={styles.findMe}>
        <p className={styles.findMeLabel}>FIND ME AT</p>
        <div className={styles.findMeButtons}>
          <a href="mailto:thirupallikrishnan.n@northeastern.edu" className={styles.findMeBtn}>
            ✉️ Email
          </a>
          <a
            href="https://www.linkedin.com/in/nirmalkumartk/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.findMeBtn}
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/NirmalKumar31"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.findMeBtn}
          >
            🐙 GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.findMeBtn}
          >
            📄 Resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
