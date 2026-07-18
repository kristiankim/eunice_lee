# Blog and website handoff

## Before launch

1. Confirm Eunice’s preferred public name and whether “Journey 2 Grow Therapy” should remain the primary practice name.
2. Add the final insurance list and confirm any sliding-scale or superbill wording.
3. Set `PUBLIC_FORM_ENDPOINT` in the host to the secure form endpoint that delivers inquiries to Eunice’s confirmed email. The current local build uses a preview-only success state when this variable is absent.
4. Confirm whether public text-message follow-up, a direct number, a map, and Korean-language sections should be added.
5. Have counsel or the practice’s compliance advisor review privacy/HIPAA language before launch.

## Blog

The `/blog` route is connected to Sanity and linked from the desktop navigation, mobile navigation, and footer. Published posts receive static `/blog/[slug]` pages.

To finish activation:

1. Create or select the Journey 2 Grow Therapy project at Sanity.
2. Set `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` locally and in Vercel.
3. Add the local Studio URL and deployed Studio URL to Sanity’s CORS origins with credentials allowed.
4. Run `npm run studio:dev`, create an author, categories, and the first post, then publish only after Eunice approves the copy.
5. Create a Sanity webhook that triggers a Vercel build when published content changes.
6. Deploy the `studio/` directory as a separate Vercel project.
7. Add the deployed Studio URL to the Sanity project’s Studios page and CORS origins.
8. Add the final blog routes to the sitemap after the site is deployed.

Suggested first topics: first-session expectations, anxiety basics, relationship communication patterns, and immigration/adjustment stress.
