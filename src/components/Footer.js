const Footer = ({ darkMode }) => {
  return (
    <footer className={!darkMode ? "lightMode footer" : "darkMode footer"}>
      Created @ Juno College ✨
    </footer>
  );
};
export default Footer;
