class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room) {
        this.users.push({id, name, room});
        return {id, name, room};
    }

    removeUser(id) {
        const user = this.users.filter((user) => user.id === id);
        this.users = this.users.filter((user) => user.id !== id);

        if (user.length > 0) {
            return user[0];
        } else {
            return undefined;
        }
        
    }

    getUser(id) {
        const user = this.users.filter((user) => +user.id === id);

        if (user.length > 0) {
            return user[0];
        } else {
            return 'User not found!';
        }
    }

    getUserList(room) {
        return this.users.filter((user) => user.room === room)
            .map((user) => user.name);
    }
}

module.exports = {Users};
