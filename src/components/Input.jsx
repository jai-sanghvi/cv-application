import '../styles/Input.css'

export default function Input({
  type = "text",
  autocomplete = "new-password",
  placeholder,
  value,
  onChange,
  name,
  label,
}) {

  if (type === 'textarea') {
    return (
      <label>{label}:<br />
        <textarea
          placeholder={placeholder ? placeholder : null}
          value={value}
          autoComplete={autocomplete}
          onChange={onChange}
          name={name}
        ></textarea>
      </label>
    )
  }

  return (
    <label>{label}:<br />
      <input
        type={type}
        placeholder={placeholder ? placeholder : null}
        value={value}
        autoComplete={autocomplete}
        onChange={onChange}
        name={name}
      />
    </label>
  );

}
