import React from 'react'

// const Card = (props) => {
const Card = ({userName="Dog",animal="dog"}) => {
    // console.log(props);
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://www.pharmacy4pets.com/dk/media/.renditions/wysiwyg/Siberische_Husky.png" />
  </div>
  <div className="flex items-center md:ite">
    {/* <span className="text-2xl font-medium">{props.userName}</span> */}
    <span className="text-2xl font-medium">{userName}</span> 
    {/* // if i pass userName directly then i dont have to do props.userName */}
    <span className="font-medium text-sky-500">{animal}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card
