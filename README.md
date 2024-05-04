# TODO

## Main TODOs

### DJ

MAIN THING TO DO

- [ ] design reviews page, review form, and a few reviews for the home page, just drawing

OTHERS

- [ ] take inspiration from this site https://www.gilberthardwoodnj.com
- [ ] fix strong tags (it is good to use them because of SEO, research html tags relevant to SEO, there are some listed below)
- [ ] style the writing sections of pages. Only style the ones you are dead set are good
- [ ] take inspiration from the site above to augment the design of the home page (remove Rafael's dumbass "our story" section)
      Do a drawing first and then we code
      Our home page should stay as simple as it is and not be as crazy as the site above, but maybe add some AI generated advertising text on "why us", "who are we" "where do we work" (but not as a narrative like Rafael did), "reviews",
- [ ] add the logos of actual hardwood, COREtec, carpet... flooring companies. Let Rafael know if you need help on how and where
- [ ] make the services page have more personality since there are only 4 services

- [ ] modal button is invisible. Probably has to do with overriding it in the CSS

### Rafael

- [ ] make image names more descriptive

### Transfer plan

Main point: Igor owns all the accounts
Domain
Commercial email vs gmail? GMAIL!!!
Commercial: 6 per month per user, custom
Transfer Wix domain to a square space account by the email above
Access to my code?
Hosting on Vercel or AWS?
Vercel: limited
AWS: probably more expensive, harder, unlimited
For how long will I support Igor?
Google analytics?
SEO?
Marketing?

## Secondary TODOs

# Later Ideas

- [ ] convert pngs to jpgs
- [ ] Add page translation
- [ ] 1 h1 heading per page
- [ ] ~2 h2 headings per page
- [ ] ~500 words of content in p tags per page
- [ ] as many meta tags as possible for every page
- [ ] check over alt text for each image, make sure it is good
- [ ] fix strong tags or preferably use fw-bold. Note for DJ: try to do things in aa way where they affect things globally. For example, the body-text class is not affecting how the strong tag comes out or how the fw-_ classes work. Also, instead of using fs-_ all the time, just change the size of h1 tags by default.
- [ ] home page section 2 looks strange, the about us section, it just feels off centered somehow
- [ ] make use of semantic tags and tags important for SEO: If something is a section, use section and not div, if something is a footer...and so on semantic tags include:
      "article",
      "aside",
      "details",
      "figcaption",
      "figure",
      "footer",
      "header",
      "main",
      "mark",
      "nav",
      "section",
      "summary",
      "time",
      "address",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
- [ ] maybe embed instagram posts????
- [ ] why is there so much white space at the bottom of pages? Something we can do?
- [ ] stop using CSS background and instead use nextjs image tag to ensure all images we use are optimized. If possible? If necessary?

# For DJ

Execute

1. `npm i`
2. `npm run dev`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
