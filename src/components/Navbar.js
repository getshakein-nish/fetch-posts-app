
const Navbar = ({id,setId}) => {

  return (
    <div>
      <div className="heading">
        <h1>Fetch Post App</h1>
        <div>
        <input type="text" placeholder='Search Posts' value={id} onChange={e => setId(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
