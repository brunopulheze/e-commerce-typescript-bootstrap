import { Offcanvas, Stack, Button, Alert } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import api from "../api/axios"
import { useEffect, useState } from "react"
import { formatCurrency } from "../utilities/formatCurrency"
import { useAuth } from "../context/AuthContext"

type ShoppingCartProps = {
    isOpen: boolean
}

type StoreItem = {
    id: string
    name: string
    price: number
    imgUrl: string
    stock: number
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems, checkout } = useShoppingCart()
    const { isLoggedIn } = useAuth()
    const [storeItems, setStoreItems] = useState<StoreItem[]>([])
    const [transactionSuccess, setTransactionSuccess] = useState(false)
    const [showLoginAlert, setShowLoginAlert] = useState(false)

    useEffect(() => {
        api.get("/products").then(res => setStoreItems(res.data))
    }, [])

    const handleCheckout = async () => {
        if (!isLoggedIn) {
            setShowLoginAlert(true)
            return
        }
        setShowLoginAlert(false)
        try {
            await checkout()
            setTransactionSuccess(true)
            setTimeout(() => {
                setTransactionSuccess(false)
                closeCart()
            }, 2000)
        } catch (err) {
            // Optionally, show error message
        }
    }

    // Reset transaction success and alert when cart is opened again
    useEffect(() => {
        if (isOpen) {
            setTransactionSuccess(false)
            setShowLoginAlert(false)
        }
    }, [isOpen])

    const renderCartContent = () => {
        if (transactionSuccess) {
            return (
                <div className="w-100 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "200px" }}>
                    <div className="fs-4 fw-bold text-success mb-2">Transaction successful</div>
                </div>
            )
        }
        if (cartItems.length === 0) {
            return (
                <div className="w-100 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "200px" }}>
                    <div className="fs-5 fw-light text-secondary">Cart is empty</div>
                </div>
            )
        }
        return (
            <>
                {cartItems.map(item => (
                    <CartItem key={item.product_id} {...item} />
                ))}
                <div className="mt-4 ms-auto fw-bold fs-5">
                    Total{" "}
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.product_id)
                            return total + ((item?.price || 0) * cartItem.quantity)
                        }, 0)
                    )}
                </div>
                {showLoginAlert && (
                    <Alert variant="danger" className="mt-3" onClose={() => setShowLoginAlert(false)} dismissible>
                        You must be logged in to checkout.
                    </Alert>
                )}
                <Button
                    variant="dark"
                    className="mt-3"
                    onClick={handleCheckout}
                    disabled={cartItems.length === 0 || transactionSuccess}
                >
                    {isLoggedIn ? "Checkout" : "Login to Checkout"}
                </Button>
            </>
        )
    }

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {renderCartContent()}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}