import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryContactService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {id: 1, firstName: 'David', lastName: 'Summers', telNo: '+345-567-567'},
      {id: 2, firstName: 'Kevin', lastName: 'Jones', telNo: '+456-875-665'},
    ];
    return {contacts};
  }
}