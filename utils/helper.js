

export const generate_id = async (prefix='') => {

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