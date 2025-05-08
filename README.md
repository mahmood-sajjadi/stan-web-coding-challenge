# STAN challenge
## RUN THE CODE
### Install dependencies
clone the repository in your local machine
run `yarn install` to install dependencies

### Run in dev mode
Run `yarn dev` in terminal, it will run the dev server and print the link which you can use in you browser to see the website

### Run the tests
Run `yarn test`, it will execute all the test cases

## How the code structured
### Folder structure
- components: reusable components, no logic other than style related logics, only dependent to each other
- context: context to be used in the application
- helper: set of helper functions to ease the data mapping, type narrowing, etc.
- layouts: website layouts, only structural, no logic or state
- pages: the content of each page, include view and rendering logics
- routes: routes information, route configs and data required for navigation in website
- services: all the services to handle data (API, etc.), they only depend on each other, only ts file, no tsx
- App.tsx: root of Application itself (after main.tsx), it is used to preload state which needed for entire app, in this case the only API call which we have

### Style structure
Styles put in components as inline style as much as possible
The aim was prevent any unexpected override or issue with html-class names, and complexity of handling styles.
As we were not suppose to use any library, this was the easiest and fastest choice
the other option was to use the lengthy css rules to prevent unexpected surprises
Few scenarios which was very generic (like .glass effect) or not possible to put it inline (like pseudo rules, keyframe animation, etc.) added to css file.


### API call structure
There is no real API, we are using a json file as mock
a proxy configured in vite config file, any call to /api/list will serve the ./challenge/feed/sample.json
in react, ApiService is responsible to make this call and it is using fetch under the hood.
Also an specific service `listService` created which is calling `ApiService` under the hood.
considering this app is very small and simple, this complex structure may not be required.
But in real life, this is required to make sure the app will be easily maintainable and extendable in the future.
ApiService is to wrap the fetch and make handling our requirements including authentication easy
but each specific service for each endpoint is to handle different methods like `get`, `put`, `post`, etc. with API contacts, types and logics to retry and caching in place.

## Assumptions
- The popular movies and popular series page are always going to be exactly the same, only different list will be rendered (view reused)
- header is supposed to be sticky
- footer supposed to be at the bottom of the page even if there is not much content in the
- if the poster ratio is different from others, it will be contained in the box (maybe smaller than the others but will ensure the entire poster is visible)

## FAQ
### is context a good choice for API response?
Not in real life, as we will have pagination, or infinite scroll, or etc, and we are going to call api many time
But in real life, we are not going to have one API for everything, and due to this reason the structure of the code will be completely different
As this code was very simple and small, and API will be called only once, context is a good choice
Also I was aiming to not adding another dependency like state managements only for this API call (it is an overkill for this case)

## TODO / Pending
- Add more test cases
- Refactor the styles to be more reusable, more structured
- Add animation to Loading state
- Modify the proxy to delay the response (to help visual testing of api calls)
- cross browser check (I only test in chrome so far)
- responsiveness, site is almost responsive, but footer and heder can benefit from some extra improvements
- add social media and stores link
- improve the html semantic
- improve accessibility and WCAG, more work will be needed, so far only alt tags and very few aria tags added
- improve the eslint rules, make sure the code is consistent in all the files.