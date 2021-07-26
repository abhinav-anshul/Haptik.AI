import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import FriendList from "./FriendList";
import { allData } from "../Data/index";
import Image from "next/image";
import HaptikLogo from "../public/haptik-logo.png";
function Layout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage, setFriendsPerPage] = useState(4);
  const [friends, setFriends] = useState(() => allData());
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    if (name === "") return setError("Please enter a name");
    setLoading(true);
    e.preventDefault();

    const newFriend = [
      ...friends,
      { id: friends.length + 1, friend: name, isStar: false },
    ];
    setFriends(newFriend);
    setLoading(false);
    setError(null);
  };

  const indexOfLastItemRender = currentPage * friendsPerPage;
  const indexOfFirstItemRender = indexOfLastItemRender - friendsPerPage;
  const currentLists = friends.slice(
    indexOfFirstItemRender,
    indexOfLastItemRender
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
    for (let i = 0; i < friends.length; i++) {
      if (search === friends[i]) {
        console.log("boom");
      }
    }
  }

  return (
    <>
      <div>
        <div>
          <Image
            src={HaptikLogo}
            alt='haptik logo'
            width='130px'
            height='59px'
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <h2>Friends List</h2>
          <br />
          <input
            onChange={(event) => handleSearch(event)}
            placeholder='search your friends'
            type='text'
          />
          <br />

          <input
            style={{
              minWidth: "400px",
              maxWidth: "400px",
              minHeight: "30px",
              maxHeight: "30px",
              fontSize: "1.2em",
              color: "#7e8285",
              borderRadius: "5px",
              border: "0.5px solid #adb5bd",
              margin: "10px 0px",
              padding: "0px 20px",
            }}
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder='Add a friend'
          />
          <input style={{ visibility: "hidden" }} type='submit' />
        </form>
        <FriendList
          loading={loading}
          currentFriends={currentLists}
          totalFriends={friends}
          setTotalFriends={setFriends}
        />
        <Pagination
          friendsPerPage={friendsPerPage}
          totalPosts={friends.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Layout;
