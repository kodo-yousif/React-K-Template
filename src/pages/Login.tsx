import { Navigate } from "react-router-dom"
import { Button, Card, Checkbox, Form, Input } from "antd"

import PageTitle from "@/components/PageTitle"

import { GlobalLoading } from "@/components/GlobalLoading"

import Kilwa from "@/assets/71QlZuD0h2L._AC_SX466_.jpg"

import { useUser } from "@/global/useUser"
import { useLoading } from "@/global/useLoading"

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

function waitForTimeout(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout completed")
    }, delay)
  })
}

const loadingKey = "login-request"

export default function Login() {
  const { fields, setField, removeField } = useLoading()

  const loading = fields.includes(loadingKey)

  const { name, setUser } = useUser()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    console.log("Success:", values)
    setField(loadingKey)

    await waitForTimeout(3000)

    removeField(loadingKey)

    await waitForTimeout(200)

    setUser({ name: "Kodo Yousif" })
  }

  if (name) return <Navigate to="/" />
  return (
    <div className="flex !h-screen !w-screen gap-8 justify-center items-center bg-blue-500">
      <PageTitle title="Login" />
      <GlobalLoading />
      <Card className="shadow" title="Welcome to ultimate template">
        <Form
          disabled={loading}
          layout="vertical"
          onFinish={onFinish}
          className="w-[500px]"
          initialValues={{ remember: true }}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <img src={Kilwa} className="w-auto h-auto shadow rounded max-h-[389px]" />
    </div>
  )
}
