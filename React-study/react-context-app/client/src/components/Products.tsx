import localHostPath from "../constant";

interface ItemType {
  name: string;
  imagePath: string;
}
const Products = ({ name, imagePath }: ItemType) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`${localHostPath}${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          type="number"
          style={{ marginLeft: 7 }}
          name="quantity"
          min={0}
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
