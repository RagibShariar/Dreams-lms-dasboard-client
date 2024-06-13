import { FaStar, FaStarHalf } from "react-icons/fa";

const CourseDetail = () => {
  return (
    <>
      <div className="bg-courseBanner hero  w-full">
        <div className="hero-overlay bg-black/75 py-12">
          <div className="max-w-7xl mx-auto text-white">
            <div className="md:grid grid-cols-12">
              <div className="md:col-span-8 ">
                <div>
                  <div className="flex items-center">
                    <div className="w-16 h-15 rounded-full overflow-hidden">
                      <img
                        src="https://dreamslms.dreamstechnologies.com/react/static/media/user1.35da9e31b2812a3cabe8.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4>Ragib Shariar</h4>
                      <p>UI/UX Designer</p>
                    </div>
                    <div className="flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                      <p>
                        4.5 <span>(15)</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1>The Complete Web Developer Course 2.0</h1>
                    <p>
                      Learn Web Development by building 25 websites and mobile
                      apps using HTML, CSS, Javascript, PHP, Python, MySQL &
                      more!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p>12+ Lessons</p>
                    </div>
                    <div>
                      <p>9hr 30min</p>
                    </div>
                    <div>
                      <p>32 students enrolled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      <div className="bg-gray-100/50">
        <div className="max-w-7xl mx-auto ">
          <div className="md:grid grid-cols-12 gap-6">
            <div className="border my-14 p-4 col-span-8 bg-white rounded-lg">
              <div>
                <h2>Overview</h2>
              </div>
              <div>
                <p>Course Description</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div>
                <p>What you'll learn</p>
                <div className="flex justify-between gap-14">
                  <p>
                    Become a UX designer. You will be able to add UX designer to
                    your CV Become a UI designer. Build & test a full website
                    design. Build & test a full mobile app.
                  </p>
                  <p>
                    Learn to design websites & mobile phone apps. You'll learn
                    how to choose colors. Prototype your designs with
                    interactions. Export production ready assets. All the
                    techniques used by UX professionals
                  </p>
                </div>
              </div>
              <div>
                <p>Requirements</p>
                <p>
                  You will need a copy of Adobe XD 2019 or above. A free trial
                  can be downloaded from Adobe. No previous design experience is
                  needed. No previous Adobe XD skills are needed.
                </p>
              </div>
            </div>
            {/* right side */}
            <div className="col-span-4 md:-mt-56">

              <div className="bg-white p-6 rounded-lg border">
                <div className=" overflow-hidden ">
                  <img
                    className="w-full object-cover"
                    src="https://dreamslms.dreamstechnologies.com/react/static/media/video.fd8402ff1b0fb5c89c59.jpg" alt="" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="uppercase text-3xl font-bold text-[#159f46]">Free</p>
                    <p className="line-through">$99.99 <span>50% off</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-red-400 w-1/2">Add to Wishlist</button>
                  <button className="bg-red-400 w-1/2">Share</button>
                </div>
                <div>
                <button className="bg-red-400 w-full">Enroll Now</button>
                </div>
              </div>
              {/*  */}
              <div className="mt-8 bg-white p-6 rounded-lg border">
                <div>
                  <p>Includes</p>
                  <ul>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                    <li> 11 hours on-demand video</li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className="mt-8 bg-white p-6 rounded-lg border">
                <div>
                  <p>Includes</p>
                  <ul>
                    <li> 11 hours on-demand video</li>
                    <hr />
                    <li> 11 hours on-demand video</li>
                    <hr />
                    <li> 11 hours on-demand video</li>
                    <hr />
                    <li> 11 hours on-demand video</li>
                    <hr />
                    <li> 11 hours on-demand video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
