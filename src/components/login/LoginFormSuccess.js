import "./LoginFormSuccess.css";
import "./LoginFormSuccessProfile.css";

export function LoginFormSuccess({ name, type }) {
  return (
    <div className="LoginFormSuccess">
      <div className="card">
        <div className="banner">
        </div>
            <h2 className="name">{name ? `Email ${name}` : ""}</h2>
            <div className="title">{type ? `Soy ${type}` : ""}</div>
      </div>
    </div>
  )
}
