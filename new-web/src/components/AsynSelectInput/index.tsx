import React, { useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';
import customStyles from './customStyles';

import { Container } from './styles';

interface AsyncSelectInputProps extends AsyncProps<OptionTypeBase, boolean> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export const AsyncSelectInput: React.FC<AsyncSelectInputProps> = ({
  name,
  icon: Icon,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value,
          );
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
      clearValue(ref) {
        ref.select.select.clearValue();
      },
      setValue(ref, value) {
        ref.select.select.setValue(value);
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <Select
        cacheOptions
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        styles={customStyles}
        placeholder="Digite uma tecla para ver opções"
        {...rest}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#a482dc',
            neutral0: '#afeeee',
          },
        })}
      />
    </Container>
  );
};

export default AsyncSelectInput;
