import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty() readonly email: string;

  @IsNotEmpty() readonly password: string;
}
// export class CreateUserDto {
//   @IsNotEmpty() name: string;
//   @IsNotEmpty()
//   @IsNotEmpty()
//   @ApiProperty() login: string;

//   @ApiProperty()
//   @IsNotEmpty() password: string;

// }
// export class UpdatePasswordDto {

//     @IsNotEmpty()
//     @ApiProperty() new_password: string;

//     @IsNotEmpty()
//     @ApiProperty() old_password: string;

// }
