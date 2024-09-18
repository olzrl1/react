import React, { ChangeEvent } from 'react';

// Props 인터페이스 정의
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string; // 선택적 타입, 기본값이 'text'
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = 'text' }) => {
  // 이벤트 핸들러에서 이벤트 타입 명시
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export default InputField;