 "name": "espresso",
      "image": "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630",
      "description": "made from the same beans as coffee but is stronger, thicker, and higher in caffeine",




      //delete
      const updatedItems = items.filter((item) => item.id !==id);

        setItems(updatedItems);





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
                    onChange={(e) => setImage(e.target.value)}
                />
            </label>

            <label >
                discribtions:
                <input
                    type="text"
                    name="discribtion"
                    value={description}
                    onChange={(e) => SetDescription(e.target.value)}
                />

            </label>

            <button type="submit">Add to List</button>
        </form>



        <nav>
            <NavLink excat to href="/">Home</NavLink>
            <NavLink excat to href="/ItemForm">ItemForm</NavLink>
            <NavLink excat to href="/MenuList">MenuList</NavLink>
        </nav>