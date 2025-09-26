function FormAddFriend({ setTambahteman }) {
  return (
    <>
      <form action="" className="form-add-friend">
        <label htmlFor="name">👩‍🦰 Nama </label>
        <input type="text" id="name" />

        <label htmlFor="image">📷 Gambar</label>
        <input type="text" id="image" />
        <button className="button" onClick={(e) => e.preventDefault()}>
          Tambah Teman
        </button>
      </form>
      {/* <button className="button" onClick={() => setTambahteman(true)}>
        Tutup
      </button> */}
    </>
  );
}

export default FormAddFriend;
