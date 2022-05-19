import React, { useState } from "react";

function ItemForm({onAddItem}) {
    const [name, setName] = useState("");
    const [discribtion, setDiscrimtion] = useState("")
    const [image, setImage] = useState("")
  
  
    function handleSubmit(e) {
      e.preventDefault();
      const itemData = {
        name: name,
        image: image,
        discribtion:discribtion,
        isInCart: false,
      };
      // console.log("name:", name);
      // console.log("discribtion:", discribtion);
    
//     fetch("http://localhost:4000/items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(itemData),
//     })
//       .then((r) => r.json())
//       .then((newItem) => onAddItem(newItem));
 }
  
  
    return (
        
        
      <form className="NewItem" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
            image:
        <input
         type="text"
         src={image}
         value={image}
         onChange={(e) =>setImage(e.target.value)}
        />
        </label>
  
        <label >
          discribtions:
          <input
          type="text"
            name="discribtion"
            value={discribtion}
            onChange={(e) => setDiscrimtion(e.target.value)}
          />
        
        </label>
  
        <button type="submit">Add to List</button>
      </form>
    
    );
  }
  
  export default ItemForm;
  