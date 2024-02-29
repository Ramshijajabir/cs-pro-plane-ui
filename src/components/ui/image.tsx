// components/ImageComponent.js


const ImageComponent = () => {
    return (
      

<div className="relative ">
    <div className="image1  top-0 left-0 border-solid border-2 border-gray-600">
        <img src="/images/piechart1.png" alt="Image 1 "/>
    </div>
    <div className="image2 absolute bottom-0 left-10  w-80 h-100 border-solid border-4 border-gray-400">
        <img src="/images/scrum.jpg" alt="Image 2" />
    </div>
</div>

);
};

      

{/* //  <div  className="flex justify-center h-14 bg-gradient-to-r from-cyan-500 to-blue-500  object-cover">
//   <img src="/images/piechart1.png" alt="Image 1" className=" w-180 h-80"/>
//   </div>   */}



   
   
  export default ImageComponent;
  