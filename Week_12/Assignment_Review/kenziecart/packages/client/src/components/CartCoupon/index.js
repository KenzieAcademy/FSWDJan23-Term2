import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CartCoupon.scss";
import { useState } from "react";
import axios from "../../utils/axiosConfig";
import { verifyCoupon } from "utils/axiosService";
import { toast } from "react-toastify";

const CartCoupon = ({ coupon, applyCoupon, removeCoupon }) => {
  const [code, setCode] = useState(coupon ? coupon.code : "");
  const [codeAccepted, setCodeAccepted] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyCoupon(code);
      applyCoupon(response.data);
      setCodeAccepted(true);
    } catch (error) {
      setCodeAccepted(false);
      toast.error("Invalid code.");
    }
  };

  return (
    <Container className="cart-coupon pt-3">
      <Row as={Form} onSubmit={handleSubmit}>
        <Col as={Form.Group} xs={12} md={6}>
          <Form.Control
            type="text"
            name="code"
            value={code}
            placeholder="Coupon"
            isInvalid={codeAccepted === false}
            onChange={(e) => setCode(e.target.value)}
          />
        </Col>
        <Col
          as={Form.Group}
          xs={12}
          md={6}
          className="d-flex flex-column-reverse"
        >
          <Button id="coupon-submit" type="submit" variant="info">
            Apply
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCoupon;
