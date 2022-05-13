import "./LoginFormSuccess.css";
import "./LoginFormSuccessProfile.css";

export function LoginFormSuccess({ name, type, logOut }) {
  return (
    <div className="usuario">
    <div className="poke-card">
            <h2 className="name">{name ? `Email ${name}` : ""}</h2>
            <div className="title">{type ? `Soy ${type}` : ""}</div>
      </div>
      <a className="usuario" href="#" onClick={logOut}>Salir</a>
    </div>
  )
}
