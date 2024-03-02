import localHostPath from "../constant";

interface ItemType {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: string, newItemCount: string | number) => void;
}
const Products = ({ name, imagePath, updateItemCount }: ItemType) => {
  const handleChange = (e: { target: { value: string } }) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`${localHostPath}${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={`${name}Quantity`} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          type="number"
          style={{ marginLeft: 7 }}
          name="quantity"
          id={`${name}Quantity`}
          min={0}
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
