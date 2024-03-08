export const Cover = ({ coverInfo }) => {
  let coverInfoObj = {
    image: coverInfo.images[1].url,

  }
  console.log("coverinfo", coverInfoObj)

  return (
    <div className={coverInfoObj}>
      <img src={coverInfoObj.image} alt="Cover" />
    </div>
  )
}