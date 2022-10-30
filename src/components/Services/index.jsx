import "./services.css";
import { BiCheck } from "react-icons/bi";

export function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Teacher</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good communication.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Courage.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Discipline.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perseverance.</p>
            </li>
          </ul>
        </article>
        {/* END OF TEACHER */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git and GitHub.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Management and Administration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strategic thoughts.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work in group.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work under pressure.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Operational assistant.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}
