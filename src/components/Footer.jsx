export const Footer = () => {
  return (
    <div>
      <footer className="page-footer green lighten-4">
        <div className="footer-copyright">
          <div className="container">
            &copy; {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/lindenbergannie/react-shop"
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
