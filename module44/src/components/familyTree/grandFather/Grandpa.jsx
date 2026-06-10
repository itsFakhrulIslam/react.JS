import Dad from "./Dad";
import Uncle from "./Uncle";
import Uncle1 from "./Uncle1";
import Uncle2 from "./Uncle2";
import Uncle3 from "./Uncle3";
import Aunt from "./Aunt";
import Aunt1 from "./Aunt1";
import Aunt2 from "./Aunt2";

const Grandpa = () => {
  return (
    <div>
      <h2>Grand Father</h2>
      <section className="flex">
        <Dad />
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
