const Button = ({ children, type = 'button', disabled = false, className = '' }) => (
  <button
    type={type} // 'submit' type ensures the form gets submitted
    disabled={disabled}
    className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
  >
    {children}
  </button>
);

export default Button;
