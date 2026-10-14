# Royce Marketing Meta Pixel setup

The project now uses Meta Pixel ID `1448403773516840` by default.

## Vercel
In Vercel, open the Royce Marketing project → Settings → Environment Variables and add:

- Name: `VITE_META_PIXEL_ID`
- Value: `1448403773516840`

Apply it to Production (and Preview if you test preview deployments), then redeploy. The ID is public browser configuration, not a secret.

The code includes a fallback to this ID so Pixel tracking is not silently disabled if the variable is missing. If you later change Pixels, update the Vercel variable and redeploy.

## Events implemented in code
- `PageView`: initial page load and client-side route changes via `MetaPixelTracker`.
- `Lead`: after `submitLead` returns success from the server-backed form.
- `Schedule`: helper exists, but should only be connected to a trusted Cal.com confirmed-booking callback/webhook; do not fire it merely on the booking or thank-you page.

## Verify after deployment
1. Open Meta Events Manager and select Pixel `1448403773516840`.
2. Open Test Events.
3. Visit the live site and navigate between pages; confirm `PageView`.
4. Submit a test audit form and confirm `Lead` appears only after successful submission.
5. Test with Meta Pixel Helper and check that events are not duplicated.

A successful local build alone does not prove live events are received by Meta.
