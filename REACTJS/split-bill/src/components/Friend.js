
function Friend({ friend }) {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 ? (
          <p className="red">
            kamu berhutang Rp.{Math.abs(friend.balance)} ke {friend.name}
          </p>
        ) : friend.balance > 0 ? (
          <p className="green">
            {friend.name} berhutang Rp.{friend.balance} ke kamu
          </p>
        ) : (
          <p>Tidak ada Hutang</p>
        )}
        <button className="button" onClick={() => console.log(friend.name)}>
          pilih
        </button>
      </li>
    </>
  );
}

export default Friend;
