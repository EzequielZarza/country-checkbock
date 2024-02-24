import { useState } from 'react';

const countries = [ "India", "USA", "France", "Italy", "Spain", "Portugal", "Canada"];

const Checkbox = ({
  name,
  value = false,
  updateValue = () => {},
  children
} : {
  name: string,
  value: boolean,
  updateValue: Function,
  children: string
}) => {

  const handleChange = () => updateValue(!value, name);
  
  return (
    <div>
      <input
        type="checkbox"
        id={`${name}-checkbox`}
        name={name}
        checked={value}
        onChange={handleChange}
      />
      <label htmlFor={`${name}-checkbox`}>
        {children}
      </label>
    </div>
  );
};

const Checkboxes = () => {

  const [selected, setSelected] = useState<Array<string>>([]);
  
  const handleSelect = (checked: boolean, name: string) => checked ? setSelected([...selected, name]) : setSelected(selected.filter(item => item !== name));

  const selectAll = (checked: boolean) => checked ? setSelected(countries) : setSelected([]);

  return (
    <div>
      <h1>Countries</h1>
      <Checkbox
        name="all"
        key={countries.length}
        value={selected.length === countries.length}
        updateValue={selectAll}>
          Select All
      </Checkbox>
      { countries.map((item, index) => {
        return <Checkbox
          name={item}
          key={index}
          value={selected.includes(item)}
          updateValue={handleSelect}>
            {item}
          </Checkbox>
      }) }
     </div>
    );
};

const App = () => <Checkboxes/>

export default App;
