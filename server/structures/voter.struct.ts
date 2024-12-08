class Voter {
	private id?: string;
	private name: string;
	private phone: string;
	private password: string;
	private dob: Date;
	private aadharno: string;
	private voterid?: string;
	private voted?: boolean;
	private totalVotes?: number;

	public constructor(
		name: string,
		phone: string,
		password: string,
		dob: Date,
		aadharno: string
	);
	public constructor(
		id: string,
		name: string,
		phone: string,
		password: string,
		dob: Date,
		aadharno: string,
		voted: boolean,
		totalVotes: number
	);
	public constructor(...args: any[]) {
		if (args.length === 8) {
			this.id = args[0];
			this.name = args[1];
			this.phone = args[2];
			this.password = args[3];
			this.dob = args[4];
			this.aadharno = args[5];
			this.voted = args[6];
			this.totalVotes = args[7];
		} else if (args.length === 5) {
			this.name = args[0];
			this.phone = args[1];
			this.password = args[2];
			this.dob = new Date(args[3]); // Parse date from the provided value
			this.aadharno = args[4];

			// Calculate age
			const today = new Date();
			let age = today.getFullYear() - this.dob.getFullYear();
			const monthDifference = today.getMonth() - this.dob.getMonth();
			if (
				monthDifference < 0 ||
				(monthDifference === 0 && today.getDate() < this.dob.getDate())
			) {
				age--;
			}

			// Verify age is 35 or older
			if (age < 35) {
				throw new Error("The person must be at least 35 years old.");
			}

			this.voted = false; // Default values
			this.totalVotes = 0;
		} else {
			throw new Error("Invalid constructor arguments.");
		}
	}

	public getId(): string | null {
		return this.id || null;
	}

	public getName(): string {
		return this.name;
	}

	public getPhone(): string {
		return this.phone;
	}

	public getPassword(): string {
		return this.password;
	}

	public getDob(): Date {
		return this.dob;
	}

	public getAadharNo(): string {
		return this.aadharno;
	}

	public getVoted(): boolean | null {
		return this.voted || null;
	}

	public getTotalVotes(): number | null {
		return this.totalVotes || null;
	}

	public setName(name: string) {
		this.name = name;
	}

	public setPhone(phone: string) {
		this.phone = phone;
	}

	public setPassword(password: string) {
		this.password = password;
	}

	public setDob(dob: Date) {
		this.dob = dob;
	}

	public setAadharNo(aadharno: string) {
		this.aadharno = aadharno;
	}

	public setVoted(voted: boolean) {
		this.voted = voted;
	}

	public setTotalVotes(totalVotes: number) {
		this.totalVotes = totalVotes;
	}

	public incrementVotes() {
		this.totalVotes = this.totalVotes ? ++this.totalVotes : 1;
	}

	public toJson() {
		return {
			id: this.id,
			name: this.name,
			phone: this.phone,
			password: this.password,
			dob: this.dob,
			aadharno: this.aadharno,
			voterid: this.voterid,
			voted: this.voted,
			totalVotes: this.totalVotes,
		};
	}
}

export default Voter;
