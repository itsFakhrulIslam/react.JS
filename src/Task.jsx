// export default function Task({ taskName, taskIsDone }) {
//     console.log(taskName, taskIsDone);

//   return (
//     <>
//       <p>{taskName}</p>
//     </>
//   );
// }

//
// export default function Task({ taskName, taskIsDone }) {
//   if (taskIsDone === true) {
//     return <p>Done: {taskName}</p>;
//   }
// }

//
// export default function Task({ taskName, taskIsDone }) {
//   if (taskIsDone === true) {
//     return <p>Done: {taskName}</p>;
//   } else {
//     return <p>Pending: {taskName}</p>;
//   }
// }

//
// export default function Task({ taskName, taskIsDone }) {
//   if (taskIsDone === true) {
//     return <p>Done: {taskName}</p>;
//   }
//   return <p>Pending: {taskName}</p>;
// }

//
// export default function Task({ taskName, taskIsDone }) {
//   if (taskIsDone === true) {
//     return <p>Done: {taskName}</p>;
//   }
//   return <p>Pending: {taskName}</p>;
// }

// done
// export default function Task({ taskName, taskIsDone }) {
//   return <p>{taskIsDone && taskName}</p>;
// }

// pending
export default function Task({ taskName, taskIsDone }) {
  return <p>{taskIsDone || taskName}</p>;
}
