import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const names = []
    const surnames = []
    const nationality = []

    const data = [names, surnames, nationality]

    return { data };
  }
}