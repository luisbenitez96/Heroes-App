import { Navigate, replace, useNavigate, useParams } from "react-router";
import { getHeroByID } from "../helpers";
import { useMemo } from "react";

export const HeroPages = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero = useMemo(() => getHeroByID(id), [id]);
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt=""
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>
        <button className="btn btn-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
