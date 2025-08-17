import { Navbar as NavbarBs } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { AdsBar } from "./AdsBar";
import { AuthBar } from "./AuthBar";
import { StickyBanner } from "./StickyBanner";
import { Banner } from "./Banner";
import { Menu } from "./Menu";
import { SpecialOffers } from "./SpecialOffers";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <NavbarBs className="d-flex flex-column align-items-start p-0 bg-white">
            <AdsBar />
            <AuthBar />
            <StickyBanner openCart={openCart} cartQuantity={cartQuantity} />
            <Banner openCart={openCart} cartQuantity={cartQuantity} />
            <Menu />
            <SpecialOffers />
        </NavbarBs>
    )
}