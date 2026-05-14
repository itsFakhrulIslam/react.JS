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
// export default function Task({ taskName, taskIsDone }) {
//   return <p>{taskIsDone || taskName}</p>;
// }

// ternary
// export default function Task({ taskName, taskIsDone }) {
//   return taskIsDone ? <li>Done: {taskName}</li> : <li>Pending: {taskName}</li>;
// }

// and &&
// export default function Task({ taskName, taskIsDone }) {
//   return taskIsDone && <li>Done: {taskName}</li>;
// }

// and ||
// export default function Task({ taskName, taskIsDone }) {
//   return taskIsDone || <li>Pending: {taskName}</li>;
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
//     return null;
//   } else {
//     return <p>Pending: {taskName}</p>;
//   }
// }

//
export default function Task({ taskName, taskIsDone }) {
  let listItem;

  if (taskIsDone === true) {
    listItem = <p>Pending: {taskName}</p>;
  } else {
    listItem = <p>Pending: {taskName}</p>;
  }

  return listItem;
}
