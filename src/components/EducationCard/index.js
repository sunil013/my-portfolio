import {HiOutlineBuildingOffice} from 'react-icons/hi2'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {CgCalendarDates} from 'react-icons/cg'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'

import {
  EducationCardItem,
  EducationCardTopContainer,
  EducationPosition,
  EducationType,
  EducationBottomContainer,
  LocationAndCompanyContainer,
  LocationContainer,
  LocationName,
  DurationContainer,
  EducationDuration,
} from './styledComponents'

const EducationCard = props => {
  const {details} = props
  const {position, type, company, location, duration} = details
  return (
    <PortfolioContext.Consumer>
      {value => {
        const {darkTheme} = value
        const iconClass = darkTheme ? 'dark-icon' : 'light-icon'
        return (
          <EducationCardItem darkTheme={darkTheme}>
            <EducationCardTopContainer>
              <EducationPosition darkTheme={darkTheme}>
                {position}
              </EducationPosition>
              <EducationType>{type}</EducationType>
            </EducationCardTopContainer>
            <EducationBottomContainer>
              <LocationAndCompanyContainer>
                <LocationContainer>
                  <HiOutlineBuildingOffice size={18} className={iconClass} />
                  <LocationName darkTheme={darkTheme}>{company}</LocationName>
                </LocationContainer>
                <LocationContainer>
                  <HiOutlineLocationMarker size={18} className={iconClass} />
                  <LocationName darkTheme={darkTheme}>{location}</LocationName>
                </LocationContainer>
              </LocationAndCompanyContainer>
              <DurationContainer>
                <CgCalendarDates size={18} className={iconClass} />
                <EducationDuration>{duration}</EducationDuration>
              </DurationContainer>
            </EducationBottomContainer>
          </EducationCardItem>
        )
      }}
    </PortfolioContext.Consumer>
  )
}

export default EducationCard
