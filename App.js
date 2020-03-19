import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('num txs', this.props.txs)
    return(
      this.props.txs.flatMap((tx, i) => { 
        const videos = tx.out
          .filter(xput => Boolean(xput.f3) === true)
          .map(xput => xput.f3)
          .map(f3 => {
            return (
              <video key={i} width="100%" height="600" controls loop>
                <source src={`http://x.bitfs.network/${f3}`} />
              </video>
            ) 
          })
        return videos
      })
    )
  }
}