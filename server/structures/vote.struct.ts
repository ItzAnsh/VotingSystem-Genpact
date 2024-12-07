import {Voter, Party} from "./index"

class Vote {
    private id?: string;
    private voterId: string | Voter;
    private partyId: string | Party;
    private electionId: string;
    private timestamp: Date;

    public constructor(
        voterId: string,
        partyId: string,
        electionId: string,
        timestamp: Date
    );
    public constructor(
        id: string,
        voterId: string,
        partyId: string,
        electionId: string,
        timestamp: Date
    );
    public constructor(...args: any[]) {
        if (args.length === 5) {
            this.id = args[0];
            this.voterId = args[1];
            this.partyId = args[2];
            this.electionId = args[3];
            this.timestamp = args[4];
        } else {
            this.voterId = args[0];
            this.partyId = args[1];
            this.electionId = args[2];
            this.timestamp = new Date();
        }
    }

    public getId(): string | null {
        return this.id || null;
    }

    public getvoterId(): string | Voter {
        return this.voterId;
    }

    public getpartyId(): string | Party {
        return this.partyId;
    }

    public getelectionId(): string {
        return this.electionId;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setvoterId(voterId: string): void {
        this.voterId = voterId;
    }

    public setpartyId(partyId: string): void {
        this.partyId = partyId;
    }

    public setelectionId(electionId: string): void {
        this.electionId = electionId;
    }

    public setTimestamp(timestamp: Date): void {
        this.timestamp = timestamp;
    }

    public toJSON(): any {
        return {
            id: this.id,
            voterId: this.voterId,
            partyId: this.partyId,
            electionId: this.electionId
        };
    }
}

export default Vote;