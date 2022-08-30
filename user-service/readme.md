# User Service API Documentation
## Route: `/api/users`

### GET `/getUsers`:
Retrieves all users in database
#### Status codes:
- `200`: Successfully retrieved all users in database
- `503`: Server/Network error

### POST `/signup`:
#### Body Parameters:
- `name`: Name of user signing up
- `email`: Email of user signing up
- `password`: Password of user signing up
#### Status codes:
- `201`: New user has successfully signed up
- `400`: Body parameters not specified correctly
- `409`: Email already exists in database

### DELETE `/deleteUser`:
#### Body Parameters:
- `email`: Email of user to be deleted
- `password`: Password of user to be deleted
#### Status codes:
- `201`: User has successfully been deleted from database
- `404`: User to be deleted is not found in database
