import { useState, useEffect } from "react";
import Header from "../components/Header";
import Pagination from "./Pagination";
import FriendList from "./FriendList";
import { allData } from "../Data/index";

function Layout() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [friendsPerPage, setFriendsPerPage] = useState(4);
  const [friends, setFriends] = useState(() => allData());
  const [name, setName] = useState();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const newFriend = [
      ...friends,
      { id: friends.length + 1, friend: name, isStar: false },
    ];
    setFriends(newFriend);
    setLoading(false);
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
        <header>
          <Header />
        </header>
        <form onSubmit={handleSubmit}>
          <h3>Friends List</h3>
          <br />
          <input
            onChange={(event) => handleSearch(event)}
            placeholder='search your friends'
            type='text'
          />
          <br />
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your friend's name"
          />
          <input type='submit' />
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
