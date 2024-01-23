export interface Stomatolog 
{
    _id:String,
    username: String,
    password: String;
    email: String;
    name: String;
    lastname: String;
    datumZaposlenja:Date;
    imageUrl: File;
}

//email, username, name, lastname, admin, hash, salt