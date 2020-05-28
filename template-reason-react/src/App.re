%raw
"import './App.css'";

[@bs.module "./logo.svg"] external logo: string = "default";

[@react.component]
let make = () => {
  let (count, setCount) = React.useState(() => 0);
  <div className="App">
    <header className="App-header">
      <img src=logo className="App-logo" alt="logo" />
      <p> {React.string("Hello Vite + Reason React")} </p>
      <p>
        <button onClick={_ => setCount(count => count + 1)}>
          {React.string("count is: " ++ string_of_int(count))}
        </button>
      </p>
      <p>
        {React.string("Edit ")}
        <code> {React.string("App.jsx ")} </code>
        {React.string("and save to test HMR updates.")}
      </p>
      <a
        className="App-link"
        href="https://reasonml.github.io/reason-react/"
        target="_blank"
        rel="noopener noreferrer">
        {React.string("Learn Reason React")}
      </a>
    </header>
  </div>;
};