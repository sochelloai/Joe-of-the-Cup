# Stripe Setup Guide

This guide walks you through setting up your Stripe account and configuring your environment to enable real, secure credit card transactions for **Joe of the Cup**.

---

## Step 1: Sign Up for Stripe

1. Go to [Stripe.com](https://stripe.com) and sign up for a free account.
2. In the top-right corner of your Stripe Dashboard, ensure that **Test Mode** is toggled **ON**. 
   * Always develop and test transactions in **Test Mode** first before deploying to your production environment.

---

## Step 2: Retrieve your API Keys

Stripe uses a pair of API keys (Publishable and Secret) to authenticate requests between your website, the Stripe servers, and the customer's browser.

1. Navigate to **Developers** > **API Keys** in the Stripe Dashboard.
2. Copy your **Publishable key** (starts with `pk_test_...`).
3. Copy your **Secret key** (starts with `sk_test_...` - click "Reveal live/test key token").

---

## Step 3: Configure Local Environment Variables

Create a file named `.env.local` in the root directory of this project (`C:\Users\soche\OneDrive\Desktop\Joe of the Cup\.env.local`) and add your keys:

```env
# Client-side safe publishable key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key_here

# Server-only secret key (keep this hidden!)
STRIPE_SECRET_KEY=your_secret_key_here
```

*Note: The `.env.local` file is already added to `.gitignore` and will never be committed to your public Git repository.*

---

## Step 4: Configure Cloudflare Workers Secrets (Production)

Since this project is built for Cloudflare Workers/Pages (using OpenNext and Wrangler), environment variables for the production server must be uploaded as secrets.

To deploy your secrets, open your terminal in the project directory and run:

```bash
# Save your Stripe Secret Key securely to Cloudflare
npx wrangler secret put STRIPE_SECRET_KEY
```

When prompted, paste your Stripe Secret Key (`sk_test_...`) and press Enter.

---

## Step 5: Webhook Setup (Optional for post-purchase triggers)

If you need to trigger database updates, send customized receipt emails, or manage warehouse inventory upon successful checkout:

1. In the Stripe Dashboard, go to **Developers** > **Webhooks**.
2. Click **Add endpoint** and set the URL to `https://your-production-domain.com/api/webhooks/stripe`.
3. Select the `checkout.session.completed` event.
4. Obtain the **Signing secret** (starts with `whsec_...`).
5. Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET` and deploy it using `npx wrangler secret put STRIPE_WEBHOOK_SECRET`.

---

## Testing Your Checkout

When you press the **Checkout** button in the cart, the system will redirect you to a secure Stripe-hosted payment form. 

To test successful payments:
* Use the card number `4242 4242 4242 4242`.
* Enter any future expiration date (e.g., `12/30`).
* Enter any 3-digit CVC code (e.g., `123`).
* Enter any shipping address.

Upon clicking **Pay**, Stripe will process the test payment and redirect the user back to your site with `?success=true` appended to the URL, automatically clearing their cart.
