

class Schedule {
    constructor(id,day_number,location,start_at,tour_type){
        this.id = id;
        this.day_number = day_number;
        this.location = location;
        this.start_at = start_at;
        this.tour_type = tour_type;
    }
}


class DailySchedule {
    constructor(id,visit_date,locations = [],schedule_id){
        this.id = id;
        this.visit_date = visit_date;
        this.schedule_id = schedule_id;
        this.locations = locations;

    }
}



class VisitLocation{
    constructor(id,name,price,active_time,image,daily_schedule_id){
        this.id = id;
        this.name = name;
        this.price = price;
        this.active_time = active_time;
        this.image = image;
        this.daily_schedule_id = daily_schedule_id;
    }
}

export default {Schedule,VisitLocation,DailySchedule}