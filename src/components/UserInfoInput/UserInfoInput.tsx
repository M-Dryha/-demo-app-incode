const UserInfoInput = ({
  type = 'text',
  text = '',
  placeholder = '',
  required = false,
  errorText = '',
  showError = false,
  ...rest
}) => {
  return (
    <label>
      {text}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        // errorText={errorText}
        {...rest}
      />
      {/* {errorText && showError && <Error>{errorText}</Error>} */}
    </label>
  );
};

export default UserInfoInput;
