function Header() {

  return (
    <section>
      <div>
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" required name="" id="" />
        </p>

        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" required name="" id="" />
        </p>
      </div>

      <div>
        <p>
          <label htmlFor="">Expected return</label>
          <input type="number" required name="" id="" />
        </p>

        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required name="" id="" />
        </p>
      </div>
    </section>
  )
}

export default Header
