function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng Budi</h2>
      <label htmlFor="bill">💰 Total Biaya</label>
      <input type="text" id="bill" />

      <label htmlFor="your-expense">🧍‍♂️ Pengeluaran Kamu</label>
      <input type="text" id="your-expense" />

      <label htmlFor="friend-expense">🧍‍♀️ Pengeluaran Budi</label>
      <input type="text" id="friend-expense" disabled />
      
      <label htmlFor="who-is-paying">💸 Ditalangin Siapa</label>
      <select id="who-is-paying">
        <option value="your-expense">Kamu</option>
        <option value="friend-expense">Budi</option>
      </select>
    </form>
      
  )
}

export default FormSplitBill;