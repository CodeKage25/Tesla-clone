import React from "react";
import NavBar from "./NavBar";

const Home = ({ }) => {
    return (
        <>
            <section className="min-h-screen">
                <div>

                    <NavBar />

                </div>
                <div>
                    <h2 className="text-center text-5xl md:font-black" >Model 3</h2>
                    <p className="text-center" style={{ color: "gray" }}>Order Online for <u>Touchless Delivery</u></p>
                </div>
            </section>

            <section>

            </section>

        </>

    );
}

export default Home;