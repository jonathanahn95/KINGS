import React from "react";
import { withRouter, Link } from "react-router-dom";

const SplashHeaderInfo = () => {
  return (
    <div>
      <div className="splash-text-wrapper">
        <p className="splash-greeting-text">
          If it’s handcrafted, vintage, custom, or
        </p>
        <p className="splash-greeting-text">unique, it’s on KINGS.</p>
      </div>
      <div className="splash-pics-wrapper">
        <figure className="splash-figure-wrapper">
          <figcaption className="splash-figcaption">
            <p className="splash-figcaption-text">
              The world of KINGS awaits you!
            </p>
            <Link className="splash-explore-link" to="/products">
              <p className="splash-figcaption-subtext">
                Take a look inside<i className="fa fa-caret-right splash-subtext" />
              </p>
            </Link>
          </figcaption>
          <img
            className="splash-big-pic"
            src="https://s3.amazonaws.com/kings-2-dev/splash.png"
          />
        </figure>
        <div className="splash-pics2-wrapper">
          <figure className="splash-figure">
            <img
              className="splash-sec-pic"
              src="https://s3.amazonaws.com/kings-2-dev/splash2.jpg"
            />
          </figure>
          <Link className="splash-explore-link" to="/products">
            <figcaption className="splash-ship-products">
              Shop ready-to-ship products
            </figcaption>
          </Link>
        </div>
      </div>
      <section className="splash-kings-about">
        <ul className="splash-kings-ul">
          <li className="splash-li-title">
            <i className="fa fa-check" />Unique everything
          </li>
          <li className="splash-li-body">
            We have millions of one-of-a-kind items, so you can find whatever
            you need (or really, really want).
          </li>
        </ul>
        <ul className="splash-kings-ul">
          <li className="splash-li-title">
            <i className="fa fa-check" />Independent sellers
          </li>
          <li className="splash-li-body">
            Buy directly from someone who put their heart and soul into making
            something special.
          </li>
        </ul>
        <ul className="splash-kings-ul">
          <li className="splash-li-title">
            <i className="fa fa-check" />Secure shopping
          </li>
          <li className="splash-li-body">
            We use best-in-class technology to protect your transactions.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default withRouter(SplashHeaderInfo);
