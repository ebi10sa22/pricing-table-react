import "./App.css"
import Tables from "./Components/Tables"
function App() {
  const titles = ["STARTER", "PROFESSIONAL", "ORGANIZATION"]
  const features = ["Centralized teams",
    "Version history", "Plugins administration", "Facebood & Instagram ads", "Design system analysis", "Unlimited cloud storage"
  ]
  const display = { Starter: [true, true, true, false, false, false, false], Professional: [true, true, true, true, false, false], Organization: [true, true, true, true, true, true] }
  const prices = [0, 25, 50]
  return (
    <div className="app">
      <Tables titles={titles[0]} features={features} display={display.Starter} prices={prices[0]} background={false} />
      <Tables titles={titles[1]} features={features} display={display.Professional} prices={prices[1]} background={true} />
      <Tables titles={titles[2]} features={features} display={display.Organization} prices={prices[2]} background={false} />
    </div>
  );
}

export default App;
