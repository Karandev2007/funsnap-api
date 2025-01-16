# LumiAPI

LumiAPI serves random jokes, quotes, facts, and images. Get inspired, entertained, and informed, all in one place. More updates and features are coming soon!
---

## Endpoints

BaseURL: `https://funsnap-api.onrender.com`

### **1. `/cat`, `/dog`**
Fetch a random image of a specific category (dog, cat, panda, etc.).

- **Method**: `GET`
- **URL Parameters**:
    - `category` (Required): The category of the image (e.g., `dogs`, `cats`, `panda`).
- **Response Example**:
    ```json
    {
        "category": "dog",
        "url": "https://funsnap-api.onrender.com/images/dog/dNW2yRh3RO.png",
        "response_time": "5ms"
    }
    ```
- **Categories Available**: `dog`, `cats`, `panda` (Images are stored in respective folders like `/images/dog`, `/images/cats`, etc.).

---

### **2. `/quote`**
Fetch a random quote.

- **Method**: `GET`
- **Response Example**:
    ```json
    {
        "category": "quote",
        "quote": "I have an existential fear of maps.",
        "response_time": "2ms"
    }
    ```

---

### **3. `/joke`**
Fetch a random joke.

- **Method**: `GET`
- **Response Example**:
    ```json
    {
        "category": "joke",
        "joke": "I used to play piano by ear, but now I use my hands.",
        "response_time": "3ms"
    }
    ```

---

### **4. `/fact`**
Fetch a random fact.

- **Method**: `GET`
- **Response Example**:
    ```json
    {
        "category": "fact",
        "fact": "The shortest war lasted only 38 minutes between Britain and Zanzibar in 1896.",
        "response_time": "3ms"
    }
    ```

---

## Categories Available

- **Images**: `dog`, `cat`, `panda` (Images are stored in respective folders like `/images/dog`, `/images/cat`, `/images/panda`).
- **Jokes, Quotes, and Facts**: These endpoints fetch random data from predefined collections.

---

## Response Format

All API responses follow a similar format with a category field, the requested content (quote, joke, image URL, etc.), and the response time in milliseconds.

### General Response Format:
```json
{
    "category": "category_name",
    "content": "content_here",
    "response_time": "Xms"
}
```

---

### Example API Response for **`/joke`**:
```json
{
    "category": "joke",
    "joke": "I used to play piano by ear, but now I use my hands.",
    "response_time": "3ms"
}
```

---

## Future Updates

- Text To Speech
- new filters and more categories in jokes, facts and images.

---

Feel free to contribute or suggest new features by submitting an issue or a pull request. We hope you enjoy LumiAPI and stay tuned for updates!