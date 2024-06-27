import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div>
        <div className="flex flex-col justify-center items-center text-center  p-2 bg-gray-700">
				<h6 className=" text-default-text">
					© {year} All rights reserved. {" "}
					{/* <span className="hover:text-blue-600 font-semibold cursor-pointer">
						{" "}
					</span> */}
				</h6>
			</div>
    </div>
  )
}

export default Footer