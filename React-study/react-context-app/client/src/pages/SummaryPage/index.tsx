import { useContext, useState } from "react";
import { ContextValueType, OrderContext } from "../../context/OrderContext";
interface PropsType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const SummaryPage = ({ setStep }: PropsType) => {
  const [checked, setChecked] = useState(false);
  const [orderDatas, totalPriceDatas] = useContext<ContextValueType | []>(
    OrderContext
  );

  function createOrderList(orderType: "products" | "options") {
    return (
      <div id={`${orderType}Summary`}>
        <h2>
          {orderType.charAt(0).toUpperCase() + orderType.slice(1)}: ₩
          {totalPriceDatas![orderType]}
        </h2>
        <ul style={{ marginTop: 0 }}>
          {Array.from(orderDatas![orderType], ([k, v]) => (
            <li key={k}>
              {v} {k}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <form id="checkForm">
        <h1>주문확인</h1>
        {createOrderList("products")}
        {orderDatas!.options.size > 0 ? createOrderList("options") : null}
        <input
          type="checkbox"
          name="confirmCheck"
          id="confirmCheck"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="confirmCheck"> 주문하려는 것을 확인하셨나요?</label>
        <button
          type="submit"
          disabled={!checked}
          onClick={() => {
            setStep(2);
          }}
        >
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
