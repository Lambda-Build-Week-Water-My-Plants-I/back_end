# back_end

## Getting Started Locally:
1. Clone this repository
1. Run **npm i** from root directory
1. Run **npm run server** to start the server on your machine (will be running on port 5000)

## Endpoints:
* Example endpoint would be: *localhost:5000/api/users*

#### Register/Login/Logout Endpoints

| Action | Endpoint | Description
|---|---|---|
| POST | `/api/auth/register` | Creates a new user |
| POST | `/api/auth/login` | Allows user to login and returns token |
| GET | `/api/auth/logout` | Destroys current session and logs a user out |

#### User Endpoints

| Action | Endpoint | Description
|---|---|---|
| GET | `/api/users` | If user is logged in, returns an array of all other users |
| GET | `/api/users/:id` | If user is logged in, returns the user with the specified ID |
| GET | `/api/users/:id/plants` | Retrieves list of user's plants and plant info |
| PUT | `/api/users/:id` | Edits user with specified ID |
| DELETE | `/api/users/:id` | Deletes user with specified ID |

#### Plant Endpoints
