

export const generate_id = async (prefix = '') => {

    let gnid = Date.now();
    let x = (Math.random() * 10).toFixed(4).toString() + gnid.toString();
    let xx = x.split('.')[1];
    return `${prefix}-${xx}`;

}

export const getDateMonthFormat = (timestring) => {

    let dt = new Date(timestring);

    let date = dt.getDate();
    let month = dt.getMonth();

    return `${date}/${month}`;

}

export const convertMinutesToHours = (n) => {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if(rhours<=0){
        return `${rminutes} phút`;
    }else{
        return `${rhours} giờ : ${rminutes} phút`;
 
    }
}
