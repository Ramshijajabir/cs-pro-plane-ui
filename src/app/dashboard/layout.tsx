// import Navbar from "@/components/navbar";
// import SideBar from "@/components/sidebar/sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main>
//       <Navbar />



//       <div className="flex min-h-[80vh] ">
//         <div className="flex justify-center w-1/4">
//           <SideBar />

//         </div>
//         <div className="bg-red flex-1 ml-[2%] ">{children}</div>
//     </div>
//     </main >
//   );
// }
      {/* <div> <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Module
        </button></div> */}
      // <div className="flex min-h-[80vh]">
      //  <div className="w-1/4">
      //    <SideBar />
      //            </div>
      // <div className="w-1/4 flex items-center justify-center"> <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md">
      //   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      //     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      //   </svg>
      //   Add Module
      // </button></div>

      


      import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>


      <Navbar />

     
      <div className="flex min-h-[80vh]">
        <div className="w-1/4">
        <div className="w-full flex flex-col">
          <div className="flex  py-4 pl-4">
                    <input
                        type="text"
                        className="w-1/4 px-2 py-2 text-sm border border-gray-400 rounded-lg focus:outline-none"
                        // className="w-1/4 px-2 py-2 text-sm focus:outline-none"
                        placeholder="New Issues"
                    />
                    <button className="flex items-center rounded-lg px-4 bg-gray-400">
                        <svg
                            className="w-4 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

      
          <SideBar />
        
        <div className="w-3/4 flex flex-col">
          <div className="flex justify-start py-4 pl-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              {/* Add Module */}
              <span>Add Project</span> 
            </button></div>
          </div>
        </div>
        <div className="flex-1 bg-red ml-[2%]">{children}</div>
      </div>
    </main>
  );
}




