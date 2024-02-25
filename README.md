## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


# UserList Component Features Overview

The `UserList` component is designed to enhance user interaction by providing several key features: Dynamic Search, Gender Filtering, and Pagination. Each feature is crafted to offer a seamless and efficient user experience when navigating through a list of users.

## Dynamic Search

The search functionality allows users to quickly find specific users by typing a name into the search field. As the user types, the list dynamically updates to display only the users that match the search query.

- **Implementation**: Utilizes React's `useState` for managing the search query and filters the user list based on this query in real-time.
- **User Experience**: Offers immediate, responsive feedback to user input, significantly improving the ease of finding users.

## Gender Filtering

This feature enables users to filter the displayed users based on gender, providing a quick way to narrow down the user list to males or females, or to display all users.

- **Component**: Implemented with `react-select`, offering a user-friendly dropdown for selecting the gender filter.
- **Flexibility**: Includes an option to clear the selection, removing the filter and displaying all users again.

## Pagination

To enhance usability and performance, especially with large datasets, the user list is divided into pages. Users can navigate through these pages using pagination controls.

- **Navigation**: Features "Previous" and "Next" buttons to browse through pages.
- **State Management**: The current page number is tracked within the component's state, ensuring that the displayed user list corresponds to the selected page.

## Conclusion

By integrating Dynamic Search, Gender Filtering, and Pagination, the `UserList` component provides an intuitive and efficient way for users to interact with the user data. These features collectively contribute to a refined user experience, enabling easy access and navigation through the list of users.



