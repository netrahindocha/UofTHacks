import React from "react";

const PhotoShop = () => {
    return (
        <div>
            <div className="dismiss">
                <i class="fa-solid fa-xmark"></i>
                <span>Your beautiful photo diary is here. Shop Move 2 now.</span>
                <a href="">Shop</a>
            </div>

            <div className="header">

                <div className="logoSection">
                    <p id="title">TIME MACHINE</p>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="">PhotoShop</a>
                        </li>
                        <li>
                            <a href="">Blogs</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                        <li>
                            <a href="">Radio</a>
                        </li>
                    </ul>
                </nav>

                <div className="userUtils">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>

            <main>

                <div className="content">
                    <p class="largeFont">Professional and Pixel Perfect Photo Diary</p>
                    <p class="elaboration">Explore perfect filters for your nostalgic memories and events to make it more colorful and lively</p>
                    <button id="explore">Explore product <span class="material-symbols-outlined">arrow_forward_ios</span></button>
                </div>

                <div className="cover">
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                    <input type="file" name="" id="" value="Add Image" />
                    
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