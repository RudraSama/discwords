import NextAuth form 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },

            async authorize(credentials){
                const res = await axios('http://http://localhost:8080/api/loginUser', {
                    email: credentials.email,
                    password: credentials.password
                });

                if(res.data){
                    return {...res.data.user, token: res.data.userSession.token};
                }
                else{
                    return null;
                }
            }
        })
    ],
    
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.accessToken = user.token;
            }

            return token;
        },

        async session({session, token}){
            session.accessToken = token.accessToken;
            return session;
        }
    }
});
