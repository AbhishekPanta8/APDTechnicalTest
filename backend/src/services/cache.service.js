const redisConfig = require('../config/redis.config');
const config = require('../config/app.config');

class CacheService {
  constructor() {
    this.client = null;
  }

  initialize() {
    this.client = redisConfig.getClient();
  }

  async get(key) {
    try {
      if (!this.client) {
        throw new Error('Cache client not initialized');
      }

      const data = await this.client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  async set(key, value, ttl = config.cache.ttl) {
    try {
      if (!this.client) {
        throw new Error('Cache client not initialized');
      }

      await this.client.setEx(key, ttl, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  async delete(key) {
    try {
      if (!this.client) {
        throw new Error('Cache client not initialized');
      }

      await this.client.del(key);
      return true;
    } catch (error) {
      console.error('Cache delete error:', error);
      return false;
    }
  }
}

module.exports = new CacheService();

