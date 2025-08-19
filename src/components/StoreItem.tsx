import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: string
    name: string
    price: number
    imgUrl: string
    description: string
    stock: number
    category: string
    onImageClick?: () => void
}

export function StoreItem({
    id,
    name,
    price,
    imgUrl,
    description,
    stock,
    onImageClick,
}: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    // Always derive current available stock based on props and cart
    const availableStock = stock - quantity

    // Handler for add to cart
    const handleAddToCart = () => {
        if (availableStock > 0) {
            increaseCartQuantity(id)
        }
    }

    // Handler for decreasing quantity in cart
    const handleDecreaseCartQuantity = () => {
        if (quantity > 0) {
            decreaseCartQuantity(id)
        }
    }

    return (
        <Card className="h-100">
            <div
                className="overflow-hidden"
                style={{ height: '180px', cursor: "pointer" }}
                onClick={onImageClick}
            >
                <Card.Img
                    className="hover transition"
                    variant="top"
                    src={process.env.PUBLIC_URL + imgUrl}
                    height="180px"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-5 fw-light">{name}</span>
                    <span className="ms-2 text-muted fw-light">${price.toFixed(2)}</span>
                </Card.Title>
                <div className="mb-4 fw-light">
                    {availableStock === 0 ? 'Out of Stock' : `Stock: ${availableStock}`}
                </div>
                <div>
                    {quantity === 0 ? (
                        <Button
                            className="w-100"
                            onClick={handleAddToCart}
                            disabled={availableStock === 0}
                            variant={availableStock === 0 ? "secondary" : "dark"}
                        >
                            {availableStock === 0 ? "Out of Stock" : "Add To Cart"}
                        </Button>
                    ) : (
                        <div className="d-flex justify-content-center align-items-center" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button className="bg-dark border border-dark" onClick={handleDecreaseCartQuantity} disabled={quantity === 0}>-</Button>
                                <div>
                                    <span className="fs-6">{quantity}</span> in cart
                                </div>
                                <Button
                                    onClick={handleAddToCart}
                                    disabled={availableStock === 0}
                                    variant={availableStock === 0 ? "secondary" : "dark"}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                style={{ paddingLeft: "12px", paddingRight: "12px", paddingTop: "7.5px", paddingBottom: "7.5px" }}
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeFromCart(id)}
                            >
                                &times;
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}