import { use } from "react";

const Comments = ({ commentsLoader }) => {
  const commentsData = use(commentsLoader);
  console.log(commentsData);

  return (
    <div>
      <h1>Comments data page</h1>
    </div>
  );
};

export default Comments;
