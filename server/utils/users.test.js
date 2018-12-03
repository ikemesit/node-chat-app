const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            },
        ];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Ikemesit',
            room: 'Money Makers'
        }
        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const removed = users.removeUser(2);
        const test = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        },];

        expect(users.users).toEqual(test);
        expect(removed).toEqual([{id:'2', name:'Jen', room:'React Course'}]);
    });

    it('should not remove user', () => {
        const removed = users.removeUser(4);
        const test = users.users;

        expect(users.users).toEqual(test);
        expect(removed).toEqual(undefined);
    });

    it('should find user', () => {
        const foundUser = users.getUser(3);

        expect(foundUser).toEqual({id: '3', name: 'Julie', room: 'Node Course'});
    });

    it('should not find user', () => {
        const foundUser = users.getUser(4);

        expect(foundUser).toEqual('User not found!');
    });

    it('should return names for node course', () => {
        const userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        const userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});
