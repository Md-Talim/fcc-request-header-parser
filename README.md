# Request Header Parser Microservice

This is a simple Node.js API that returns request-related information, including the client's IP address. The language and software fields are currently hardcoded. This project is part of the [freeCodeCamp Back End Development and APIs certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/).  

## API Overview 

### Endpoint:  
```
GET /api/whoami
```

### Example Response:  
```json
{
  "ipaddress": "192.168.1.1",
  "language": "hindi,english",
  "software": "Windows 11, Chrome"
}
```

### How It Works:
- **IP Address:** Fetched using an external API (`api64.ipify.org`).  
- **Language:** Hardcoded as `"hindi,english"`.  
- **Software:** Hardcoded as `"Windows 11, Chrome"`.  

## Setup & Running Locally  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/request-header-parser.git
   cd request-header-parser
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the server:  
   ```bash
   npm start
   ```

4. Test the API in the browser or via a tool like Postman:  
   ```
   http://localhost:3000/api/whoami
   ```
