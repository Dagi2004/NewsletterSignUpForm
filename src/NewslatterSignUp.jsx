import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsletterSignUp = () => {
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(email)) {
      // Pass the current email to validate
      navigate("/ThankYou"); // Navigate on successful validation
    }
  };

  const validate = (email) => {
    const newErrors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Valid email required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  return (
    <div className="bg-violet p-8">
      <div className="mx-auto bg-White rounded-lg md:max-w-3xl max-w-sm p-10 flex flex-col-reverse md:flex-row items-center justify-between shadow-lg">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-violet mt-2 text-center md:text-left">
            Stay updated!
          </h1>
          <p className="mt-4 text-base text-charcoal-grey">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list-none mt-5 text-CharcoalGrey space-y-4 max-wd-sm">
            <li className="pl-4 before:block before:absolute before:-left-6 before:top-0 before:w-4 before:h-4 before:icon-list rounded-full bg-no-repeat relative">
              Product discovery and building what matter
            </li>
            <li className="pl-4 before:block before:absolute before:-left-6 before:top-0 before:w-4 before:h-4 before:icon-list bg-no-repeat relative">
              Measuring to ensure updates are a success
            </li>
            <li className="pl-4 before:block before:absolute before:-left-6 before:top-0 before:w-4 before:h-4 before:icon-list bg-no-repeat relative">
              And much more!
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border rounded-md p-2 w-full mt-2 ${
                  error.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {error.email && (
                <p className="text-lightRed text-sm mt-1">{error.email}</p>
              )}
              <button
                type="submit"
                className="bg-violet text-White rounded-md text-sm mt-4 px-6 py-2 w-full"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
          <img
            src="illustration-sign-up-desktop.svg"
            alt="Illustration for sign up"
            className="rounded-lg hidden md:block"
          />
          <img
            src="illustration-sign-up-mobile.svg"
            alt="Illustration for sign up"
            className="rounded-lg md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
