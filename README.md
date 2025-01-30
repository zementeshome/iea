# Getting Started with IEA Select dropdown

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Questions`

### 1. What were the main UX concerns you considered in designing the component?

My main UX concerns when building the component were making it accessible and responsive. Due to time constraints I didn't focus much on styling the component.

### 2. How would you approach improving the search function to allow variants of country names (e.g. USA)?

I would split the country into an array of new words, iterate over the array of words then concatenate the first letter of each word into one string.

### 3. What would be your next steps to make this into a generic, reusable component that could be used in a larger app?

The component is reusable for the most part because I'm already using reusable components from chakra-ui. To make it more reusable, instead of hard coding CSS it would be better to use design tokens. This way if a different theme is used on a different page/another site the component wouldn't break and only styles such as font, color, etc would change.
