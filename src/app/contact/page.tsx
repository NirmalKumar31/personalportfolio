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
        If your team needs someone who can turn raw data into insights people actually act on,
        build <strong>analytics systems that hold up under scrutiny</strong>, design{" "}
        <strong>pipelines that run reliably in production</strong>, or work on{" "}
        <strong>ML that goes beyond the notebook</strong>, I want to hear about it.
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
              style={{ color: "#ffffff" }}
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
              style={{ color: "#ffffff" }}
            >
              linkedin.com/in/nirmalkumartk
            </a>
          </div>
          <div className={styles.termRow}>
            <span className={styles.termKey}>GITHUB</span>
            <a
              href="https://github.com/NirmalKumar31"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.termLink}
              style={{ color: "#ffffff" }}
            >
              github.com/NirmalKumar31
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nirmalkumartk/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.findMeBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/NirmalKumar31"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.findMeBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 24 12c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
