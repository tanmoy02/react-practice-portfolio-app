// import ServicesData from "../../data/servicesData";
import ServicesData from "../../json/services.json";

function Services() {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          {ServicesData.map((service, index) => {
            if (service.active) {
              return (
                <div className="col-md-4 text-center animate-box">
                  <div className={"services color-" + (index + 1)}>
                    <span className="icon">
                      <i className={service.icon}></i>
                    </span>
                    <div className="desc">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
