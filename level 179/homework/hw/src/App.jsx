import ClickCounter from "./ClickCounter";
import NameList from "./NameList";
import QuizController from "./QuizController";

export default function App() {
  const questions = ["Q1", "Q2", "Q3"];

  return (
    <div className="p-6 space-y-6">
      <ClickCounter />
      <NameList />
      <QuizController questions={questions} />
    </div>
  );
}
