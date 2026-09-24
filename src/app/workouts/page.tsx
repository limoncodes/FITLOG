
const getfitlogalldata = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
  const data = res.json()
  return data
}
const Workout = async () => {
  const alldata = await getfitlogalldata()
  

  return (
    <div>
      <h2>Work out</h2>
    </div>
  )
}

export default Workout