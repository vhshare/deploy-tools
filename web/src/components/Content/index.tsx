import {Button, Input, Layout, Modal} from "antd"
import {
  AppstoreAddOutlined
} from '@ant-design/icons';
import { useEffect, useState } from "react";

export function Content() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  useEffect(() => {
    setInterval(() => {
    }, 1000)
  }, []);
  return (
    <>
      <Layout.Content className="p-4">
        <div className="bg-white h-full rounded-[20px] p-[20px]">
          <div>
            <Button
              type="primary"
              icon={<AppstoreAddOutlined />}
              onClick={handleOpen}
            >添加任务</Button>
          </div>

          {/*鼠标变成箭头*/}
          <Input.TextArea
            disabled
            className="mt-2 bg-blue-100 rounded-[10px] p-[20px]
              overflow-y-auto h-[calc(100%-40px)]
              text-black cursor-pointer"
            value={''}
            >
          </Input.TextArea>

        </div>
      </Layout.Content>
      <Modal
        title="开启新任务"
        onCancel={onClose}
        open={open}
        footer={[
          <Button key="back" onClick={onClose}>
            取消
          </Button>,
          <Button key="submit" type="primary">
            确定
          </Button>
        ]}>
        <Input placeholder="请输入任务key"></Input>
      </Modal>
    </>
  )
}
