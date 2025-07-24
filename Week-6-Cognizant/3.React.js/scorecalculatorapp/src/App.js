import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <center>
        <CalculateScore
          Name={"Steeve"}
          School={"DNV Public School"}
          total={284}
          goal={3}
        />
      </center>
    </div>
  );
}

export default App;