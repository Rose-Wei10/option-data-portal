import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-06-20', // Make sure to use the appropriate API version
  });

// Generate Customer portal
export async function generateCustomerPortalLink(customerId: string) {
    try {
        
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: process.env.NEXTAUTH_URL, 
            // return_url: process.env.NEXTAUTH_URL + "/dashboard/settings/billing", 
        });

        console.log()

        return portalSession.url;
    } catch (error) {
        console.log(error)
        return undefined;
    }
}