import React , {Component} from 'react';

function Carousel(){
    return (

        
    <div class="splide">
	<div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">

     <div className="relative bg-yellow-300 mt-20 w-auto
      lg:max-w-full">
     <img className="w-screen" src={process.env.PUBLIC_URL + "images/laptop.jpg"}></img>
     <div className="absolute left-4 top-80 px-10">

     <h1 className="font-bold text-3xl ">The World’s <br/>
     <span>
     Innovation Community
     </span>
     </h1>
     <p className="w-80 mt-4">OneValley is a global entrepreneurship platform for individuals, startups, and corporations seeking innovation and accelerated growth. We provide a highly curated and immersive experience through our innovation centers, enterprise services, and OneValley Passport, the world’s most comprehensive online innovation platform.</p>
      <button className="uppercase mt-3 shadow-lg rounded-lg bg-blue-300 w-40 h-10">explore</button>
     </div>
     
     </div>

      </li>


			<li class="splide__slide">content 2</li>
			<li class="splide__slide">content 3</li>
		</ul>
	</div>
</div>
    );
}

export default Carousel;