import React, { useState } from "react";

function ItemsContainer() {
  const [items, setItems] = useState([{id: 1, name: "Milk", category: "Dairy", price: 2}, {id: 2, name: "Banana", category: "Produce", price: 10}, {id: 3, name: "Vanilla Ice Cream", category: "Dairy", price: 4}, {id: 4, name: "Saffron Truffle Gold-Flecked Ice Cream", category: "Dairy", price: 14}, {id: 5, name: "Spinach", category: "Produce", price: 4}, {id: 6, name: "Pomegranates", category: "Produce", price: 11}])
    const[search, setSearch] =useState('')
    const [cheap, cheapState] = useState(false)
    
    const filteredItems = items.filter(item=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
    const cheapItems = filteredItems.filter(item=>{
        return item.price < 6 
    })

    function searchedItems(e){
        setSearch(e.target.value)
    }

    const itemMap = filteredItems.map(item=>{
        return <li key = {item.id}>{item.name}</li>
    })

    const cheapItemsMap = cheapItems.map(item=>{
        return <li key = {item.id}>{item.name}</li>
    })
console.log(cheapItemsMap)
  return (
    <div>
      <h3>Items go here:</h3>
      <input type='text' value = {search} onChange = {searchedItems}></input>
      <button onClick={()=>cheapState(!cheap)}>Cheap ones</button>
       <ul>

        {cheap?cheapItemsMap:itemMap}
      </ul>
    </div>
  );
}

export default ItemsContainer