export const ADD_SCHEDULE = 'ADD_SCHEDULE';





/**
 * author:thuantruong
 * description:Add schedule to travel
 * created_at:19/11/2020
 * 
 * @param {*} id 
 * @param {*} location 
 * @param {*} start_at 
 * @param {*} days_number 
 * @param {*} tour_type 
 */

export const addSchedule = (id, location, start_at, days_number, tour_type) => {

    return async (dispatch) => {
        try {

            let schedule = {
                id: id,
                location: location,
                start_at: start_at,
                days_number: days_number,
                tour_type: tour_type
            }

            dispatch({
                type: ADD_SCHEDULE,
                data: schedule
            })

        } catch (error) {
            console.warn('ERROR ', error);
        }
    }
}




/**
 * author:thuantruong
 * description: add daily schedule
 * created_at:19/11/2020 
 * @param {*} id 
 * @param {*} locations 
 * @param {*} schedule_id 
 */
export const addDailyschedule = (id, locations, schedule_id) => {
    return async (dispatch) => {
        try {

            let dailySchedule = {
                id: id,
                locations: locations,
                schedule_id: schedule_id
            }

            dispatch({
                type: ADD_SCHEDULE,
                data: dailySchedule
            })

        } catch (error) {
            console.warn('ERROR ', error);
        }
    }
}



export const updateDailySchedule = () => {
    return async (dispatch) => {

    }
}