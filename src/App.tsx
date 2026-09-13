import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>The Hunger Management Model</h1>
        <p className="subtitle">A framework for understanding and managing hunger</p>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>Overview</h2>
          <p>
            The Hunger Management Model provides a structured approach to understanding
            hunger signals, appetite regulation, and sustainable eating patterns.
          </p>
        </section>

        <section className="card">
          <h2>Core Principles</h2>
          <ul>
            <li>Recognize true physiological hunger vs. emotional hunger</li>
            <li>Respond to hunger cues with intention and awareness</li>
            <li>Maintain consistent meal timing to regulate appetite hormones</li>
            <li>Balance macronutrients for sustained satiety</li>
            <li>Identify environmental and psychological triggers</li>
          </ul>
        </section>

        <section className="card">
          <h2>Hunger Scale</h2>
          <div className="scale">
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <div key={n} className={`scale-item level-${n}`}>
                <span className="scale-number">{n}</span>
                <span className="scale-label">
                  {n === 1 ? 'Starving' :
                   n === 3 ? 'Very Hungry' :
                   n === 5 ? 'Neutral' :
                   n === 7 ? 'Satisfied' :
                   n === 10 ? 'Overfull' : ''}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Key Strategies</h2>
          <div className="strategies">
            <div className="strategy">
              <h3>Mindful Eating</h3>
              <p>Eat slowly, without distractions, and pay attention to taste and texture.</p>
            </div>
            <div className="strategy">
              <h3>Meal Planning</h3>
              <p>Plan balanced meals ahead of time to reduce impulsive eating decisions.</p>
            </div>
            <div className="strategy">
              <h3>Hydration</h3>
              <p>Stay adequately hydrated — thirst is often mistaken for hunger.</p>
            </div>
            <div className="strategy">
              <h3>Sleep & Stress</h3>
              <p>Poor sleep and high stress elevate hunger hormones like ghrelin.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Hunger Management Model &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
