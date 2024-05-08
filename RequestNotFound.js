import { Alert } from "antd";

export default function RequestNotFound() {
  return (
    <>
      <Alert message="Invalid request" type="error"></Alert>
    </>
  )
}