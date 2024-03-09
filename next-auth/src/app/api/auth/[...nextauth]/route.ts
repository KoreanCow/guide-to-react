import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import KakaoProvider from 'next-auth/providers/kakao'
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID ?? '',
      clientSecret: process.env.DISCORD_SECRET ?? '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_ID ?? '',
      clientSecret: process.env.KAKAO_SECRET ?? '',
    })
  ]
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };