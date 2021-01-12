import { StylesConfig, OptionTypeBase } from 'react-select';

const customStyles: StylesConfig<OptionTypeBase, boolean> = {
  container: provided => ({
    ...provided,
    display: 'inline-block',
    width: '100%',
    minHeight: '1px',
    textAlign: 'left',
    alignItems: 'center',
    color: '#32067c',
    border: 0,
  }),
  control: provided => ({
    ...provided,
    // border: '1px solid #dddddd',
    borderRadius: '4px',
    minHeight: '1px',
    height: '100%',
    border: 0,
    backgroundColor: 'transparent',
  }),

  input: (provided, state) => ({
    ...provided,
    minHeight: '1px',
    textAlign: 'center',
    color: '#fff',
  }),

  placeholder: provided => ({
    ...provided,
    minHeight: '1px',
    textAlign: 'center',
    color: '#e1fffd',
  }),

  singleValue: provided => ({
    ...provided,
    color: '#fff',
  }),
};

export default customStyles;
