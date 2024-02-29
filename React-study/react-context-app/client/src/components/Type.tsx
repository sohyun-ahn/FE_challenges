import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";
import Options from "./Options";
import localHostPath from "../constant";

interface PropsType {
  orderType: string;
}
interface ItemType {
  name: string;
  imagePath: string;
  description: string;
}
const Type = ({ orderType }: PropsType) => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    loadItems(orderType);

    return () => {};
  }, [orderType]);

  const loadItems = async (orderType: string) => {
    try {
      const response = await axios.get(`${localHostPath}${orderType}`, {
        withCredentials: true, // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
      });
      setItems(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const ItemComponent = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          margin: 0,
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      >
        {optionItems}
      </div>
    </div>
  );
};

export default Type;
