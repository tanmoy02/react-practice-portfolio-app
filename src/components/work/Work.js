/* eslint-disable jsx-a11y/anchor-is-valid */
function Work() {
  const getViews = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
  };

  const getLike = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
  };

  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Work</h2>
          </div>
        </div>
        <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="col-md-12">
            <p className="work-menu">
              <span>
                <a href="#" className="active">
                  Graphic Design
                </a>
              </span>{" "}
              <span>
                <a href="#">Web Design</a>
              </span>{" "}
              <span>
                <a href="#">Software</a>
              </span>{" "}
              <span>
                <a href="#">Apps</a>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img_1.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 01</a>
                  </h3>
                  <span>Website</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img-2.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 02</a>
                  </h3>
                  <span>Animation</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img-3.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 03</a>
                  </h3>
                  <span>Illustration</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img-4.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 04</a>
                  </h3>
                  <span>Application</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img-5.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 05</a>
                  </h3>
                  <span>Graphic, Logo</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{ backgroundImage: 'url("images/img-6.jpg")' }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 06</a>
                  </h3>
                  <span>Web Design</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> {getViews(100, 1000)}
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> {getLike(30, 300)}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
