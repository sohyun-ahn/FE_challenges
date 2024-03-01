import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Products from "./Products";
import Options from "./Options";
import localHostPath from "../constant";
import ErrorBanner from "./ErrorBanner";
import { ContextValueType, OrderContext } from "../context/OrderContext";

type OrderType = "products" | "options";

interface PropsType {
  orderType: OrderType;
}

interface ItemType {
  name: string;
  imagePath: string;
  description: string;
}

const Type = ({ orderType }: PropsType) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [error, setError] = useState(false);
  const typeTitle = orderType.charAt(0).toUpperCase() + orderType.slice(1);
  const [orderDatas, totalPriceDatas, priceDatas, updateItemCount] = useContext<
    ContextValueType | []
  >(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: OrderType) => {
    try {
      const response = await axios.get(`${localHostPath}${orderType}`, {
        withCredentials: true, // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
      });
      setItems(response.data);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  console.log("orderData", orderDatas);
  console.log("total", updateItemCount);
  const ItemComponent = orderType === "products" ? Products : Options;
  console.log(orderType);
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName: string, newItemCount: string | number) =>
        updateItemCount!(itemName, newItemCount, orderType)
      }
    />
  ));

  if (error) {
    return <ErrorBanner message="데이터를 로드하는데 에러가 발생했습니다." />;
  }

  return (
    <div>
      <h2>{typeTitle}</h2>
      <p>₩{priceDatas![orderType]}</p>
      <p>
        {typeTitle} total: ₩{totalPriceDatas![orderType]}
      </p>
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
