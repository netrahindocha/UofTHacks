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
                    <button id="explore">Explore product <i class="fa-solid fa-greater-than"></i></button>
                </div>

                <div className="cover">
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis tempore maxime dolores quo autem unde eius deleniti delectus, natus laboriosam ex fugiat officia animi vel sed doloremque quas alias magni! Dignissimos perspiciatis quas quos illum. Porro maxime laborum est aut perferendis consequatur assumenda aspernatur nesciunt eos fuga doloribus nobis in laudantium dignissimos aliquid blanditiis, exercitationem dicta magni recusandae corporis tempora nihil eius. Voluptatum ex, ullam nisi doloremque modi nostrum odit vel quia laborum accusantium mollitia, fugit saepe. A veritatis excepturi magnam itaque molestias sit hic explicabo, veniam laborum quod odio ipsam placeat expedita adipisci deserunt voluptate maxime? Maiores, accusamus voluptatibus. Quaerat commodi natus nam, omnis officiis magnam fugiat tempore. Perspiciatis sunt distinctio quidem doloremque omnis asperiores, quod soluta, officia quisquam a hic sint praesentium exercitationem nemo alias. Nulla voluptas sit nostrum quisquam corrupti expedita illum adipisci ducimus id. Quaerat cupiditate necessitatibus molestiae repudiandae placeat deleniti expedita accusantium omnis, libero qui amet eum voluptatum reprehenderit. Nobis hic commodi sint, dicta sunt modi cum nesciunt iste laudantium error et at voluptas blanditiis ullam impedit adipisci tempora expedita officia iure illo rerum eligendi ea? Numquam delectus placeat dolores minima, pariatur beatae commodi, tenetur labore possimus adipisci laborum quidem iure consequuntur voluptatum laboriosam.</p>
                    {/* <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" alt="" /> */}
                    {/* <img src="https://i.pinimg.com/originals/43/db/46/43db4682a57bbddf864719d9403919eb.jpg" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                </div>

            </main>

        </div>
    )
}

export default PhotoShop;