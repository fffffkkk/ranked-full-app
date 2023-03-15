import { Length, IsInt, IsString, Min, Max } from 'class-validator';

class CreatePollDto {
  @IsString()
  @Length(1, 100)
  topic: string;

  @IsInt()
  @Min(1)
  @Max(5)
  votesPerVoter: number;

  @IsString()
  @Length(1, 25)
  name: string;
}

class JoinPollDto {
  @IsString()
  @Length(6, 6)
  pollID: string;

  @IsString()
  @Length(1, 25)
  name: string;
}

export { CreatePollDto, JoinPollDto };
