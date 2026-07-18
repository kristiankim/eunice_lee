# Blog and website handoff

## Before launch

1. Confirm Eunice’s preferred public name and whether “Journey 2 Grow Therapy” should remain the primary practice name.
2. Add the final insurance list and confirm any sliding-scale or superbill wording.
3. Set `PUBLIC_FORM_ENDPOINT` in the host to the secure form endpoint that delivers inquiries to Eunice’s confirmed email. The current local build uses a preview-only success state when this variable is absent.
4. Confirm whether public text-message follow-up, a direct number, a map, and Korean-language sections should be added.
5. Have counsel or the practice’s compliance advisor review privacy/HIPAA language before launch.

## Blog

The `/blog` route is built and currently excluded from navigation. It also has no published article links.

To activate it:

1. Replace the placeholder in `src/App.jsx`’s `Blog` component with approved posts or connect `src/pages/blog.astro` to the chosen CMS.
2. Add a Blog `RouteLink` in both `desktop-nav` and `mobile-nav` in `src/App.jsx`.
3. Create a post, keep it unpublished while editing, preview it at its slug, then publish only after Eunice approves the copy.
4. Add the final blog routes to the sitemap after the site is deployed.

Suggested first topics: first-session expectations, anxiety basics, relationship communication patterns, and immigration/adjustment stress.
