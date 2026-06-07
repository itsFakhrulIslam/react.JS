import { use } from "react";

const Albums = ({ albumsLoader }) => {
  const albumsData = use(albumsLoader);
  console.log(albumsData);

  return <div>hello this is albums page</div>;
};

export default Albums;
