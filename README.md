# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- FireBase Configuration
- Deployment in Firebase
  - Install Firebase CLI -> `npm i -g firebase-tools`
  - Login to Firebase console -> `firebase login`
  - Initialise Firebase Setup -> `firebase init`
  - Build the Project -> `npm run build`
  - Deploy the Project -> `firebase deploy`
- Create Signup User Account in Firebase
- Implement Sign In User API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile API
- BugFixes: 
  - Sign up user displayName and profile picture update
  - If the user is not logged in Redirect user to /browse to Login Page and vice-versa.
- Unsubscribe to the onAuthStateChanged callback
- Add Harcoded value to the constants file
- Register for TMDP API & create an app and get access token
- Get Data from TMDB Now Playing API
- Created Custom Hook for nowPlayingMovies
- Created MovieSlice
- Planning for MainContainer and Secondary Container
- Fetch Data for trailer video
- Update store with trailer video data
- Embedded the Youtube Video and make it autoplay and mute
- Build Secondary Component
- Build Movie List
- Build Movie Card
- usePopularMovies Custom Hook
- GPT Search Feature
- Multi-Lingual Feature in our App
- Integrate GPT API's
- GPT Search API Call
- Fetched GPT Movie Suggestions from TMDB
- Created GPT Slice and added data
- Reused Movie List Component to make movie suggestion
- Adding .env file to git ignore
- Memoization
- Made our app responsive

# Features:
- Login/Sign Up Page
  - Sign In/Sign Up Form
  - Redirect to Browse Page
- Browse Page ( After Authentication )
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
  - Search Bar
  - Movie Suggestions