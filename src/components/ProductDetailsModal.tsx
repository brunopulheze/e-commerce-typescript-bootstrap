import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

type Product = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
    description: string;
    stock: number;
    category?: string;
};

type ProductDetailsModalProps = {
    show: boolean;
    onHide: () => void;
    product: Product | null;
};

export function ProductDetailsModal({ show, onHide, product }: ProductDetailsModalProps) {
    if (!product) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="mb-3 text-center overflow-hidden d-flex justify-content-center align-items-center" style={{ height: '220px' }}>
                    <Image className="border-1 border-top border-bottom" src={process.env.PUBLIC_URL + product.imgUrl} alt={product.name} fluid style={{ height: 380, objectFit: "cover", }} />
                </div>
                <div className="px-3 pb-2">
                    <h5 className="text-muted mb-2 fw-normal">${product.price.toFixed(2)}</h5>
                    <div className="mb-2">
                        <span className="mb-0 fw-light">Stock: {product.stock === 0 ? <span className="text-danger">Out of Stock</span> : product.stock}</span>
                    </div>
                    <div>
                        <p className="mb-0 fw-light">{product.description}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={onHide}>
                    Close
                </Button>
                {/* You can add 'Add to Cart' or other actions here if desired */}
            </Modal.Footer>
        </Modal>
    );
}