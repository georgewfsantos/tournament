import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

    setHasValue(!!inputRef.current?.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setHasValue(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} errorOutline={!!error} hasValue={hasValue}>
      {Icon && <Icon size={20} />}
      <input
        name={name}
        defaultValue={defaultValue}
        {...rest}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
}

export default Input;
