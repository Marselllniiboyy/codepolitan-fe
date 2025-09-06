import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
export default Accordion;
