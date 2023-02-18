import fsPromises from 'fs/promises'
import path from 'path'

export const getOrganizations = async () => {
  const filePath = path.join(process.cwd(), 'src/utils/mock-data/organizations.json');
  const data = await fsPromises.readFile(filePath);
  return JSON.parse(data);
} 