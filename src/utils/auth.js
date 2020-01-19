import {AsyncStorage} from 'react-native';

/**
 * Helper function to get the auth token from storage
 *
 * @return {jwt} token
 */
async function validateAuth() {
  const token = AsyncStorage.getItem('token');
  return token;
}
