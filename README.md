# Leadership Skills Mastery 🚀

An **interactive, open-source leadership development curriculum** designed for practicing professionals and emerging leaders. Self-paced, modular, and built with evidence-based frameworks.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-July%202026-brightgreen)]()
[![Modules](https://img.shields.io/badge/Modules-8%2F8-blue)]()
[![Interactive Components](https://img.shields.io/badge/Interactive-5%2B-blueviolet)]()

---

## 🎯 What Is This?

**Leadership Skills Mastery** is a comprehensive, self-directed leadership curriculum grounded in adult learning principles and evidence-based frameworks. It's designed for:

- **Emerging leaders** transitioning into management roles
- **Mid-career professionals** seeking to deepen leadership competencies
- **Anyone** looking for structured, scenario-based leadership development

Each module combines conceptual frameworks (Situational Leadership, Emotional Intelligence, Change Management) with interactive tools, real-world case studies, and reflective practice.

---

## 📚 Course Modules

| # | Module | Topics | Interactive Component | Duration |
|---|--------|--------|----------------------|----------|
| 1 | **Foundations of Leadership** | Leadership styles, situational leadership, values | Leadership Style Self-Assessment | 60-90 min |
| 2 | **Emotional Intelligence** | EI framework, self-awareness, team dynamics | EI Scenario Matcher | 75-100 min |
| 3 | **Building High-Performing Teams** | Team development, psychological safety, trust | Team Diagnosis Tool | 90-120 min |
| 4 | **Communication & Influence** | Active listening, crucial conversations, influence | Conversation Simulator | 90-120 min |
| 5 | **Decision-Making & Problem-Solving** | Decision frameworks, cognitive bias, adaptive leadership | Bias Detective | 75-100 min |
| 6 | **Change Leadership & Resilience** | Change models, resistance, organizational resilience | Change Scenario Planner | 100-130 min |
| 7 | **Inclusive Leadership & Diversity** | DEIB, unconscious bias, cultural intelligence | Bias Scenario Analyzer | 90-120 min |
| 8 | **Strategic Thinking & Vision** | Strategic mindset, vision crafting, execution | Vision Builder | 80-110 min |

**Total Duration:** 8–12 weeks (self-paced) | ~650–900 minutes of guided learning

---

## 🏗️ How It's Built

```
leadership-skills-mastery/
├── README.md                          # You are here
├── COURSE_ARCHITECTURE.md             # Design doc, learning objectives, Kirkpatrick alignment
├── CONTRIBUTING.md                    # How to contribute or extend
├── LICENSE                            # MIT License
│
├── 📁 modules/
│   ├── 01-foundations/
│   │   ├── README.md                  # Module overview & learning objectives
│   │   ├── lesson-01-what-is-leadership.md
│   │   ├── lesson-02-situational-leadership.md
│   │   └── components/
│   │       └── leadership-style-assessment.jsx
│   │
│   ├── 02-emotional-intelligence/
│   │   ├── README.md
│   │   ├── lesson-01-ei-framework.md
│   │   ├── lesson-02-self-awareness.md
│   │   └── components/
│   │       └── ei-scenario-matcher.jsx
│   │
│   ├── 03-team-building/
│   ├── 04-communication/
│   ├── 05-decision-making/
│   ├── 06-change-leadership/
│   ├── 07-inclusive-leadership/
│   └── 08-strategic-thinking/
│
├── 📁 components/
│   └── shared/                        # Reusable React components
│       ├── ScenarioCard.jsx
│       ├── Quiz.jsx
│       ├── ReflectionPrompt.jsx
│       └── styles.css
│
├── 📁 assessments/
│   ├── self-assessments.json          # Scoring data for interactive tools
│   ├── case-studies.md
│   └── reflection-prompts.md
│
└── 📁 assets/
    ├── images/
    ├── icons/
    └── frameworks-visual.pdf

```

---

## 🚀 Getting Started

### Option 1: **Read Online (GitHub Pages)**
Visit the [published site](#) to read lessons and access interactive components in your browser.

### Option 2: **Clone & Run Locally**
```bash
# Clone the repo
git clone https://github.com/[your-username]/leadership-skills-mastery.git
cd leadership-skills-mastery

# Install dependencies (if running React components locally)
npm install

# Start development server
npm start

# Build static site (GitHub Pages)
npm run build
```

### Option 3: **Just Read the Markdown**
Every lesson is written in clear, accessible Markdown. Open any `lesson-*.md` file and read directly in GitHub or your editor.

---

## 🎓 Learning Design Principles

This course is built on **evidence-based adult learning theory**:

- **Kirkpatrick Model:** Designed to measure reaction, learning, behavior change, and organizational results
- **Andragogy (Knowles):** Self-directed, experience-based, problem-centered learning
- **Scenario-Based Learning:** Real-world dilemmas → analytical thinking → application
- **Modular Architecture:** Start anywhere, progress at your pace, modules stand alone
- **Interactive Components:** Engage learners, make concepts tangible, provide immediate feedback

**Frameworks Featured:**
- Situational Leadership (Hersey & Blanchard)
- Emotional Intelligence (Daniel Goleman)
- Change Management (Kotter, Lewin)
- Psychological Safety (Amy Edmondson, Google's Project Aristotle)
- Systems Thinking & Strategic Leadership

---

## 🔧 Interactive Components

Each module includes React-based interactive tools:

### **Module 2: EI Scenario Matcher**
Drag-and-drop scenarios to match Emotional Intelligence competencies. Immediate feedback with strategies.

### **Module 5: Bias Detective**
Identify cognitive biases in leadership decisions. Reframe decisions and explore consequences.

### **Module 6: Change Scenario Planner**
Build a change roadmap. Anticipate resistance. Design stakeholder communications.

### **Module 8: Vision Builder**
Articulate your leadership vision. Test it against strategy. Export as actionable plan.

---

## 📊 Assessment Strategy

| Type | Purpose | Example |
|------|---------|---------|
| **Self-Assessment** | Diagnose current state, build self-awareness | EI inventory, leadership style profile |
| **Scenario Analysis** | Apply frameworks to ambiguous situations | "How would you handle this team conflict?" |
| **Reflection Journals** | Deepen learning, connect to lived experience | Prompts after each lesson |
| **Case Studies** | Analyze real-world complexity | Change initiative, communication breakdown |
| **Action Plans** | Drive behavior change | 30-60-90 day plan, inclusion audit |

---

## 🎯 Who Should Use This?

✅ **Great for:**
- First-time managers building foundational skills
- Leaders seeking structured reflection & growth
- Teams doing collaborative learning
- Portfolio/case study material for ID/L&D professionals
- Anyone who wants leadership concepts with teeth (not generic motivation)

❌ **Not a fit for:**
- Executive coaching (this is not personalized, 1:1 coaching)
- Organizational transformation (this is individual development)
- "Quick tips" seekers (this requires engagement & reflection)

---

## 🤝 Contributing

**Want to improve this curriculum?**

1. Fork the repo
2. Create a feature branch (`git checkout -b improve/module-3`)
3. Make your changes (add lessons, improve components, fix typos)
4. Submit a pull request with description of changes

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Contribution ideas:**
- Additional case studies
- Translated lessons (Spanish, Mandarin, Arabic)
- New interactive components
- Research citations & frameworks
- Accessibility improvements
- Feedback from learners/facilitators

---

## 📖 Learning Path Recommendations

**For Emerging Leaders:**
1. Module 1: Foundations
2. Module 2: Emotional Intelligence
3. Module 3: Building Teams
4. Module 4: Communication

**For Mid-Career Leaders:**
1. Module 5: Decision-Making
2. Module 6: Change Leadership
3. Module 8: Strategic Thinking
4. Module 7: Inclusive Leadership

**For Self-Directed Learning:**
Take modules in any order—they're designed to stand alone.

---

## 📚 Frameworks & Research

This curriculum draws from:

- **Situational Leadership** (Hersey & Blanchard, 1969)
- **Emotional Intelligence Model** (Goleman, 1995)
- **Psychological Safety** (Edmondson, 1999; Google Project Aristotle, 2012)
- **Crucial Conversations** (Patterson, Grenny, McMillan, Switzler, 2011)
- **Change Management** (Kotter, 1996; Lewin, 1947)
- **Cultural Intelligence** (Earley & Ang, 2003)
- **Kirkpatrick Model of Training Evaluation** (Kirkpatrick & Kirkpatrick, 2016)

Full bibliography available in [COURSE_ARCHITECTURE.md](COURSE_ARCHITECTURE.md).

---

## 📋 Roadmap

- [x] Course architecture & learning design
- [x] GitHub repo structure
- [ ] Module 1: Foundations (content + interactive component)
- [ ] Module 2: Emotional Intelligence (content + interactive component)
- [ ] Module 3: Building Teams (content + interactive component)
- [ ] Modules 4–8 (in progress)
- [ ] GitHub Pages site & custom styling
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Learner feedback collection & iteration
- [ ] Spanish translation
- [ ] Facilitator guide for group use

---

## 📄 License

This project is licensed under the **MIT License**—see [LICENSE](LICENSE) file for details.

You're free to use, adapt, and share this curriculum for personal, educational, and commercial purposes.

---

## 💬 Questions? Feedback?

- Open an [Issue](https://github.com/[your-username]/leadership-skills-mastery/issues) to report bugs or suggest improvements
- Check existing discussions in the [Discussions](https://github.com/[your-username]/leadership-skills-mastery/discussions) tab
- Follow development progress in the [Project Board](#)

---

## 👤 About the Author

**AQ** | Instructional Designer & eLearning Developer

10+ years in learning & development, specializing in:
- Instructional design (ADDIE, SAM, Kirkpatrick)
- eLearning development (Articulate RISE, React/JSX)
- AI-assisted content workflows
- Leadership & organizational development

🔗 [Portfolio](#) | [LinkedIn](#) | [Twitter](#)

---

## 🙏 Acknowledgments

- Kirkpatrick partners for evaluation frameworks
- Google's Project Aristotle research on team effectiveness
- All researchers & practitioners cited throughout the curriculum
- Open-source community for inspiring collaborative learning

---

**Last Updated:** July 2026 | **Version:** 1.0

---

**Let's grow leaders. Let's do it well.** 🚀
