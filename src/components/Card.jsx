import "../../public/style.css";

const Card = ({ name, image }) => {
  return (
    <>
      <div className="cards">
        <div className="frame-image-card">
          <img src={image} alt={`this is ${name} products`} />
        </div>

        <span className="title">{name}</span>
      </div>
    </>
  );
};

export default Card;
