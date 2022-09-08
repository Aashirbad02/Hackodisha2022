import React from "react";

function Events() {
  return (
    <section id="Stats">
      <div className="container">
        <div className="text-white lg:text-[20px] md:text-[18px] font-semibold">
          <h1 className="mx-16 py-10 mb-3 text-4xl font-normal">
            Hackodisha 1.0 Statistics
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650744/user_gvypf7.png"
                alt="participants"
                width="70px"
              ></img>
              <h3 className="mt-6">1600+</h3>
              <p className="mb-6 md:mb-8">Registrations</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650820/college_nnemrn.png"
                alt="Institutions"
                width="70px"
              ></img>
              <h3 className="mt-6">20+</h3>
              <p className="mb-6 md:mb-8">Institutions</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650980/sponsor_c9qjhd.png"
                alt="Sponsors"
                width="70px"
              ></img>
              <h3 className="mt-2">50+</h3>
              <p className="mb-6 md:mb-8">Sponsors</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651549/community_nlklrw.png"
                alt="Community Members"
                width="70px"
              ></img>
              <h3 className="mt-6">30+</h3>
              <p className="mb-6 md:mb-8">Communities</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651614/seminar_fyw01m.png"
                alt="Seminars"
                width="70px"
              ></img>
              <h3 className="mt-6">10+</h3>
              <p className="mb-6 md:mb-8">Seminars</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651663/network_l2chpg.png"
                alt="Network"
                width="80px"
              ></img>
              <h3 className="mt-6">10+</h3>
              <p className="mb-6 md:mb-8">Partners</p>
            </div>
          </div>
          <div className="flex justify-end mr-16 py-8">
            <a
              href="https://hackodisha.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="text-2xl">
                <u>Go to HackOdisha 1.0{">"}</u>
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
