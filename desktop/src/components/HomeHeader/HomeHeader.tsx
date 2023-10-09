import {
  Header,
  HeaderFunctions,
  LogoAlign,
  UserMenu,
  UserImage,
  FunctionsAlign,
  UserContainer,
} from "./HomeHeaderStyles";
import Logo from "@/assets/HomeIcons/logo.svg";
import Email from "@/assets/HomeIcons/email.svg";
import SinoDuplo from "@/assets/HomeIcons/SinoDuplo.svg";
import Lupa from "@/assets/HomeIcons/Lupa.svg";
import userLogo from "@/assets/HomeIcons/userImage.jpg";

export function HomeHeader() {
  return (
    <>
      <Header>
        <LogoAlign>
          <img src={Logo} alt="" />
        </LogoAlign>

        <FunctionsAlign>
          <UserContainer>
            <UserMenu>
              <svg
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => console.log("Svg clicked")}
              >
                <g id="up / down">
                  <path
                    id="up / down_2"
                    d="M4.02799 1.31147L11.3653 8.66874L18.7026 1.31147C19.4401 0.571956 20.6315 0.571956 21.369 1.31147C22.1065 2.05099 22.1065 3.2456 21.369 3.98512L12.689 12.6887C11.9515 13.4282 10.7602 13.4282 10.0227 12.6887L1.34269 3.98512C0.605172 3.2456 0.605172 2.05099 1.34269 1.31147C2.0802 0.590918 3.29048 0.571956 4.02799 1.31147Z"
                    fill="#FF7A00"
                  />
                </g>
              </svg>

              <div>
                <h4>Luiza Pereira</h4>
                <p>Financeiro</p>
              </div>
            </UserMenu>
            <UserImage src={userLogo} alt="" />
          </UserContainer>
          <HeaderFunctions>
            <img src={Email} alt="" />
            <img src={SinoDuplo} alt="" />
            <img src={Lupa} alt="" />
          </HeaderFunctions>
        </FunctionsAlign>
      </Header>
    </>
  );
}
