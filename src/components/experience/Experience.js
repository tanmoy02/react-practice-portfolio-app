/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import experience from "../../json/experience.json";
function Experience() {
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {experience.map((exp, index) => {
                if (exp.display) {
                  return (
                    <article
                      className="timeline-entry animate-box"
                      data-animate-effect={
                        index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                      }
                    >
                      <div className="timeline-entry-inner">
                        <div className={"timeline-icon color-" + (index + 1)}>
                          <i className="icon-calendar3"></i>
                        </div>

                        <div className="timeline-label">
                          <h2>
                            <a href={exp.slug !== "" ? exp.slug : "#"}>
                              {exp.title}
                            </a>{" "}
                            <span>
                              at {exp.organization} ({exp.period})
                            </span>
                          </h2>
                          <p>{exp.gist}</p>
                        </div>
                      </div>
                    </article>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
