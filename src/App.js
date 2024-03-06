import './App.css';
import * as terms from './term-content/Terms.js';

function App() {
  return (
    <div className='Terms'>
      <terms.PrintTerm></terms.PrintTerm>
      <terms.CommentTerm></terms.CommentTerm>
      {/* 
      <terms.VariableTerm></terms.VariableTerm>
      <terms.IfTerm></terms.IfTerm>
      <terms.SwitchTerm></terms.SwitchTerm>
      <terms.ForTerm></terms.ForTerm>
      <terms.WhileTerm></terms.WhileTerm>
      <terms.MiscIterationTerm></terms.MiscIterationTerm>
      <terms.FunctionTerm></terms.FunctionTerm>
      <terms.RecursionTerm></terms.RecursionTerm>
      <terms.OOPTerm></terms.OOPTerm>
      <terms.ClassTerm></terms.ClassTerm> */}
    </div>
  );
}

export default App;
