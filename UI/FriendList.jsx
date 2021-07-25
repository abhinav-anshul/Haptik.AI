import React, { useState, useEffect } from "react";

function FriendList({
  loading,
  currentFriends,
  totalFriends,
  setTotalFriends,
}) {
  // delete function //
  function handleDelete(id) {
    for (let i = 0; i < totalFriends.length; i++) {
      if (totalFriends[i].id === id) {
        const newFriends = [...totalFriends];
        newFriends.splice(i, 1);

        setTotalFriends(newFriends);
      }
    }
  }

  // starred function //
  function handleStar(id, star) {
    setTotalFriends(totalFriends);
    console.log(totalFriends[id]);
    // toggle logic
    totalFriends[id].isStar
      ? (totalFriends[id].isStar = false)
      : (totalFriends[id].isStar = true);

    // truthy at top logic
    let truthyObj = [];
    let cust = [];
    for (let i = 0; i < totalFriends.length; i++) {
      if (totalFriends[i].isStar === true) {
        truthyObj.push(totalFriends.splice(i, 1));
      }
    }

    const output = truthyObj.map((a) => {
      cust.push(...a);
    });

    let combine = [...cust, ...totalFriends];

    setTotalFriends(combine);
    console.log(totalFriends);
  }

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      {currentFriends.map((items) => (
        <div style={{}} key={items.id}>
          <div style={{ backgroundColor: "red" }}>{items.friend}</div>
          <span>
            <button onClick={() => handleDelete(items.id)}>Delete</button>
            <button onClick={() => handleStar(items.id, items.isStar)}>
              star
            </button>
          </span>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default FriendList;
