import { Layout } from "antd";
import { Logo } from "../Logo";

export function Sider(){
  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      className="rounded-r-[20px]"
    >
      <Logo></Logo>
      <div className="p-1">
        <span className="h-[1px] w-full bg-gray-500 block"></span>
      </div>
      <div className="font-black text-center">正在运行中</div>
      <div className="pr-2 pl-2 text-center mt-2 mb-2">
        <div className="pt-2 pb-2 bg-gray-200 rounded-[5px]">
          <div>
            暂无
          </div>
        </div>
      </div>
      <div className="font-black text-center">等待中</div>
      <div className="pr-2 pl-2 text-center mt-2 mb-2">
        <div className="pt-2 pb-2 bg-gray-200 rounded-[5px]">
          <div>
            暂无
          </div>
        </div>
      </div>
    </Layout.Sider>
  )
}
