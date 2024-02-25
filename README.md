## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


# User Listing Application with Search Functionality

## Search Functionality

The application includes a dynamic search feature on the user listing page, allowing users to search through the listed items in real-time. Here's how it works:

### Implementation

- **State Management**: The application uses Redux Toolkit for state management. The search query is stored in the global Redux store, allowing for a responsive and consistent search experience across the application.

- **Search Input**: A search input field is provided on the user listing page. As users type their search query, the application updates the search state in real-time, triggering a re-render of the list based on the search criteria.

- **Filtering Logic**: The list of users is filtered on the client side based on the search query. The filtering checks if the concatenated first and last names of the users include the search string, offering a flexible search experience.


## Usage

To use the search functionality, simply start typing in the search input field on the user listing page. The list will dynamically update to display only the users that match the search query.


