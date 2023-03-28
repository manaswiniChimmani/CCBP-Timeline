// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="h1">
        MY JOURNEY OF{' '}
        <spam className="h2">
          <br />
          CCBP 4.0
        </spam>
      </h1>

      <div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          //           theme={{
          //     primary: "red",
          //     secondary: "blue",
          //     cardBgColor: "yellow",
          //     cardForeColor: "violet",
          //     titleColor: "red",
          //   }}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            cardBgColor: '#ffffff',
            cardForeColor: 'violet',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(each =>
            each.categoryId === 'COURSE' ? (
              <CourseTimelineCard courseDetails={each} key={each.id} />
            ) : (
              <ProjectTimelineCard projectDetails={each} key={each.id} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
