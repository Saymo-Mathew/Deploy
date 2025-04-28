export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <small>© {new Date().getFullYear()} EmEyTi</small>
        <div>
          <a href="https://github.com/Saymo-Mathew" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.facebook.com/saymo.em" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com/yourhandle" className="text-light" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
