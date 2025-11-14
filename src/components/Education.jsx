

const Education = ({ school, degree, year }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <strong>{school}</strong> — {degree} ({year})
    </div>
  );
};

export default Education;