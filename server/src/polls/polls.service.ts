import { Injectable } from '@nestjs/common';

import {
  CreatePollFields,
  JoinPollFields,
  RejoinPollFields,
} from './@types/polls';
import { createPollID, createUserID } from '../helpers/ids';

@Injectable()
class PollsService {
  async createPoll(fields: CreatePollFields) {
    const pollID = createPollID();
    const userID = createUserID();

    return {
      ...fields,
      pollID,
      userID,
    };
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserID();

    return {
      ...fields,
      userID,
    };
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}

export { PollsService };
