import './index.scss'

const data = new Array(1000).fill(0)

const List = () => {
  return (
    <div className="List">
      <h1>A long list</h1>

      <ul>
        {data.map((_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}
export default List
