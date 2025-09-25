export const Mutation ={
    signUp: async(_,{username,email,password})=>{
        console.log(username,email,password);

    },

    login: async(_,{email,password})=>{
        console.log(email,password);
    }
}
