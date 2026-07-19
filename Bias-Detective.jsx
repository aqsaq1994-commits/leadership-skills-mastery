bash

cat /mnt/user-data/outputs/Bias-Detective.jsx
Output

import React, { useState } from 'react';
import './Bias-Detective.css';

/**
 * Bias Detective Component
 * 
 * Learning Objective: Recognize cognitive biases in leadership decisions
 * Kirkpatrick Level: L2-L3 (Learning + Behavior) - Critical thinking applied to biased reasoning
 * 
 * Interactivity:
 * - Identify which cognitive bias is present in a scenario
 * - Immediate feedback with explanation
 * - Learn reframing strategies
 * - Tracks pattern recognition over multiple scenarios
 */

const BiasDetective = () => {
  // Cognitive Biases (common in leadership decisions)
  const biases = [
    {
      id: 'confirmation-bias',
      name: 'Confirmation Bias',
      definition: 'Seeking and favoring info that confirms what you already believe',
      slug: 'confirmation',
      icon: '🔍',
    },
    {
      id: 'availability-bias',
      name: 'Availability Heuristic',
      definition: 'Over-weighting recent or memorable events when making decisions',
      slug: 'availability',
      icon: '💾',
    },
    {
      id: 'anchoring-bias',
      name: 'Anchoring Bias',
      definition: 'Over-relying on the first piece of information offered',
      slug: 'anchoring',
      icon: '⚓',
    },
    {
      id: 'sunk-cost-fallacy',
      name: 'Sunk Cost Fallacy',
      definition: 'Continuing because of past investment rather than future value',
      slug: 'sunk-cost',
      icon: '💸',
    },
    {
      id: 'groupthink',
      name: 'Groupthink',
      definition: 'Suppressing dissent to maintain group harmony and consensus',
      slug: 'groupthink',
      icon: '👥',
    },
    {
      id: 'fundamental-attribution',
      name: 'Fundamental Attribution Error',
      definition: 'Blaming others\' actions on personality rather than situation',
      slug: 'attribution',
      icon: '🎭',
    },
  ];

  // Scenarios with embedded biases
  const scenarios = [
    {
      id: 'scenario-1',
      situation: 'Hiring Decision: You interview a candidate from your alma mater.',
      context:
        'The candidate is likable and has some relevant experience. You notice they fumble a technical question but think "they probably just had an off day." You move them to the next round over another candidate who answered more consistently.',
      correctBias: 'confirmation-bias',
      explanation:
        'You were selectively interpreting information: overlooking the missed technical question while attributing external causes to their mistake. You favored them because they aligned with your initial positive impression.',
      reframing: [
        'List both candidates\' strengths AND gaps objectively.',
        'Ask: "What evidence would change my mind about this candidate?"',
        'Compare both candidates on the same criteria.',
        'Involve others in the interview process to challenge your perspective.',
      ],
    },
    {
      id: 'scenario-2',
      situation: 'Project Cancellation: A high-visibility project is faltering.',
      context:
        'You launched this initiative 18 months ago with great fanfare. It\'s now 60% over budget and behind schedule. Your team suggests pivoting to a new approach, but you think: "We\'ve already invested so much. We just need to push harder to finish." You double down on the original plan despite mounting evidence it won\'t work.',
      correctBias: 'sunk-cost-fallacy',
      explanation:
        'You\'re justifying continuation based on past investment ("We\'ve already spent so much") rather than evaluating future value. This is the sunk cost fallacy—past costs are irrelevant to whether the project is worth continuing.',
      reframing: [
        'Ask: "If we started from scratch today, would we fund this?"',
        'Separate past decisions from future ones.',
        'Evaluate the project on *future* costs and benefits only.',
        'Celebrate learning from the investment, not protecting it.',
      ],
    },
    {
      id: 'scenario-3',
      situation: 'Team Performance Issue: You manage a high-performer who misses a deadline.',
      context:
        'Sarah usually delivers exceptional work and meets deadlines. This time she misses one. Your first thought: "She must be overwhelmed or unmotivated." You don\'t ask what happened. Meanwhile, a newer team member also misses a deadline, and you think: "They\'re not a strong performer." You don\'t question their circumstances either.',
      correctBias: 'fundamental-attribution',
      explanation:
        'For Sarah, you attributed her miss to external factors (overwhelm). For the newer employee, you attributed it to internal traits (poor performance). This inconsistency reveals fundamental attribution error—judging others by personality instead of situation.',
      reframing: [
        'Ask "What circumstances might explain this?" before assuming personality traits.',
        'Look for situational factors first: workload, obstacles, resources.',
        'Apply the same standards to all team members.',
        'Separate one-off events from patterns before drawing conclusions.',
      ],
    },
    {
      id: 'scenario-4',
      situation: 'Salary Negotiation: An employee asks for a raise.',
      context:
        'The first number the employee mentions is 12% above market rate. You think: "That\'s my starting point. I can\'t go higher than 8%." Even after they justify their request with strong performance metrics, you\'re anchored to that 12% number and offer 8%, which is below what\'s fair for their role.',
      correctBias: 'anchoring-bias',
      explanation:
        'The employee\'s initial ask anchored your entire negotiation. You let their number (not market data or performance) set the frame for your decision.',
      reframing: [
        'Research market rates *before* the conversation.',
        'Propose *your* number first, grounded in data.',
        'If anchored, pause and reset: "Let me consider what\'s fair based on market and performance."',
        'Evaluate based on objective criteria, not opening bids.',
      ],
    },
    {
      id: 'scenario-5',
      situation: 'Strategic Pivot: Your team suggests a data-driven shift in direction.',
      context:
        'Your competitor recently failed at this exact pivot. You think: "We just watched that company crash. It won\'t work." That dramatic failure is fresh in your mind, so you dismiss strong data suggesting the market has shifted. Later, a more nimble competitor succeeds with the exact pivot you rejected.',
      correctBias: 'availability-bias',
      explanation:
        'The competitor\'s recent, dramatic failure was too vivid and available in your memory. You over-weighted it, even though it wasn\'t a good predictor of your own situation.',
      reframing: [
        'Separate "memorable" from "probable." Vivid stories can mislead.',
        'Collect a wider range of examples, not just the most dramatic ones.',
        'Ask: "What data supports or contradicts this decision?"',
        'Distinguish "similar situation" from "similar outcome."',
      ],
    },
    {
      id: 'scenario-6',
      situation: 'Strategic Direction: Team meeting discussing a key decision.',
      context:
        'You tentatively favor Strategy A. In the meeting, the senior stakeholder nods toward A. Everyone else quickly agrees. One quiet team member starts to say "I have a concern..." but the group energy is already pushing toward consensus. You think: "We\'re aligned. Great." You move forward without hearing the concern. Later, the overlooked concern becomes a critical issue.',
      correctBias: 'groupthink',
      explanation:
        'The group suppressed dissent to maintain harmony and get quick consensus. The authority figure\'s signal made it unsafe to disagree. This is groupthink—prioritizing consensus over critical thinking.',
      reframing: [
        'Create explicit permission to disagree: "I want to hear concerns."',
        'Ask quiet team members directly: "What am I missing?"',
        'Nominate a "devil\'s advocate" to surface counterarguments.',
        'Separate the decision from the person: "I value this idea AND I want to stress-test it."',
      ],
    },
  ];

  // State
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedBias, setSelectedBias] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === scenarios.length - 1;

  // Handlers
  const handleBiasSelect = (biasId) => {
    if (feedback) return; // Prevent changing answer after feedback

    const isCorrect = biasId === currentScenario.correctBias;
    const selectedBiasObj = biases.find((b) => b.id === biasId);

    setSelectedBias(biasId);
    setFeedback({
      isCorrect,
      selectedBias: selectedBiasObj,
      explanation: currentScenario.explanation,
      reframing: currentScenario.reframing,
    });

    setTotalAttempts(totalAttempts + 1);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextScenario = () => {
    if (isLastScenario) {
      setCompleted(true);
    } else {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedBias(null);
      setFeedback(null);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedBias(null);
    setFeedback(null);
    setScore(0);
    setTotalAttempts(0);
    setCompleted(false);
  };

  // Render Results
  if (completed) {
    const accuracy = Math.round((score / totalAttempts) * 100);
    return (
      <div className="bias-detective-container">
        <header className="bias-header">
          <h1>🔍 Bias Detective</h1>
        </header>

        <div className="results-page">
          <div className="results-card">
            <h2>You Completed All Scenarios!</h2>

            <div className="score-display">
              <div className="big-score">{accuracy}%</div>
              <p className="score-label">
                {score} of {totalAttempts} correct
              </p>
            </div>

            {accuracy === 100 && (
              <div className="result-message success">
                <p>🎉 Excellent! You\'re a bias detective. You can recognize cognitive patterns and apply reframing strategies with confidence.</p>
              </div>
            )}

            {accuracy >= 75 && accuracy < 100 && (
              <div className="result-message good">
                <p>✅ Strong work! You caught most biases. Review the scenarios you missed to sharpen your pattern recognition.</p>
              </div>
            )}

            {accuracy >= 50 && accuracy < 75 && (
              <div className="result-message fair">
                <p>💡 Good start! Cognitive biases are subtle. Review the explanations and reframing strategies to deepen your understanding.</p>
              </div>
            )}

            {accuracy < 50 && (
              <div className="result-message needs-work">
                <p>📚 Keep learning! Cognitive biases are deeply ingrained. Take time to review the framework and try again—this skill builds with practice.</p>
              </div>
            )}

            <div className="insight-box">
              <h3>Key Insight</h3>
              <p>
                Recognizing bias doesn\'t eliminate it—it just shifts you from unconscious to conscious. The goal is to catch
                bias early enough to make better decisions. You\'ve now practiced 6 common biases. Look for these patterns in your
                real leadership decisions.
              </p>
            </div>

            <button className="reset-btn" onClick={handleReset}>
              ↻ Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Scenario
  return (
    <div className="bias-detective-container">
      <header className="bias-header">
        <h1>🔍 Bias Detective</h1>
        <p>Identify the cognitive bias in each scenario. Watch for thinking patterns, not just outcomes.</p>
      </header>

      <div className="bias-content">
        {/* Progress */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentScenarioIndex + 1) / scenarios.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="progress-text">
          Scenario {currentScenarioIndex + 1} of {scenarios.length}
        </p>

        {/* Scenario */}
        <div className="scenario-section">
          <h2 className="scenario-title">{currentScenario.situation}</h2>
          <p className="scenario-context">{currentScenario.context}</p>

          <div className="question-prompt">
            <p>What cognitive bias is present here?</p>
          </div>
        </div>

        {/* Bias Options */}
        <div className="bias-options">
          {biases.map((bias) => {
            const isSelected = selectedBias === bias.id;
            const isCorrect =
              feedback && bias.id === currentScenario.correctBias;
            const isIncorrect = isSelected && feedback && !feedback.isCorrect;

            return (
              <button
                key={bias.id}
                className={`bias-button ${isSelected ? 'selected' : ''} ${
                  isCorrect ? 'correct' : ''
                } ${isIncorrect ? 'incorrect' : ''}`}
                onClick={() => handleBiasSelect(bias.id)}
                disabled={!!feedback}
              >
                <div className="bias-icon">{bias.icon}</div>
                <div className="bias-info">
                  <div className="bias-name">{bias.name}</div>
                  <div className="bias-def">{bias.definition}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`feedback-section ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="feedback-status">
              {feedback.isCorrect ? '✅ Correct!' : '❌ Not quite right.'}
            </div>

            <div className="explanation-box">
              <h3>Why?</h3>
              <p>{feedback.explanation}</p>
            </div>

            <div className="reframing-box">
              <h3>How to Reframe This Decision</h3>
              <ul className="reframing-list">
                {feedback.reframing.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button className="next-btn" onClick={handleNextScenario}>
              {isLastScenario ? '✓ See Results' : 'Next Scenario →'}
            </button>
          </div>
        )}

        {/* Score tracker */}
        <div className="score-tracker">
          <p>
            Score: {score}/{totalAttempts} correct so far
          </p>
        </div>
      </div>

      {/* Learning context */}
      <section className="learning-context">
        <h4>💡 Why This Matters</h4>
        <p>
          Cognitive biases aren't character flaws—they're mental shortcuts that usually serve us well but can
          derail decisions under complexity. The best leaders recognize when these shortcuts might be distorting
          their judgment and consciously apply reframing strategies to correct course.
        </p>
      </section>
    </div>
  );
};

export default BiasDetective;
