import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Binary,
  BrainCircuit,
  Braces,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Command,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Sparkles,
  Sun,
  TerminalSquare,
  X,
} from "lucide-react";
import { journey, portfolio, projects, skillGroups } from "./data.js";

const roles = [
  "Software Engineer in the Making",
  "AI/ML Enthusiast",
  "C++ Problem Solver",
  "LLM Application Developer",
];

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="eyebrow-mark" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

function GithubLink({ href, label = "View repository" }) {
  if (!href) {
    return (
      <span className="project-link project-link--unavailable" aria-disabled="true">
        <Github size={16} aria-hidden="true" />
        Repository not linked
      </span>
    );
  }

  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      <Github size={16} aria-hidden="true" />
      {label}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function ProjectArtwork({ type }) {
  if (type === "documents") {
    return (
      <div className="artwork artwork--documents" aria-hidden="true">
        <div className="doc-sheet doc-sheet--back">
          <span />
          <span />
          <span />
        </div>
        <div className="doc-sheet doc-sheet--front">
          <div className="doc-sheet__icon"><Braces size={18} /></div>
          <i className="doc-line doc-line--wide" />
          <i className="doc-line" />
          <i className="doc-line doc-line--short" />
          <div className="doc-chip"><Sparkles size={12} /> indexed</div>
        </div>
        <div className="retrieval-card">
          <div className="retrieval-card__top"><Network size={14} /> retrieval</div>
          <div className="retrieval-node retrieval-node--one" />
          <div className="retrieval-node retrieval-node--two" />
          <div className="retrieval-node retrieval-node--three" />
          <div className="retrieval-line retrieval-line--one" />
          <div className="retrieval-line retrieval-line--two" />
          <div className="retrieval-line retrieval-line--three" />
        </div>
        <span className="artwork-caption">Ask your documents, not the noise.</span>
      </div>
    );
  }

  if (type === "assistant") {
    return (
      <div className="artwork artwork--assistant" aria-hidden="true">
        <div className="assistant-window">
          <div className="window-top">
            <span className="window-dots"><i /><i /><i /></span>
            <span>personal assistant</span>
            <CircleDot size={13} className="window-status" />
          </div>
          <div className="assistant-thread">
            <div className="assistant-message assistant-message--user">
              Summarize my next steps
            </div>
            <div className="assistant-message assistant-message--ai">
              <span className="assistant-avatar"><Sparkles size={12} /></span>
              <span>Here’s a clear plan for your day.</span>
            </div>
            <div className="assistant-task"><Check size={13} /> Review project notes</div>
            <div className="assistant-task"><Check size={13} /> Prepare for tomorrow</div>
          </div>
          <div className="assistant-input">Ask anything <ArrowUpRight size={14} /></div>
        </div>
        <div className="model-pill"><span /> local model · Ollama</div>
      </div>
    );
  }

  if (type === "banking") {
    return (
      <div className="artwork artwork--banking" aria-hidden="true">
        <div className="bank-card">
          <div className="bank-card__top"><span>ACCOUNT OVERVIEW</span><span>•••</span></div>
          <div className="bank-card__label">Available balance</div>
          <div className="bank-card__balance">••••••</div>
          <div className="bank-card__meter"><span /></div>
          <div className="bank-card__bottom"><span>SECURE SESSION</span><span>01 / 04</span></div>
        </div>
        <div className="transaction-card">
          <div className="transaction-card__heading">Recent activity <ArrowUpRight size={13} /></div>
          <div className="transaction-row"><i className="transaction-dot transaction-dot--in" /><span>Deposit</span><b>+••••</b></div>
          <div className="transaction-row"><i className="transaction-dot transaction-dot--out" /><span>Withdrawal</span><b>−••••</b></div>
          <div className="transaction-row"><i className="transaction-dot transaction-dot--in" /><span>Deposit</span><b>+••••</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="artwork artwork--code" aria-hidden="true">
      <div className="code-window">
        <div className="window-top">
          <span className="window-dots"><i /><i /><i /></span>
          <span>practice.cpp</span>
          <TerminalSquare size={14} />
        </div>
        <div className="code-body">
          <div><b>01</b><span><i>vector</i>&lt;<em>int</em>&gt; values;</span></div>
          <div><b>02</b><span><i>for</i> (<em>int</em> value : values) {"{"}</span></div>
          <div><b>03</b><span className="code-indent"><i>if</i> (value &gt; best) {"{"}</span></div>
          <div><b>04</b><span className="code-indent-more">best = value;</span></div>
          <div><b>05</b><span className="code-indent">{"}"}</span></div>
          <div><b>06</b><span>{"}"}</span></div>
          <div><b>07</b><span className="code-muted">// one step at a time</span></div>
        </div>
        <div className="code-footer"><span className="code-footer__dot" /> Compiling ideas</div>
      </div>
      <div className="algorithm-orbit"><Binary size={20} /><span>DSA</span></div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index % 2 ? 0.08 : 0}>
      <article className={`project-card project-card--${project.visual} ${index % 2 ? "project-card--reversed" : ""}`}>
        <div className="project-card__visual">
          <ProjectArtwork type={project.visual} />
          <span className="project-number">{project.number}</span>
        </div>
        <div className="project-card__content">
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>{technology}</span>
            ))}
          </div>
          <div className="project-card__links">
            <GithubLink href={project.repoUrl} />
            {project.demoUrl && (
              <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SkillIcon({ name }) {
  const icons = {
    code: Code2,
    brain: BrainCircuit,
    web: Command,
    database: Database,
    tools: TerminalSquare,
    binary: Binary,
  };
  const Icon = icons[name] ?? Code2;
  return <Icon size={18} strokeWidth={1.7} aria-hidden="true" />;
}

function JourneyIcon({ name }) {
  const icons = {
    graduation: GraduationCap,
    binary: Binary,
    brain: BrainCircuit,
    layers: Layers3,
  };
  const Icon = icons[name] ?? CircleDot;
  return <Icon size={18} strokeWidth={1.7} aria-hidden="true" />;
}

function formatDate(date) {
  if (!date) return "Date unavailable";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function ActivitySection() {
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      setStatus("loading");
      try {
        const response = await fetch(
          `https://api.github.com/users/${portfolio.githubUsername}/repos?sort=updated&per_page=100`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(
            response.status === 403 || response.status === 429
              ? "GitHub’s public API is rate-limited right now. Please try again shortly."
              : `GitHub returned an error (${response.status}). Please try again.`,
          );
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("GitHub returned an unexpected repository response.");
        }
        setRepositories(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") return;
        setStatus("error");
        setRepositories([]);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Could not load public repositories from GitHub.",
        );
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, [attempt]);

  const recentRepositories = repositories.slice(0, 3);

  return (
    <section className="activity-section section-wrap" id="activity">
      <Reveal>
        <div className="activity-panel">
          <div className="activity-panel__header">
            <div>
              <span className="eyebrow"><span className="eyebrow-mark" /> GitHub activity</span>
              <h2>Work in the open.</h2>
              <p>A live look at public repositories, pulled directly from GitHub.</p>
            </div>
            <a
              className="button button--subtle activity-profile-link"
              href={portfolio.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} aria-hidden="true" />
              View profile
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="activity-overview">
            <div className="activity-count">
              <span className="activity-count__value">
                {status === "success" ? repositories.length : status === "loading" ? "—" : "—"}
              </span>
              <span className="activity-count__label">public repositories</span>
            </div>
            <a
              className="contribution-link"
              href={`${portfolio.githubUrl}?tab=overview`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contribution-link__icon"><Github size={18} /></span>
              <span><b>Contribution calendar</b><small>See the full activity graph on GitHub</small></span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="repository-list" aria-live="polite">
            {status === "loading" && (
              <div className="activity-message" role="status">
                <span className="loading-dot" /> Loading public repositories…
              </div>
            )}
            {status === "error" && (
              <div className="activity-message activity-message--error" role="alert">
                <span>{errorMessage}</span>
                <button className="text-button" onClick={() => setAttempt((value) => value + 1)}>
                  Try again <ArrowRight size={14} />
                </button>
              </div>
            )}
            {status === "success" && repositories.length === 0 && (
              <div className="activity-message">No public repositories are available yet.</div>
            )}
            {status === "success" && recentRepositories.map((repository, index) => (
              <motion.a
                className="repository-row"
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                key={repository.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: index * 0.06 }}
              >
                <span className="repository-row__icon"><Code2 size={17} /></span>
                <span className="repository-row__main">
                  <b>{repository.name}</b>
                  <small>{repository.description || "No description provided."}</small>
                </span>
                <span className="repository-language">
                  <i className={`language-dot language-dot--${(repository.language || "other").toLowerCase().replace(/[^a-z0-9]/g, "")}`} />
                  {repository.language || "Language not specified"}
                </span>
                <span className="repository-updated">Updated {formatDate(repository.pushed_at || repository.updated_at)}</span>
                <ArrowUpRight size={15} className="repository-arrow" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3100);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className={`site-shell theme-${theme}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label={`${portfolio.name}, home`} onClick={closeMenu}>
            <span className="brand-mark">T<span>.</span></span>
            <span className="brand-name">{portfolio.name}<i>®</i></span>
          </a>
          <div className="desktop-nav">
            {navItems.map(([label, id]) => (
              <a
                className={`nav-link ${activeSection === id ? "nav-link--active" : ""}`}
                href={`#${id}`}
                key={id}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-contact" href="#contact">
              Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              id="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {navItems.map(([label, id]) => (
                <a href={`#${id}`} key={id} onClick={closeMenu}>
                  {label}<ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
              <div className="mobile-menu__footer">
                <span>Building with intention.</span>
                <SocialLink href={portfolio.githubUrl} label="GitHub"><Github size={17} /></SocialLink>
                <SocialLink href={portfolio.linkedinUrl} label="LinkedIn"><Linkedin size={17} /></SocialLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="hero-content section-wrap">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.15 } },
              }}
            >
              <motion.div className="hero-kicker" variants={revealVariants}>
                <span className="status-indicator" />
                <span>Curious by nature. Building by design.</span>
              </motion.div>
              <motion.p className="hero-name" variants={revealVariants}>Hi, I’m {portfolio.name}.</motion.p>
              <motion.h1 variants={revealVariants}>
                <span>Building Intelligent</span>
                <span>Solutions Through</span>
                <span className="gradient-text">Code<span className="title-period">.</span></span>
              </motion.h1>
              <motion.div className="hero-role" variants={revealVariants} aria-live="polite">
                <span className="role-dash" />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={roleIndex}
                    data-role-text
                    data-role-index={roleIndex}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <motion.p className="hero-description" variants={revealVariants}>{portfolio.intro}</motion.p>
              <motion.div className="hero-actions" variants={revealVariants}>
                <a className="button button--primary" href="#projects">
                  Explore my work <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                {portfolio.resumeUrl ? (
                  <a className="button button--ghost" href={portfolio.resumeUrl} target="_blank" rel="noreferrer">
                    Download resume <Download size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="button button--ghost button--inactive" aria-label="Resume link has not been configured">
                    <span title="Add a resume URL in src/data.js to enable this download.">Download resume</span>
                    <Download size={16} aria-hidden="true" />
                  </span>
                )}
              </motion.div>
              <motion.div className="hero-socials" variants={revealVariants}>
                <span className="hero-socials__label">Find me on</span>
                <SocialLink href={portfolio.githubUrl} label="GitHub"><Github size={17} /></SocialLink>
                <SocialLink href={portfolio.linkedinUrl} label="LinkedIn"><Linkedin size={17} /></SocialLink>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-art"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Abstract glowing code-inspired illustration"
            >
              <div className="hero-art__halo" />
              <div className="hero-orbit hero-orbit--outer" />
              <div className="hero-orbit hero-orbit--inner" />
              <div className="hero-art__core">
                <div className="core-cross core-cross--horizontal" />
                <div className="core-cross core-cross--vertical" />
                <div className="core-glass"><Braces size={46} strokeWidth={1.15} /></div>
                <span className="core-star core-star--one">✳</span>
                <span className="core-star core-star--two">✦</span>
              </div>
              <div className="floating-tech floating-tech--cpp"><span>C++</span></div>
              <div className="floating-tech floating-tech--python"><span className="python-mark">Py</span><span>Python</span></div>
              <div className="floating-tech floating-tech--react"><span className="react-mark">✳</span><span>React</span></div>
              <div className="floating-tech floating-tech--ollama"><span className="ollama-mark">◎</span><span>Ollama</span></div>
              <div className="hero-art__caption"><span>IDEAS, MEET EXECUTION</span><i /><span>01 / ∞</span></div>
            </motion.div>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
            <span>Scroll to explore</span>
            <span className="scroll-cue__line"><i /></span>
          </a>
          <div className="hero-index" aria-hidden="true">01 — 05</div>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="about-layout">
            <Reveal className="about-copy">
              <span className="eyebrow"><span className="eyebrow-mark" /> A little about me</span>
              <h2>Making technology feel a little more <span className="gradient-text">human.</span></h2>
              <p>{portfolio.intro}</p>
              <p>
                From C++ fundamentals to local LLM applications, I’m exploring how
                strong engineering can turn complex ideas into clear, useful experiences.
              </p>
              <div className="education-card">
                <span className="education-card__icon"><GraduationCap size={19} /></span>
                <span className="education-card__text">
                  <small>EDUCATION</small>
                  <b>{portfolio.education.title}</b>
                  <span>{portfolio.education.detail}</span>
                </span>
                <span className="education-status"><i />{portfolio.education.status}</span>
              </div>
              {portfolio.resumeUrl && (
                <a className="text-link" href={portfolio.resumeUrl} target="_blank" rel="noreferrer">
                  View my resume <ArrowUpRight size={15} />
                </a>
              )}
            </Reveal>
            <Reveal className="about-visual" delay={0.12}>
              <div className="about-visual__backdrop" />
              <div className="about-visual__grid" />
              <div className="about-portrait">
                <div className="portrait-orbit portrait-orbit--one" />
                <div className="portrait-orbit portrait-orbit--two" />
                <div className="portrait-monogram">T<span>.</span></div>
                <div className="portrait-spark portrait-spark--one">✦</div>
                <div className="portrait-spark portrait-spark--two">✳</div>
              </div>
              <div className="floating-note floating-note--code">
                <span className="floating-note__label">CURRENTLY EXPLORING</span>
                <code><span>const</span> ideas = <b>build</b>();</code>
              </div>
              <div className="floating-note floating-note--education">
                <span className="floating-note__icon"><Sparkles size={14} /></span>
                <span><b>Learn. Make. Refine.</b><small>One thoughtful iteration at a time</small></span>
              </div>
              <span className="about-visual__index">TC / 2026</span>
            </Reveal>
          </div>
        </section>

        <section className="skills-section section-wrap section-pad" id="skills">
          <Reveal>
            <SectionHeading
              eyebrow="The toolkit"
              title={<>Tools for the <span className="gradient-text">curious.</span></>}
              description="A growing set of tools and ideas I reach for to bring thoughtful software to life."
            />
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 0.05}>
                <article className="skill-card">
                  <div className="skill-card__top">
                    <span className="skill-icon"><SkillIcon name={group.icon} /></span>
                    <ArrowUpRight size={15} className="skill-card__arrow" aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="skills-note">
            <Sparkles size={15} aria-hidden="true" />
            <span>Always learning. Never claiming a percentage.</span>
          </Reveal>
        </section>

        <section className="projects-section section-wrap section-pad" id="projects">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={<>A few things I’ve <span className="gradient-text">made.</span></>}
              description="Projects are where the learning becomes real. Here are a few ideas I’ve brought to life."
            />
          </Reveal>
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.number} />
            ))}
          </div>
        </section>

        <ActivitySection />

        <section className="journey-section section-wrap section-pad" id="journey">
          <div className="journey-layout">
            <Reveal className="journey-intro">
              <SectionHeading
                eyebrow="The journey"
                title={<>Still becoming. <span className="gradient-text">Always building.</span></>}
                description="A work in progress, by design. The most interesting part is what comes next."
              />
              <a className="button button--subtle" href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                Follow along on GitHub <ArrowUpRight size={15} />
              </a>
            </Reveal>
            <div className="timeline">
              {journey.map((item, index) => (
                <Reveal className="timeline-item" delay={index * 0.06} key={item.title}>
                  <span className="timeline-item__rail"><i /></span>
                  <span className="timeline-item__icon"><JourneyIcon name={item.icon} /></span>
                  <div className="timeline-item__copy">
                    <div className="timeline-item__meta"><span>{item.eyebrow}</span><span>{item.date}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <Reveal className="contact-content">
            <span className="eyebrow"><span className="eyebrow-mark" /> The next chapter</span>
            <h2>Have an Interesting Idea?<br /><span className="gradient-text">Let’s Build It.</span></h2>
            <p>
              I’m always glad to meet thoughtful people working on meaningful things.
              Let’s start with a conversation.
            </p>
            <div className="contact-actions">
              {portfolio.email ? (
                <a className="button button--primary" href={`mailto:${portfolio.email}`}>
                  Say hello <Mail size={16} />
                </a>
              ) : (
                <a className="button button--primary" href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                  Connect on GitHub <Github size={16} />
                </a>
              )}
              <SocialLink href={portfolio.linkedinUrl} label="LinkedIn"><Linkedin size={18} /></SocialLink>
              <SocialLink href={portfolio.githubUrl} label="GitHub"><Github size={18} /></SocialLink>
            </div>
          </Reveal>
          <div className="contact-orbit contact-orbit--one" aria-hidden="true" />
          <div className="contact-orbit contact-orbit--two" aria-hidden="true" />
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a href="#home" className="brand brand--footer" aria-label="Back to top">
          <span className="brand-mark">T<span>.</span></span>
          <span className="brand-name">{portfolio.name}<i>®</i></span>
        </a>
        <span className="footer-note">Designed with intention. Built with curiosity.</span>
        <a href="#home" className="back-to-top">Back to top <ChevronDown size={14} /></a>
        <span className="footer-copy">© {new Date().getFullYear()} {portfolio.name}</span>
      </footer>
    </div>
  );
}

export default App;
