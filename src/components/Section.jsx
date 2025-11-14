

const Section = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #333' }}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;