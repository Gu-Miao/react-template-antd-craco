import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { plus, minus, selectCounter } from '@/store/counter'
import { Button, Input, Space } from 'antd'
import './index.scss'

const Counter = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector(selectCounter)
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <Space>
        <Button onClick={() => dispatch(minus(1))}>-</Button>
        <Input value={value} readOnly></Input>
        <Button onClick={() => dispatch(plus(1))}>+</Button>
      </Space>
    </div>
  )
}
export default Counter
