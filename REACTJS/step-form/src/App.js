import { useState } from "react";

function App() {
  return (
    <>
      <Step />
      <Step />
      <Step />
    </>
  );
}

function Step() {
  const [classActive, setClassActive] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const stepItems = ["Dream", "Belive", "Achieve"];

  function handleNext() {
    if (classActive < 3) {
      setClassActive((classActive) => classActive + 1);
    }
  }
  console.log(classActive);

  function handlePrev() {
    if (classActive > 1) setClassActive((classActive) => classActive - 1);
  }

  console.log(classActive);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={classActive >= 1 ? "active" : ""}>1</div>
            <div className={classActive >= 2 ? "active" : ""}>2</div>
            <div className={classActive >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {classActive} : {stepItems[classActive - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
