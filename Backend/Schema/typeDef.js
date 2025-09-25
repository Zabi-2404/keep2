import {gql} from 'apollo-server';

export const typeDefs = gql`
type User {
id:ID
email:String
userName:String
}

type Message{
    message:String
}

input UserInput{
email:String!
userName:String!
password:String!
}

type Query{
    getUser:User
    LogOut:Message
}

type Mutation {
signUp(input:UserInput):User
Login(email:String!,password:String!):User
}

`