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

  function starTop() {}

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <main style={{ minHeight: "600px" }}>
        {currentFriends.map((items) => (
          <div key={items.id}>
            <div
              style={{
                width: "400px",
                minWidth: "400px",
                maxWidth: "400px",
                padding: "15px 15px",
                borderRadius: "6px",
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <div
                style={{
                  padding: "10px 10px",
                  fontSize: "1.5rem",
                }}
              >
                {items.friend}
              </div>
              <span>
                <button
                  style={{
                    all: "unset",
                    backgroundColor: "#054a91",
                    fontSize: "1rem",
                    color: "white",
                    padding: "10px 30px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                  onClick={() => handleDelete(items.id)}
                >
                  Remove
                </button>
                <button
                  style={{
                    all: "unset",
                    backgroundColor: "#fafafe",
                    fontSize: "1rem",
                    color: "black",
                    padding: "8px 30px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "1px solid black",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                  onClick={() => handleStar(items.id, items.isStar)}
                >
                  {items.isStar ? "Unstar" : "Star"}
                </button>
              </span>
            </div>
            <br />
            <br />
          </div>
        ))}
      </main>
    </>
  );
}

export default FriendList;
