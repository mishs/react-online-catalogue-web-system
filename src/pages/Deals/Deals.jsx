import React, { useContext } from 'react'
import Filters from '../../components/Filters/Filters'
import List from '../../components/List/List'
import ListItem from '../../components/ListItem/ListItem'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import Tab from '../../components/Tab/Tab'
import DealsContext from '../../context/DealsContext'

function Deals() {
    const context = useContext(DealsContext)
    const {deals,filters} = context
    return (
        <div>
            <SearchHeader/>
            <Tab title="Filters" content={<Filters />} />
            <List>
                {
                    deals && deals.length?
                    deals.filter(deal=> {
                        let a = filters.filter(v=> v.checked)
                        if(a.length === 0){
                            return true
                        }else{
                            let filtered = a.length === a.filter(val=>(deal[val.name])).length
                            return filtered?true:false
                        }
                    }).map(deal=>{
                        return(
                            <ListItem key={deal.dealID} id={deal.dealID} title={deal.title} isOnSale={deal.isOnSale === "1"?true:false} price={deal.normalPrice} salePrice={deal.salePrice?deal.salePrice:null} />
                        )
                    })
                    :null
                }
            </List>
        </div>
    )
}

export default Deals
