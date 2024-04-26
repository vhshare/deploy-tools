import {Image} from "antd";
import FWDLogoD from "../../assets/FWDLogoD.svg";

export function Logo (){
  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-2">
        <Image
          src={FWDLogoD}
          preview={false}
        ></Image>
      </div>
      <p className="text-center text-[16px] font-black">自动部署系统</p>
    </>
  )
}
