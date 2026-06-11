import Childrens from "../children/Childrens";

const Dad = ({assets}) => {
  return (
    <div>
      <h3>Kuddus</h3>
      <section className="flex">
        <Childrens name="chil 1" assets={assets} />
        <Childrens name="chil 2" />
      </section>
    </div>
  );
};

export default Dad;
