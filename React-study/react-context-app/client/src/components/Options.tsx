interface ItemType {
  name: string;
  updateItemCount: (itemName: string, newItemCount: string | number) => void;
}

const Options = ({ name, updateItemCount }: ItemType) => {
  const handleChecked = (e: { target: { checked: any } }) => {
    updateItemCount(name, e.target.checked ? 1 : 0);
  };

  return (
    <form>
      <input
        type="checkbox"
        id={`${name}Option`}
        name={`${name}Option`}
        onChange={handleChecked}
      />
      <label htmlFor={`${name}Option`}> {name}</label>
    </form>
  );
};

export default Options;
