import Party from "./party.struct";

class Election {
    id?: string;
    name: string;
    startDate: Date;
    endDate: Date;
    Parties: Party[];
    winner?: Party;

    public constructor(name: string, startDate: Date, endDate: Date, Parties: Party[]);
    public constructor(id: number, name: string, startDate: Date, endDate: Date, Parties: Party[], winner?: Party);
    public constructor(...args: any[]) {
        if (args.length === 4) {
            this.id = args[0];
            this.name = args[1];
            this.startDate = args[2];
            this.endDate = args[3];
            this.Parties = args[4];
            this.winner = args[5];
        } else {
            this.name = args[0];
            this.startDate = args[1];
            this.endDate = args[2];
            this.Parties = args[3];
        }
    }

    public getId(): string | null {
        return this.id || null;
    }

    public getName(): string {
        return this.name;
    }

    public getStartDate(): Date {
        return this.startDate;
    }

    public getEndDate(): Date {
        return this.endDate;
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

    public setName(name: string): void {
        this.name = name;
    }

    public setStartDate(date: Date): void {
        this.startDate = date;
    }

    public setEndDate(date: Date): void {
        this.endDate = date;
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