import { useState } from "react";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <form id="checkForm">
        <h1>주문확인</h1>
        <h2>
          Products: ₩<span /* totalPrice component */>1,000</span>
        </h2>
        <ul /* totalProducts component */>
          <li>1 England</li>
        </ul>
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="check"> 주문하려는 것을 확인하셨나요?</label>
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
