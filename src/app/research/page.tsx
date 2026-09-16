"use client";
import { motion } from "framer-motion";
import styles from "./research.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease } },
};

const PROTOCOLS = [
  {
    name: "Dinucleotide-matched negatives",
    tag: "Protocol A",
    desc: "Negative windows are sampled to match the dinucleotide frequencies of the positives. This is the loosest constraint: it controls for local sequence composition at the two-nucleotide level but leaves higher-order structure unconstrained.",
    delta: "+0.0663 incremental AUROC",
  },
  {
    name: "GC-matched negatives",
    tag: "Protocol B",
    desc: "Negatives are matched on overall GC content rather than dinucleotide frequencies. A stricter composition constraint than Protocol A, which reduces the apparent AUROC while the estimated incremental contribution rises.",
    delta: "+0.0265 incremental AUROC",
  },
  {
    name: "Bias-aware negatives",
    tag: "Protocol C",
    desc: "The strictest protocol: negatives are drawn to neutralize higher-order composition biases simultaneously. Under this constraint the incremental contribution is smallest in absolute terms, but the composition baseline itself is hardest to beat.",
    delta: "+0.0122 incremental AUROC",
  },
];

const STATS = [
  { value: "4.84×", label: "span in apparent 4-mer contribution across three negative-set protocols" },
  { value: "94", label: "ENCODE eCLIP datasets, held constant across all protocol arms" },
  { value: "1156/1156", label: "numeric assertions verified against committed evidence (golden.yaml)" },
  { value: "3", label: "model classes tested: 4-mer, 7K-param CNN, and fine-tuned SpliceBERT" },
];

export default function Research() {
  return (
    <motion.div
      className={styles.page}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
    >
      {/* Header */}
      <motion.div variants={fade} className={styles.header}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Preprint · Research Square · 2026
        </div>
        <h1 className={styles.title}>
          Apparent sequence-model contribution depends strongly on negative-set construction
        </h1>
        <p className={styles.subtitle}>
          Across 94 ENCODE eCLIP datasets, how much a sequence model appears to add beyond
          nucleotide composition shifts by a factor of nearly five depending solely on how the
          negative examples are constructed, with the model, source peaks, and fold design held fixed.
        </p>
      </motion.div>

      {/* Link buttons */}
      <motion.div variants={fade} className={styles.links}>
        <a
          href="https://doi.org/10.21203/rs.3.rs-10988414/v1"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
        >
          <svg className={styles.linkIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Read the Paper
        </a>
        <a
          href="https://github.com/NirmalKumar31/rbp-protocol-calibration"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkBtn} ${styles.linkBtnSecondary}`}
        >
          <svg className={styles.linkIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://rbpbenchmarkcalibration.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkBtn} ${styles.linkBtnSecondary}`}
        >
          <svg className={styles.linkIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
          Interactive App
        </a>
        <a
          href="https://doi.org/10.5281/zenodo.22679284"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkBtn} ${styles.linkBtnSecondary}`}
        >
          <svg className={styles.linkIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
          Zenodo Archive
        </a>
      </motion.div>

      <motion.hr variants={fade} className={styles.divider} />

      {/* Why I built this */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Where this came from</h2>
        <p className={styles.body}>
          The original goal was to see whether a model trained to predict RNA-binding protein
          binding sites could also flag disease-causing variants. For a while it looked promising:
          SpliceBERT separated pathogenic from benign non-coding variants at 0.83 AUROC without
          ever seeing a disease label.
        </p>
        <p className={styles.body}>
          Then I built the control. Evolutionary conservation alone, with no sequence model at all,
          reached 0.91. Scoring each variant with a different protein&apos;s model still reached 0.68.
          The model was contributing something, but far less than the AUROC suggested, and most of
          what looked protein-specific was not.
        </p>
        <p className={styles.body}>
          While checking that, what kept getting in the way was the negatives. Every AUROC I
          computed depended on which windows I had decided to call &ldquo;not bound&rdquo;, and I
          could not find a paper in the literature that reported what a plain nucleotide counter
          scores on its own negative set. So I stopped chasing a better model number and measured
          the thing all the numbers rest on.
        </p>
      </motion.div>

      {/* Key numbers */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Key numbers</h2>
        <div className={styles.statGrid}>
          {STATS.map((s) => (
            <div key={s.value} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Core finding */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>The finding</h2>
        <div className={styles.finding}>
          <span className={styles.findingLabel}>Primary result</span>
          <p className={styles.findingText}>
            With the model class, source peaks, chromosome-blocked fold design, and estimator held
            fixed, the estimated incremental contribution of a 4-mer model beyond composition spans
            4.84-fold (95% CI 3.98 to 5.81) across three negative-set protocols. The apparent AUROC
            moves in the opposite direction: stricter composition matching lowers it in 94 of 94
            datasets while the estimated contribution rises.
          </p>
        </div>
        <p className={styles.body}>
          The movement is not an AUROC artifact. It survives five estimands including unbounded
          deviance. It holds for a 7089-parameter CNN and a fine-tuned SpliceBERT. And it
          replicates directionally on 135 held-out datasets from Horlacher et al. 2023, a benchmark
          I did not build, covering 108 proteins.
        </p>
        <p className={styles.body}>
          The practical implication is narrow but firm: report a composition-only AUROC under the
          same negative-set protocol as the sequence-model AUROC. Incremental contributions
          computed under different protocols are not comparable.
        </p>
      </motion.div>

      {/* Three protocols */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Three negative-set protocols</h2>
        <p className={styles.body}>
          Each protocol resamples only the negatives. The positives, model architecture, source
          peaks, and fold design stay identical across all three arms, isolating the effect of
          negative construction.
        </p>
        <div className={styles.protocolGrid}>
          {PROTOCOLS.map((p) => (
            <div key={p.tag} className={styles.protocolCard}>
              <span className={styles.protocolTag}>{p.tag}</span>
              <span className={styles.protocolName}>{p.name}</span>
              <p className={styles.protocolDesc}>{p.desc}</p>
              <span className={styles.protocolTag} style={{ background: "#f0fdf4", border: "1px solid #86efac", color: "#15803d" }}>{p.delta}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cross-fitting */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Estimator choice matters too</h2>
        <p className={styles.body}>
          The standard two-stage estimator used in the literature returns a non-zero incremental
          contribution even when the model contains no information the composition baseline does not.
          Applied to that null case, it returns values between +0.011 and +0.014, which is 90% of
          the smallest arm&apos;s reported increment.
        </p>
        <p className={styles.body}>
          Cross-fitting cuts this floor by at least 95% and lands within 0.0005 of the known zero.
          The protocol span shrinks from 5.42-fold to 4.84-fold under cross-fitting, which is why
          the cross-fitted estimate is reported as primary throughout the paper.
        </p>
      </motion.div>

      {/* Verification */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Verification and reproducibility</h2>
        <p className={styles.body}>
          Every number in the paper is committed to the repository alongside the code that produces
          it. A standalone verifier checks 1156 numeric assertions against a golden-value file,
          fails loudly on any disagreement, and works offline with no cloud credentials or GPU.
        </p>
        <div className={styles.codeBlock}>
          <span className={styles.codeComment}># clone, install, verify — no cloud account needed</span>{"\n"}
          git clone https://github.com/NirmalKumar31/rbp-protocol-calibration.git{"\n"}
          cd rbp-protocol-calibration{"\n"}
          pip install -e . -c constraints.txt{"\n\n"}
          <span className={styles.codeComment}># runs 1156 assertions against committed evidence</span>{"\n"}
          PYTHONPATH=src python scripts/verify.py --local results/tables{"\n\n"}
          <span className={styles.codeGreen}>{"# → 1156/1156 PASSED (1018 this paper · 136 earlier study · 2 harness)"}</span>
        </div>
        <p className={styles.body}>
          285 AUROCs are recomputed from committed per-window scores rather than compared against a
          stored value, and the headline contrast is recomputed from raw sequence. Two of the neural
          sweeps are committed rather than rebuilt by the default path; the provenance file names
          which tables belong to which category.
        </p>
      </motion.div>

      {/* Infrastructure */}
      <motion.div variants={fade} className={styles.section}>
        <h2 className={styles.sectionTitle}>Infrastructure</h2>
        <p className={styles.body}>
          The CPU-heavy preprocessing and fold scoring ran on GCP Batch with results written to GCS.
          GPU fine-tuning used Modal, which handled container provisioning and returned scores
          locally rather than back to GCS. Final analysis and figure generation ran locally against
          the downloaded tables.
        </p>
        <div className={styles.tagRow}>
          {["Python", "GCP Batch", "Google Cloud Storage", "Modal", "PyTorch", "scikit-learn", "Zenodo", "pytest"].map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}
