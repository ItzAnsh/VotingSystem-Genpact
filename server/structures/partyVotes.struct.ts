import Party from "./party.struct"
import Election from "./election.struct"

class PartyVotes {
    private id?: string;
    private party: Party | string;
    private election: Election | string;
    private votes: number;

    public constructor(party: string, election: string);
    public constructor(id: string, party: Party | string, election: string, votes: number);
    public constructor(...args: any[]) {
        if (args.length === 3) {
            this.id = args[0];
            this.party = args[1];
            this.election = args[2]
            this.votes = args[2];
        } else {
            this.party = args[0];
            this.election = args[1];
            this.votes = 0;
        }
    }

    public getId(): string | null {
        return this.id || null;
    }

    public getParty(): Party | string {
        return this.party;
    }

    public getVotes(): number {
        return this.votes;
    }

    public setParty(party: Party | string): void {
        this.party = party;
    }

    public setVotes(votes: number): void {
        this.votes = votes;
    }

    public incrementVote(): void {
        this.votes++;
    }
}

export default PartyVotes;