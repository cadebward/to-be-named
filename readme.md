# Coder's Delightful Fantastic Joyride Paradise

The goals of this project are two-fold. We want to make an awesome game and we want to experiment with awesome technology.

## Make an Awesome Game

We've played games like Uplink and Hacker Experience and thought they were really fun. This is an open source game that takes inspiration from those two but is built with our own twist on the concepts. Code your way to greatness!

- Could we make it about a Coder instead of a Hacker?
- Maybe you could be a computer bug that evolves and gets stronger :). Recieve missions from your elder bug overlords.

## Experiment with Awesome Technology

We love working on games in our free time, but we also have full time jobs. We've got real users who depend on the software we build. Too often we find that our software grows out of our control. Soon it's just a pile of extra features and bugs. We want to figure out how to fix that. My personal take is: if you build smaller pieces, each piece becomes easier to manage. As soon as any part of your app starts to grow unweildy, break it into two.

To help us experiment with this, we're using [Lerna](lerna). `Lerna` is a tool that helps you manage multiple packages in a single repo (often called a mono-repo). We hope it will encourage us to split out packages often.

We're also using a project called [next.js](next). `next.js` is zeit's take on how an application framework should be built. It enables you to easily split up your front end and gives you hot module replacement, code splitting, and server-side rendering for free.

We'll be using [now](now) to deploy our app. This one's not so new for me but it is for other members of the project. I'm already sold on it. `now` enables you to ship your code super easily. Every deployment gets a unique URL and with a single command you can alias what you've built into a prod URL.

I know what you're thinking. This is all fine and good but sometimes even a small part of your app can become complex. It's true, state is a hard thing to manage. I'd like to try out [Mobx](mobx) to fill that role. It's an alternative to redux that uses observables. I'm hoping it'll keep the app simple and clear as to it's stateful intentions, whilst also being performant.

We're choosing new and exciting technologies, but we're going to stick with plain es6. No babel transpiles for us this time. If it works in v8/chrome, then we can use it. The one exception is jsx. Browsers have come a long way and are pretty feature packed when it comes to javascript. If we develop using node/chrome, we should be able to use nearly all of es6 + async/await. All we're really missing out on is the `...splat` operator and `import/export`. We hope this will speed us up in terms of debugging our app and not needing to mess with a build step. We'll still be transpiling our client code so it'll work in all major browsers. But `next.js` already handles that for us. We shouldn't have to touch webpack/babel at all (except for jsx).

## To Run

- nvm use
- npm i
- npm run build
- npm run start:api
- npm run start:assets
- navigate to localhost:3000

## To Do

- [ ] Evaluate Next.js
- [ ] Evaluate Lerna
- [ ] Set up a watch script in all the client projects
- [ ] Evaluate Mobx
- [ ] What should we evaluate for styling/css?

[lerna]: https://lernajs.io/
[next.js]: https://zeit.co/blog/next
[now]: https://zeit.co/now/
[mobx]: https://mobxjs.github.io/mobx/
