# AutoComplete Search / TypeHead


## Overview
The AutoSearch application provides a dynamic search functionality with support for both mock data and API-based results. It includes features like debouncing, caching, and accessibility enhancements to improve performance and user experience.

## Features
- **Dynamic Search**: Filters results based on user input.
- **Mock and API Support**: Switch between mock data (`atlasResults`) and API-based results using the `isMock` flag.
- **Debouncing**: Reduces unnecessary calls to the search logic by delaying execution.
- **Caching**: Stores previously fetched results to improve performance and reduce redundant API calls.
- **Accessibility**: Includes `aria-label`, `role`, and `tabIndex` attributes for better accessibility.
- **Error Handling**: Gracefully handles API errors and displays fallback results.

## Technologies Used
- **React**: For building the user interface.
- **CSS**: For styling the components.
- **JavaScript**: For implementing search logic, debouncing, and caching.

