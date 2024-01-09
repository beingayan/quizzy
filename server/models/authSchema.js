import jwt from 'jsonwebtoken';

class JWTHandler {
  constructor(secretKey) {
    this.secretKey = secretKey; // Secret key used for signing and verifying tokens
  }

  generateToken(payload, expiresIn = '1h') {
    // Generating a new JWT token with the provided payload and expiration time
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verifyToken(token) {
    try {
      // Verifying the JWT token and returning the decoded payload if successful
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      // If verification fails, handle the error (e.g., token expired, invalid token)
      console.error('Token verification failed:', error.message);
      return null;
    }
  }
}

export default JWTHandler;