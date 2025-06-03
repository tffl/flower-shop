import Modal from 'react-modal';
import { FormattedProduct } from '../../types/types';
import './detailedCard.css';

type DetailedCardProps = {
    product: FormattedProduct;
    onClose: () => void;
};

export const DetailedCard = ({ product, onClose }: DetailedCardProps) => {
    const { name, description, price } = product;
    let images: string[] = [];
    if (Array.isArray(product.attributes?.images)) {
        images = product.attributes.images;
    } else if (product.image) {
        images = [product.image];
    }

    return (
        <Modal isOpen={true} onRequestClose={onClose} className="modal" overlayClassName="modal-overlay">
            <div className="detailed-card">
                <div className="detailed-card_content">
                    <div className="detailed-card_images">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`img-${index}`} className="detailed-card_img" />
                        ))}
                    </div>

                    <div className="detailed-card_text">
                        <h3 className="detailed-card_name">{name['en-US']}</h3>
                        <p className="detailed-card_description">{description['en-US']}</p>
                        <div className="detailed-card_price">
                            Price: {price} USD
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
