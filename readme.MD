Certainly! Here is the updated README with hyperlinks for each technology:

---

# Podcast API

## Description

The Podcast API provides endpoints to list podcast episodes and filter episodes based on specific criteria. The system is implemented using Node.js and TypeScript and offers HTTP endpoints to interact with podcast data.

## Data Structure

Podcast data is represented in the following JSON format:

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": ["health", "sports", "bodybuilding"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "categories": ["running", "sports"]
    },
    {
        "podcastName": "venus",
        "episode": "Carlinhos Maia - Venus #3",
        "videoId": "000000000",
        "categories": ["humor", "style"]
    }
]
```

Each podcast object contains:
- `podcastName`: Name of the podcast.
- `episode`: Title of the episode.
- `videoId`: Video identifier.
- `categories`: List of categories associated with the episode.

## Endpoints

### 1. List Episodes

**Endpoint:** `/list`

**Method:** GET

**Description:** Returns a list of all podcast episodes.

### 2. Filter Episodes

**Endpoint:** `/episode`

**Method:** GET

**Description:** Returns filtered episodes based on specific criteria provided in the request URL.

### Technologies Used

- **[Node.js](https://nodejs.org/):** JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[TypeScript](https://www.typescriptlang.org/):** Superset of JavaScript that adds static typing and other features.
- **[Tsup](https://tsup.egoist.dev/):** Build tool for compiling TypeScript code to JavaScript.
- **[TSX](https://tsx.dev/):** Tool for running and developing TypeScript projects.
- **[@types/node](https://www.npmjs.com/package/@types/node):** TypeScript type definitions for Node.js.

## Running the Project

1. **Install Dependencies**

   Run the following command to install project dependencies:

   ```bash
   npm install
   ```

2. **Start the Server**

   Run the following command to start the server:

   ```bash
   npm start
   ```

3. **Test the API**

   Use tools like Postman or cURL to test the API endpoints:

   - List episodes: `GET http://localhost:3000/list`
   - Filter episodes: `GET http://localhost:3000/episode?p=value`

## Contributing

Feel free to open issues or submit pull requests to contribute improvements to this project.

## License

This project is licensed under the [MIT License](LICENSE).

---

This README now includes hyperlinks to the official pages of the technologies used in your project.