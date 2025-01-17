![LumiAPI](https://iili.io/2PfHIf4.md.png)

# LumiAPI

LumiAPI is an open-sourced, fast, and reliable API for developers to easily integrate text-to-speech, jokes, quotes, facts, and image retrieval into their applications. 

Base URL:  
`https://api.qeintech.in`

---

## 🚀 API Endpoints

### 1. **Text-to-Speech**  
Convert text into speech and get the audio file.

**Endpoint:**  
`POST /v1/text2speech`  

**Request Body (JSON):**  
```json
{
  "text": "Your text here"
}
```

**Example Request URL:**  
`https://api.qeintech.in/v1/text2speech`

**Response (JSON):**  
```json
{
  "message": "Text-to-speech conversion successful",
  "audio_url": "https://api.qeintech.in/audio/e2231f8563711fe42f09f0f333870589.mp3"
}
```

---

### 2. **Random Joke**  
Get a random joke to spice up your app.

**Endpoint:**  
`GET /v1/joke`

**Example Request URL:**  
`https://api.qeintech.in/v1/joke`

**Response (JSON):**  
```json
{
  "category": "joke",
  "joke": "I told my wife she was getting too emotional, so she threw a cup of tea at me. It was steeped in emotion",
  "response_time": "1ms"
}
```

---

### 3. **Random Quote**  
Fetch a random motivational or insightful quote.

**Endpoint:**  
`GET /v1/quote`

**Example Request URL:**  
`https://api.qeintech.in/v1/quote`

**Response (JSON):**  
```json
{
  "category": "quote",
  "quote": "Don’t worry if plan A doesn’t work. There are 25 more letters in the alphabet.",
  "response_time": "1ms"
}
```

---

### 4. **Random Fact**  
Get an interesting random fact.

**Endpoint:**  
`GET /v1/fact`

**Example Request URL:**  
`https://api.qeintech.in/v1/fact`

**Response (JSON):**  
```json
{
  "fact": "The average person walks the equivalent of five times around the Earth in a lifetime."
}
```

---

### 5. **Random Image**  
Get a random image from a specified category.

**Endpoint:**  
`GET /v1/image/:category`

**Example Request URL:**  
`https://api.qeintech.in/v1/image/cat`

**Response (JSON):**  
```json
{
  "category": "cat",
  "url": "https://api.qeintech.in/images/cat/ac6.jpg",
  "response_time": "4ms"
}
```
