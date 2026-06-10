import Grandpa from "./grandFather/Grandpa";
import './familyTree.css'

const FamilyTree = () => {
  return (
    <div className="familyTree ">
      <h2>Family Trees</h2>
      <Grandpa/>
    </div>
  );
};

export default FamilyTree;
