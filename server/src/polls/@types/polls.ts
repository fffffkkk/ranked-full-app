interface CreatePollFields {
  topic: string;
  votesPerVoter: number;
  name: string;
}

interface JoinPollFields {
  pollID: string;
  name: string;
}

interface RejoinPollFields {
  pollID: string;
  userID: string;
  name: string;
}

export { CreatePollFields, JoinPollFields, RejoinPollFields };
