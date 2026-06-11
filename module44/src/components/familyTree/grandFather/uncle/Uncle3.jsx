import { useContext } from "react";
import Childrens from "../children/Childrens";
import { AssetsContext } from "../../FamilyTree";

const Uncle3 = () => {
  const newAssets = useContext(AssetsContext);

  return (
    <div>
      <h3>sento</h3>
      <section className="flex">
        <Childrens name="chil 1" />
        <Childrens name="chil 2" />
        {newAssets}
      </section>
    </div>
  );
};

export default Uncle3;
