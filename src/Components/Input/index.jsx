import {InputComponent} from './style.jsx'

export default function Input ({placeholder, type, required, autoFocus}) {
  return (
      <InputComponent
        placeholder={placeholder}
        type={type}
        required={required}
        autoFocus={true}
      />
  )
}
