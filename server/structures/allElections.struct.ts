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

	public getElectionByStartDate(date: Date): Election | undefined {
		return this.elections.find((e) => e.getStartDate() === date);
	}

	public getElectionByEndDate(date: Date): Election | undefined {
		return this.elections.find((e) => e.getEndDate() === date);
	}

	public getElectionByWinner(winner: string): Election | undefined {
		return this.elections.find((e) => e.getWinner()?.getId() === winner);
	}
}


export default AllElections;