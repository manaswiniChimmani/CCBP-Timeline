// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-contaier">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-con">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-container">
        {tagsList.map(each => (
          <p key={each.id} className="tag">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
