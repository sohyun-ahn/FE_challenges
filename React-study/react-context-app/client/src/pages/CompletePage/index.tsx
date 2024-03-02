import React, { useContext, useEffect, useState } from "react";
import { ContextValueType, OrderContext } from "../../context/OrderContext";
import axios from "axios";
import localHostPath from "../../constant";

interface PropsType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface HistoryType {
  price: number;
  orderNumber: number;
}

const CompletePage = ({ setStep }: PropsType) => {
  const [orderDatas, totalPriceDatas] = useContext<ContextValueType | []>(
    OrderContext
  );

  const [history, setHistory] = useState<HistoryType[]>([]);

  useEffect(() => {
    orderCompleted();
    return () => {};
  }, [orderDatas]);

  const orderCompleted = async (
    completedOrderDatas = [orderDatas, totalPriceDatas]
  ) => {
    try {
      const response = await axios.post(
        localHostPath + "order",
        completedOrderDatas
      );
      setHistory(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>주문이 성공했습니다.</h1>
      <h2>지금까지 모든 주문</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>order number</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((order, i) => (
            <tr
              key={order.orderNumber}
              style={
                i % 2 === 1
                  ? { backgroundColor: "darkgray" }
                  : { backgroundColor: "white" }
              }
            >
              <td>{order.orderNumber}</td>
              <td>₩{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button style={{ margin: "20px auto" }} onClick={() => setStep(0)}>
        돌아가기
      </button>
    </div>
  );
};

export default CompletePage;
