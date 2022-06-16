
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <br/>
        <button className="button" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <br />
      <button className="button" onClick={() => signIn()}>Sign in</button>  
    </>
  )
}