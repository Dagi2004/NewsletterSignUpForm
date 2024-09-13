import NewsletterSignUp from "./NewslatterSignUp";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <div className="bg-violet p-10">
      <div className="mx-auto bg-White rounded-lg md:max-w-sm max-w-3xl p-8 shadow-lg">
        <img
          className="mt-2 mb-4"
          src="icon-success.svg"
          alt=""
          width={"46px"}
        />

        <h1 className="text-3xl  text-violet">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong> Please open it and click the
          button inside to confirm your subscription.
        </p>
        <Link to={`/`}>
          <button className="bg-violet text-White rounded-md text-sm mt-4 px-6 py-2 hover:bg-Tomato">
            Dismiss message
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ThankYou;
