import '../css/site.css';

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column text">
              {["Home", "Features", "Pricing", "FAQs", "About"].map((item, i) => (
                <li key={i} className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Keep this fixed to the right side of the container */}
          <div className="col-md-5 offset-md-5 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-success" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>


        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-instagram"></i></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
