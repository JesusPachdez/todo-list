# Local JSON Server Setup

This project now includes a local JSON server for persistent data storage and API simulation.

## Setup Instructions

### 1. Start the JSON Server

In a new terminal window, run:

```bash
npm run json-server
```

This will start the JSON server on `http://localhost:3001` and watch the `db.json` file for changes.

### 2. Start the React Application

In another terminal window, run:

```bash
npm start
```

This will start the React application on `http://localhost:3000`.

## API Endpoints

The JSON server provides the following endpoints:

- **GET** `/todos` - Get all todos
- **POST** `/todos` - Create a new todo
- **PUT** `/todos/:id` - Update a specific todo
- **DELETE** `/todos/:id` - Delete a specific todo

## Data Structure

Each todo has the following structure:

```json
{
  "id": 1,
  "title": "Todo title",
  "completed": false,
  "creationDate": 1640995200000
}
```

## Database File

The `db.json` file contains the persistent data. You can:

- Edit it directly to add/modify data
- The server will automatically reload when changes are made
- Reset it to initial state by restoring the original content

## Features Implemented

✅ **Full CRUD Operations**

- Create new todos
- Read/fetch todos from server
- Update todo completion status
- Delete individual todos
- Bulk delete completed todos

✅ **Error Handling**

- Network error handling
- Server unavailable fallback
- Async operation error logging

✅ **Data Persistence**

- All todo operations are saved to the JSON server
- Data persists between browser sessions
- No data loss on page refresh

## Development Notes

- The JSON server runs on port 3001 to avoid conflicts with React (port 3000)
- The API handler has been updated to support PUT/POST operations with request bodies
- All CRUD operations are now async and properly handle server responses
- Error states are logged to console for debugging

## Troubleshooting

If you encounter issues:

1. **Port already in use**: Change the port in the package.json script
2. **CORS issues**: JSON server has CORS enabled by default
3. **Network errors**: Check if both servers are running
4. **Data not persisting**: Verify db.json file permissions

## Testing the API

You can test the API directly using curl or any API client:

```bash
# Get all todos
curl http://localhost:3001/todos

# Create a new todo
curl -X POST http://localhost:3001/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "New Todo", "completed": false, "creationDate": 1640995200000}'

# Update a todo
curl -X PUT http://localhost:3001/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Todo", "completed": true, "creationDate": 1640995200000}'

# Delete a todo
curl -X DELETE http://localhost:3001/todos/1
```
