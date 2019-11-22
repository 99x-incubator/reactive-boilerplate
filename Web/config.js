import dotenv from 'dotenv';

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

const config = result.parsed;
export default config