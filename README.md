# Mini-paint App

Mini-paint app for innowise trainingship

Deploy: [Mini-paint](https://startling-fairy-f0270e.netlify.app)

Clever-Todo-list with Calendar based on React, Redux/toolkit, Firebase.

1. **Task:** [link](https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view)
2. **Create Firebase App and create .env file in your local repo with all variables from firebase obj config** (variables names are in src/firebase/index.ts).
3. **How to run the app:** `npm install` => `npm run build` (to build prod version) or `npm run serve` (to open dev server)
4. **Folder structure**:

```
clever-todo-list (root of project)
  └── src (folder with source code files)
      |─── components
      |     |─── containers (components with jsx layout and some logic)
      |     └─── view (components with only jsx layout)
      |─── context (app concrete contexts)
      |─── firebase (initialized firebase database and methods for interacting with database)
      |─── hooks (custom hook for Reack App)
      |─── models (pages string enums, localStorageKeys and others)
      |─── pages (pages components for routing)
      |─── scss (styles with .scss files ext)
      |─── tools (classes for each tool for binding canvas witch certain tool)
      |─── store (redux store initialized with redux/toolkit)
      |     └─── reducers (slices initialized with redux/toolkit)
      |─── utils (Support functions placed in separate files. Files with.ts ext)
      |     └─── validationErrors (functions for validation errors)
      |─── AppRouter.tsx (react-router-dom component for routing)
      |─── index.html
      └─── index.tsx
```
5. **Database Structure** 

```
type userObjDescription = {
  email: example@mail.com,
  authProvider: 'local' | google,
  name: string,
  uid: authentification.uid
}

type snapShotObj = {
  id: string,
  email: string,
  snapshot: string
}

```

```
Firestore Database
  |── users (collection with description of each user)
  |     |─── firestore-uid => userObjDescription
  |     └─── firestore-uid => userObjDescription
  |
  └── snapshots (collection with snapShotObj of all users)
        |─── firestore-uid => snapShotObj
        └─── firestore-uid => snapShotObj
  

```
6. **Functionality**:

- You can register or log in to your profile.
- You can draw your picture and save to snapshots.
- **Snapshots page will update in real time**
- **In Snapshots page you can delete only your pictures**
