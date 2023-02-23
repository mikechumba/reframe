## Reframe Prototype

This is an attempt at a redesign of [Reframe](https://reframe.network/).

## Project Status

This is a work in progress. I've only built the organization list page and the organization profile. Some of the pending work include 

- Polishing the design of the profile page.
- Image optimization
- Extra pages including a landing page
- Sign In Page

## Images

![Screenshot of Reframe's homepage](https://ik.imagekit.io/bsvzrpqaj/Github/Pasted_image_20230223184811_RKp3Nwyf2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677168513218)

![Screenshot of Reframe's organization profile page](https://ik.imagekit.io/bsvzrpqaj/Github/Pasted_image_20230223184811_RKp3Nwyf2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677168513218)

## Tools and Setup

Since I approached is a MVP creation, I just created a static site using Next.js. To run the project locally, follow the steps below:

- Clone the project `git clone [repo-URL]`
- I used yarn zero installs as the package manager, so make sure you have *Node* and *Yarn* installed then:
	- Run `yarn install`
	- Then start the server by running `yarn dev`
	- To build the project, use `yarn build`, then consequently, `yarn start` to run the production build.

## Technologies

- Next.js
- SCSS

## Afterthought

Sometimes I like to think I've mastered accessibility but this project and many other remind me how tempting it is to skip best practises. 

One of the newer things I learned was accessibility of card links. Thanks to [Heydon Pickering's Cards](https://inclusive-components.design/cards/) and [How to build accessible cards–block links - Nomensa](https://www.nomensa.com/blog/how-build-accessible-cards-block-links)