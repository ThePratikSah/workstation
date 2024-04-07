/* eslint-disable @next/next/no-img-element */
import Button from "./Button";

function HeroSection() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="w-full max-w-md px-8 lg:px-16">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Expert Workstation Design
          </h1>
          <p className="mb-8">
            From cluttered desk to dream setup. We elevate your workstation,
            elevate your work.
          </p>
          <Button style="btn-neutral" title={"Get Free Quote"} />{" "}
        </div>
        <div className="flex-shrink-0 mr-4 lg:mr-0">
          <img
            width={800}
            height={500}
            src="./assets/featured-workstation.jpeg"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
