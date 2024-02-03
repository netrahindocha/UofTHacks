import React from "react";
import Album from "./Album";

const PhotoShop = ({setImageURL}) => {

    let selectedImage = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";

    return (
        <div>

            <main>

                <div className="content">
                    <p className="largeFont">Professional and Pixel Perfect Photo Diary</p>
                    <p className="elaboration">Explore perfect filters for your nostalgic memories and events to make it more colorful and lively</p>
                    <p id="slogan">Let's Go Back In Time!</p>
                </div>

                <div className="cover">
                    <div className="photoEditor">
                        <img src={selectedImage} alt="" />
                        <div className="photoUtils">
                            <button>Upload Picture</button>
                            <button onClick={() => {setImageURL(selectedImage)}}>Save to Album</button>
                        </div>
                    </div>
                    <div className="filterSpace">
                        <p id="chooseFilter">Choose Your Filter</p>
                        <div className="filterOptions">
                            <button className="filters">1800s (B&W)</button>
                            <button className="filters">1950s (Sepia)</button>
                            <button className="filters">1980s (XXX)</button>
                            <button className="filters">2000s (XXX)</button>
                        </div>
                    </div>
                    
                    {/* <img className="smallImg" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" alt="" /> */}
                    {/* <img className="smallImg" src="https://i.pinimg.com/originals/43/db/46/43db4682a57bbddf864719d9403919eb.jpg" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                </div>

            </main>

        </div>
    )
}

export default PhotoShop;