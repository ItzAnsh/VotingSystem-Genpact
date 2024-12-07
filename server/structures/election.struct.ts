import Party from "./party.struct";

class Election {
    id?: string;
    date: Date;
    Parties: Party[];
    winner?: Party;

    public constructor(date: Date, Parties: Party[]);
    public constructor(id: number, date: Date, Parties: Party[], winner?: Party);
    public constructor(...args: any[]) {
        if (args.length === 4) {
            this.id = args[0];
            this.date = args[1];
            this.Parties = args[2];
            this.winner = args[3];
        } else {
            this.date = args[0];
            this.Parties = args[1];
        }
    }

    public getId(): string | null {
        return this.id || null;
    }

    public getDate(): Date {
        return this.date;
    }

    public getParties(): Party[] {
        return this.Parties;
    }

    public getWinner(): Party | undefined {
        return this.winner;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public setParties(Parties: Party[]): void {
        this.Parties = Parties;
    }

    public setWinner(winner: Party): void {
        this.winner = winner;
    }

    public addParty(party: Party): void {
        this.Parties.push(party);
    }

    public removeParty(party: Party): void {
        this.Parties = this.Parties.filter(p => p.getId() !== party.getId());
    }

    public setWinnerById(id: string): void {
        this.winner = this.Parties.find(p => p.getId() === id);
    }

    public getWinnerById(id: string): Party | undefined {
        return this.Parties.find(p => p.getId() === id);
    }

    public getPartyById(id: string): Party | undefined {
        return this.Parties.find(p => p.getId() === id);
    }

    public getPartyByName(name: string): Party | undefined {
        return this.Parties.find(p => p.getName() === name);
    }

    public getPartyByLeader(leader: string): Party | undefined {
        return this.Parties.find(p => p.getLeader() === leader);
    }
}

export default Election;