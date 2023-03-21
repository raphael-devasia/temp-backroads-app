import Title from "./Title";
import { tour } from "../data";

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tour.map((tourData) => {
          const { id, img, date, title, place, duration, price } = tourData;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {place}
                  </p>
                  <p>{`${duration} Days`}</p>
                  <p>{`from $${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
