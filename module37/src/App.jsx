import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import CountBtn from "./CountBtn";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Albums from "./Albums";

function App() {
  function handleClick() {
    alert("poke 1 clicked");
  }

  const handleClick2 = () => {
    alert("poke 3 clicked");
  };

  const handleClick4 = (num) => {
    let result = num * 5;
    alert(result);
  };

  // section for users
  const fetchAllUsers = fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((res) => res.json());

  // section for posts
  const fetchAllPosts = fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

  // section for comments
  const fetchAllComments = fetch(
    "https://jsonplaceholder.typicode.com/comments",
  ).then((res) => res.json());

  // section for albums
  const fetchAllAlbums = fetch(
    "https://jsonplaceholder.typicode.com/albums",
  ).then((res) => res.json());

  return (
    <>
      <section id="center">
        <div>
          <h2>Learn ReactJs module37</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <button onClick={handleClick}>Poke me 1</button>

            <button onClick={(handleClick1) => alert("poke 2 clicked")}>
              Poke me 2
            </button>

            <button onClick={handleClick2}>Poke me 3</button>

            <button
              onClick={function handleClick3() {
                alert("poke 4 clicked");
              }}
            >
              Poke me 4
            </button>

            {/* wrap by arrow function for pass the parameters */}
            <button onClick={() => handleClick4(10)}>
              Pass params by click
            </button>
          </div>

          {/* <CountBtn /> */}

          {/* <Batsman /> */}

          {/* section for users */}
          <Suspense
            fallback={
              <p
                style={{
                  marginTop: "30px",
                  border: "2px dotted yellow",
                  borderRadius: "10px",
                  padding: "40px",
                }}
              >
                users data coming...
              </p>
            }
          >
            <Users fetchUsers={fetchAllUsers} />
          </Suspense>

          {/* section for posts */}
          <Suspense
            fallback={
              <p
                style={{
                  marginTop: "30px",
                  border: "2px dotted yellow",
                  borderRadius: "10px",
                  padding: "40px",
                }}
              >
                posts data coming...
              </p>
            }
          >
            <Posts fetchPosts={fetchAllPosts} />
          </Suspense>

          {/* section for comments */}
          <Suspense
            fallback={
              <p
                style={{
                  marginTop: "30px",
                  border: "2px dotted yellow",
                  borderRadius: "10px",
                  padding: "40px",
                }}
              >
                comments data coming...
              </p>
            }
          >
            <Comments fetchComments={fetchAllComments} />
          </Suspense>

          {/* section for albums */}
          <Suspense
            fallback={
              <p
                style={{
                  marginTop: "30px",
                  border: "2px dotted yellow",
                  borderRadius: "10px",
                  padding: "40px",
                }}
              >
                albums data coming...
              </p>
            }
          >
           <Albums fetchAlbums={fetchAllAlbums} />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default App;
