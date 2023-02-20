import { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CardMenu = (props) => {
  // membuat state untuk menyimpan jumlah Like pada card ini
  const [likeCounts, setLikeCounts] = useState(0);

  // fungsi untuk menambah jumlah Like pada card ini
  const handleLike = () => {
    setLikeCounts(likeCounts + 1);
  };

  const item = props.item;

  return (
    <Card className="mb-4 mb-md-0 p-2 m-0 card-content">
      <div className="parent-img">
        <Card.Img className="card-image" variant="top" src={item.img} />
      </div>
      <Card.Body>
        <button
          className="btn-like align-left d-block mb-2 px-1"
          onClick={handleLike}
        >
          <FontAwesomeIcon className="width-icon" icon={faHeart} /> {likeCounts}
        </button>

        <Card.Title className=" text-start text-white title-card">
          {item.title}
        </Card.Title>

        <Card.Text className="fw-normal text-start text-white desc-card">
          {item.desc}
        </Card.Text>

        <Card.Text className="mb-0 fw-bolder text-start text-white desc-card">
          Hot {item.price1}
        </Card.Text>

        <Card.Text className="mt-1 fw-bolder text-start text-white desc-card">
          Ice {item.price2}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardMenu;
