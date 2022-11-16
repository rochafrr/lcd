import React from "react"

function Coin({ TotalSupply, Pool, Staking, BlockHeight, Burn }) { 
 
    return ( 
      <div className="coin"> 
        <div className="Name"> 
          <h1> Luna Classic Community</h1> 
        </div> 
   
        <div className="TSupply"> 
          <h3>Total Supply -------------------------------- {parseFloat(TotalSupply).toLocaleString('pt-br', {minimumFractionDigits: 2})} LUNC</h3> 
        </div> 
   
         <div className="CSupply"> 
          <h3> Circ. Supply -------------------------------- {parseFloat((TotalSupply)-(Staking/1000000)-(Pool/1000000)).toLocaleString('pt-br', {minimumFractionDigits: 2})} LUNC</h3> 
        </div>
        <div className="pool" > 
          <h3> Community Pool -------------------------------- {parseFloat(Pool/1000000).toLocaleString()} LUNC</h3> 

          

        </div>
   
        <div className="Staking"> 
          <h3>Pool Staking ----------------------------------- {(Staking/1000000).toLocaleString()} LUNC</h3> 
        </div> 
   
        <div className="Block"> 
        <h3>Block Height ------------------------------------------ {parseInt(BlockHeight).toLocaleString()}</h3> 
        </div> 
   
     
         
        <div className="Burn">
        <h3>Last 10 Burn: </h3>


        <div>

          {Burn.map((item) => (
            <table>
              <thead>
                <tr>
                  <th className="id">ID</th>
                  <th className="block">Block</th>
                  <th className="amount">Amount</th>

                </tr>
              </thead>

              <tbody>
                <tr key={item}>
                  <td>{item.chainId}</td>
                  <td>{item.height}</td>
                  <td>{(item.amount / 1000000).toFixed(2)} Lunc</td>
                  

                </tr>
              </tbody>
            </table>
          ))}
          </div>
        </div>
          
      </div> 
      
    ) 
  }
  export default Coin;
