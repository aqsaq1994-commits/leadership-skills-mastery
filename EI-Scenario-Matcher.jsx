import React, { useState } from 'react';
import './EI-Scenario-Matcher.css';

/**
 * EI Scenario Matcher Component
 * 
 * Learning Objective: Apply Emotional Intelligence competencies to real-world scenarios
 * Kirkpatrick Level: L2 (Learning) - Active scenario analysis & pattern recognition
 * 
 * Interactivity:
 * - Drag scenarios to match EI competencies
 * - Immediate feedback on match quality
 * - Reveals explanation & strategy for each competency
 * - Tracks score & engagement
 */

const EIScenarioMatcher = () => {
  // EI Competencies (Goleman model)
  const competencies = [
    {
      id: 'self-awareness',
      name: 'Self-Awareness',
      description: 'Recognizing your own emotions and their impact',
      icon: '🪞',
      color: '#FF6B6B',
    },
    {
      id: 'self-regulation',
      name: 'Self-Regulation',
      description: 'Managing emotions constructively',
      icon: '⚖️',
      color: '#4ECDC4',
    },
    {
      id: 'motivation',
      name: 'Motivation',
      description: 'Drive and resilience toward goals',
      icon: '🚀',
      color: '#FFD93D',
    },
    {
      id: 'empathy',
      name: 'Empathy',
      description: 'Understanding others\' emotions and perspectives',
      icon: '❤️',
      color: '#95E1D3',
    },
    {
      id: 'social-skills',
      name: 'Social Skills',
      description: 'Building relationships and influence',
      icon: '🤝',
      color: '#C7CEEA',
    },
  ];

  // Scenarios (can be dragged to competencies)
  const scenarios = [
    {
      id: 'scenario-1',
      title: 'You receive critical feedback on a project you led.',
      description: 'Your manager points out gaps in execution. You feel defensive but ask clarifying questions to understand the feedback.',
      correctMatch: 'self-awareness',
      explanation: 'You're recognizing your emotional reaction (defensiveness) and managing it to learn. This is self-awareness + self-regulation.',
      strategy: 'Pause. Name the emotion. Ask: "What specifically can I improve?" This turns emotion into learning.',
    },
    {
      id: 'scenario-2',
      title: 'A team member seems withdrawn in a meeting.',
      description: 'You notice subtle cues and check in privately. You listen to understand what\'s happening in their life.',
      correctMatch: 'empathy',
      explanation: 'You're attuned to emotional cues and using them to connect. This is empathy in action.',
      strategy: 'Listen more than you speak. Ask open questions. Validate their feelings before problem-solving.',
    },
    {
      id: 'scenario-3',
      title: 'A stakeholder deadline gets pushed up with no warning.',
      description: 'You stay calm, adapt your plan quickly, and keep your team focused on the new goal.',
      correctMatch: 'self-regulation',
      explanation: 'You managed your stress response (frustration/panic) and responded constructively. This is self-regulation.',
      strategy: 'Breathe. Name what you can control. Reframe as challenge, not crisis.',
    },
    {
      id: 'scenario-4',
      title: 'Your project faces setbacks but you keep rallying the team.',
      description: 'Despite obstacles, you maintain optimism and focus on learnings. Your team stays energized.',
      correctMatch: 'motivation',
      explanation: 'You're demonstrating intrinsic motivation and resilience—key drivers of team morale and achievement.',
      strategy: 'Focus on progress, not perfection. Celebrate small wins. Model persistence.',
    },
    {
      id: 'scenario-5',
      title: 'You disagree with a peer but want to maintain the relationship.',
      description: 'You share your perspective clearly, ask for theirs, and find common ground without compromising.',
      correctMatch: 'social-skills',
      explanation: 'You're managing conflict with emotional intelligence—advocating and listening simultaneously.',
      strategy: 'Use "I" statements. Seek to understand first. Look for solutions that honor both perspectives.',
    },
  ];

  // State
  const [matches, setMatches] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Handlers
  const handleDragStart = (e, scenarioId) => {
    setDraggedItem(scenarioId);
  };

  const handleDrop = (e, competencyId) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newMatches = { ...matches, [draggedItem]: competencyId };
    setMatches(newMatches);

    // Provide immediate feedback
    const scenario = scenarios.find((s) => s.id === draggedItem);
    const isCorrect = scenario.correctMatch === competencyId;
    setFeedback({
      ...feedback,
      [draggedItem]: {
        isCorrect,
        explanation: scenario.explanation,
        strategy: scenario.strategy,
      },
    });

    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setMatches({});
    setFeedback({});
    setCompleted(false);
    setScore(0);
  };

  const handleCheckAnswers = () => {
    let correctCount = 0;
    scenarios.forEach((scenario) => {
      if (matches[scenario.id] === scenario.correctMatch) {
        correctCount++;
      }
    });
    const calculatedScore = Math.round((correctCount / scenarios.length) * 100);
    setScore(calculatedScore);
    setCompleted(true);
  };

  const removeMatch = (scenarioId) => {
    const newMatches = { ...matches };
    delete newMatches[scenarioId];
    setMatches(newMatches);

    const newFeedback = { ...feedback };
    delete newFeedback[scenarioId];
    setFeedback(newFeedback);
  };

  // Render
  return (
    <div className="ei-matcher-container">
      <header className="ei-header">
        <h1>🧠 Emotional Intelligence Scenario Matcher</h1>
        <p>Match real-world leadership scenarios to EI competencies. Drag a scenario card to an EI box.</p>
      </header>

      <div className="ei-content">
        {/* Left: Scenarios */}
        <div className="ei-scenarios-column">
          <h2>Scenarios</h2>
          <div className="scenarios-list">
            {scenarios.map((scenario) => {
              const isMatched = matches[scenario.id];
              const matchedCompetency = competencies.find(
                (c) => c.id === matches[scenario.id]
              );

              return (
                <div
                  key={scenario.id}
                  className={`scenario-card ${isMatched ? 'matched' : ''} ${
                    feedback[scenario.id]?.isCorrect ? 'correct' : ''
                  } ${
                    feedback[scenario.id] && !feedback[scenario.id]?.isCorrect
                      ? 'incorrect'
                      : ''
                  }`}
                  draggable={!isMatched}
                  onDragStart={(e) => handleDragStart(e, scenario.id)}
                >
                  <div className="scenario-header">
                    <h3>{scenario.title}</h3>
                    {isMatched && (
                      <div
                        className="matched-badge"
                        style={{ backgroundColor: matchedCompetency?.color }}
                      >
                        ✓ {matchedCompetency?.name}
                      </div>
                    )}
                  </div>
                  <p className="scenario-description">{scenario.description}</p>

                  {feedback[scenario.id] && (
                    <div
                      className={`feedback-box ${
                        feedback[scenario.id].isCorrect ? 'success' : 'needs-work'
                      }`}
                    >
                      <p className="feedback-label">
                        {feedback[scenario.id].isCorrect ? '✅ Correct!' : '💡 Try again'}
                      </p>
                      <p className="feedback-text">{feedback[scenario.id].explanation}</p>
                      <p className="strategy-label">Strategy:</p>
                      <p className="strategy-text">{feedback[scenario.id].strategy}</p>
                    </div>
                  )}

                  {isMatched && (
                    <button
                      className="remove-btn"
                      onClick={() => removeMatch(scenario.id)}
                    >
                      ✕ Unmatch
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Competencies (Drop zones) */}
        <div className="ei-competencies-column">
          <h2>EI Competencies</h2>
          <p className="instructions">Drop scenarios here →</p>
          <div className="competencies-grid">
            {competencies.map((competency) => {
              const matchedScenarios = Object.entries(matches)
                .filter(([_, cId]) => cId === competency.id)
                .map(([sId]) => sId);

              return (
                <div
                  key={competency.id}
                  className="competency-box"
                  onDrop={(e) => handleDrop(e, competency.id)}
                  onDragOver={handleDragOver}
                  style={{ borderColor: competency.color }}
                >
                  <div className="competency-icon">{competency.icon}</div>
                  <h3>{competency.name}</h3>
                  <p className="competency-desc">{competency.description}</p>

                  {matchedScenarios.length > 0 && (
                    <div className="matched-count" style={{ color: competency.color }}>
                      {matchedScenarios.length} scenario
                      {matchedScenarios.length !== 1 ? 's' : ''}
                    </div>
                  )}

                  <div className="drop-indicator">
                    {matchedScenarios.length === 0 ? 'Drop here' : `✓ Matched`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results & Controls */}
      <footer className="ei-footer">
        {completed ? (
          <div className="results-summary">
            <h3>Your Score: {score}%</h3>
            {score === 100 && (
              <p>🎉 Excellent! You understand EI competencies and can apply them.</p>
            )}
            {score >= 80 && score < 100 && (
              <p>
                ✅ Great work! A few adjustments—review the explanations above for
                deeper understanding.
              </p>
            )}
            {score < 80 && (
              <p>
                💡 Keep exploring! Review the EI framework and scenario explanations.
                Try again to deepen your understanding.
              </p>
            )}
          </div>
        ) : (
          <div className="progress-info">
            <p>
              {Object.keys(matches).length} of {scenarios.length} scenarios matched
            </p>
          </div>
        )}

        <div className="control-buttons">
          {Object.keys(matches).length === scenarios.length && !completed && (
            <button className="check-btn" onClick={handleCheckAnswers}>
              ✓ Check Answers
            </button>
          )}
          {completed && (
            <button className="reset-btn" onClick={handleReset}>
              ↻ Try Again
            </button>
          )}
        </div>
      </footer>

      {/* Learning note */}
      <section className="learning-note">
        <h4>💡 Key Insight</h4>
        <p>
          Emotional Intelligence isn't about being "nice"—it's about understanding
          emotions (yours and others') and using that understanding to lead effectively.
          The strongest leaders apply multiple EI competencies simultaneously.
        </p>
      </section>
    </div>
  );
};

export default EIScenarioMatcher;
