# LumiAPI API

A simple API that serves random jokes, quotes, facts and images, more updates in future.

---

## Endpoints
Base URL: `https://funsnap-api.onrender.com`

### **1. `/v1/images/:category`**
Fetch a random image URL from the specified category.

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

### **3. `/fact`**
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