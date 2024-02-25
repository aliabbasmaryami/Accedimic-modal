import React from "react";
import "./ParentsCalander.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { FiPlus } from "react-icons/fi";


const Calander = () => {
  return (
    <div className="parents-Calander-main">
    <div className="parents-Calander-mainn1">
    <FiPlus size={20}/>
    <h4>Create Schedule</h4>
    </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
    </LocalizationProvider>
    </div>
  );
};

export default Calander;
