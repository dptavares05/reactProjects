export default function UserInputTable() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investment Amount</label>
          <input type="number" required/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required/>
        </p>
      </div>
    </section>
  );
}
      