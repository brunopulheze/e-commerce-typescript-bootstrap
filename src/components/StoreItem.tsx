import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <div className="overflow-hidden" style={{ height: '180px' }}>
                <Card.Img
                    className="hover transition"
                    variant="top"
                    src={process.env.PUBLIC_URL + imgUrl}
                    height="180px"
                    style={{ objectFit: "cover", }}
                />
            </div>
            <Card.Body className="d-flex flex-column pt-4 pb-5">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-5 fw-light">{name}</span>
                    <span className="ms-2 text-muted fw-light">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100 bg-dark border border-dark" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
                    ) : (
                        <div
                            className="d-flex justify-content-evenly"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button className="bg-dark border border-dark" onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button className="bg-dark border border-dark" onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button
                                onClick={() => removeFromCart(id)}
                                variant="outline-dark"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}