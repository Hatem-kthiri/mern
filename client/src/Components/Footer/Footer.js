import React from "react";

const Footer = () => {
  const date = new Date(Date.now());
  let year = date.getFullYear();
  return (
    <footer className="footer ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_bottm">
              <div className="row">
                <div className="col-md-6">
                  <ul className="fotb_left">
                    <li>
                      <p>
                        © {year}
                        <strong> Learn To Code </strong>. All Rights Reserved.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="edu_social_links">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
