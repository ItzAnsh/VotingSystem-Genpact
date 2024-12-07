// import Election from "./election.struct";
import { Election } from "./index";

class AllElections {
	private elections: Election[];

	public constructor(elections: Election[]) {
		this.elections = elections;
	}

	public getElections(): Election[] {
		return this.elections;
	}

	public addElection(election: Election): void {
		this.elections.push(election);
	}

	public removeElection(election: Election): void {
		this.elections = this.elections.filter(
			(e) => e.getId() !== election.getId()
		);
	}

	public getElectionById(id: string): Election | undefined {
		return this.elections.find((e) => e.getId() === id);
	}

	public getElectionByDate(date: Date): Election | undefined {
		return this.elections.find((e) => e.getDate() === date);
	}

	public getElectionByWinner(winner: string): Election | undefined {
		return this.elections.find((e) => e.getWinner()?.getId() === winner);
	}
}


export default AllElections;