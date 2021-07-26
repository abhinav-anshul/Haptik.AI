import React, { useState, useEffect } from "react";
import Button from "../Atom/Button";
import styles from "../styles/Card.module.css";

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
            <div className={styles.container__card}>
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
                  className={styles.primary}
                  onClick={() => handleDelete(items.id)}
                >
                  Remove
                </button>

                <button
                  className={styles.secondary}
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
