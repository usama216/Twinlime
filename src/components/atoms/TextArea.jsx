const TextArea = ({ placeholder, name, value, onChange, className = '' }) => (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={4}
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    ></textarea>
  );
  
  export default TextArea;
  