import { useState, ChangeEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

const useForm = (initialState: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetForm };
};

export default useForm;