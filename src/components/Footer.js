const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "footer" : "lightMode footer"}>
      created at juno with unending spite
    </footer>
  );
};
export default Footer;
