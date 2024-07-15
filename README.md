# post-it
-> Tech Stack
- React, Tailwind CSS, Parcel, and deployed using Netlify.

-> Please user the below credentials to proceed from Login page to Home page
username - user
password - user

-> Flows
- When we land on the domain, if no user context is available, user will be redirected to Login page otherwise the Home page.
- User can directly go from Login to Home page using the above credentials.
- User can register from Login page and land on Home page (will retain context on Home page so screen can be refreshed)
- If user lands directly on the home screen(/home) and no user is logged in, Register popup will be shown, otherwise, if the user is logged in, Home page will be shown.
- User can create a new post and it'll be visible until screen is refreshed.

-> Validation
- While registering the user needs to enter email address in valid format.
- All fields are mandatory to be filled.

-> Note
- User context is stored in localStorage so if you need to check different flows like directly landing on Home page without a logged in user, please clear local storage or use incognito.
