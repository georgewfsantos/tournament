import { ValidationError } from 'yup';

interface ErrorsObject {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): ErrorsObject {
  const validationErrors: ErrorsObject = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
