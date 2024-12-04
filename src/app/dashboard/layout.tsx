'use client'
import * as React from "react"
import ProtectedRoute from "@/components/context/protected-route"
import { useAuth } from "@/components/context/auth-context"
import { Bell } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
// import { getASubCollection } from "@/functions/get-a-sub-collection"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const { user, setIncome } = useAuth()
//   const [userInfo, setUserInfo] = React.useState<{ name: string, email: string, avatar: string }>({
//     name: "Anonymous",
//     email: "No email",
//     avatar: "default_avatar.png", // Default avatar
//   })
    const [opened, setOpened] = React.useState(true)
    const currentDate = new Date()

  // This useEffect will fetch and set the income as soon as the user is authenticated
//   React.useEffect(() => {
//     if (!user) {
//       console.error("User is not authenticated")
//       return
//     }

//     // Set up real-time listener to fetch income data and update context
//     const unsubscribe = getASubCollection("users", user.uid, "incomes", setIncome)

//     // Cleanup listener on component unmount
//     return () => unsubscribe && unsubscribe()
//   }, [user, setIncome])

//   // This useEffect will set the user info when the user changes
//   React.useEffect(() => {
//     if (!user) {
//       console.error("User is not authenticated")
//       return
//     }
//     setUserInfo({
//       name: user.displayName || "Anonymous",
//       email: user.email || "No email",
//       avatar: user.photoURL || "default_avatar.png",
//     })
//   }, [user])

  return (
    <ProtectedRoute>
        <div className="page-wrapper null compact-wrapper">
            <Navbar opened={opened} setOpened={setOpened} />
            <div className="page-body-wrapper">
                <Sidebar setOpened={setOpened} opened={opened}/>
		        <div className="page-body">
			        <div className="container-fluid default-page">
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ProtectedRoute>
  )
}
