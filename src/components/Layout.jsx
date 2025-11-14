export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      {children}
    </div>
  );
}
