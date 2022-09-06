import user from "../../assets/Amongus 3.png";
import logo from "../../assets/logo 2.png";
import { Container } from "./style";

const HeaderUserProfile = () => {
  return (
    <Container>
      <div className="divUm">
        <img className="logo" src={logo} alt="logo" />
        <button>Voltar</button>
      </div>
      <div className="divDois">
        <img src={user} alt="user" />
        <div>
          <h1>Kenzinho</h1>
          <h2>Desenvolvedor Freelancer</h2>
        </div>
      </div>
    </Container>
  );
};

export default HeaderUserProfile;
