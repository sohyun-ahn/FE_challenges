import { createContext, useState, useMemo } from "react";
import { JSX } from "react/jsx-runtime";

interface PropsType {
  children: JSX.Element | JSX.Element[];
}

interface OrderCountType {
  products: Map<string, number>;
  options: Map<string, number>;
}

interface TotalPriceType {
  products: number;
  options: number;
  all: number;
}

interface PricePerType {
  products: number;
  options: number;
}

type UpdateItemCountType = (
  itemName: string,
  newItemCount: string | number,
  orderType: "products" | "options"
) => void;

export type ContextValueType = [
  OrderCountType,
  TotalPriceType,
  PricePerType,
  UpdateItemCountType
];

export const OrderContext = createContext<ContextValueType | []>([]);

export function OrderContextProvider(props: PropsType): JSX.Element {
  const [orderCounts, setOrderCounts] = useState<OrderCountType>({
    products: new Map(),
    options: new Map(),
  });

  const pricePerType = {
    products: 1000,
    options: 500,
  };

  const [totalPrice, setTotalPrice] = useState({
    products: 0,
    options: 0,
    all: 0,
  });

  // useMemo: orderCounts가 변할때만 렌더링하기위해
  const value = useMemo((): ContextValueType => {
    // item의 수가 바뀔때 map.set()으로 update해주는 함수
    function updateItemCount(
      itemName: string,
      newItemCount: string | number,
      orderType: "products" | "options"
    ) {
      const newOrderCounts = { ...orderCounts };
      const orderCountMap = newOrderCounts[orderType];
      orderCountMap.set(
        itemName,
        typeof newItemCount === "string" ? parseInt(newItemCount) : newItemCount
      );
      setOrderCounts(newOrderCounts);
      updateTotalPrice(orderType);
    }
    return [
      { ...orderCounts },
      { ...totalPrice },
      pricePerType,
      updateItemCount,
    ];
  }, [orderCounts]);

  function calculateTotalPricePerType(
    orderType: "products" | "options"
  ): number {
    const totalCount = [...orderCounts[orderType].values()].reduce(
      (total, val) => total + val,
      0
    );
    const totalPrice = totalCount * pricePerType[orderType];
    return totalPrice;
  }

  function updateTotalPrice(orderType: "products" | "options") {
    const newTotalPrice = { ...totalPrice };
    const totalPricePerType = calculateTotalPricePerType(orderType);
    newTotalPrice[orderType] = totalPricePerType;
    newTotalPrice.all = newTotalPrice.products + newTotalPrice.options;
    setTotalPrice(newTotalPrice);
  }

  return (
    // ...props에 해당하는 컴포넌트들은 전역적으로 value를 가져다 쓸 수 있음
    <OrderContext.Provider value={value} {...props} />
  );
}
