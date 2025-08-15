import { getPaymentMethods } from '@/lib/getPaymentMethods';
import React from 'react'
import PaymentMethodSelection from './PaymentMethods';

export const dynamic = 'force-dynamic'

const PaymentPage = async () => {
    const paymentMethods = await getPaymentMethods();

    return (
        <div>
            <div className='max-w-5xl mx-auto py-16'>
                <PaymentMethodSelection paymentMethods={paymentMethods} />
            </div>
        </div>
    )
}

export default PaymentPage