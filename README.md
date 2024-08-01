# Pixie: AI Image Generation Tool

Pixie is an AI-powered image generation tool that uses RapidAPI to generate images based on user prompts. Generated images are stored in Cloudinary, allowing users to view and manage them later.

## Features

- Generate images using AI via user prompts.
- Store generated images securely in Cloudinary.
- View and manage your generated images.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js installed on your machine.
- RapidAPI account with access to the AI image generation API.
- Cloudinary account for image storage.

### Installation

1. Clone the repository:

    ```bash
    git clone "https://github.com/Yrk-Yashraj/Pixie.git"
    cd pixie
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your RapidAPI and Cloudinary credentials:

    ```bash
    RAPIDAPI_KEY=your_rapidapi_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

### Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a prompt to generate an image.

4. View and manage your generated images stored in Cloudinary.

---

Thank you for using Pixie!
