'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { about } from '@/resources'
import styles from './work.module.css'

export default function Work() {
  const [openExp, setOpenExp] = useState<number | null>(0)
  const [openEdu, setOpenEdu] = useState<number | null>(null)

  return (
    <div className={styles.page}>

      {/* Work Experience */}
      {about.work.display && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{about.work.title}</h2>
          <div className={styles.sectionIntro}>
            <p className={styles.introStat}>
              I've got about 1.5 years of hands-on experience across data engineering, analytics, and machine learning.
            </p>
            <p className={styles.introHint}>
              Click on any role to see what I actually worked on.
            </p>
          </div>
          <div className={styles.timeline}>
            {about.work.experiences.map((exp, i) => (
              <div key={`${exp.company}-${i}`} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={`${styles.timelineDot} ${openExp === i ? styles.dotActive : ''}`} />
                  {i < about.work.experiences.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </div>
                <div className={`${styles.timelineContent} ${openExp === i ? styles.contentOpen : ''}`}>
                  <button
                    className={styles.expButton}
                    onClick={() => setOpenExp(openExp === i ? null : i)}
                  >
                    <div className={styles.expHeader}>
                      <div className={styles.expMeta}>
                        <p className={styles.role}>{exp.role}</p>
                        <h3 className={styles.company}>{exp.company}</h3>
                      </div>
                      <div className={styles.expRight}>
                        <span className={styles.timeframe}>{exp.timeframe}</span>
                        <span className={styles.toggleIcon}>
                          {openExp === i ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openExp === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className={styles.bullets}>
                          {exp.achievements.map((ach, j) => (
                            <li key={j} className={styles.bullet}>{ach}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {about.studies.display && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{about.studies.title}</h2>
          <div className={styles.timeline}>
            {about.studies.institutions.map((inst, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={`${styles.timelineDot} ${openEdu === i ? styles.dotActive : ''}`} />
                  {i < about.studies.institutions.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </div>
                <div className={`${styles.timelineContent} ${openEdu === i ? styles.contentOpen : ''}`}>
                  <button
                    className={styles.expButton}
                    onClick={() => setOpenEdu(openEdu === i ? null : i)}
                  >
                    <div className={styles.expHeader}>
                      <div className={styles.expMeta}>
                        <p className={styles.role}>{inst.degree}</p>
                        <h3 className={styles.company}>{inst.name}</h3>
                      </div>
                      <span className={styles.toggleIcon}>
                        {openEdu === i ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openEdu === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className={styles.eduDesc}>{inst.description}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
