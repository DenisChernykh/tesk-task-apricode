type CheckboxProps = {
  checked: boolean;
  id: number;
  onChange: (id: number) => void;
};
function Checkbox({ checked, id, onChange }: CheckboxProps) {
  const handleChange = () => {
    onChange(id);
  };
  return <input type="checkbox" checked={checked} onChange={handleChange} />;
}

export default Checkbox;
