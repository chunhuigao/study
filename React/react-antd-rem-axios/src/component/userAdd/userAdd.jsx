
import  React from 'react'

class userAdd extends React.Component {


    clickBnt(){
        this.props.history.push('/users')
    }

  render() {
    return (
      <div>
          <button onClick={()=>{this.clickBnt()}}>坎坎坷坷</button>
      </div>
    )
  }
}
export default  userAdd