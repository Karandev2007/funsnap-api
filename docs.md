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
---

### **6. GitHub User Information**  
Retrieve details about a GitHub user.  

**Endpoint:**  
`GET /v1/github?username={username}`  

**Example Request URL:**  
`https://api.qeintech.in/v1/github?username=Karandev2007`  

**Response (JSON):**  
```json
{
  "success": true,
  "name": "Karan",
  "bio": "Not available",
  "website": "Not available",
  "location": "India",
  "followers": 9,
  "following": 2,
  "avatar": "https://avatars.githubusercontent.com/u/90849102?v=4",
  "response_time": "85ms"
}
```

---

### **7. 8Ball Magic Ball**  
Get random answers to your questions.  

**Endpoint:**  
`GET /v1/8ball`  

**Example Request URL:**  
`https://api.qeintech.in/v1/8ball`  

**Response (JSON):**  
```json
{
  "success": true,
  "answer": "Yes, absolutely!",
  "response_time": "2ms"
}
```

---

### **8. Dice Roll**  
Simulate rolling a dice.  

**Endpoint:**  
`GET /v1/dice`  

**Example Request URL:**  
`https://api.qeintech.in/v1/dice`  

**Response (JSON):**  
```json
{
  "success": true,
  "result": 5,
  "response_time": "1ms"
}
```

---

### **9. Translation**  
Translate text into a target language.  

**Endpoint:**  
`POST /v1/translate`  

**Request Body (JSON):**  
```json
{
  "text": "hello",
  "language": "hi"
}
```  

**Example Request URL:**  
`https://api.qeintech.in/v1/translate`  

**Response (JSON):**  
```json
{
  "success": true,
  "text": "hello",
  "translation": "नमस्ते",
  "language": "hi",
  "response_time": "1418ms"
}
```

---

### **10. Random Meme**  
Fetch a random meme from Reddit.  

**Endpoint:**  
`GET /v1/meme`  

**Example Request URL:**  
`https://api.qeintech.in/v1/meme`  

**Response (JSON):**  
```json
{
  "success": true,
  "title": "When you realize it's already Monday",
  "url": "https://i.redd.it/xyz123abc.jpg",
  "subreddit": "memes",
  "response_time": "742ms"
}
```
