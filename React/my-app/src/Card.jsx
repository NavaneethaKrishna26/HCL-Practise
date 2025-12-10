import "../Styles/styles.css";
function Card({name}) {
  return (
    <>
      <div className="card">
        <img src="../images/bird.jpg" alt="" />
        <h1>{name}</h1>
        <p>Its an African bird</p>
      </div>
    </>
  );
}
export default Card;