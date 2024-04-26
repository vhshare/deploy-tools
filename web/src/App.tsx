import './App.css'
import {Layout} from "antd";
import { Sider } from "./components/Sider";
import { Content } from "./components/Content";

function App() {

  return (
    <>
      <Layout className="h-screen bg-gray-300">
        <Sider></Sider>
        <Content></Content>
      </Layout>
    </>
  )
}

export default App
