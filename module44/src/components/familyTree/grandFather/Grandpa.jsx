import Dad from "./dad/Dad";
import Uncle from "./uncle/Uncle";
import Uncle1 from "./uncle/Uncle1";
import Uncle2 from "./uncle/Uncle2";
import Uncle3 from "./uncle/Uncle3";
import Aunt from "./aunt/Aunt";
import Aunt1 from "./aunt/Aunt1";
import Aunt2 from "./aunt/Aunt2";

const Grandpa = ({assets}) => {
  return (
    <div>
      <h2>Grand Father</h2>
      <section className="flex">
        <Dad assets={assets} />
        <Uncle />
        <Uncle1 />
        <Uncle2 />
        <Uncle3 />
        <Aunt />
        <Aunt1 />
        <Aunt2 />
      </section>
    </div>
  );
};

export default Grandpa;
