

import {ADD_SCHEDULE, ADD_VISIT_LOCATION} from '../actions/ScheduleActions';

const initialState = {
    schedulesData:[],
    dailySchedulesData:[],
    visitLocationScheduleData:[],
}



export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_SCHEDULE:
            var schedule = action.data;
            state.schedulesData.push(schedule);
        
            return state;
        


        case ADD_VISIT_LOCATION:
            var visitLocation = action.data;
            var newVisitLocations = [...state.visitLocationScheduleData,visitLocation];

            return {...state,visitLocationScheduleData:newVisitLocations};
            
        default:
            break;
    }

    return state;
}