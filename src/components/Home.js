import React from "react";


const image = "https://images5.alphacoders.com/905/905439.jpg"
const styles = {
    container: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
        width: "cover",


        backgroundSize: "cover",
        backgroundPosition: 'center',
        
    },
    title:{
        color: "white",
         align: "center",
         padding:200,
         marginRight:"100vh"

         

    }

    

    
};




function Home() {


    return (
        <>

            <div className="homePage" style={styles.container}>
                <h1 style={styles.title}>
                    welcome to The Friendly Bean

                </h1>

            </div>
        </>

    );
}

export default Home;