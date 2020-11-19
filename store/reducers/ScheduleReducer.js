

import {ADD_SCHEDULE} from '../actions/ScheduleActions';

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
        
        default:
            break;
    }

    return state;
}