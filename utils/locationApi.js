


export const getProvince = async () => {
    try {
        let url = `https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/tinh_tp.json`;
        let fetchData = await fetch(url);
        if(!fetchData.ok){
            return{
                data:[],
                message:'Error at fetch province'
            }
        }
        let resData = await fetchData.json();
        
        return {
            data:resData,
            message:'Fetch province data successfully.'
        }
        
    } catch (error) {
        return {
            data:[],
            message:'Error at fetch province ' + error
        }
    }
}