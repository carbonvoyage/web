import { stripe } from 'utils/stripe';
import { NextApiHandler } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createOrRetrieveCustomer } from 'utils/supabase-admin';
import { getURL } from 'utils/helpers';

const createCheckoutSession: NextApiHandler = async (req, res) => {
  const supabase = createServerSupabaseClient({ req, res });

  if (req.method === 'POST') {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (!user) throw Error('Could not get user');
      const customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.email || ''
      });

      if (!customer) throw Error('Could not get customer');
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${getURL()}/account`
      });

      return res.status(200).json({ url });
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default createCheckoutSession;
