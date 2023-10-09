import { HomeFunctionContainer } from "@/components/HomeFunctionContainer/HomeFunctionContainer";

import RHImage from "@/assets/HomeIcons/RH.png";
import { HomeLeftMenu } from "@/components/HomeLeftMenu/HomeLeftMenu";

export function Home() {
  return (
    <>
      <HomeLeftMenu />

      <HomeFunctionContainer
        imageBG={RHImage}
        number={100}
        text="Consultar clientes"
      />
      <HomeFunctionContainer
        imageBG={RHImage}
        number={100}
        text="Consultar clientes"
      />
    </>
  );
}
