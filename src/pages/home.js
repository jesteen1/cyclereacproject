import React ,{useEffect}  from 'react';
import custom from '../custom';

class Home extends React.Component{


    render(){

        return(
            <body className='bg-black '>
            <section className='text-white overflow-hidden'>



                    <div class="  p-10 flex" >

                        <div class="text-white pl-28 mr-auto hidden lg:flex">

                            <div class="w-12 h-12 my-auto ">
                                <img src="./assests/logo.svg" alt="" />
                            </div>
                            <div class="px-3 my-auto ">
                                <p class="font-bold text-2xl">odyssey</p>
                                <p class="uppercase logocolor text-sm">bicycle</p>
                            </div>
                        </div>

                        <div class="text-white uppercase flex  ">
                            <div class=" px-2 lg:px-4 my-auto mx-3 md:mx-10  lg:mx-20 h-7 overflow-hidden">
                                <div class="animation">

                                    <p class="opacity-40 hidden lg:block">Home</p>
                                    <a class="themecolor " href="#home">Home</a>
                                </div>
                            </div>
                            <div class=" px-2 lg:px-4 my-auto mx-3 md:mx-10  lg:mx-20 h-7 overflow-hidden">
                                <div class="animation">

                                    <p class="opacity-40 hidden lg:block">services</p>
                                    <a class="themecolor " href="#services">services</a>
                                </div>
                            </div>
                            <div class=" px-2 lg:px-4 my-auto mx-3 md:mx-10  lg:mx-20  h-7 overflow-hidden">
                                <div class="   animation ">

                                    <p class="opacity-40 hidden lg:block">about</p>
                                    <a class="themecolor " href="#obout">about</a>
                                    {/* <Link class="themecolor " to='/about' >About</Link>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative text-white hidden xl:block" id="home">
                        <img src="./assests/bike.svg" alt="" class=" " />
                            <div class="top-0 bottom-0 left-0 right-0 absolute mt-96 ml-10 pl-28 flex">
                                <div class="main">

                                    <div>

                                        <p class="text-7xl ">odyssey</p>
                                        <p class="text-8xl themecolor">ONE</p>
                                    </div>

                                    <div>
                                        <p class="widthfortext mt-14 opacity-50">Odyssey ONE's electric bikes are equipped with advanced
                                            technology, including a powerful electric motor, long-lasting battery, and intuitive
                                            controls. The company's bikes are also built with durable materials and are designed to
                                            withstand the wear and tear of everyday use.</p>
                                    </div>
                                    <div class="mt-14 relative">
                                        <a target="_blank" rel='noreferrer'
                                            href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1">
                                            <button class="button">BUY ONE </button></a>


                                    </div>
                                </div>

                                <div class="part1  p-5   themeblackcolor  h-24 rounded-2xl flex normal">
                    <a href="#brake" class="flex">


                        <img src="./assests/vicheal.svg" alt="" class="image transform scale-110 duration-200 hover:scale-150 " />
                        <div class=" overflow-hidden hide ">
                            <div class="px-5">
                                <p class="font-bolder smalltext opacity-60">Brakers</p>
                                <p class="text-lg">s ram code R</p>
                            </div>

                </div>
                </a>
                            </div>
                            <div class="  part2  p-5  themeblackcolor   h-24 rounded-2xl flex  normal">
                                <a href="#seat" class="flex">

                                    <img src="./assests/vicheal.svg" alt="" class="image transform scale-110 duration-200 hover:scale-150 " />
                                    <div class=" overflow-hidden hide ">
                                        <div class="px-5">
                                            <p class="font-bolder smalltext opacity-60">Light seat</p>
                                            <p class="text-lg">Cygolite Hotrod 50</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="   part3  p-5  themeblackcolor   h-24 rounded-2xl flex  normal">
                                <a href="#battery" class="flex">
                                    <img src="./assests/vicheal.svg" alt="" class="image transform scale-110 duration-200 hover:scale-150 " />
                                    <div class=" overflow-hidden hide ">
                                        <div class="px-5">
                                            <p class="font-bolder smalltext opacity-60">Battery
                                            </p>
                                            <p class="text-lg">Juiced 52V Battery Pack</p>
                                        </div>
                                        </div>
                                    </a>

                            </div>
                        </div>
                    <div class="   part4  p-5  themeblackcolor   h-24 rounded-2xl flex  normal">
                        <a href="#motor" class="flex">

                            <img src="./assests/vicheal.svg" alt="" class="image transform scale-110 duration-200 hover:scale-150 " />
                            <div class=" overflow-hidden hide ">
                                <div class="px-5">
                                    <p class="font-bolder smalltext opacity-60">Motor
                                    </p>
                                    <p class="text-lg">Yamaha PW-X2</p>
                                </div>
                                </div>
                            </a>
                    </div>
                </div>
                <div class=" left-80 text-white ml-30 lg:ml-80 relative  lg:bottom-20  hidden xl:flex" data-aos="fade-down">
            <div class="mt-auto pb-20 flex px-20">
                <img src="./assests/somedetail.svg" alt="" />
                <div class="px-5">
                    <p class="smalltext opacity-60">speed</p>
                    <p> 80.6KM/H</p>
                </div>
            </div>
            <div class="mt-auto pb-20 flex px-20">
                <img src="./assests/somedetail.svg" alt="" />
                <div class="px-5">
                    <p class="smalltext opacity-60">material</p>
                    <p> Carbon (CF)</p>
                </div>
            </div>
            <div class="mt-auto pb-20 flex">
                <img src="./assests/somedetail.svg" alt="" />
                <div class="px-5">
                    <p class="smalltext opacity-60">Sizes</p>
                    <p> S, M, L, XL</p>
                </div>
            </div>
        </div>





            <div class="relative text-white block xl:hidden">
                <img src="./assests/bike.svg" alt="" />
                <div class="absolute p-10 lg:mt-14 top-0 bottom-0 left-0 right-0">
                    <p class="text-2xl sm:text-6xl">odyssey
                    </p>
                    <p class="text-3xl sm:text-8xl themecolor">ONE</p>
                    <div>
                        <p class=" hidden  lg:block w-80 pt-4 opacity-40 pb-10">Odyssey ONE's electric bikes are equipped
                            with advanced technology, including a powerful electric motor, long-lasting battery, and
                            intuitive controls. The company's bikes are also built with durable materials and are designed
                            to withstand the wear and tear of everyday use.</p>
                    </div>
                    <button class="button hidden lg:block">BUY ONE</button>
                    <a target="_blank"
                        href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1">

                        <img src="./assests/buy one.svg " alt="buy one" id="different"
                            class="mt-10 -ml-10 block w-50  sm:w-80  lg:hidden" />
                    </a>
                </div>

            </div>

        <section class="  text-white  " id="brake">
            <div class="flex">

                <div class=" relative overflow-hidden z-index3  w-30 hidden xl:block parent text-white">

                    <img src="./assests/bike.svg" alt="" class="hidingcycle movinganimation  " />
                    <div class="absolute z-50 bottom-20 left-10 right-0 ml-72  w-1/3 ">
                        <a target="_blank"
                            href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1">
                                <img
                                src="./assests/buy one.svg" alt="" /></a>
                    </div>
                    <div class="z-index2 absolute text-white bottom-40 px-5 pt-4">
                        <p class="font-bold text-2xl text-center mt-4 text-white">INFO OBOUT SERVICES AND WARRANTY </p>
                        <ol class=" p-5 z-index2">
                            <li class="lightcolor points"> cycle warranty <span class="opacity-100 font-bold text-red-500">5
                                    years</span> .</li>
                            <li class="lightcolor points">our company is around the india. </li>
                            <li class="lightcolor points">we have customer care number to provide services</li>
                            <li class="lightcolor points">brake warranty <span class="text-red-500 font-bold"> 2
                                    years</span></li>
                        </ol>

                    </div>
                </div>
                <div class=" pl-12 pt-10 mt-10  lg:mt-1" data-aos="zoom-in">
                    <p class="text-5xl lg:text-6xl">The best Brakes</p>
                    <p class="text-6xl lg:text-7xl">in the world</p>
                    <p class=" lg:ml-8 text-3xl md:text-6xl themecolor">SRAM Code R</p>
                    <div class="flex flex-wrap lg:flex-nowrap w-full">
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                For superior braking power, we built Code R with our DirectLink lever mated to an oversized
                                four-piston caliper. Finger ergonomics adapt with a tool-free reach adjust - offering a
                                perfect
                                balance of all forces: reliable, practical and - naturally - powerful.
                            </div>
                        </div>
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Designed specifically for heavy-duty demands.
                                Engineered for easy installation and maintenance.
                                Metallic pads come standard for more power and longer wear.
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-96  overflow-hidden hidden xl:block">

                    <img src="./assests/brake.svg" alt="" class="w-72 h-96 transform scale -ml-48 " />
                </div>
                </div>
        </section>
        <section class="  text-white p-5 " id="battery">
            <div class="flex">

                <div class="relative z-index3 overflow-hidden  w-30 hidden xl:block parent text-white">

                    <img src="./assests/bike.svg" alt="" class="hidingcycle movinganimation  " />
                    <div class="absolute  bottom-20 left-10 right-0 ml-72  w-1/3 ">
                        <a target="_blank"
                            href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1"><img
                                src="./assests/buy one.svg" alt="" /></a>
                    </div>
                    <div class="z-index2 absolute bottom-40 px-5 pt-4">
                        <p class="font-bold text-2xl text-center mt-4">INFO OBOUT SERVICES AND WARRANTY </p>
                        <ol class="z-index p-5">
                            <li class="lightcolor points"> cycle warranty <span class="opacity-100 font-bold text-red-500">5
                                    years</span> .</li>
                            <li class="lightcolor points">our company is around the india. </li>
                            <li class="lightcolor points">we have customer care number to provide services</li>
                            <li class="lightcolor points">battery warranty <span class="text-red-500 font-bold"> 3
                                    years</span></li>
                        </ol>

                    </div>
                    </div>
                <div class= " p-1 lg:p-10 mt-10  lg:mt-1">
                    <div data-aos="zoom-in">

                        <p class=" text-5xl lg:text-6xl">The best battery</p>
                        <p class="text-5xl lg:text-7xl">in the world</p>
                        <p class=" lg:ml-8 text-3xl md:text-6xl themecolor">Juiced 52V Battery</p>
                    </div>
                    <div class="flex flex-wrap w-full lg:flex-nowrap">
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Introducing Juiced Bikes NEW G2 52-Volt lithium-ion e-bike battery pack. A huge leap forward
                                in
                                battery technology - the redesigned platform system delivers a massive functionality
                                upgrade!

                            </div>
                        </div>
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Equipped with a grip handle for quick installation and removal,he G2 battery pack delivers a
                                more ergonomic and easy-to-carry design.
                                now your battery range before you ride with the built-in LED Battery Charge meter.
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-96  overflow-hidden hidden xl:block">
                    <img src="./assests/battery.png" alt="" class="w-72 h-96 transform scale -ml-48 " />
                </div>
                </div>
        </section>
        <section class="  text-white p-5 " id="seat">
            <div class="flex">

                <div class="relative overflow-hidden z-index3  w-30 hidden xl:block parent text-white">

                    <img src="./assests/bike.svg" alt="" class="hidingcycle movinganimation z-50 " />
                    <div class="absolute  bottom-20 left-10 right-0 ml-72  w-1/3 ">
                        <a target="_blank"
                            href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1"><img
                                src="./assests/buy one.svg" alt="" /></a>
                    </div>
                    <div class="z-index2 absolute bottom-40 px-5 pt-4">
                        <p class="font-bold text-2xl text-center mt-4">INFO OBOUT SERVICES AND WARRANTY </p>
                        <ol class="z-index p-5">
                            <li class="lightcolor points"> cycle warranty <span class="opacity-100 font-bold text-red-500">5
                                    years</span> .</li>
                            <li class="lightcolor points">our company is around the india. </li>
                            <li class="lightcolor points">we have customer care number to provide services</li>
                            <li class="lightcolor points">seat warranty <span class="text-red-500 font-bold"> 1
                                    years</span></li>
                        </ol>
    </div>
                    </div>
                <div class="p-1 lg:p-10 mt-10  lg:mt-1">
                    <div data-aos="zoom-in">

                        <p class="text-5xl lg:text-7xl">The best seat</p>
                        <p class="text-5xl lg:text-6xl">in the world</p>
                        <p class="lg:ml-8 text-3xl md:text-6xl themecolor">Cygolite Hotrod 50</p>
                    </div>
                    <div class="flex flex-wrap w-full lg:flex-nowrap">
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Packed in a sleek profile that complements your road bike, the Hotrod 50™ unleashes a
                                powerful
                                50 lumens of radiant wide coverage. Its 6 attention grabbing modes keep motorists aware of
                                your
                                presence

                            </div>
                        </div>
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                any time you’re on the road. Its Versatite™ flexible mount lets you attach the Hotrod 50™
                                tail
                                light to most seat posts and seat stays, including aero styles.
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-96  overflow-hidden hidden xl:block">
                    <img src="./assests/seat.png" alt="" class="w-72 h-52 transform scale ml-52  mb-32" />
                </div>
                </div>
        </section>
        <section class="  text-white p-5 " id="motor">
            <div class="flex">

                <div class="relative overflow-hidden z-index3  w-30 hidden xl:block parent text-white">

                    <img src="./assests/bike.svg" alt="" class="hidingcycle movinganimation z-50 " />
                    <div class="absolute z-50 bottom-20 left-10 right-0 ml-72  w-1/3 ">
                        <a target="_blank"
                            href="https://www.amazon.in/EMotorad-X2-Mountain-Detachable-Suspension/dp/B0BSLL33PZ/ref=sr_1_4?crid=WU5UCWOFFIPF&keywords=electric%2Bcycle&qid=1677837842&sprefix=electric%2Bcycl%2Caps%2C409&sr=8-4&th=1"><img
                                src="./assests/buy one.svg" alt="" /></a>
                    </div>
                    <div class="z-index2 absolute bottom-40 px-5 pt-4">
                        <p class="font-bold text-2xl text-center mt-4">INFO OBOUT SERVICES AND WARRANTY </p>
                        <ol class="z-index p-5">
                            <li class="lightcolor points"> cycle warranty <span class="opacity-100 font-bold text-red-500">5
                                    years</span> .</li>
                            <li class="lightcolor points">our company is around the india. </li>
                            <li class="lightcolor points">we have customer care number to provide services</li>
                            <li class="lightcolor points">MOTOR warranty <span class="text-red-500 font-bold"> 3
                                    years TO 5 years</span></li>
                        </ol>

                    </div>
                </div>
                <div class="p-1 lg:p-10 mt-10  lg:mt-1">
                    <div data-aos="zoom-in">

                        <p class="text-5xl md:text-7xl">The best motor</p>
                        <p class="text-5xl md:text-6xl">in the world</p>
                        <p class="lg:ml-8 text-3xl md:text-6xl themecolor">Yamaha PW-X2</p>
                    </div>
                    <div></div>
                    <div class="flex  flex-wrap md:flex-nowrap w-full ">
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Yamaha’s PWSeries SE is based on the first-generation of the PW motor and brings all the
                                features which made it so popular. This upgraded version brings an even faster speed sensor
                                within the rear hub, making the motor response even quicker. A quicker response means a more
                                natural feel with the assist.

                            </div>
                        </div>
                        <div data-aos="fade-up">

                            <div class="opacity-40 p-5 w-80">
                                Drive Unit: Center mount,
                                Weight: 7.7 lbs,
                                Rated Nominal Power: 250 W,
                                Max Torque: 70 Nm,
                                Max Support Speed: 20 MPH,
                                Max Support Mode %: High-280%, Standard-190%, ECO-100%, ECO+/50%.
                            </div>
                        </div>
                        </div>
                    </div>
                <div class=" w-96  overflow-hidden hidden xl:block">
                    <img src="./assests/motor.png" alt="" class="w-72 h-52 transform scale ml-20  mt-20" />
                </div>
                </div>
        </section>
        <section class="p-5 text-white block   w-full flex xl:hidden  justify-center" id="services">
            <div>
                <p class="h1 text-center font-bold  text-4xl" data-aos="flip-left">All warranty details and services are here</p>
                <ol class="p-5 text-center text-lg ">
                    <li class="flex justify-center  lightcolor"  data-aos="fade-left">motor warranty - <span class="text-red-500 font-bold">3 to 4
                            years</span> </li>
                    <li class="flex justify-center lightcolor" data-aos="fade-right">battery warranty - <span class="text-red-500 font-bold">3
                            years </span></li>
                    <li class="flex justify-center lightcolor" data-aos="fade-left">cycle warranty -<span class="text-red-500 font-bold">5
                            years</span>
                    </li>
                    <li class="flex justify-center lightcolor" data-aos="fade-right">led seat warranty - <span class="text-red-500 font-bold">1
                            year</span></li>
                </ol>
            </div>
        </section>
       <section class="p-5 text-white   bg-black">
        <p class="capitalize text-4xl p-5 text-center font-bold ">our products</p>
        <div class="flex justify-center" data-aos="zoom-in">

            <div class="lightcolor2  p-5 rounded">
                <div class=" shadow1 flex  image-bigger overflow-hidden rounded ">
    <div class=" flex image-move moved" id="image_moving">

        <img src="./assests/cycle1.jpg"  alt="image " class="image-bigger" id="image1" />
        <img src="./assests/battery.png" alt=""class="image-bigger" id="image2" />
        <img src="./assests/cycle2.jpg" alt=""class="image-bigger" id="image3" />
        <img src="./assests/cycle3.jpg" alt=""class="image-bigger" id="image4" />
    </div>
                </div>
            
            </div>
        </div>

    </section>

        </section>
        <p class='text-white text-5xl ml-4 text-center shadow font-bold' id='obout' data-aos="flip-left">About us</p >
<div class=' bg-black '>


        <section class="w-full    absolute pt-10 bg-black overflow-hidden">

            <div class="text-white  mr-auto ">

                <div class="w-12 h-12 my-auto  ">
                    <img src="./logo.svg" alt="" data-aos="fade-left" />
                </div>
                <div class=" text-center " data-aos="zoom-out-up">
                    <p class="font-bold text-2xl">odyssey</p>
                    <p class="uppercase logocolor text-sm letterspacing themecolor">bicycle</p>
                </div>
            </div>
            <div class=" mx-auto text-center  flex justify-center overflow-hidden">

                <div class="pt-10  text-white w-96">
                    <p class="themecolor h2 text-center font-bold text-2xl" data-aos="zoom-in"> About</p>
                    <p data-aos="fade-up">This is a fictional firm made just to show you how design and animations are handled in visual studio.
                        All
                        of this is made to help those who have a desire to learn web development and animation design.

                        All renders are made in the website program and are free to use. this website usages <br></br><br></br>
                        <span class="bg-green-500  p-3  rounded font-bold font-sans">HTML</span> <span class="bg-pink-500 p-3 rounded font-bold font-sans " >CSS</span> <span class="bg-blue-500 p-3 rounded font-bold font-sans" >Javascript</span> . </p>
                    <p class="themecolor pt-5" data-aos="zoom-in">Learn more about the website program at this address:</p>
                    <p class="pt-5 w-40 text-center " data-aos="fade-up">
                    https://github.com/jesteen1/course-update
                    </p>
                  
                    <p class="font-bold themecolor pt-4 text-center text-2xl" data-aos="fade-up">Thanks for viewing our site</p>
                    <p class="text-center text-2xl pt-3" data-aos="fade-up">The website made by jesteen</p>
                </div>
                </div>
          </section>

        </div>
        </body>



        )
    }
}
export default Home