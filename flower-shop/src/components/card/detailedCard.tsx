import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import Slider from "react-slick";
import { FormattedProduct } from "../../types/types";
import { useState } from "react";
import "./detailedCard.css";

type DetailedCardProps = {
  product: FormattedProduct;
  onClose: () => void;
};

export const DetailedCard = ({ product, onClose }: DetailedCardProps) => {
  const { name, description, images, price } = product;

  const fallbackImg = "img/fallback.jpg";
  const minImgCount = 3;
  const imageUrls = images 
        ? images.map(img => img.url)
        : [];

    while (imageUrls.length < minImgCount) {
        imageUrls.push(fallbackImg);
    }
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [zoomOpen, setZoomOpen] = useState(false);

  const handleImageClick = () => {
    setZoomOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="detailed-card">
          <div className="detailed-card_content">
            <div className="detailed-card__slider">
              <Slider {...sliderSettings}>
                {imageUrls.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="slider-item"
                    onClick={handleImageClick}
                  >
                    <img src={imgUrl} alt={`img-${i}`} className="slider-img" />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="detailed-card_text">
              <h3 className="detailed-card_name">{name["en-US"]}</h3>
              <p className="detailed-card_description">
                {description["en-US"]}
              </p>
              <div className="detailed-card_price">Price: {price} USD</div>
              <button
                className="detailed-card_btn"
                onClick={() => console.log("Add to cart")}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={zoomOpen}
        onRequestClose={() => setZoomOpen(false)}
        className="zoom-modal"
        overlayClassName="modal-overlay"
      >
        <div className="zoom-slider-wrapper">
          <Slider {...sliderSettings}>
            {imageUrls.map((imgUrl, i) => (
              <div key={i}>
                <img src={imgUrl} alt={`zoom-${i}`} className="zoom-img" />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </>
  );
};
