
import { generate_id } from '../utils/helper';
import ScheduleModel from '../Model/scheduleModel';


/**
 * 
 * @param {*} province 
 * @param {*} start_at 
 * @param {*} day_number 
 * @param {*} tour_type 
 */
export const createSchedule = async (province, start_at, day_number, tour_type) => {

    try {
        let id = await generate_id('schedule');
        let schedule = new ScheduleModel.Schedule(id, day_number, province, start_at, tour_type);

        return {
            data: schedule,
            message: 'success'
        }

    } catch (error) {

        return {
            data: null,
            message: 'failed' + error
        }
    }

}


/**
 * 
 * @param {*} visit_date 
 * @param {*} visit_locations 
 * @param {*} schedule_id 
 */
export const createDailySchedule = async (visit_date, visit_locations = [], schedule_id) => {
    try {
        let id = await generate_id('dailyschedule');
        let schedule = new ScheduleModel.DailySchedule(id, visit_date, visit_locations, schedule_id);

        return {
            data: schedule,
            message: 'success'
        }

    } catch (error) {

        return {
            data: null,
            message: 'failed' + error
        }
    }
}




export const updateDailySchedule = async (id, locations) => {
    try {
        let id = await generate_id('dailyschedule');
        let schedule = new ScheduleModel.DailySchedule(id, visit_date, visit_locations, schedule_id);

        return {
            data: schedule,
            message: 'success'
        }

    } catch (error) {

        return {
            data: null,
            message: 'failed' + error
        }
    }
}