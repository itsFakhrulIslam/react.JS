import Grandpa from "./grandFather/Grandpa";
import "./familyTree.css";
import { createContext } from "react";

// context api is here
export const AssetsContext = createContext("");

const FamilyTree = () => {
  const assets = "diamond";
  const assets1 = "gold";

  return (
    <div className="familyTree ">
      <h2>Family Trees</h2>

      <AssetsContext.Provider value={assets1}>
        <Grandpa assets={assets} />
      </AssetsContext.Provider>
    </div>
  );
};

export default FamilyTree;
