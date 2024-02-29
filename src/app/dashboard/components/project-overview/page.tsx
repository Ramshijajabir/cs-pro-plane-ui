import ImageComponent from '@/components/ui/image'
import React from 'react'

const ProjectOverview = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '30px' }} className="container items-center">
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }} className="heading">Overview of your projects, activity, and metrics</h1></div>
      <div>
        <p>
          Welcome to Plane, we are excited to have you here. Create your first project and track your issues, and this page will transform into a space that helps you progress. Admins will also see items which help their team progress.
        </p>
      </div>
      <div>
        <ImageComponent />
      </div>
      <div className="w-3/4 flex flex-col items-center">
        <div className="flex justify-center py-4 pl-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md flex items-center">
            <span>Build your first project</span>
          </button>
        </div>
      </div>


    </div>


  )
}

export default ProjectOverview