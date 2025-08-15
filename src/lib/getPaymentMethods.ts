export const getPaymentMethods = async () => {
    try {
        const response = await fetch('https://national-shopping-eight.vercel.app/api/payment', {
            method: 'POST',
            cache: 'no-cache'
        })
        const jsonData = response.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
}