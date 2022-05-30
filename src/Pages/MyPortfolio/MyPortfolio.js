import React from "react";
import project1 from "./project1.PNG";
import project2 from "./project2.PNG";
import project3 from "./project3.PNG";

const MyPortfolio = () => {
  return (
    <div className="px-16 mt-16">
      <div className="flex justify-center">
        <div className="text-xl">
          <h1> Md. Emran Hossain</h1>
          <p> emran6452@gmail.com</p>
          <p> B.Sc in CSE from Dhaka International University</p>
        </div>
      </div>
      <div className="mt-16 mb-6 px-32">
        <h1 className="text-center text-blue-500 font-bold text-5xl">
          Technologies
        </h1>
        <p className="mt-16  text-3xl">
          HTML 5
          <progress
            className="progress progress-success w-56 ml-24 "
            value="80"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          CSS 3
          <progress
            className="progress progress-success w-56 ml-24 "
            value="80"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          BOOTSTRAP 5
          <progress
            className="progress progress-success w-56 ml-24 "
            value="80"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          TAILWIND CSS
          <progress
            className="progress progress-success w-56 ml-24 "
            value="80"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          JAVASCRIPT
          <progress
            className="progress progress-success w-56 ml-24 "
            value="70"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          REACT JS
          <progress
            className="progress progress-success w-56 ml-24 "
            value="50"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          NODE JS
          <progress
            className="progress progress-success w-56 ml-24 "
            value="40"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          EXPRESS JS
          <progress
            className="progress progress-success w-56 ml-24 "
            value="40"
            max="100"
          ></progress>
        </p>
        <p className="mt-8  text-3xl">
          MONGODB
          <progress
            className="progress progress-success w-56 ml-24 "
            value="40"
            max="100"
          ></progress>
        </p>
      </div>
      <div className="mt-16 px-32">
        <h1 className="text-center text-blue-500 font-bold text-5xl mb-12">
          Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={project1} alt="project1" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <a href="https://orthopedic-physician-4ca6a.web.app/">
                Orthopedic-physician
              </a>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={project2} alt="project2" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <a href="https://flourishing-alfajores-29c059.netlify.app/">
                Best Selling Product
              </a>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={project3} alt="project3" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <a href="https://medicor-warehouse.web.app/home">
                Medicor-warehouse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
