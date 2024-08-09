import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'}
            },

            async authorize(credentials){


                const res = await axios.post('http://localhost:8080/api/loginUser', {
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
                delete user['token'];
                token.user = user;
            }

            return token;
        },

        async session({session, token ,user}){
            session.accessToken = user.token;
            session.user = user;
            return session;
        }
    }
});

export {handler as GET, handler as POST};
