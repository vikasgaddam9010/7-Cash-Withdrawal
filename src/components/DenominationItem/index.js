import './index.css'

const DenominationItem = props => {
  const {each, onAmountCheck} = props
  const onWithdrwal = () => {
    onAmountCheck(each.id)
  }
  return (
    <li className="li-card">
      <button onClick={onWithdrwal}>{each.value}</button>
    </li>
  )
}

export default DenominationItem
