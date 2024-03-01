import { useContext } from "react";
import Type from "../../components/Type";
import { ContextValueType, OrderContext } from "../../context/OrderContext";

const OrderPage = () => {
  const [_, totalPriceDatas, __, ___] = useContext<ContextValueType | []>(
    OrderContext
  );

  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: "50%" }}>
          <h2>Total Price: ₩{totalPriceDatas!.all}</h2>
          <button>주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
