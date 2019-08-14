class Github {
    constructor() {
        this.client_id = '54312f5b08847894644d';
        this.client_secret = '220e259c3759bd9a0f772cfe7aa544064568c0cb';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}