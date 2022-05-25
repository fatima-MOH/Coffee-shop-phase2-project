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
        fontWeight: 'bold',
        
         padding:310,
         fontStyle: 'italic',
        
         marginLeft:400,
         textDecorationLine: 'underline'

         

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