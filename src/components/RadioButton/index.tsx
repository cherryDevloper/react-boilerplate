import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  //eslint-disable-next-line
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="!text-green-500 mr-1 w-[0.75rem]  focus:!ring-green-500"
      />
      <span className="text-mainBlack text-xs  ">{label}</span>
    </label>
  );
};

export default RadioButton;
