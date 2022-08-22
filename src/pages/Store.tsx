import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return (
        <section style={{ marginBottom: "10rem" }}>
            <Container>
                <div className="text-center my-5">
                    <h1 className="display-4">Cosmetics</h1>
                    <p className="fw-semilight">
                        What’s new in the world of beauty?
                        <br />
                        We’re so glad you asked.
                    </p>
                </div>
            </Container>

            <Row md={2} xs={1} lg={3} className="g-4">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </section>
    )
}