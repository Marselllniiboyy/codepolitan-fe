import Friend from "./Friend";
// import { useState } from "react";

function Sidebar({ friends }) {
  // const [tambahteman, setTambahteman] = useState(true);

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {/* {tambahteman ? (
        <button className="button" onClick={() => setTambahteman(false)}>
          Tambah Teman
        </button>
      ) : (
        <FormAddFriend setTambahteman={setTambahteman} />
      )} */}
    </>
  );
}

export default Sidebar;
