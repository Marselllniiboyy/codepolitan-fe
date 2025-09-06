import { useState } from "react";

export default function AccordionItem({ number, question, answer }) {
  const [handleAswer, setHandleAnswer] = useState(false);

  return (
    <div
      className={handleAswer ? "item open" : "item"}
      onClick={() => setHandleAnswer(!handleAswer)}
    >
      {number < 10 ? (
        <p className="number">0{number}</p>
      ) : (
        <p className="number">{number}</p>
      )}
      <p className="title">{question}</p>
      <p className="icon">+</p>
      {handleAswer ? <div className="content-box ul">{answer}</div> : ""}
    </div>
  );
}
