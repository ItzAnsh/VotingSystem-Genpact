class Party {
    private id?: String;
    private name: String;
    private leader: String;
    private symbol: String;

    public constructor(
        name: String,
        leader: String,
        symbol: String
    );
    public constructor(
        id: String,
        name: String,
        leader: String,
        symbol: String
    );
    public constructor(...args: any[]) {
        if (args.length === 4) {
            this.id = args[0];
            this.name = args[1];
            this.leader = args[2];
            this.symbol = args[3];
        } else {
            this.name = args[0];
            this.leader = args[1];
            this.symbol = args[2];
        }
    }

    public getId(): String | null {
        return this.id || null;
    }

    public getName(): String {
        return this.name;
    }

    public getLeader(): String {
        return this.leader;
    }

    public getSymbol(): String {
        return this.symbol;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public setLeader(leader: String): void {
        this.leader = leader;
    }

    public setSymbol(symbol: String): void {
        this.symbol = symbol;
    }

    public toJSON(): Object {
        return {
            id: this.id,
            name: this.name,
            leader: this.leader,
            symbol: this.symbol
        };
    }
}

export default Party;