import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  amoutCheck = id => {
    const {denominationsList} = this.props
    const {balance} = this.state
    const index = denominationsList.findIndex(each => {
      if (each.id === id) {
        return true
      } else {
        return false
      }
    })
    const amoutToBeWithdrawn = denominationsList[index].value
    if (balance >= amoutToBeWithdrawn) {
      this.setState(prevState => ({
        balance: prevState.balance - amoutToBeWithdrawn,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="profile-and-name">
            <p className="name-first-letter">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <div>
              <p className="name">{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="name">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-conatiner">
            {denominationsList.map(each => (
              <DenominationItem
                onAmountCheck={this.amoutCheck}
                each={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
