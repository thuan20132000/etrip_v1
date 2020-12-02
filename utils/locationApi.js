import env from '../env'


/**
 * author:thuantruong
 * created_at:20/11/2020
 */
export const getProvince = async () => {
    try {
        let url = `https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/tinh_tp.json`;
        let fetchData = await fetch(url);
        if (!fetchData.ok) {
            return {
                data: [],
                message: 'Error at fetch province'
            }
        }
        let resData = await fetchData.json();

        return {
            data: resData,
            message: 'Fetch province data successfully.'
        }

    } catch (error) {
        return {
            data: [],
            message: 'Error at fetch province ' + error
        }
    }
}


export const getDistrict = async () => {
    try {
        let url = `https://raw.githubusercontent.com/thuan20132000/hanhchinhDANANG/main/districts`;
        let fetchData = await fetch(url);
        if (!fetchData.ok) {
            return {
                data: [],
                message: 'Error at fetch province'
            }
        }
        let resData = await fetchData.json();

        return {
            data: resData,
            message: 'Fetch province data successfully.'
        }

    } catch (error) {
        return {
            data: [],
            message: 'Error at fetch province ' + error
        }
    }
}




/**
 * author:thuantruong
 * created_at:26/11/2020
 * @param {*} searchText 
 */
export const getPlaceAutoComplete = async (searchText) => {
    try {
        let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&location=16.047079,108.206230&radius=500&language=vi&key=`;
        let fetchData = await fetch(`${url}${env.google_map_key}`);
        if (!fetchData.ok) {
            return {
                data: [],
                message: 'Error at get place completely',
                status: false
            }
        }

        let resData = await fetchData.json();

        return {
            data: resData,
            message: 'get places successfully',
            status: true
        }



    } catch (error) {
        return {
            data: [],
            message: 'Error at get place completely',
            status: false
        }
    }
}
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=add&types=establishment&location=16.047079,108.206230&radius=100&key=AIzaSyDpD2rEHXx_JtZVTeu8MuBHblngw-aJA-c