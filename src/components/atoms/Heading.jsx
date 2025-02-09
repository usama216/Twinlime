const Heading = ({ level = 1, children, className = '' }) => {
    const Tag = `h${level}`;
    return (
      <Tag className={`text-${level * 2}xl font-bold text-gray-800 ${className}`}>
        {children}
      </Tag>
    );
  };
  
  export default Heading;
  