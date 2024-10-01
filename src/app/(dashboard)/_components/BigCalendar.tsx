"use client"
import {Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const onchangeView=(selectedView:View)=>{
        setView(selectedView)
    }
  return (
    <div className='bg-white w-[90%] p-4'>
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "98%" }}
      views={["work_week","day"]}
      view={view}
      onView={onchangeView}
      min={new Date(2024,7,28,8,0)}
      max={new Date(2024,7,28,18,0)}
    />
  </div>
  )
}

export default BigCalendar