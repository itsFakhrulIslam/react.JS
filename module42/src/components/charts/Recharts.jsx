import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const marksData = [
  { id: 1, name: "FAKHRUL", math: 85, science: 78, english: 92, bengali: 88 },
  { id: 2, name: "RAHIM", math: 70, science: 82, english: 65, bengali: 73 },
  { id: 3, name: "KARIM", math: 90, science: 88, english: 75, bengali: 80 },
  { id: 4, name: "SARAH", math: 95, science: 91, english: 88, bengali: 86 },
  { id: 5, name: "AHAMMED", math: 60, science: 65, english: 70, bengali: 58 },
  { id: 6, name: "NASRIN", math: 77, science: 81, english: 84, bengali: 79 },
  { id: 7, name: "RIFAT", math: 82, science: 76, english: 71, bengali: 85 },
  { id: 8, name: "TASLIM", math: 68, science: 72, english: 79, bengali: 66 },
  { id: 9, name: "SUMAYA", math: 91, science: 87, english: 93, bengali: 89 },
  { id: 10, name: "JAMIL", math: 55, science: 62, english: 58, bengali: 60 },
  { id: 11, name: "RIMA", math: 88, science: 84, english: 80, bengali: 82 },
  { id: 12, name: "BIPUL", math: 73, science: 70, english: 76, bengali: 71 },
  { id: 13, name: "NAHID", math: 96, science: 93, english: 90, bengali: 94 },
  { id: 14, name: "SAGOR", math: 64, science: 69, english: 72, bengali: 67 },
  { id: 15, name: "MIM", math: 81, science: 85, english: 87, bengali: 83 },
];

const Recharts = () => {
  return (
    <LineChart width={"90vw"} height={300} data={marksData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="math" stroke="#8884d8" />
      <Line type="monotone" dataKey="science" stroke="red" />
      <Line type="monotone" dataKey="english" stroke="yellow" />
      <Line type="monotone" dataKey="bengali" stroke="green" />
    </LineChart>
  );
};

export default Recharts;
